/**
 * Jalali (Shamsi) dates for ShirazLinux / taste-fdm
 * Converts visible <time datetime="..."> labels to Jalali calendar.
 * Keeps machine-readable datetime in Gregorian ISO (Latin digits).
 */
(function () {
  'use strict';

  var FA = '۰۱۲۳۴۵۶۷۸۹';
  var FA_RE = /[۰-۹]/g;
  var AR_RE = /[٠-٩]/g;

  function toLatinDigits(str) {
    return String(str)
      .replace(FA_RE, function (d) { return FA.indexOf(d); })
      .replace(AR_RE, function (d) { return '٠١٢٣٤٥٦٧٨٩'.indexOf(d); });
  }

  function toPersianDigits(str) {
    return String(str).replace(/\d/g, function (d) { return FA[d]; });
  }

  function gregorianToJalali(gy, gm, gd) {
    var g_d_m = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
    var gy2 = (gm > 2) ? (gy + 1) : gy;
    var days =
      355666 +
      (365 * gy) +
      Math.floor((gy2 + 3) / 4) -
      Math.floor((gy2 + 99) / 100) +
      Math.floor((gy2 + 399) / 400) +
      gd +
      g_d_m[gm - 1];
    var jy = -1595 + 33 * Math.floor(days / 12053);
    days %= 12053;
    jy += 4 * Math.floor(days / 1461);
    days %= 1461;
    if (days > 365) {
      jy += Math.floor((days - 1) / 365);
      days = (days - 1) % 365;
    }
    var jm, jd;
    if (days < 186) {
      jm = 1 + Math.floor(days / 31);
      jd = 1 + (days % 31);
    } else {
      jm = 7 + Math.floor((days - 186) / 30);
      jd = 1 + ((days - 186) % 30);
    }
    return [jy, jm, jd];
  }

  var J_MONTHS = [
    'فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور',
    'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'
  ];

  function pad2(n) {
    return n < 10 ? '0' + n : String(n);
  }

  /** long: «۷ آذر ۱۴۰۴» · short: «۱۴۰۴/۰۹/۰۷» */
  function formatJalali(jy, jm, jd, style) {
    if (style === 'long') {
      return toPersianDigits(jd + ' ' + J_MONTHS[jm - 1] + ' ' + jy);
    }
    return toPersianDigits(jy + '/' + pad2(jm) + '/' + pad2(jd));
  }

  function parseDateTimeAttr(value) {
    if (!value) return null;
    var raw = toLatinDigits(value).trim();
    var m = raw.match(
      /^(\d{4})-(\d{1,2})-(\d{1,2})(?:[T\s](\d{1,2}):(\d{1,2})(?::(\d{1,2}))?)?/
    );
    if (!m) return null;
    return {
      y: +m[1],
      m: +m[2],
      d: +m[3],
      h: m[4] != null ? +m[4] : 0,
      mi: m[5] != null ? +m[5] : 0,
      isoDate: m[1] + '-' + pad2(+m[2]) + '-' + pad2(+m[3])
    };
  }

  function preferLongStyle(el) {
    // Article/page meta → long human date; cards/footer → compact
    if (el.closest('.content__meta, .post__meta, .content__header, .post__header')) {
      return true;
    }
    if (el.closest('.content__last-updated, .post__last-updated')) {
      return true;
    }
    if (el.closest('.footer, .card, .c-card, .l-grid, .l-masonry, .feed')) {
      return false;
    }
    // body classes as fallback
    var b = document.body;
    if (b && (b.classList.contains('post-template') || b.classList.contains('page-template'))) {
      return !el.closest('.related, .post__related, .sidebar');
    }
    return false;
  }

  function convertTimeElement(el) {
    if (!el || el.getAttribute('data-jalali') === '1') return;
    var parsed = parseDateTimeAttr(el.getAttribute('datetime'));
    if (!parsed) return;

    var j = gregorianToJalali(parsed.y, parsed.m, parsed.d);
    var style = preferLongStyle(el) ? 'long' : 'short';

    var iso = parsed.isoDate;
    if (parsed.h || parsed.mi) {
      iso += 'T' + pad2(parsed.h) + ':' + pad2(parsed.mi);
    }
    el.setAttribute('datetime', iso);
    el.textContent = formatJalali(j[0], j[1], j[2], style);
    el.setAttribute('data-jalali', '1');
    el.setAttribute('title', formatJalali(j[0], j[1], j[2], 'long'));
  }

  function initJalaliDates() {
    var nodes = document.querySelectorAll('time[datetime]');
    for (var i = 0; i < nodes.length; i++) {
      convertTimeElement(nodes[i]);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initJalaliDates);
  } else {
    initJalaliDates();
  }
})();
