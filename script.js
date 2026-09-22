const mainMenus = [
  { id: "main", en: "Main Menu", th: "เมนูหลัก" },
  { id: "business", en: "Business", th: "ธุรกิจ" },
  { id: "internal", en: "Internal Communication", th: "การสื่อสารภายใน" },
  { id: "industrial", en: "Industrial Operation", th: "ปฏิบัติการอุตสาหกรรม" },
  { id: "corporate", en: "Corporate Library", th: "ห้องสมุดองค์กร" },
];

const templateSubMenus = [
  { id: "presentation", en: "Presentation Slides", th: "สไลด์พรีเซนเทชัน" },
  { id: "cover", en: "Cover Page", th: "หน้าปก" },
  { id: "timeline", en: "Timeline & Roadmap", th: "ไทม์ไลน์และโรดแมป" },
  { id: "infographic", en: "Infographic", th: "อินโฟกราฟิก" },
  { id: "newsletter", en: "Newsletter Banner", th: "แบนเนอร์ข่าวสาร" },
  { id: "background", en: "Background", th: "พื้นหลัง" },
  { id: "wallpaper", en: "Wallpaper", th: "วอลเปเปอร์" },
  { id: "gimmick", en: "Gimmick", th: "ลูกเล่นพิเศษ" },
];

const corporateSubMenus = [
  { id: "brandIdentity", en: "Brand & Identity", th: "แบรนด์และอัตลักษณ์องค์กร" },
  { id: "corporatePhotos", en: "Corporate Photos", th: "ภาพถ่ายองค์กร" },
  { id: "productBusiness", en: "Product & Business", th: "สินค้าและธุรกิจ" },
  { id: "marketingMaterials", en: "Marketing Materials", th: "สื่อการตลาด" },
  { id: "eventsActivities", en: "Events & Activities", th: "ภาพกิจกรรมและงานองค์กร" },
  { id: "boardExecutives", en: "Board & Executive Photos", th: "ภาพคณะกรรมการและผู้บริหาร" },
];

const subMenuSets = {
  main: templateSubMenus,
  business: templateSubMenus,
  internal: templateSubMenus,
  industrial: templateSubMenus,
  corporate: corporateSubMenus,
};

const copy = {
  en: {
    topExplore: "Library",
    topLogin: "Sign in",
    topJoin: "Join",
    topUpload: "Upload",
    heroTitle: "TKS AI Visual Template Library",
    findLabel: "Find",
    searchPlaceholder: "Search templates, categories, styles, or keywords",
    featured: "ฉลามบุก",
    guideText: "Read more about the Template Guide",
    workspaceEyebrow: "Menu Extensions",
    workspaceTitle: "Template Preview Library",
    browseTitle: "Explore beautiful templates, free for every project.",
    overview: "All Template Categories",
    noResults: "No templates match this search.",
    assetOverviewTitle: "Template assets for every project",
    visualGalleryTitle: "Explore high quality AI visual templates curated for every team.",
    loadMore: "Explore more templates",
    collectionTitle: "Curated collections and template packs",
    collectionTabOne: "Collections",
    collectionTabTwo: "Template Sets",
    articleTitle: "What's new in the TKS AI library?",
    viewAll: "View all",
    viewAllCollections: "View all collections",
    curatedByTitle: "Curated collections",
    allCollectionsTitle: "Curated collections",
    allCollectionsBy: "by INFINA",
    backToBusiness: "Back to Business",
    ctaOneTitle: "Browse ready-made templates",
    ctaOneText: "Start from curated visuals for presentations, internal updates, and operations.",
    ctaOneButton: "See all templates",
    ctaTwoTitle: "Create faster with AI prompts",
    ctaTwoText: "Use template directions as a starting point for your team's visual workflow.",
    ctaTwoButton: "Open guide",
    ctaThreeTitle: "Upload your own template",
    ctaThreeText: "Add internal assets and keep them searchable for everyone in your team.",
    ctaThreeButton: "Upload",
    footerText: "A visual template library for TKS AI teams.",
    footerFind: "Find",
    footerEditors: "Editor's Choice",
    footerCollections: "Collections",
    footerTemplates: "Templates",
    footerCommunity: "Community",
    footerCreators: "Creators",
    footerAmbassador: "Ambassador",
    footerForum: "Forum",
    footerAbout: "About",
    footerHelp: "Help Center",
    footerTerms: "Terms",
    footerPolicy: "Policy",
  },
  th: {
    topExplore: "คลังเทมเพลต",
    topLogin: "เข้าสู่ระบบ",
    topJoin: "สมัคร",
    topUpload: "อัปโหลด",
    heroTitle: "รวมเทมเพลตสวย ๆ พร้อมให้ทีมดาวน์โหลดใช้ฟรี",
    findLabel: "ค้นหา",
    searchPlaceholder: "ค้นหาเทมเพลต หมวดหมู่ สไตล์ หรือคีย์เวิร์ด",
    featured: "ฉลามบุก",
    guideText: "อ่านเพิ่มเติมเกี่ยวกับคู่มือเทมเพลต",
    workspaceEyebrow: "ส่วนขยายเมนู",
    workspaceTitle: "คลังตัวอย่างเทมเพลต",
    browseTitle: "รวมเทมเพลตสวย ๆ พร้อมคุณภาพและความละเอียดสูง ให้ทีมเลือกใช้ฟรี",
    overview: "รวมทุกหมวดเทมเพลต",
    noResults: "ไม่พบเทมเพลตที่ตรงกับคำค้นหา",
    assetOverviewTitle: "แอสเซ็ตเทมเพลตสำหรับทุกโปรเจกต์",
    visualGalleryTitle: "รวมเทมเพลตคุณภาพสูงที่คัดมาให้ทีมเลือกใช้ได้ทันที",
    loadMore: "ดูเทมเพลตเพิ่มเติม",
    collectionTitle: "คอลเลกชันและแพ็กเทมเพลตที่คัดสรรแล้ว",
    collectionTabOne: "คอลเลกชัน",
    collectionTabTwo: "เซตเทมเพลต",
    articleTitle: "มีอะไรใหม่ใน TKS AI Library?",
    viewAll: "ดูทั้งหมด",
    viewAllCollections: "ดูคอลเลกชั่นทั้งหมด",
    curatedByTitle: "คอลเลกชันที่คัดสรรโดยทีม",
    allCollectionsTitle: "คอลเลกชันที่ผ่านการคัดสรร",
    allCollectionsBy: "โดย INFINA",
    backToBusiness: "กลับไปหน้า Business",
    ctaOneTitle: "ดูเทมเพลตพร้อมใช้งาน",
    ctaOneText: "เริ่มจากภาพที่คัดไว้สำหรับพรีเซนเทชัน ข่าวสารภายใน และงานปฏิบัติการ",
    ctaOneButton: "ดูเทมเพลตทั้งหมด",
    ctaTwoTitle: "สร้างงานเร็วขึ้นด้วย AI prompts",
    ctaTwoText: "ใช้แนวทางจากเทมเพลตเป็นจุดเริ่มต้นสำหรับเวิร์กโฟลว์ภาพของทีม",
    ctaTwoButton: "เปิดคู่มือ",
    ctaThreeTitle: "อัปโหลดเทมเพลตของคุณ",
    ctaThreeText: "เพิ่มแอสเซ็ตภายในและทำให้ทุกคนในทีมค้นหาได้ง่าย",
    ctaThreeButton: "อัปโหลด",
    footerText: "คลังเทมเพลตภาพสำหรับทีม TKS AI",
    footerFind: "ค้นหา",
    footerEditors: "รายการคัดสรร",
    footerCollections: "คอลเลกชัน",
    footerTemplates: "เทมเพลต",
    footerCommunity: "ชุมชน",
    footerCreators: "ผู้สร้าง",
    footerAmbassador: "Ambassador",
    footerForum: "ฟอรัม",
    footerAbout: "เกี่ยวกับเรา",
    footerHelp: "ศูนย์ช่วยเหลือ",
    footerTerms: "เงื่อนไข",
    footerPolicy: "นโยบาย",
  },
};

const templateNames = {
  presentation: ["Executive Pitch", "Quarterly Review", "Project Brief", "Strategy Deck"],
  cover: ["Minimal Cover", "Corporate Cover", "Event Cover", "Report Cover"],
  timeline: ["Launch Roadmap", "Milestone Plan", "Production Flow", "Quarter Timeline"],
  infographic: ["Process Map", "Data Snapshot", "Comparison Matrix", "KPI Overview"],
  newsletter: ["Team Update", "Announcement", "HR Notice", "Campaign Banner"],
  background: ["Gradient System", "Clean Workspace", "AI Abstract", "Soft Geometry"],
  wallpaper: ["Desktop Focus", "Meeting Room", "Brand Pattern", "Dark Mode"],
  gimmick: ["Sticker Set", "Motion Cue", "Highlight Frame", "Prompt Card"],
  brandIdentity: ["Logo System", "Brand Guideline", "Color Palette", "Typography Kit"],
  corporatePhotos: ["Leadership Portrait", "Office Culture", "Team Workspace", "Factory Visit"],
  productBusiness: ["Product Launch", "Business Profile", "Service Overview", "Sales Kit"],
  marketingMaterials: ["Campaign Visual", "Social Banner", "Brochure Layout", "Event Poster"],
  eventsActivities: ["Town Hall", "Workshop", "CSR Activity", "Company Celebration"],
  boardExecutives: ["Board Portrait", "Executive Portrait", "Leadership Group", "Management Profile"],
};

const templateNamesTh = {
  presentation: ["สไลด์ผู้บริหาร", "สรุปไตรมาส", "บรีฟโปรเจกต์", "แผนกลยุทธ์"],
  cover: ["หน้าปกมินิมอล", "หน้าปกองค์กร", "หน้าปกอีเวนต์", "หน้าปกรายงาน"],
  timeline: ["แผนเปิดตัว", "แผนไมล์สโตน", "โฟลว์การผลิต", "ไทม์ไลน์ไตรมาส"],
  infographic: ["แผนผังกระบวนการ", "สรุปข้อมูล", "ตารางเปรียบเทียบ", "ภาพรวม KPI"],
  newsletter: ["อัปเดตทีม", "ประกาศสำคัญ", "ข่าวสาร HR", "แบนเนอร์แคมเปญ"],
  background: ["ระบบกราเดียนต์", "พื้นที่ทำงานสะอาด", "AI Abstract", "เรขาคณิตนุ่ม"],
  wallpaper: ["วอลเปเปอร์โฟกัส", "ห้องประชุม", "แพตเทิร์นแบรนด์", "โหมดมืด"],
  gimmick: ["ชุดสติกเกอร์", "สัญญาณเคลื่อนไหว", "กรอบไฮไลต์", "การ์ดพรอมป์"],
  brandIdentity: ["ระบบโลโก้", "คู่มือแบรนด์", "ชุดสีองค์กร", "ชุดฟอนต์องค์กร"],
  corporatePhotos: ["ภาพผู้บริหาร", "วัฒนธรรมองค์กร", "พื้นที่ทำงานทีม", "ภาพเยี่ยมชมโรงงาน"],
  productBusiness: ["เปิดตัวสินค้า", "โปรไฟล์ธุรกิจ", "ภาพรวมบริการ", "ชุดขายงาน"],
  marketingMaterials: ["ภาพแคมเปญ", "แบนเนอร์โซเชียล", "โบรชัวร์", "โปสเตอร์อีเวนต์"],
  eventsActivities: ["ทาวน์ฮอลล์", "เวิร์กช็อป", "กิจกรรม CSR", "งานเฉลิมฉลองบริษัท"],
  boardExecutives: ["ภาพคณะกรรมการ", "ภาพผู้บริหาร", "ภาพทีมผู้นำ", "โปรไฟล์ผู้บริหาร"],
};

const imagePool = Array.from({ length: 24 }, (_, index) => {
  const number = String(index + 1).padStart(2, "0");
  return `./template-${number}.jpg`;
});

const heroVideoAssets = [];

const logoItems = [
  { id: "tks-logo-2", title: "TKS Logo 2", image: "./tks-logo-2.png", fileName: "tks-logo-2.png" },
  { id: "tks-logo-2026", title: "TKS Logo 2026", image: "./tks-logo-2026.png", fileName: "tks-logo-2026.png" },
  { id: "siam", title: "SIAM PRESS", image: "./logo-siam.png", fileName: "logo-siam.png" },
  { id: "alpha-prime", title: "Alpha Prime Fulfillment", image: "./alpha-prime-fulfillment.png", fileName: "alpha-prime-fulfillment.png" },
  { id: "marvel-pack", title: "MARVEL PACK", image: "./marvel-pack.png", fileName: "marvel-pack.png" },
  { id: "gofive-01", title: "Gofive Logo 01", image: "./gofive-logo-01.png", fileName: "gofive-logo-01.png" },
  { id: "gofive-02", title: "Gofive Logo 02", image: "./gofive-logo-02.png", fileName: "gofive-logo-02.png" },
  { id: "synnex", title: "Synnex", image: "./synnex.png", fileName: "synnex.png" },
  { id: "shipx", title: "ShipX", image: "./shipx-logo.png", fileName: "shipx-logo.png" },
  { id: "deskdoc", title: "DeskDoc", image: "./deskdoc.png", fileName: "deskdoc.png" },
  { id: "tbdp", title: "TBDP Inno Teck", image: "./tbdp-logo.png", fileName: "tbdp-logo.png" },
];

const homeAssets = [
  { sub: "presentation", image: "./template-01.jpg", count: "4.4M" },
  { sub: "cover", image: "./template-02.jpg", count: "1.15M" },
  { sub: "timeline", image: "./template-03.jpg", count: "160k" },
  { sub: "infographic", image: "./template-04.jpg", count: "230k" },
  { sub: "newsletter", image: "./template-05.jpg", count: "270k" },
  { sub: "background", image: "./template-06.jpg", count: "120k" },
  { sub: "wallpaper", image: "./template-07.jpg", count: "3k" },
  { sub: "gimmick", image: "./template-08.jpg", count: "12k" },
];

const masonryItems = [
  { image: "./mountain.jpg", size: "tall" },
  { image: "./hero-flower.jpg", size: "tall" },
  { image: "./portrait.jpg", size: "tall" },
  { image: "./waves.jpg", size: "wide" },
  { image: "./model-card.png", size: "square" },
  { image: "./template-09.jpg", size: "wide" },
  { image: "./template-10.jpg", size: "medium" },
  { image: "./template-11.jpg", size: "small" },
  { image: "./template-12.jpg", size: "small" },
];

const collections = [
  { en: "Cloud Design", th: "Cloud Design", count: 49, image: "./template-13.jpg" },
  { en: "Summer Campaign", th: "Summer Campaign", count: 129, image: "./template-14.jpg" },
  { en: "Europe Travel", th: "Europe Travel", count: 150, image: "./template-15.jpg" },
  { en: "Aesthetic Wallpaper", th: "Aesthetic Wallpaper", count: 174, image: "./template-16.jpg" },
  { en: "Travel", th: "Travel", count: 119, image: "./template-17.jpg" },
  { en: "Wild Animals", th: "Wild Animals", count: 185, image: "./template-18.jpg" },
  { en: "Sports", th: "Sports", count: 142, image: "./template-19.jpg" },
  { en: "Father's Day", th: "Father's Day", count: 100, image: "./template-20.jpg" },
  { en: "Prompt Cards", th: "Prompt Cards", count: 98, image: "./template-21.jpg" },
  { en: "World Day", th: "World Day", count: 193, image: "./template-22.jpg" },
  { en: "Ocean", th: "Ocean", count: 120, image: "./template-23.jpg" },
  { en: "Lifestyle", th: "Lifestyle", count: 162, image: "./template-24.jpg" },
];

const collectionBrowserItems = [
  ...collections,
  { en: "Mother's Day", th: "Mother's Day", count: 183, image: "./portrait.jpg" },
  { en: "Fashion", th: "Fashion", count: 249, image: "./template-02.jpg" },
  { en: "Nature Videos", th: "Nature Videos", count: 130, image: "./waves.jpg" },
  { en: "Earth Day", th: "Earth Day", count: 200, image: "./template-03.jpg" },
  { en: "Sky and Space", th: "Sky and Space", count: 250, image: "./template-04.jpg" },
  { en: "Happy Easter", th: "Happy Easter", count: 87, image: "./template-05.jpg" },
  { en: "Spring", th: "Spring", count: 300, image: "./hero-flower.jpg" },
  { en: "Celebrating Women", th: "Celebrating Women", count: 220, image: "./illustration.png" },
  { en: "Valentine's Day", th: "Valentine's Day", count: 250, image: "./gif-card.gif" },
  { en: "Brazil", th: "Brazil", count: 135, image: "./template-06.jpg" },
  { en: "Lunar New Year", th: "Lunar New Year", count: 127, image: "./template-07.jpg" },
  { en: "New Year Resolutions", th: "New Year Resolutions", count: 117, image: "./template-08.jpg" },
];

const articles = [
  {
    en: "What makes a strong visual template?",
    th: "อะไรทำให้เทมเพลตภาพใช้งานได้ดี?",
    tagEn: "Design System",
    tagTh: "ระบบดีไซน์",
    date: "July 27, 2026",
    image: "./nature.jpg",
  },
  {
    en: "How to organize visual prompts for teams",
    th: "วิธีจัดระบบ visual prompts สำหรับทีม",
    tagEn: "AI Workflow",
    tagTh: "AI Workflow",
    date: "July 22, 2026",
    image: "./sound.jpg",
  },
  {
    en: "From studio to screen: template reuse patterns",
    th: "จากสตูดิโอสู่หน้าจอ: รูปแบบการใช้เทมเพลตซ้ำ",
    tagEn: "Templates",
    tagTh: "เทมเพลต",
    date: "July 14, 2026",
    image: "./illustration.png",
  },
];

const templatePromptBase = `Create a 16:9 minimal modern high-tech corporate meeting room slide background.
The left 45% of the image must remain mostly empty with clean soft neutral negative space, suitable for adding a presentation title and body text. Keep this area uncluttered and free from important objects.
On the right and lower-right side, show a premium executive meeting room atmosphere as a supporting visual element: a clean conference table, partial cropped professionals at the edge of the frame, a laptop, tablet, notebook, glass of water, small plant, and subtle business documents.
Add tasteful high-tech meeting room details: smart glass wall, ultra-thin wall display, discreet video conference camera bar, slim ambient LED lines, faint transparent interface graphics, wireless charging pad on the table, refined acoustic wall panels.
Style: polished corporate presentation illustration, minimal modern business aesthetic, premium and calm, realistic but softly illustrated, refined vector-like simplicity rendered as a high-quality raster image.
Lighting and colors: warm off-white, soft gray, muted charcoal, gentle sage, muted blue digital accents, premium daylight glow, subtle cool LED highlights, low contrast, soft shadows.
Avoid: text, logos, watermarks, clutter, central faces, full group portrait, busy charts, neon cyberpunk style, overly futuristic sci-fi, exaggerated holograms, cartoonish style, strong saturated colors, or any objects crossing into the left text area.`;

const businessPresentationTemplates = [
  {
    id: "business-presentation-test-01",
    code: "TPL-001",
    titleEn: "Minimal High-Tech Meeting Room",
    titleTh: "ห้องประชุมไฮเทคมินิมอล",
    image: "./business-presentation-01.jpg",
    prompt: templatePromptBase,
  },
  {
    id: "business-presentation-test-02",
    code: "TPL-002",
    titleEn: "Corporate Meeting Room",
    titleTh: "ห้องประชุมองค์กร",
    image: "./business-presentation-02.jpg",
    prompt: templatePromptBase,
  },
  {
    id: "business-presentation-test-03",
    code: "TPL-003",
    titleEn: "Dark High-Tech Meeting Room",
    titleTh: "ห้องประชุมไฮเทคโทนเข้ม",
    image: "./business-presentation-03.jpg",
    prompt: templatePromptBase,
  },
  {
    id: "business-presentation-test-04",
    code: "TPL-004",
    titleEn: "High-Tech Corporate Briefing",
    titleTh: "บรีฟองค์กรไฮเทค",
    image: "./business-presentation-04.jpg",
    prompt: templatePromptBase,
  },
  {
    id: "business-presentation-test-05",
    code: "TPL-005",
    titleEn: "Tech Growth ESG Cover",
    titleTh: "ปก Tech Growth ESG",
    image: "./business-presentation-05.jpg",
    prompt: templatePromptBase,
  },
];

const corporatePhotoTemplates = [
  {
    id: "corporate-photo-tks-building-01",
    code: "CPH-001",
    titleEn: "TKS Building Exterior 01",
    titleTh: "ภาพตึก TKS 01",
    image: "./corporate-photo-tks-building-01.jpg",
    fileName: "corporate-photo-tks-building-01.jpg",
  },
  {
    id: "corporate-photo-tks-building-02",
    code: "CPH-002",
    titleEn: "TKS Building Exterior 02",
    titleTh: "ภาพตึก TKS 02",
    image: "./corporate-photo-tks-building-02.png",
    fileName: "corporate-photo-tks-building-02.png",
  },
  {
    id: "corporate-photo-tks-building-03",
    code: "CPH-003",
    titleEn: "TKS Building Signage",
    titleTh: "ภาพป้ายอาคาร TKS",
    image: "./corporate-photo-tks-building-03.jpg",
    fileName: "corporate-photo-tks-building-03.jpg",
  },
];

const productBusinessTemplates = [
  {
    id: "product-business-01",
    code: "PRD-001",
    titleEn: "6K Product 2",
    titleTh: "6Kproduct2",
    image: "./product-business-01.png",
    fileName: "product-business-01.png",
  },
  {
    id: "product-business-02",
    code: "PRD-002",
    titleEn: "6K Product 1",
    titleTh: "6Kproduct1",
    image: "./product-business-02.png",
    fileName: "product-business-02.png",
  },
  {
    id: "product-business-03",
    code: "PRD-003",
    titleEn: "Box 1",
    titleTh: "box1",
    image: "./product-business-03.png",
    fileName: "product-business-03.png",
  },
  {
    id: "product-business-04",
    code: "PRD-004",
    titleEn: "Box 2",
    titleTh: "box2",
    image: "./product-business-04.png",
    fileName: "product-business-04.png",
  },
  {
    id: "product-business-05",
    code: "PRD-005",
    titleEn: "Box 3",
    titleTh: "box3",
    image: "./product-business-05.png",
    fileName: "product-business-05.png",
  },
  {
    id: "product-business-06",
    code: "PRD-006",
    titleEn: "Box 4",
    titleTh: "box4",
    image: "./product-business-06.png",
    fileName: "product-business-06.png",
  },
  {
    id: "product-business-07",
    code: "PRD-007",
    titleEn: "CodeG 1",
    titleTh: "CodeG1",
    image: "./product-business-07.png",
    fileName: "product-business-07.png",
  },
  {
    id: "product-business-08",
    code: "PRD-008",
    titleEn: "Passport 1",
    titleTh: "passport1",
    image: "./product-business-08.png",
    fileName: "product-business-08.png",
  },
  {
    id: "product-business-09",
    code: "PRD-009",
    titleEn: "RFID 1",
    titleTh: "RFID1",
    image: "./product-business-09.png",
    fileName: "product-business-09.png",
  },
  {
    id: "product-business-10",
    code: "PRD-010",
    titleEn: "TKS Paper 1",
    titleTh: "กระดาษทีเคเอส1",
    image: "./product-business-10.png",
    fileName: "product-business-10.png",
  },
  {
    id: "product-business-11",
    code: "PRD-011",
    titleEn: "Stamp 1",
    titleTh: "แสตมป์1",
    image: "./product-business-11.png",
    fileName: "product-business-11.png",
  },
  {
    id: "product-business-12",
    code: "PRD-012",
    titleEn: "Action 1",
    titleTh: "action1",
    image: "./product-business-12.png",
    fileName: "product-business-12.png",
  },
  {
    id: "product-business-13",
    code: "PRD-013",
    titleEn: "Label 1",
    titleTh: "Lable1",
    image: "./product-business-13.png",
    fileName: "product-business-13.png",
  },
  {
    id: "product-business-14",
    code: "PRD-014",
    titleEn: "Label 2",
    titleTh: "Lable2",
    image: "./product-business-14.png",
    fileName: "product-business-14.png",
  },
  {
    id: "product-business-15",
    code: "PRD-015",
    titleEn: "Security 2",
    titleTh: "security2",
    image: "./product-business-15.png",
    fileName: "product-business-15.png",
  },
  {
    id: "product-business-16",
    code: "PRD-016",
    titleEn: "Security 3",
    titleTh: "security3",
    image: "./product-business-16.png",
    fileName: "product-business-16.png",
  },
  {
    id: "product-business-17",
    code: "PRD-017",
    titleEn: "TKS Paper 2",
    titleTh: "กระดาษทีเคเอส2",
    image: "./product-business-17.png",
    fileName: "product-business-17.png",
  },
  {
    id: "product-business-18",
    code: "PRD-018",
    titleEn: "Tax 1",
    titleTh: "ภาษี1",
    image: "./product-business-18.png",
    fileName: "product-business-18.png",
  },
  {
    id: "product-business-19",
    code: "PRD-019",
    titleEn: "Digital Printing 2",
    titleTh: "digital printing 2",
    image: "./product-business-19.png",
    fileName: "product-business-19.png",
  },
  {
    id: "product-business-20",
    code: "PRD-020",
    titleEn: "Digital Printing 1",
    titleTh: "digital printing 1",
    image: "./product-business-20.png",
    fileName: "product-business-20.png",
  },
  {
    id: "product-business-21",
    code: "PRD-021",
    titleEn: "Security 1",
    titleTh: "security1",
    image: "./product-business-21.png",
    fileName: "product-business-21.png",
  },
  {
    id: "product-business-22",
    code: "PRD-022",
    titleEn: "Untitled 1",
    titleTh: "Untitled-1",
    image: "./product-business-22.png",
    fileName: "product-business-22.png",
  },
  {
    id: "product-business-23",
    code: "PRD-023",
    titleEn: "Coupon and Insert",
    titleTh: "คูปองและในเซอร์",
    image: "./product-business-23.png",
    fileName: "product-business-23.png",
  },
  {
    id: "product-business-24",
    code: "PRD-024",
    titleEn: "Cheque",
    titleTh: "เช็ค",
    image: "./product-business-24.png",
    fileName: "product-business-24.png",
  },
  {
    id: "product-business-25",
    code: "PRD-025",
    titleEn: "Exam Solution",
    titleTh: "โซลูชั่นข้อสอบ",
    image: "./product-business-25.png",
    fileName: "product-business-25.png",
  },
  {
    id: "product-business-26",
    code: "PRD-026",
    titleEn: "Passbook",
    titleTh: "พาสบุ๊ก",
    image: "./product-business-26.png",
    fileName: "product-business-26.png",
  },
];

const boardExecutiveTemplates = [
  {
    id: "board-executive-01",
    code: "BEX-001",
    titleEn: "Supant Mongkolsuthree",
    titleTh: "สุพันธุ์ มงคลสุธี",
    image: "./board-executive-01.png",
    fileName: "board-executive-01.png",
  },
  {
    id: "board-executive-02",
    code: "BEX-002",
    titleEn: "Jutiphan Mongkolsuthree",
    titleTh: "จุติพันธุ์ มงคลสุธี",
    image: "./board-executive-02.png",
    fileName: "board-executive-02.png",
  },
  {
    id: "board-executive-03",
    code: "BEX-003",
    titleEn: "Suthida Mongkolsuthree",
    titleTh: "สุธิดา มงคลสุธี",
    image: "./board-executive-03.png",
    fileName: "board-executive-03.png",
  },
  {
    id: "board-executive-04",
    code: "BEX-004",
    titleEn: "Patinya Tawaaksorn",
    titleTh: "ปฏิญญา เทวอักษร",
    image: "./board-executive-04.png",
    fileName: "board-executive-04.png",
  },
  {
    id: "board-executive-05",
    code: "BEX-005",
    titleEn: "Apisak Tantivorawong",
    titleTh: "อภิศักดิ์ ตันติวรวงศ์",
    image: "./board-executive-05.png",
    fileName: "board-executive-05.png",
  },
  {
    id: "board-executive-06",
    code: "BEX-006",
    titleEn: "Pratana Mongkolkul",
    titleTh: "ปรารถนา มงคลกุล",
    image: "./board-executive-06.png",
    fileName: "board-executive-06.png",
  },
  {
    id: "board-executive-07",
    code: "BEX-007",
    titleEn: "Distat Hotrakitya",
    titleTh: "ดิสทัต โหตระกิตย์",
    image: "./board-executive-07.png",
    fileName: "board-executive-07.png",
  },
  {
    id: "board-executive-08",
    code: "BEX-008",
    titleEn: "Somchai Harnhirun",
    titleTh: "สมชาย หาญหิรัญ",
    image: "./board-executive-08.png",
    fileName: "board-executive-08.png",
  },
  {
    id: "board-executive-09",
    code: "BEX-009",
    titleEn: "Pakpoom Poo-Udom",
    titleTh: "ภาคภูมิ ภูอุดม",
    image: "./board-executive-09.png",
    fileName: "board-executive-09.png",
  },
  {
    id: "board-executive-10",
    code: "BEX-010",
    titleEn: "Tharathip Sringamphong",
    titleTh: "ธารทิพย์ ศรีงามผ่อง",
    image: "./board-executive-10.png",
    fileName: "board-executive-10.png",
  },
  {
    id: "board-executive-11",
    code: "BEX-011",
    titleEn: "Jirapong Wachirathanaporn",
    titleTh: "จิรพงศ์ วชิราธนาภรณ์",
    image: "./board-executive-11.png",
    fileName: "board-executive-11.png",
  },
  {
    id: "board-executive-12",
    code: "BEX-012",
    titleEn: "Rujee Jorapiphop",
    titleTh: "รุจี จรพิภพ",
    image: "./board-executive-12.png",
    fileName: "board-executive-12.png",
  },
];

const state = {
  lang: "th",
  main: "main",
  view: "home",
  sub: "presentation",
  query: "",
  logoPreview: null,
  templatePreview: null,
  heroVideo: 0,
  heroVideoLayer: 0,
};

const pageTransition = {
  duration: 160,
  timer: null,
  layer: null,
};

const els = {
  hero: document.querySelector(".hero"),
  heroVideos: document.querySelectorAll(".hero-video"),
  sliderDots: document.querySelector(".slider-dots"),
  mainMenu: document.querySelector("#main-menu"),
  subMenu: document.querySelector("#sub-menu"),
  search: document.querySelector("#search"),
  grid: document.querySelector("#template-grid"),
  activeTitle: document.querySelector("#active-title"),
  activeSubtitle: document.querySelector("#active-subtitle"),
  browseMore: document.querySelector(".browse-more"),
  browseCollectionsHead: document.querySelector(".browse-collections-head"),
  mainHome: document.querySelector("#main-home"),
  workspace: document.querySelector("#template-workspace"),
  page: document.querySelector(".page"),
  collectionBrowser: document.querySelector("#collection-browser"),
  featuredCollectionGrid: document.querySelector("#featured-collection-grid"),
  collectionBrowserGrid: document.querySelector("#collection-browser-grid"),
  openCollections: document.querySelector("#open-collections"),
  backFromCollections: document.querySelector("#back-from-collections"),
  homeAssetGrid: document.querySelector("#home-asset-grid"),
  homeMasonry: document.querySelector("#home-masonry"),
  collectionGrid: document.querySelector("#collection-grid"),
  articleGrid: document.querySelector("#article-grid"),
  langButtons: document.querySelectorAll(".lang-option"),
  i18n: document.querySelectorAll("[data-i18n]"),
};

function label(items, id) {
  return items.find((item) => item.id === id)?.[state.lang] ?? id;
}

function getSubMenus(mainId = state.main) {
  return subMenuSets[mainId] ?? templateSubMenus;
}

function allSubMenus() {
  return [...templateSubMenus, ...corporateSubMenus];
}

function subLabel(id, mainId = state.main) {
  return label(getSubMenus(mainId), id) === id ? label(allSubMenus(), id) : label(getSubMenus(mainId), id);
}

function firstSubFor(mainId) {
  return getSubMenus(mainId)[0]?.id ?? "presentation";
}

function randomHeroVideoIndex(excludeIndex = state.heroVideo) {
  if (heroVideoAssets.length <= 1) return 0;
  const candidates = heroVideoAssets
    .map((_, index) => index)
    .filter((index) => index !== state.heroVideo && index !== excludeIndex);
  const pool = candidates.length > 0
    ? candidates
    : heroVideoAssets.map((_, index) => index).filter((index) => index !== state.heroVideo);
  return pool[Math.floor(Math.random() * pool.length)] ?? 0;
}

function renderHeroDots() {
  els.sliderDots.replaceChildren();
  heroVideoAssets.forEach((_, index) => {
    const dot = document.createElement("span");
    dot.className = `dot${index === state.heroVideo ? " active" : ""}`;
    els.sliderDots.append(dot);
  });
}

function setHeroVideo(index, immediate = false) {
  const nextVideo = heroVideoAssets[index];
  const activeLayer = els.heroVideos[state.heroVideoLayer];
  const nextLayerIndex = immediate ? state.heroVideoLayer : Number(!state.heroVideoLayer);
  const nextLayer = els.heroVideos[nextLayerIndex];
  const activateLayer = () => {
    els.hero.dataset.tone = nextVideo.tone;
    state.heroVideo = index;
    state.heroVideoLayer = nextLayerIndex;
    renderHeroDots();

    nextLayer.classList.add("is-active");
    if (!immediate) {
      activeLayer.classList.remove("is-active");
    }
  };

  nextLayer.onloadeddata = activateLayer;
  nextLayer.onerror = () => {
    window.setTimeout(() => {
      setHeroVideo(randomHeroVideoIndex(index), immediate);
    }, 120);
  };
  nextLayer.src = nextVideo.src;
  nextLayer.load();
  const playPromise = nextLayer.play();
  if (playPromise) {
    playPromise.catch(() => {});
  }

  if (nextLayer.readyState >= 2) {
    activateLayer();
  }
}

function startHeroVideoRotation() {
  if (!els.hero || els.heroVideos.length < 2 || heroVideoAssets.length === 0) return;
  state.heroVideo = randomHeroVideoIndex();
  setHeroVideo(state.heroVideo, true);

  window.setInterval(() => {
    setHeroVideo(randomHeroVideoIndex());
  }, 4000);
}

function isLogoLibrary() {
  return state.main === "corporate" && state.sub === "brandIdentity";
}

function setBrowseExtrasHidden(hidden) {
  els.browseMore.hidden = hidden;
  els.browseCollectionsHead.hidden = hidden;
  els.featuredCollectionGrid.hidden = hidden;
}

function isPromptTemplateDetailAvailable(item) {
  return item?.subId === "presentation";
}

function isDownloadTemplateDetailAvailable(item) {
  return Boolean(item?.fileName);
}

function getCustomTemplates(menuId, subId) {
  if (menuId === "business" && subId === "presentation") {
    return businessPresentationTemplates;
  }

  if (menuId === "corporate" && subId === "corporatePhotos") {
    return corporatePhotoTemplates;
  }

  if (menuId === "corporate" && subId === "productBusiness") {
    return productBusinessTemplates;
  }

  if (menuId === "corporate" && subId === "boardExecutives") {
    return boardExecutiveTemplates;
  }

  return [];
}

function makeTemplates() {
  const all = [];
  const menuIds = state.main === "main" ? mainMenus.slice(1).map((menu) => menu.id) : [state.main];

  menuIds.forEach((menuId) => {
    const availableSubMenus = getSubMenus(menuId);
    const subIds = state.sub && availableSubMenus.some((menu) => menu.id === state.sub)
      ? [state.sub]
      : availableSubMenus.map((menu) => menu.id);

    subIds.forEach((subId) => {
      const names = state.lang === "th" ? templateNamesTh[subId] : templateNames[subId];
      const menuIndex = Math.max(0, mainMenus.slice(1).findIndex((menu) => menu.id === menuId));
      const subIndex = Math.max(0, availableSubMenus.findIndex((menu) => menu.id === subId));
      const customTemplates = getCustomTemplates(menuId, subId);

      customTemplates.forEach((template) => {
        all.push({
          id: template.id,
          code: template.code,
          title: state.lang === "th" ? template.titleTh : template.titleEn,
          menu: label(mainMenus, menuId),
          menuId,
          category: subLabel(subId, menuId),
          subId,
          image: template.image,
          fileName: template.fileName,
          prompt: template.prompt ?? templatePromptBase,
        });
      });

      for (let i = 0; i < 12 - customTemplates.length; i += 1) {
        const imageIndex = (menuIndex * 8 + subIndex * 4 + i) % imagePool.length;
        const templateNumber = customTemplates.length + i + 1;
        all.push({
          id: `${menuId}-${subId}-${templateNumber}`,
          code: `TPL-${String(menuIndex * 80 + subIndex * 12 + templateNumber).padStart(3, "0")}`,
          title: names[i % names.length],
          menu: label(mainMenus, menuId),
          menuId,
          category: subLabel(subId, menuId),
          subId,
          image: imagePool[imageIndex],
          prompt: templatePromptBase,
        });
      }
    });
  });

  const query = state.query.trim().toLowerCase();
  const visible = query
    ? all.filter((item) => `${item.title} ${item.menu} ${item.category}`.toLowerCase().includes(query))
    : all;
  const shouldShowAll = state.main === "corporate" && state.sub === "productBusiness";

  return shouldShowAll ? visible : visible.slice(0, 12);
}

function renderCopy() {
  document.documentElement.lang = state.lang;
  els.i18n.forEach((node) => {
    node.textContent = copy[state.lang][node.dataset.i18n];
  });
  els.search.placeholder = copy[state.lang].searchPlaceholder;
}

function renderHomeAssets() {
  els.homeAssetGrid.replaceChildren();
  const query = state.query.trim().toLowerCase();
  const visibleAssets = homeAssets.filter((item) => {
    if (!query) return true;
    return `${subLabel(item.sub, "business")} ${item.count}`.toLowerCase().includes(query);
  });
  visibleAssets.forEach((item) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "home-asset-card";
    button.innerHTML = `
      <span>
        <strong>${subLabel(item.sub, "business")}</strong>
        <small>${item.count} ${state.lang === "th" ? "รายการ" : "assets"}</small>
      </span>
      <img src="${item.image}" alt="" />
    `;
    button.addEventListener("click", () => {
      transitionTo(() => {
        state.main = "business";
        state.view = "browse";
        state.sub = item.sub;
        state.templatePreview = null;
        state.query = "";
        els.search.value = "";
      }, { scrollTop: true });
    });
    els.homeAssetGrid.append(button);
  });
  if (visibleAssets.length === 0) {
    const empty = document.createElement("p");
    empty.className = "home-empty";
    empty.textContent = copy[state.lang].noResults;
    els.homeAssetGrid.append(empty);
  }
}

function renderHomeMasonry() {
  els.homeMasonry.replaceChildren();
  masonryItems.forEach((item) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = `masonry-card ${item.size}`;
    card.innerHTML = `<img src="${item.image}" alt="" />`;
    els.homeMasonry.append(card);
  });
}

function renderCollections() {
  els.collectionGrid.replaceChildren();
  collections.forEach((item) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "collection-item";
    button.innerHTML = `
      <img src="${item.image}" alt="" />
      <span>
        <strong>${item[state.lang]}</strong>
        <small>${item.count} ${state.lang === "th" ? "รายการ" : "items"}</small>
      </span>
    `;
    els.collectionGrid.append(button);
  });
}

function openCollection(item) {
  transitionTo(() => {
    state.main = "business";
    state.view = "browse";
    state.sub = firstSubFor("business");
    state.templatePreview = null;
    state.query = "";
    els.search.value = "";
  }, { scrollTop: true });
}

function renderFeaturedCollections() {
  els.featuredCollectionGrid.replaceChildren();
  collections.slice(7, 10).forEach((item) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "featured-collection-card";
    card.innerHTML = `
      <img src="${item.image}" alt="" />
      <strong>${item[state.lang]}</strong>
      <span>${item.count} ${state.lang === "th" ? "รายการ" : "items"}</span>
    `;
    card.addEventListener("click", () => openCollection(item));
    els.featuredCollectionGrid.append(card);
  });
}

function renderCollectionBrowser() {
  els.collectionBrowserGrid.replaceChildren();
  const query = state.query.trim().toLowerCase();
  const visibleItems = collectionBrowserItems.filter((item) => {
    if (!query) return true;
    return `${item.en} ${item.th} ${item.count}`.toLowerCase().includes(query);
  });
  visibleItems.forEach((item) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "collection-browser-card";
    card.innerHTML = `
      <img src="${item.image}" alt="" />
      <span>
        <strong>${item[state.lang]}</strong>
        <small>${item.count} ${state.lang === "th" ? "รายการ" : "items"}</small>
      </span>
    `;
    card.addEventListener("click", () => openCollection(item));
    els.collectionBrowserGrid.append(card);
  });
  if (visibleItems.length === 0) {
    const empty = document.createElement("p");
    empty.className = "empty-state";
    empty.textContent = copy[state.lang].noResults;
    els.collectionBrowserGrid.append(empty);
  }
}

function renderArticles() {
  els.articleGrid.replaceChildren();
  articles.forEach((article) => {
    const card = document.createElement("article");
    card.className = "article-card";
    card.innerHTML = `
      <img src="${article.image}" alt="" />
      <span class="article-tag">${state.lang === "th" ? article.tagTh : article.tagEn}</span>
      <h3>${article[state.lang]}</h3>
      <time>${article.date}</time>
    `;
    els.articleGrid.append(card);
  });
}

function renderHomePage() {
  renderHomeAssets();
  renderHomeMasonry();
  renderCollections();
  renderArticles();
}

function renderMainMenu() {
  els.mainMenu.replaceChildren();
  mainMenus.forEach((menu, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `menu-pill${state.main === menu.id ? " active" : ""}${index === 0 ? " plain" : ""}`;
    button.textContent = menu[state.lang];
    button.addEventListener("click", () => {
      transitionTo(() => {
        state.main = menu.id;
        state.view = menu.id === "main" ? "home" : "browse";
        if (menu.id !== "main") {
          state.sub = firstSubFor(menu.id);
        }
        state.logoPreview = null;
        state.templatePreview = null;
        state.query = "";
        els.search.value = "";
      });
    });
    els.mainMenu.append(button);
  });
}

function renderSubMenu() {
  els.subMenu.replaceChildren();
  const activeMain = state.main === "main" ? "business" : state.main;
  getSubMenus(activeMain).forEach((menu) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `sub-pill${state.sub === menu.id ? " active" : ""}`;
    button.textContent = menu[state.lang];
    button.addEventListener("click", () => {
      transitionTo(() => {
        state.main = activeMain;
        state.view = "browse";
        state.sub = menu.id;
        state.logoPreview = null;
        state.templatePreview = null;
        state.query = "";
        els.search.value = "";
      });
    });
    els.subMenu.append(button);
  });
}

function renderGrid() {
  if (isLogoLibrary()) {
    renderLogoLibrary();
    return;
  }

  const templates = makeTemplates();
  const selectedTemplate = templates.find((item) => item.id === state.templatePreview);
  els.grid.replaceChildren();
  els.grid.className = [
    "browse-grid",
    state.sub === "boardExecutives" ? "board-executive-grid" : "",
    state.sub === "productBusiness" ? "product-business-grid" : "",
  ].filter(Boolean).join(" ");
  els.activeTitle.textContent = label(mainMenus, state.main);
  els.activeSubtitle.textContent = selectedTemplate ? selectedTemplate.title : subLabel(state.sub, state.main);

  if (selectedTemplate && isPromptTemplateDetailAvailable(selectedTemplate)) {
    setBrowseExtrasHidden(true);
    renderTemplateDetail(selectedTemplate);
    return;
  }

  if (selectedTemplate && isDownloadTemplateDetailAvailable(selectedTemplate)) {
    setBrowseExtrasHidden(true);
    renderTemplateDownloadDetail(selectedTemplate);
    return;
  }

  setBrowseExtrasHidden(false);

  templates.forEach((item) => {
    const card = document.createElement("button");
    const isExecutivePhoto = item.subId === "boardExecutives";
    const isProductBusiness = item.subId === "productBusiness";
    card.className = [
      "browse-card",
      isExecutivePhoto ? "board-executive-card" : "",
      isProductBusiness ? "product-business-card" : "",
    ].filter(Boolean).join(" ");
    card.type = "button";
    card.setAttribute("aria-label", `${item.menu} ${item.category} ${item.title}`);
    card.innerHTML = isExecutivePhoto
      ? `<img src="${item.image}" alt="${item.title}" /><span class="board-executive-name">${item.title}</span>`
      : `<img src="${item.image}" alt="${item.title}" />`;
    if (isPromptTemplateDetailAvailable(item) || isDownloadTemplateDetailAvailable(item)) {
      card.addEventListener("click", () => {
        transitionTo(() => {
          state.templatePreview = item.id;
        }, { scrollTop: true });
      });
    }
    els.grid.append(card);
  });
  if (templates.length === 0) {
    const empty = document.createElement("p");
    empty.className = "empty-state";
    empty.textContent = copy[state.lang].noResults;
    els.grid.append(empty);
  }
  renderFeaturedCollections();
}

function copyText(text, button) {
  const doneText = state.lang === "th" ? "คัดลอกแล้ว" : "Copied";
  const defaultText = button.textContent;
  const markDone = () => {
    button.textContent = doneText;
    window.setTimeout(() => {
      button.textContent = defaultText;
    }, 1400);
  };
  const copyWithTextarea = () => {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.left = "-999px";
    document.body.append(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    markDone();
  };

  if (navigator.clipboard?.writeText) {
    navigator.clipboard.writeText(text).then(markDone).catch(copyWithTextarea);
    return;
  }

  copyWithTextarea();
}

function base64ToBlob(base64Data, mimeType) {
  const binary = window.atob(base64Data);
  const bytes = new Uint8Array(binary.length);
  for (let index = 0; index < binary.length; index += 1) {
    bytes[index] = binary.charCodeAt(index);
  }
  return new Blob([bytes], { type: mimeType });
}

function getPreviewDownloadFileName(item) {
  const imagePath = item.image.split("?")[0].split("#")[0];
  const extension = imagePath.includes(".")
    ? imagePath.split(".").pop().toLowerCase()
    : "png";
  const safeExtension = ["jpg", "jpeg", "png", "webp"].includes(extension) ? extension : "png";
  const safeCode = (item.code || "template").toLowerCase().replace(/[^a-z0-9-]+/g, "-");
  const safeId = (item.id || "preview").toLowerCase().replace(/[^a-z0-9-]+/g, "-");
  return `${safeCode}-${safeId}-preview.${safeExtension}`;
}

async function downloadPreviewAsset(item) {
  const imagePath = item.image.split("?")[0].split("#")[0];
  const assetName = imagePath.split("/").pop();
  const fileName = getPreviewDownloadFileName(item);
  const extension = fileName.split(".").pop().toLowerCase();

  const startDownload = (href, revokeDelay = 0) => {
    const link = document.createElement("a");
    link.href = href;
    link.download = fileName;
    document.body.append(link);
    link.click();
    link.remove();
    if (revokeDelay > 0) {
      window.setTimeout(() => URL.revokeObjectURL(href), revokeDelay);
    }
  };

  const saveBlob = (blob) => {
    startDownload(URL.createObjectURL(blob), 1000);
  };

  const saveEmbeddedAsset = () => {
    const embeddedAsset = window.previewDownloadData?.[assetName]
      || window.templateDownloadData?.[assetName]
      || window.templateDownloadData?.[fileName];
    if (!embeddedAsset) return false;

    if (typeof embeddedAsset === "string") {
      startDownload(embeddedAsset);
      return true;
    }

    if (embeddedAsset.mimeType && embeddedAsset.data) {
      saveBlob(base64ToBlob(embeddedAsset.data, embeddedAsset.mimeType));
      return true;
    }

    return false;
  };

  const saveFromCanvas = () =>
    new Promise((resolve, reject) => {
      const image = new Image();
      image.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = image.naturalWidth;
        canvas.height = image.naturalHeight;
        const context = canvas.getContext("2d");
        context.drawImage(image, 0, 0);
        const type = safeExtension === "jpg" || safeExtension === "jpeg" ? "image/jpeg" : "image/png";
        canvas.toBlob((blob) => {
          if (!blob) {
            reject(new Error("Could not prepare preview download"));
            return;
          }
          startDownload(URL.createObjectURL(blob), 1000);
          resolve();
        }, type, 0.98);
      };
      image.onerror = () => reject(new Error("Could not load preview image"));
      image.src = item.image;
    });

  if (saveEmbeddedAsset()) return;

  try {
    const response = await fetch(item.image);
    if (!response.ok) {
      throw new Error("Preview download request failed");
    }
    startDownload(URL.createObjectURL(await response.blob()), 1000);
  } catch (error) {
    try {
      await saveFromCanvas();
    } catch (canvasError) {
      startDownload(item.image);
    }
  }
}

function renderTemplateDetail(item) {
  els.grid.className = "template-detail-wrap";
  const title = state.lang === "th"
    ? `${item.category} ${Number(item.id.split("-").at(-1))} Template`
    : `${item.title} Template`;
  const previewFileName = getPreviewDownloadFileName(item);
  const detail = document.createElement("article");
  detail.className = "template-detail";
  detail.innerHTML = `
    <div class="template-detail-main">
      <button class="back-button template-back" type="button">${
        state.lang === "th" ? "กลับไปยังหน้าหลัก" : "Back to templates"
      }</button>
      <header class="template-detail-title">
        <h2>${title}</h2>
        <span>${item.code}</span>
      </header>
      <figure class="template-preview-figure">
        <img src="${item.image}" alt="${title}" />
        <figcaption>* ${
          state.lang === "th"
            ? "รูปภาพจำลองเพื่อเป็นตัวอย่างในการจัดวางองค์ประกอบ"
            : "Placeholder preview image for composition reference"
        }</figcaption>
        <div class="template-preview-actions">
          <a class="download-button template-preview-download" href="${item.image}" download="${previewFileName}">
            <span class="download-symbol" aria-hidden="true">↓</span>
            ${state.lang === "th" ? "ดาวน์โหลดภาพตัวอย่าง" : "Download Preview Image"}
          </a>
        </div>
      </figure>
    </div>
    <aside class="template-prompt-panel">
      <section class="prompt-card">
        <h3>${state.lang === "th" ? "Prompt (คำสั่งสำหรับ AI)" : "Prompt for AI"}</h3>
        <div class="prompt-copy-box">
          <p>${item.prompt}</p>
          <button class="prompt-copy" type="button">${
            state.lang === "th" ? "คัดลอก Prompt" : "Copy Prompt"
          }</button>
        </div>
      </section>
      <section class="prompt-form-section">
        <h3>${state.lang === "th" ? "ปรับแต่งข้อความ (Edit Text)" : "Edit Text"}</h3>
        <label>
          <span>[HEADLINE]</span>
          <input class="prompt-field" data-token="headline" placeholder="${
            state.lang === "th" ? "ใส่หัวข้อหลักที่นี่" : "Add headline here"
          }" />
        </label>
        <label>
          <span>[SUBHEAD]</span>
          <textarea class="prompt-field" data-token="subhead" placeholder="${
            state.lang === "th" ? "ใส่คำอธิบายที่นี่" : "Add description here"
          }"></textarea>
        </label>
        <label>
          <span>[FOOTNOTE]</span>
          <input class="prompt-field" data-token="footnote" placeholder="${
            state.lang === "th" ? "ใส่ข้อมูลเพิ่มเติมที่นี่" : "Add footnote here"
          }" />
        </label>
        <label>
          <span>[LOGO POSITION]</span>
          <select class="prompt-field" data-token="logo">
            <option>Bottom Right</option>
            <option>Bottom Left</option>
            <option>Top Right</option>
            <option>Top Left</option>
          </select>
        </label>
        <label>
          <span>[IMAGE POSITION]</span>
          <select class="prompt-field" data-token="image">
            <option>Right Side</option>
            <option>Left Side</option>
            <option>Center</option>
            <option>Full Background</option>
          </select>
        </label>
        <button class="generate-button" type="button">${
          state.lang === "th" ? "สร้างภาพด้วย AI" : "Generate with AI"
        }</button>
        <div class="generation-status" aria-live="polite" hidden></div>
      </section>
    </aside>
  `;

  const promptText = item.prompt;
  detail.querySelector(".template-back").addEventListener("click", () => {
    transitionTo(() => {
      state.templatePreview = null;
    }, { scrollTop: true });
  });
  detail.querySelector(".prompt-copy").addEventListener("click", (event) => {
    copyText(promptText, event.currentTarget);
  });
  detail.querySelector(".generate-button").addEventListener("click", () => {
    const fields = Object.fromEntries(
      [...detail.querySelectorAll(".prompt-field")].map((field) => [field.dataset.token, field.value.trim()])
    );
    const finalPrompt = `${promptText}
Headline: ${fields.headline || "[HEADLINE]"}
Subhead: ${fields.subhead || "[SUBHEAD]"}
Footnote: ${fields.footnote || "[FOOTNOTE]"}
Logo position: ${fields.logo}
Image position: ${fields.image}`;
    const status = detail.querySelector(".generation-status");
    status.hidden = false;
    status.textContent = state.lang === "th"
      ? "จัดลำดับคำสั่งเรียบร้อย พร้อมส่งต่อให้ AI ที่เชื่อมต่อกับเว็บ"
      : "Prompt sequence is ready for the connected AI workflow.";
    copyText(finalPrompt, detail.querySelector(".generate-button"));
  });

  els.grid.append(detail);
}

async function downloadTemplateAsset(item) {
  const startDownload = (href, revokeDelay = 0) => {
    const link = document.createElement("a");
    link.href = href;
    link.download = item.fileName;
    document.body.append(link);
    link.click();
    link.remove();
    if (revokeDelay > 0) {
      window.setTimeout(() => URL.revokeObjectURL(href), revokeDelay);
    }
  };

  const saveBlob = (blob) => {
    startDownload(URL.createObjectURL(blob), 1000);
  };

  const saveEmbeddedAsset = () => {
    const embeddedAsset = window.templateDownloadData?.[item.fileName];
    if (!embeddedAsset) return false;

    if (typeof embeddedAsset === "string") {
      startDownload(embeddedAsset);
      return true;
    }

    if (embeddedAsset.mimeType && embeddedAsset.data) {
      saveBlob(base64ToBlob(embeddedAsset.data, embeddedAsset.mimeType));
      return true;
    }

    return false;
  };

  const saveFromCanvas = () =>
    new Promise((resolve, reject) => {
      const image = new Image();
      image.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = image.naturalWidth;
        canvas.height = image.naturalHeight;
        const context = canvas.getContext("2d");
        context.drawImage(image, 0, 0);
        const type = item.fileName.toLowerCase().endsWith(".jpg") || item.fileName.toLowerCase().endsWith(".jpeg")
          ? "image/jpeg"
          : "image/png";
        canvas.toBlob((blob) => {
          if (!blob) {
            reject(new Error("Could not prepare template download"));
            return;
          }
          saveBlob(blob);
          resolve();
        }, type, 0.98);
      };
      image.onerror = () => reject(new Error("Could not load template image"));
      image.src = item.image;
    });

  try {
    const response = await fetch(item.image);
    if (!response.ok) {
      throw new Error("Template download request failed");
    }
    saveBlob(await response.blob());
  } catch (error) {
    if (saveEmbeddedAsset()) return;

    try {
      await saveFromCanvas();
    } catch (canvasError) {
      startDownload(item.image);
    }
  }
}

function renderTemplateDownloadDetail(item) {
  els.grid.className = "browse-grid logo-preview-wrap";
  const detail = document.createElement("article");
  detail.className = "logo-preview";
  const isExecutivePhoto = item.subId === "boardExecutives";
  detail.innerHTML = `
    <div class="logo-preview-toolbar">
      <button class="back-button template-download-back" type="button">${
        state.lang === "th" ? "ย้อนกลับไปดูภาพทั้งหมด" : "Back to all photos"
      }</button>
      <a class="download-button" href="${item.image}" download="${item.fileName}" aria-label="${
        state.lang === "th" ? `ดาวน์โหลด ${item.title}` : `Download ${item.title}`
      }">
        <span class="download-symbol" aria-hidden="true">↓</span>
        ${state.lang === "th" ? "ดาวน์โหลด" : "Download"}
      </a>
    </div>
    <div class="logo-preview-stage template-download-stage${isExecutivePhoto ? " executive-preview-stage" : ""}">
      <img src="${item.image}" alt="${item.title}" />
    </div>
  `;
  detail.querySelector(".template-download-back").addEventListener("click", () => {
    transitionTo(() => {
      state.templatePreview = null;
    }, { scrollTop: true });
  });
  els.grid.append(detail);
}

function renderLogoLibrary() {
  const selectedLogo = logoItems.find((item) => item.id === state.logoPreview);
  els.grid.replaceChildren();
  setBrowseExtrasHidden(true);
  els.activeTitle.textContent = label(mainMenus, state.main);
  els.activeSubtitle.textContent = selectedLogo ? selectedLogo.title : subLabel(state.sub, state.main);

  if (selectedLogo) {
    renderLogoPreview(selectedLogo);
    return;
  }

  const query = state.query.trim().toLowerCase();
  const visibleLogos = query
    ? logoItems.filter((item) => item.title.toLowerCase().includes(query))
    : logoItems;

  els.grid.className = "browse-grid logo-grid";
  visibleLogos.forEach((item) => {
    const card = document.createElement("button");
    card.className = "logo-card";
    card.type = "button";
    card.setAttribute("aria-label", item.title);
    card.innerHTML = `
      <span class="logo-card-media">
        <img src="${item.image}" alt="${item.title}" />
      </span>
      <strong>${item.title}</strong>
    `;
    card.addEventListener("click", () => {
      transitionTo(() => {
        state.logoPreview = item.id;
      }, { scrollTop: true });
    });
    els.grid.append(card);
  });

  if (visibleLogos.length === 0) {
    const empty = document.createElement("p");
    empty.className = "empty-state";
    empty.textContent = copy[state.lang].noResults;
    els.grid.append(empty);
  }
}

async function downloadLogoAsset(item) {
  const startDownload = (href, revokeDelay = 0) => {
    const link = document.createElement("a");
    link.href = href;
    link.download = item.fileName;
    document.body.append(link);
    link.click();
    link.remove();
    if (revokeDelay > 0) {
      window.setTimeout(() => URL.revokeObjectURL(href), revokeDelay);
    }
  };

  const saveBlob = (blob) => {
    startDownload(URL.createObjectURL(blob), 1000);
  };

  const saveEmbeddedAsset = () => {
    const embeddedAsset = window.logoDownloadData?.[item.fileName];
    if (!embeddedAsset) return false;

    if (typeof embeddedAsset === "string") {
      startDownload(embeddedAsset);
      return true;
    }

    if (embeddedAsset.mimeType && embeddedAsset.data) {
      saveBlob(base64ToBlob(embeddedAsset.data, embeddedAsset.mimeType));
      return true;
    }

    return false;
  };

  const saveFromCanvas = () =>
    new Promise((resolve, reject) => {
      const image = new Image();
      image.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = image.naturalWidth;
        canvas.height = image.naturalHeight;
        const context = canvas.getContext("2d");
        context.drawImage(image, 0, 0);
        canvas.toBlob((blob) => {
          if (!blob) {
            reject(new Error("Could not prepare logo download"));
            return;
          }
          saveBlob(blob);
          resolve();
        }, "image/png");
      };
      image.onerror = () => reject(new Error("Could not load logo image"));
      image.src = item.image;
    });

  try {
    const response = await fetch(item.image);
    if (!response.ok) {
      throw new Error("Logo download request failed");
    }
    saveBlob(await response.blob());
  } catch (error) {
    if (saveEmbeddedAsset()) return;

    try {
      await saveFromCanvas();
    } catch (canvasError) {
      window.alert(
        state.lang === "th"
          ? "ดาวน์โหลดไม่สำเร็จ กรุณาลองเปิดผ่านเว็บเซิร์ฟเวอร์หรือแจ้งผู้ดูแลระบบ"
          : "Download could not start. Please try opening the site through a web server or contact support."
      );
    }
  }
}

function renderLogoPreview(item) {
  els.grid.className = "browse-grid logo-preview-wrap";
  const preview = document.createElement("article");
  preview.className = "logo-preview";
  preview.innerHTML = `
    <div class="logo-preview-toolbar">
      <button class="back-button logo-back" type="button">${
        state.lang === "th" ? "ย้อนกลับไปดูโลโก้ทั้งหมด" : "Back to all logos"
      }</button>
      <button class="download-button" type="button" aria-label="${
        state.lang === "th" ? `ดาวน์โหลด ${item.title}` : `Download ${item.title}`
      }">
        <span class="download-symbol" aria-hidden="true">↓</span>
        ${state.lang === "th" ? "ดาวน์โหลด" : "Download"}
      </button>
    </div>
    <div class="logo-preview-stage">
      <img src="${item.image}" alt="${item.title}" />
    </div>
  `;
  preview.querySelector(".logo-back").addEventListener("click", () => {
    transitionTo(() => {
      state.logoPreview = null;
    }, { scrollTop: true });
  });
  preview.querySelector(".download-button").addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    downloadLogoAsset(item);
  });
  els.grid.append(preview);
}

function renderLangButtons() {
  els.langButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === state.lang);
  });
}

function render() {
  renderCopy();
  renderMainMenu();
  renderSubMenu();
  els.page.dataset.view = state.view;
  if (state.view === "home") {
    els.mainHome.hidden = false;
    els.workspace.hidden = true;
    els.collectionBrowser.hidden = true;
    renderHomePage();
  } else if (state.view === "collections") {
    els.mainHome.hidden = true;
    els.workspace.hidden = true;
    els.collectionBrowser.hidden = false;
    renderCollectionBrowser();
  } else {
    els.mainHome.hidden = true;
    els.workspace.hidden = false;
    els.collectionBrowser.hidden = true;
    renderGrid();
  }
  renderLangButtons();
}

function removeTransitionLayer() {
  window.clearTimeout(pageTransition.timer);
  if (pageTransition.layer) {
    pageTransition.layer.remove();
    pageTransition.layer = null;
  }
}

function transitionTo(updateState, options = {}) {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  removeTransitionLayer();

  if (reduceMotion) {
    updateState();
    if (options.scrollTop) {
      window.scrollTo({ top: 0, behavior: "auto" });
    }
    render();
    return;
  }

  const layer = els.page.cloneNode(true);
  layer.classList.add("page-transition-layer");
  layer.setAttribute("aria-hidden", "true");
  layer.style.transform = `translateY(-${window.scrollY}px)`;
  document.body.append(layer);
  pageTransition.layer = layer;

  updateState();
  if (options.scrollTop) {
    window.scrollTo({ top: 0, behavior: "auto" });
  }
  render();

  window.requestAnimationFrame(() => {
    layer.classList.add("is-fading");
  });

  pageTransition.timer = window.setTimeout(() => {
    removeTransitionLayer();
  }, pageTransition.duration + 60);
}

els.search.addEventListener("input", (event) => {
  state.query = event.target.value;
  state.templatePreview = null;
  if (state.main === "main") {
    renderHomeAssets();
  } else if (state.view === "collections") {
    renderCollectionBrowser();
  } else {
    renderGrid();
  }
});

els.langButtons.forEach((button) => {
  button.addEventListener("click", () => {
    transitionTo(() => {
      state.lang = button.dataset.lang;
    });
  });
});

els.openCollections.addEventListener("click", () => {
  transitionTo(() => {
    state.view = "collections";
    state.templatePreview = null;
    state.query = "";
    els.search.value = "";
  }, { scrollTop: true });
});

els.backFromCollections.addEventListener("click", () => {
  transitionTo(() => {
    state.view = "browse";
    state.main = "business";
  });
});

startHeroVideoRotation();
render();
