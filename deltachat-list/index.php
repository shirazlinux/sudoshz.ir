<!DOCTYPE html>
<html lang="fa" dir="rtl">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>آموزش دلتا چت</title>

    <style>
      /* Fonts */
      @font-face {
        font-family: "Vazirmatn";
        src: url("./src/fonts/Vazirmatn-Thin.ttf") format("truetype");
        font-weight: 100;
        font-style: normal;
      }

      @font-face {
        font-family: "Vazirmatn";
        src: url("./src/fonts/Vazirmatn-ExtraLight.ttf") format("truetype");
        font-weight: 200;
        font-style: normal;
      }

      @font-face {
        font-family: "Vazirmatn";
        src: url("./src/fonts/Vazirmatn-Light.ttf") format("truetype");
        font-weight: 300;
        font-style: normal;
      }

      @font-face {
        font-family: "Vazirmatn";
        src: url("./src/fonts/Vazirmatn-Regular.ttf") format("truetype");
        font-weight: 400;
        font-style: normal;
      }

      @font-face {
        font-family: "Vazirmatn";
        src: url("./src/fonts/Vazirmatn-Medium.ttf") format("truetype");
        font-weight: 500;
        font-style: normal;
      }

      @font-face {
        font-family: "Vazirmatn";
        src: url("./src/fonts/Vazirmatn-SemiBold.ttf") format("truetype");
        font-weight: 600;
        font-style: normal;
      }

      @font-face {
        font-family: "Vazirmatn";
        src: url("./src/fonts/Vazirmatn-Bold.ttf") format("truetype");
        font-weight: 700;
        font-style: normal;
      }

      @font-face {
        font-family: "Vazirmatn";
        src: url("./src/fonts/Vazirmatn-ExtraBold.ttf") format("truetype");
        font-weight: 800;
        font-style: normal;
      }

      @font-face {
        font-family: "Vazirmatn";
        src: url("./src/fonts/Vazirmatn-Black.ttf") format("truetype");
        font-weight: 900;
        font-style: normal;
      }

      :root {
        --bg: #f6f8ff;
        --card: rgba(255, 255, 255, 0.92);
        --card-solid: #ffffff;
        --text: #0f172a;
        --muted: #475569;
        --border: rgba(15, 23, 42, 0.12);
        --shadow: 0 14px 40px rgba(2, 6, 23, 0.1);
        --shadow-soft: 0 10px 28px rgba(2, 6, 23, 0.08);
        --primary: #2563eb;
        --primary-2: #1d4ed8;
        --radius: 18px;
        --radius-sm: 14px;
        --max: 1100px;
      }

      * {
        box-sizing: border-box;
      }

      html,
      body {
        height: 100%;
      }

      body {
        margin: 0;
        font-family:
          "Vazirmatn",
          ui-sans-serif,
          system-ui,
          -apple-system,
          "Segoe UI",
          Roboto,
          Arial,
          sans-serif;
        color: var(--text);
        background-color: var(--bg);
        background-image:
          radial-gradient(
            circle at 50% -10%,
            rgba(37, 99, 235, 0.18) 0%,
            transparent 55%
          ),
          radial-gradient(
            circle at 100% 0%,
            rgba(236, 72, 153, 0.14) 0%,
            transparent 50%
          ),
          radial-gradient(
            circle at 0% 12%,
            rgba(34, 197, 94, 0.14) 0%,
            transparent 55%
          ),
          radial-gradient(
            circle at 70% 90%,
            rgba(245, 158, 11, 0.1) 0%,
            transparent 55%
          );
        background-repeat: no-repeat;
      }

      a {
        text-decoration: none;
        color: inherit;
      }

      img {
        max-width: 100%;
        display: block;
      }

      .container {
        width: min(var(--max), calc(100% - 32px));
        margin: 0 auto;
        padding: 18px 0 40px;
      }

      .top {
        padding-top: 18px;
        text-align: center;
      }

      .badge {
        display: inline-flex;
        align-items: center;
        gap: 10px;
        padding: 10px 14px;
        border: 1px solid var(--border);
        border-radius: 999px;
        background: var(--card);
        box-shadow: var(--shadow-soft);
        backdrop-filter: blur(10px);
      }

      .badge span {
        font-size: 18px;
      }

      .badge b {
        font-size: 14px;
        color: var(--muted);
        font-weight: 600;
      }

      h1 {
        margin: 16px 0 6px;
        font-weight: 900;
        letter-spacing: -0.4px;
        line-height: 1.2;
        font-size: clamp(28px, 4.6vw, 56px);
      }

      .subtitle {
        margin: 0 auto;
        max-width: 780px;
        color: var(--muted);
        font-size: clamp(14px, 2vw, 18px);
        line-height: 1.9;
        font-weight: 400;
      }

      .subtitle small {
        display: block;
        margin-top: 6px;
        color: #64748b;
        font-size: 13px;
        font-weight: 400;
      }

      .grid {
        margin-top: 22px;
        display: grid;
        grid-template-columns: 1.6fr 1fr;
        gap: 16px;
        align-items: start;
      }

      .card {
        border: 1px solid var(--border);
        border-radius: var(--radius);
        background: var(--card);
        box-shadow: var(--shadow);
        backdrop-filter: blur(10px);
        overflow: hidden;
      }

      .card-header {
        padding: 16px 16px 12px;
        border-bottom: 1px solid rgba(15, 23, 42, 0.08);
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
        flex-wrap: wrap;
      }

      .card-title {
        display: inline-flex;
        align-items: center;
        gap: 10px;
        font-weight: 800;
        font-size: 18px;
      }

      .pill {
        font-size: 12px;
        color: #334155;
        background: rgba(15, 23, 42, 0.05);
        border: 1px solid rgba(15, 23, 42, 0.1);
        padding: 6px 10px;
        border-radius: 999px;
        font-weight: 500;
      }

      .card-body {
        padding: 16px;
      }

      .steps {
        display: flex;
        flex-direction: column;
        gap: 12px;
      }

      .step {
        border: 1px solid rgba(15, 23, 42, 0.12);
        background: rgba(255, 255, 255, 0.86);
        border-radius: var(--radius);
        padding: 14px;
      }

      .step-head {
        display: flex;
        align-items: flex-start;
        gap: 12px;
      }

      .step-icon {
        width: 44px;
        height: 44px;
        border-radius: 14px;
        display: grid;
        place-items: center;
        border: 1px solid rgba(15, 23, 42, 0.1);
        background: rgba(37, 99, 235, 0.08);
        flex: 0 0 44px;
      }

      .step-icon.green {
        background: rgba(34, 197, 94, 0.1);
      }

      .step-icon.purple {
        background: rgba(168, 85, 247, 0.1);
      }

      .step-icon span {
        font-size: 20px;
      }

      .step h3 {
        margin: 0;
        font-size: 16px;
        font-weight: 800;
      }

      .step p {
        margin: 6px 0 0;
        color: var(--muted);
        line-height: 1.95;
        font-size: 14px;
        font-weight: 400;
      }

      .btn-row {
        margin-top: 12px;
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
      }

      .btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        padding: 10px 14px;
        border-radius: 14px;
        border: 1px solid rgba(15, 23, 42, 0.14);
        background: var(--card-solid);
        color: var(--text);
        font-weight: 700;
        font-size: 13px;
        cursor: pointer;
        transition:
          transform 0.06s ease,
          opacity 0.2s ease,
          background 0.2s ease;
        user-select: none;
      }

      .btn:hover {
        background: rgba(255, 255, 255, 0.95);
      }

      .btn:active {
        transform: translateY(1px);
      }

      .btn.primary {
        background: var(--primary);
        color: white;
        border-color: rgba(37, 99, 235, 0.6);
      }

      .btn.primary:hover {
        background: var(--primary-2);
      }

      .btn.dark {
        background: #0b1220;
        color: white;
        border-color: rgba(15, 23, 42, 0.6);
      }

      .btn.dark:hover {
        opacity: 0.95;
      }

      .hint {
        margin-top: 10px;
        font-size: 12.5px;
        color: #64748b;
        line-height: 1.85;
      }

      .two-col {
        margin-top: 10px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 10px;
      }

      .mini {
        border: 1px solid rgba(15, 23, 42, 0.1);
        background: rgba(15, 23, 42, 0.03);
        border-radius: 14px;
        padding: 10px;
        color: #0f172a;
        font-size: 13px;
        line-height: 1.9;
      }

      .kbd {
        display: inline-block;
        padding: 2px 8px;
        border-radius: 10px;
        background: rgba(255, 255, 255, 0.8);
        border: 1px solid rgba(15, 23, 42, 0.16);
        font-weight: 700;
        font-size: 12px;
        color: #0f172a;
        white-space: nowrap;
      }

      .ol {
        margin: 10px 0 0;
        padding: 0 18px 0 0;
        color: #0f172a;
        line-height: 2.05;
        font-size: 14px;
      }

      .ol li {
        margin: 6px 0;
      }

      .ol b {
        font-weight: 800;
      }

      .alert {
        margin-top: 12px;
        border-radius: var(--radius);
        padding: 12px;
        border: 1px solid rgba(245, 158, 11, 0.35);
        background: rgba(245, 158, 11, 0.12);
        color: #7c2d12;
        line-height: 1.95;
        font-size: 13.5px;
      }

      .alert .t {
        font-weight: 800;
      }

      .alert strong {
        font-weight: 900;
      }

      .servers p {
        margin: 0;
        color: var(--muted);
        line-height: 1.95;
        font-size: 14px;
      }

      .server-list {
        margin-top: 12px;
        display: grid;
        gap: 10px;
      }

      .server {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
        padding: 12px 12px;
        border-radius: var(--radius-sm);
        border: 1px solid rgba(15, 23, 42, 0.12);
        background: rgba(255, 255, 255, 0.86);
        transition:
          background 0.2s ease,
          transform 0.06s ease;
      }

      .server:hover {
        background: rgba(255, 255, 255, 0.95);
      }

      .server:active {
        transform: translateY(1px);
      }

      .server .left {
        display: flex;
        align-items: center;
        gap: 10px;
        min-width: 0;
      }

      .num {
        width: 28px;
        height: 28px;
        border-radius: 10px;
        display: grid;
        place-items: center;
        font-weight: 900;
        font-size: 12px;
        background: rgba(37, 99, 235, 0.1);
        border: 1px solid rgba(37, 99, 235, 0.2);
        color: #1d4ed8;
        flex: 0 0 28px;
      }

      .srv-title {
        font-weight: 800;
        font-size: 14px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .srv-url {
        display: block;
        font-size: 12px;
        color: #64748b;
        margin-top: 2px;
        direction: ltr;
        text-align: left;
      }

      .arrow {
        font-size: 12px;
        color: #64748b;
        flex: 0 0 auto;
      }

      .note {
        margin-top: 12px;
        border-radius: var(--radius);
        padding: 12px;
        border: 1px solid rgba(15, 23, 42, 0.12);
        background: rgba(15, 23, 42, 0.04);
        color: #334155;
        line-height: 1.95;
        font-size: 13.5px;
      }

      .note .t {
        font-weight: 800;
        color: #0f172a;
      }

      .image-box {
        margin-top: 16px;
      }

      .image-box .card-body p {
        margin: 0;
        color: var(--muted);
        line-height: 1.95;
        font-size: 14px;
      }

      .figure {
        margin-top: 12px;
        border-radius: var(--radius);
        overflow: hidden;
        border: 1px solid rgba(15, 23, 42, 0.12);
        background: rgba(255, 255, 255, 0.9);
      }

      .server-status {
        margin-top: 12px;
        border-radius: 14px;
        padding: 12px;
        border: 1px solid rgba(15, 23, 42, 0.12);
        background: rgba(15, 23, 42, 0.04);
        color: #334155;
        line-height: 1.9;
        font-size: 13.5px;
      }

      .server-status.error {
        border-color: rgba(239, 68, 68, 0.25);
        background: rgba(239, 68, 68, 0.08);
        color: #991b1b;
      }

      footer {
        margin-top: 16px;
        text-align: center;
        color: #64748b;
        font-size: 12.5px;
        padding-bottom: 18px;
        font-weight: 400;
      }

      /* Responsive */
      @media (max-width: 980px) {
        .grid {
          grid-template-columns: 1fr;
        }
      }

      @media (max-width: 540px) {
        .two-col {
          grid-template-columns: 1fr;
        }

        .btn {
          width: 100%;
        }

        .server {
          padding: 12px 10px;
        }
      }
    </style>
  </head>

  <body>
    <main class="container">
      <header class="top">
        <div class="badge">
          <span>💬</span>
          <b>راهنمای آفلاین راه‌اندازی دلتا چت</b>
        </div>

        <h1>
          آموزش <span style="color: var(--primary)">دلتا چت</span> (Delta Chat)
        </h1>

        <p class="subtitle">
          فقط چند دقیقه زمان می‌بره تا اکانت بسازید و وارد برنامه بشید ✅
        </p>
      </header>

      <section class="grid">
        <article class="card">
          <div class="card-header">
            <div class="card-title"><span>🧭</span> مراحل راه‌اندازی</div>
            <div class="pill">اندروید / ویندوز</div>
          </div>

          <div class="card-body">
            <div class="steps">
              <div class="step">
                <div class="step-head">
                  <div class="step-icon"><span>⬇️</span></div>
                  <div>
                    <h3>۱) نصب برنامه</h3>
                    <p>اول اپلیکیشن رو نصب کنید:</p>

                    <div class="btn-row">
                      <a
                        class="btn primary"
                        target="_blank"
                        href="https://gitlab.aranserver.com/abbas/deltachat-app/-/raw/main/deltachat-gplay-release-2.43.0.apk?ref_type=heads"
                      >
                        🤖 دانلود اندروید
                      </a>

                      <a
                        class="btn dark"
                        target="_blank"
                        href="https://gitlab.aranserver.com/abbas/deltachat-app/-/raw/main/DeltaChat-2.43.0-Setup.x64.exe?ref_type=heads"
                      >
                        🪟 دانلود ویندوز
                      </a>

                      <a
                        class="btn"
                        target="_blank"
                        href="https://apps.apple.com/us/app/delta-chat/id1459523234"
                      >
                        🍎 دانلود iOS
                      </a>

                      <a
                        class="btn"
                        target="_blank"
                        href="https://gitlab.aranserver.com/abbas/deltachat-app"
                      >
                        📦 سایر نسخه‌ها
                      </a>
                    </div>

                    <div class="hint">
                      ✅ بعد از نصب، برنامه رو باز کنید و برید مرحله بعد.
                    </div>
                  </div>
                </div>
              </div>

              <div class="step">
                <div class="step-head">
                  <div class="step-icon green"><span>🧑‍💻</span></div>
                  <div>
                    <h3>۲) ساخت اکانت جدید</h3>
                    <p>داخل برنامه این مسیر رو برید:</p>

                    <div class="two-col">
                      <div class="mini">
                        <b>۱.</b> روی
                        <span class="kbd">Create New Account</span> بزنید ✅
                      </div>
                      <div class="mini">
                        <b>۲.</b> بعدش
                        <span class="kbd">Use Other Servers</span> رو انتخاب
                        کنید 🌐
                      </div>
                    </div>

                    <div class="hint">
                      اگر گزینه‌ها کمی فرق داشت، دنبال عبارت‌هایی مثل
                      <span class="kbd">Other Server</span> یا
                      <span class="kbd">Custom Server</span> بگردید.
                    </div>
                  </div>
                </div>
              </div>

              <div class="step">
                <div class="step-head">
                  <div class="step-icon purple"><span>🔗</span></div>
                  <div>
                    <h3>۳) گرفتن لینک دعوت و وارد شدن</h3>
                    <p>
                      حالا باید از یکی از سرورها
                      <span class="kbd">لینک دعوت</span> بگیرید و داخل اپ
                      ایمپورت کنید:
                    </p>

                    <ol class="ol">
                      <li>
                        <b>یکی از سرورها</b> رو از لیست سمت چپ/پایین باز کنید.
                      </li>
                      <li>
                        اگر ثبت‌نام باز بود، <b>لینک ثبت‌نام/دعوت</b> نمایش داده
                        می‌شه؛ اون لینک رو
                        <b style="color: var(--primary)">کپی کنید</b> 📋
                      </li>
                      <li>
                        برگردید داخل اپلیکیشن (همون بخش
                        <span class="kbd">Use Other Servers</span>).
                      </li>
                      <li>
                        گزینه <span class="kbd">Scan</span> رو بزنید، بعد
                        <span class="kbd">سه‌نقطه بالا</span> یا
                        <span class="kbd">چرخ‌دنده</span> ⚙️ رو انتخاب کنید.
                      </li>
                      <li>
                        گزینه <span class="kbd">Import from Clipboard</span> رو
                        بزنید ✅ تا با همون لینک وارد بشید.
                      </li>
                    </ol>

                    <div class="alert">
                      <div class="t">⚠️ خیلی مهم</div>
                      لینک دعوتی که از سرور کپی می‌کنید رو
                      <strong>به هیچ‌کس ندید</strong>. این لینک
                      <strong>یک‌بار مصرفه</strong>. برای ساخت حساب جدید، باید
                      دوباره از سرور <strong>لینک جدید</strong> بگیرید.
                    </div>

                    <div class="hint">
                      🎉 بعد از ورود، اسم‌تون رو وارد کنید و از برنامه استفاده
                      کنید 😊
                    </div>
                  </div>
                </div>
              </div>

              <div class="step">
                <div class="step-head">
                  <div class="step-icon"><span>🛡️</span></div>
                  <div>
                    <h3>۴) افزایش سرعت با پروکسی (اگر دلتا چت کند است)</h3>

                    <p>
                      اگر دلتا چت شما کند است یا پیام‌ها به سختی ارسال/دریافت
                      می‌شوند، ممکن است پروتکل ارسال پیام در دلتاچت بعضی اوقات
                      دچار اختلال شود. برای افزایش سرعت و حفظ عملکرد بهتر،
                      پیشنهاد می‌شود بعد از ورود به اپلیکیشن، پروکسی
                      <span class="kbd">ShadowSocks</span> مربوط به سرور خودتان
                      را به اپ اضافه کنید.
                    </p>

                    <ol class="ol">
                      <li>
                        وارد صفحه وب <b>سرور مربوطه</b> شوید (صفحه اصلی یا صفحه
                        اشتراک‌گذاری).
                      </li>
                      <li>
                        لینک پروکسی شادو ساکس که با
                        <span class="kbd">ss://</span> شروع می‌شود را
                        <b style="color: var(--primary)">کپی</b> کنید 📋
                      </li>
                      <li>
                        داخل دلتاچت بروید به مسیر:
                        <b>تنظیمات > پیشرفته > شبکه > Proxy</b>
                      </li>
                      <li>در این قسمت پروکسی را اضافه کنید.</li>
                      <li>
                        بعد از فعال شدن پروکسی، دقیقاً مثل تلگرام در بالای سمت
                        راست دلتاچت یک علامت <b>سپر / شیلد</b> ظاهر می‌شود 🛡️
                      </li>
                      <li>
                        روی آن کلیک کنید تا بتوانید وضعیت اتصال پروکسی خود را
                        مشاهده کنید.
                      </li>
                    </ol>

                    <div class="alert">
                      <div class="t">⚠️ نکات مهم</div>
                      <ul class="ol" style="margin-top: 8px">
                        <li>
                          بعد از هر بروزرسانی، ممکن است پروکسی شما از کار بیفتد
                          و باید روند دریافت پروکسی شادو ساکس را از سرور مجدد
                          انجام دهید.
                        </li>
                        <li>
                          هر لینک پروکسی شادو ساکس فقط برای
                          <strong>همان سرور</strong> کار می‌کند؛ اگر برای سرور
                          دیگری استفاده شود، پروکسی کار نخواهد کرد.
                        </li>
                      </ul>
                    </div>

                    <div class="hint">
                      ✅ اگر بعد از افزودن پروکسی سرعت بهتر شد، همیشه از همان
                      پروکسی مخصوص سرور خودتان استفاده کنید.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>

        <aside class="card servers">
          <div class="card-header">
            <div class="card-title"><span>🖥️</span> سرورها</div>
            <div class="pill">برای گرفتن لینک دعوت</div>
          </div>

          <div class="card-body">
            <p>
              یکی از سرورها رو باز کنید، لینک دعوت رو کپی کنید و داخل اپ ایمپورت
              کنید.
            </p>

            <div class="alert">
                      <div class="t">⚠️ نکات مهم</div>
                      <ul class="ol" style="margin-top: 8px">
                        <li>
                          متاسفانه در روز‌های گذشته اکثر ip های سرورهای غیرمتمرکز دلتاچت از سوی سانسورچی فیلتر و مسدود شده با این حال ما سعی به پوشش سرورهای مختلف مکنیم و امیدواریم از این شرایط به زودی خلاص بشیم
                        </li>
                      </ul>
                    </div>

            <div id="server-list" class="server-list"></div>
            <div id="server-status" class="server-status" style="display: none"></div>

            <div class="note">
              <div class="t">🧩 اگر لینک ثبت‌نام نبود…</div>
              یعنی ثبت‌نام اون سرور بسته‌ست. یکی دیگه از سرورها رو امتحان کنید.
            </div>
          </div>
        </aside>
      </section>

      <section class="card image-box">
        <div class="card-header">
          <div class="card-title"><span>🖼️</span> تصویر راهنما</div>
          <div class="pill">اختیاری</div>
        </div>

        <div class="card-body">
          <p>این تصویر می‌تونه به عنوان نمونه کنار آموزش نمایش داده بشه:</p>

          <div class="figure">
            <img src="./Asset/final.jpg" alt="راهنمای دلتا چت" />
          </div>
        </div>
      </section>

      <footer>Delta chat</footer>
    </main>

    <script>
      const serverListEl = document.getElementById("server-list");
      const serverStatusEl = document.getElementById("server-status");

      function showStatus(message, isError = false) {
        serverStatusEl.textContent = message;
        serverStatusEl.style.display = "block";
        serverStatusEl.classList.toggle("error", isError);
      }

      function renderServers(servers) {
        if (!Array.isArray(servers) || servers.length === 0) {
          showStatus("هیچ سروری برای نمایش پیدا نشد.", true);
          return;
        }

        const fragment = document.createDocumentFragment();

        servers.forEach((server, index) => {
          const item = document.createElement("a");
          item.className = "server";
          item.href = server.url;
          item.target = "_blank";
          item.rel = "noopener";

          item.innerHTML = `
            <div class="left">
              <div class="num">${server.number ?? index + 1}</div>
              <div>
                <div class="srv-title">${server.title}</div>
                <span class="srv-url">${server.url}</span>
              </div>
            </div>
            <div class="arrow">باز کردن ↗</div>
          `;

          fragment.appendChild(item);
        });

        serverListEl.innerHTML = "";
        serverListEl.appendChild(fragment);
      }

      async function loadServers() {
        try {
          const response = await fetch("./servers.json", { cache: "no-store" });

          if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
          }

          const servers = await response.json();
          renderServers(servers);
        } catch (error) {
          console.error("Failed to load servers:", error);
          showStatus(
            "خطا در بارگذاری لیست سرورها. لطفاً فایل servers.json را بررسی کنید.",
            true
          );
        }
      }

      loadServers();
    </script>
  </body>
</html>