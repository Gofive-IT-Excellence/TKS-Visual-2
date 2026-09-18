# TKS AI Visual Template Library

เปิดใช้งานได้ทันทีโดยเปิด `index.html` ใน Chrome/Safari หรือ in-app browser

## แก้ไขข้อมูล

- เมนูหลัก: แก้ใน `script.js` ที่ `mainMenus`
- หมวดย่อย: แก้ใน `script.js` ที่ `templateSubMenus`, `corporateSubMenus`, และ `subMenuSets`
- ข้อความสองภาษา TH/EN: แก้ใน `script.js` ที่ `copy`
- ข้อมูลหน้า Main Menu: แก้ใน `script.js` ที่ `homeAssets`, `masonryItems`, `collections`, และ `articles`
- ข้อมูลหน้ารายการทุกเมนู: แก้ใน `script.js` ที่ `templateNames`, `templateNamesTh`, `imagePool`, และ logic ใน `makeTemplates()`
- ข้อมูลหน้ารวมคอลเลกชัน: แก้ใน `script.js` ที่ `collectionBrowserItems`
- รูปตัวอย่าง: อยู่ใน `assets/templates/`
- หน้าตาและระยะ spacing: แก้ใน `styles.css`

## โครงสร้างหลัก

- `index.html` โครงหน้าเว็บ
- `styles.css` งานออกแบบตาม UX reference
- `script.js` ระบบเมนู ค้นหา และสลับภาษา
- `assets/infina-logo.png` โลโก้ด้านซ้ายบน
- `assets/templates/template-01.jpg` ถึง `template-24.jpg` ภาพตัวอย่างเทมเพลต
