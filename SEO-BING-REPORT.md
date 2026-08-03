# گزارش سئو و ایندکس Bing / Microsoft — sudoshz.ir

تاریخ بررسی: 2026-07-31

## وضعیت فعلی (قبل از اصلاحات)

### چیزهایی که درست بود
- سایت روی HTTPS با HSTS در دسترس است
- `robots.txt` مسیر را باز می‌گذاشت و sitemap را اعلام می‌کرد
- `sitemap.xml` وجود دارد و URLها را لیست می‌کند
- `BingSiteAuth.xml` روی سرور موجود است (تأیید مالکیت Bing)
- canonical، Open Graph، JSON-LD پایه در خروجی Publii وجود دارد
- feedهای RSS/JSON فعال‌اند

### مشکلات فنی مهم که پیدا شد

1. **زبان سایت `Fa` بود (باید `fa-IR` باشد)**  
   موتورها و دسترس‌پذیری با BCP-47 استاندارد بهتر کار می‌کنند.

2. **`homepageMetaDescription` خالی بود**  
   صفحهٔ اصلی مهم‌ترین URL برای Bing/Google است.

3. **فیلد `sitemapExcludedFiles` پر از XML خراب/اشتباه بود**  
   کسی یک sitemap کامل داخل «فایل‌های مستثنی» paste کرده بود. این می‌تواند رفتار sitemap builder را گیج کند.

4. **`htaccess.txt` ریدایرکت خطرناک HTTPS → HTTP داشت**  
   اگر روی Apache به‌عنوان `.htaccess` فعال می‌شد، SEO و اعتماد را نابود می‌کرد. اصلاح شد به HTTPS درست.  
   *نکته:* روی هاست فعلی ظاهراً این فایل اعمال نشده (چون سایت HTTPS سالم است).

5. **`humans.txt` هنوز `http://shirazlinux.com` داشت** (دامنه/پروتکل قدیمی)

6. **`og:locale` و `dir="rtl"` و لینک‌های `rel="me"` ناقص بود**

7. **IndexNow برای Bing وجود نداشت**  
   برای اطلاع سریع به Bing از صفحات جدید/به‌روز، کلید IndexNow اضافه شد:
   - KEY: `0eab16b3181429aa0f359e9627cd9e4c`
   - URL کلید: `https://sudoshz.ir/0eab16b3181429aa0f359e9627cd9e4c.txt`

8. **تاریخ‌های UI خاموش بودند** → فعال + شمسی شدند (مرحله قبل)

### چرا احتمالاً در Microsoft/Bing ایندکس نشدید؟

ترتیب احتمال (از فنی به کیفی):

| رتبه | علت | توضیح |
|------|-----|--------|
| ۱ | **تأیید/ثبت ناقص در Bing Webmaster** | داشتن `BingSiteAuth.xml` لازم است ولی کافی نیست. باید سایت در [Bing Webmaster Tools](https://www.bing.com/webmasters) Verify شده باشد، sitemap Submit شده باشد، و خطاهای Crawl/Index بررسی شود. |
| ۲ | **اقتدار دامنه / بک‌لینک کم** | Bing برای سایت‌های فارسی کم‌بک‌لینک خیلی محافظه‌کار است. نیاز به لینک از سایت‌های معتبر، شبکه‌های اجتماعی، و IndexNow دارد. |
| ۳ | **کیفیت/سیگنال محتوا** | صفحات زیاد با تصاویر زیاد در sitemap + محتوای تکراری/کوتاه رویدادها ممکن است crawl budget را پخش کند. |
| ۴ | **تأخیر طبیعی Bing** | حتی با تنظیم درست، ایندکس اولیه هفته‌ها طول می‌کشد. |
| ۵ | **تاریخچه دامنه / جریمه قدیمی** | اگر دامنه قبلاً spam/malware داشته، Bing دیرتر برمی‌گرداند. |
| ۶ | **مسدودسازی crawlerهای AI** | اگر در جایی Bingbot/AI مرتبط block شده باشد ممکن است اثر بگذارد — robots فعلی باز است. |

> نکته: «ایندکس نشدن در Microsoft» گاهی یعنی Copilot/Bing chat نه لزوماً `site:sudoshz.ir` خالی. همیشه با Bing Webmaster → URL Inspection چک کنید.

## کارهای انجام‌شده در این مرحله

### UI
- فایل `themes/taste-fdm/assets/css/shiraz-polish.css`
- لود در `head.hbs`
- skip-link، `dir=rtl`، خوانایی متن، کارت‌ها، فوتر، print

### SEO
- زبان `fa-IR`
- metaهای خانه/پست/صفحه/تگ/خطا
- پاکسازی sitemapExcludedFiles
- robots.txt بهتر + allow صریح bingbot
- humans.txt به‌روز
- htaccess امن (HTTPS)
- head: og:locale، author، rel=me، apple-touch-icon
- IndexNow key file

## کارهایی که باید شما انجام دهید (دستی)

1. **Publii → Generate / Sync** تا HTML جدید با تاریخ شمسی + CSS + head ساخته شود و deploy شود.
2. وارد [Bing Webmaster Tools](https://www.bing.com/webmasters) شوید:
   - Verify مالکیت sudoshz.ir (XML auth از قبل هست)
   - Submit sitemap: `https://sudoshz.ir/sitemap.xml`
   - چند URL مهم را با **URL Inspection → Submit** بفرستید (خانه، about، what-is-free-software، tags/event)
3. **IndexNow** (بعد از deploy کلید):
   ```bash
   curl -X POST "https://api.indexnow.org/indexnow" \
     -H "Content-Type: application/json; charset=utf-8" \
     -d '{"host":"sudoshz.ir","key":"0eab16b3181429aa0f359e9627cd9e4c","keyLocation":"https://sudoshz.ir/0eab16b3181429aa0f359e9627cd9e4c.txt","urlList":["https://sudoshz.ir/","https://sudoshz.ir/about/","https://sudoshz.ir/what-is-free-software/","https://sudoshz.ir/tags/event/"]}'
   ```
4. Google Search Console را هم sitemap بدهید (سیگنال متقابل مفید است).
5. بک‌لینک طبیعی: Codeberg README، ویکی، Mastodon bio، سایت abbasdp.ir، انجمن‌ها.

## چک سریع بعد از deploy

```bash
curl -sI https://sudoshz.ir/ | head
curl -s https://sudoshz.ir/robots.txt
curl -s https://sudoshz.ir/0eab16b3181429aa0f359e9627cd9e4c.txt
curl -s https://sudoshz.ir/sitemap.xml | head
# باید fa-IR و shiraz-polish و jalali-dates در HTML باشد:
curl -s https://sudoshz.ir/ | grep -E 'fa-IR|shiraz-polish|jalali-dates|og:locale'
```
