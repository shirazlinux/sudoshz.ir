# راهنمای مدیریت وب‌سایت شیرازلینوکس با Publii

## معرفی سیستم مدیریت محتوای Publii

وب‌سایت شیرازلینوکس با استفاده از سیستم مدیریت محتوای **Publii** توسعه داده شده است. Publii یک CMS سلف-هوست گرافیکی است که ویژگی‌های زیر را ارائه می‌دهد:

- رابط کاربری گرافیکی ساده برای مدیریت محتوا
- امکان مدیریت پست‌ها، صفحات و تنظیمات سایت به صورت بصری
- پشتیبانی از تمپلیت‌های اختصاصی
- ساختار سلف-هوست برای انتشار آسان

## ساختار دایرکتوری‌های Publii

پس از نصب Publii، فایل‌های اصلی در مسیر زیر ایجاد می‌شوند:

```
~/Documents/Publii/
```

ساختار اصلی دایرکتوری‌ها:
```
Documents/
└── Publii/
    ├── sites/
    │   └── selfhost-database[version number]/  # ریشه سایت شیرازلینوکس
    ├── backups/
    ├── themes/
    └── uploads/
```

## راه‌اندازی اولیه

1. **نصب بکاپ اولیه**:
   - آخرین نسخه بکاپ دیتابیس را از مخزن دریافت کنید
   - در Publii به بخش `Add Site from Backup` رفته و فایل بکاپ را import کنید

2. **مسیر ریشه سایت**:
   ```
   ~/Documents/Publii/sites/selfhost-database[version number]/
   ```

## به‌روزرسانی وب‌سایت

برای دریافت آخرین آپدیت‌ها:

```bash
cd ~/Documents/Publii/sites/selfhost-database[version number]/
git pull origin main
```

پس از به‌روزرسانی:
1. برنامه Publii را ببندید و مجدداً باز کنید
2. تغییرات به صورت خودکار اعمال خواهند شد

## نکات مهم

- قبل از هر به‌روزرسانی از تنظیمات Git خود مطمئن شوید
- برای جلوگیری از تداخل، تغییرات محلی را قبل از pull کردن commit کنید
- همیشه از فایل‌های خود backup بگیرید

## مشارکت در توسعه

پس از اعمال تغییرات:

```bash
git add .
git commit -m "توضیح تغییرات انجام شده"
git push origin selfhost-database
```

## راهنمای تمپلیت

تمپلیت شیرازلینوکس در مسیر زیر قرار دارد:
```
~/Documents/Publii/themes/shirazlinux-theme/
```

برای سفارشی‌سازی:
1. فایل‌های تم را در این مسیر ویرایش کنید
2. تغییرات را به مخزن اصلی push کنید

## پشتیبانی

برای گزارش مشکلات یا پیشنهادات:
- [مخزن گیت‌هاب پروژه](https://github.com/shirazlinux/website)
- [انجمن شیرازلینوکس](https://forum.shirazlinux.ir)

```markdown
توجه: قبل از هر تغییر عمده، حتماً از سایت backup بگیرید.
```