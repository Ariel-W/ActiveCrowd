// Persist preferred language
const preferred = localStorage.getItem("ac_lang");
let currentLang = preferred || "he";

// Translations (HE + EN) for all visible strings across pages
const t = {
  he: {
    "meta.title": "ActiveCrowd — המונה החי שמחבר אונליין ואוף־ליין",
    "meta.description":
      "ActiveCrowd: מונה דיגיטלי בזמן אמת שמחבר את העסק שלכם לרשתות החברתיות ומגדיל מעורבות ועוקבים בחנות עצמה.",
    "meta.ogTitle": "ActiveCrowd — הופכים לייקים ללקוחות נאמנים",
    "meta.ogDesc":
      "מונה בזמן אמת שמחבר את העסק שלכם לחשבונות החברתיים. לקוחות עוקבים ורואים את המספר קופץ מול העיניים.",
    brand: "ActiveCrowd",
    "nav.how": "איך זה עובד",
    "nav.benefits": "יתרונות",
    "nav.pricing": "מחירון",
    "nav.contact": "צור קשר",
    "hero.title":
      "ActiveCrowd: הופכים לייקים ללקוחות נאמנים — בזמן אמת, בחנות שלך.",
    "hero.subtitle":
      "מונה דיגיטלי חכם שמחבר את העסק שלך לחשבונות החברתיים שלך. צפה בלקוחות עוקבים, משתפים ומתרגשים כשהמספר קופץ מול העיניים.",
    "hero.ctaMain": "הזמן את המונה של ActiveCrowd",
    "hero.ctaSecondary": "גלה איך זה עובד →",
    "hero.demo": "הדמיה",
    "hero.alt": "מונה ActiveCrowd מוצב על דלפק בחנות עם לקוחות",
    "problem.title": "הלקוחות שלך אונליין. אבל החנות שלך נשארת אוף־ליין.",
    "problem.text":
      "השקעת לבנות עסק מעולה. אבל לגרום לאנשים באמת לעקוב אחרי העמוד שלך? זה לא פשוט. שלטים מנייר לא עובדים. קוד QR? כמעט אף אחד לא סורק.",
    "solution.title": "ActiveCrowd מחבר בין העולמות שלך.",
    "solution.text":
      "המכשיר שלנו יוצר גשר בין החנות הפיזית לנוכחות החברתית שלך. כל עוקב חדש מתעדכן בשידור חי — בדיוק מול הלקוחות שלך.",
    "solution.alt": "מכשיר המונה של ActiveCrowd מציג מספר עוקבים בזמן אמת",
    "how.title": "פשוט להפעיל, פשוט עובד.",
    "how.step1Title": "צעד 1",
    "how.step1":
      "חבר את המונה לחשבון הפייסבוק, אינסטגרם או טיקטוק שלך — זה לוקח שתי דקות.",
    "how.step2Title": "צעד 2",
    "how.step2": "מקם אותו על הדלפק, הבר או בקבלה — איפה שהלקוחות רואים.",
    "how.step3Title": "צעד 3",
    "how.step3": "צפה בלקוחות לוחצים 'עקוב' ורואים את המספר קופץ בשידור חי.",
    "how.demoCta": "צפה בסרטון הדגמה",
    "benefits.title": "למה עסקים קטנים ובינוניים בוחרים ActiveCrowd.",
    "benefits.b1": "מעלים את כמות העוקבים בלי להתחנן.",
    "benefits.b2": "הופכים מעורבות חברתית לחוויה מהנה וגלויה.",
    "benefits.b3": "יוצרים רגע של סיפוק מיידי ללקוחות.",
    "benefits.b4": "Plug & Play — בלי כאב ראש טכנולוגי.",
    "benefits.b5":
      "מותאם במיוחד לעסקים קטנים: בתי קפה, מספרות, מכוני כושר, מסעדות, חנויות ועוד.",
    "social.title": "עסקים מקומיים כבר מתאהבים בזה.",
    "social.quote":
      "“ActiveCrowd גרם לאינסטגרם שלנו לזנק. הלקוחות אוהבים ללחוץ 'עקוב' רק כדי לראות את המספר מתהפך. זה ממכר!”",
    "social.by": "— אבי, בעל מספרה",
    "pricing.title": "תמחור פשוט ושקוף.",
    "pricing.l1": "עלות חד פעמית במעמד הרכישה: 990 ₪",
    "pricing.l2": "מנוי חודשי: ‎XX ₪/חודש",
    "pricing.l3": "עדכונים ותמיכה כלולים",
    "pricing.cta": "הזמן את המונה שלך היום",
    "contact.title": "מתעניינים? דברו איתנו.",
    "contact.subtitle":
      "אנחנו חוזרים מהר. בלי ספאם, בלי טפסים ארוכים — רק מה שבאמת צריך.",
    "contact.nameLabel": "שם",
    "contact.emailLabel": "אימייל",
    "contact.bizLabel": "שם העסק",
    "contact.msgLabel": "הודעה (אופציונלי)",
    "contact.msgPh": "איך נוכל לעזור?",
    "contact.submit": "שלח →",
    "contact.privacyNote":
      "אנחנו אוספים רק את המידע הדרוש כדי לחזור אליכם. לא מעבר לזה.",
    "contact.thanks": "תודה! קיבלנו את הפרטים וחוזרים אליך בהקדם.",
    "final.title": "העוקב הבא שלך כבר יכול להיות כאן מולך.",
    "final.subtitle":
      "אל תפספס את ההזדמנות להפוך מבקרים לעוקבים אמיתיים עם ActiveCrowd.",
    "final.cta": "הזמן עכשיו",
    "footer.tagline": "מחברים אונליין ואוף־ליין, עוקב אחר עוקב.",
    "footer.privacy": "מדיניות פרטיות",
    "footer.terms": "תנאי שימוש",
    "footer.home": "דף הבית",

    "privacy.metaTitle": "מדיניות פרטיות – ActiveCrowd",
    "privacy.title": "מדיניות פרטיות – ActiveCrowd",
    "privacy.updatedLabel": "עדכון אחרון:",
    "privacy.updated": "אוגוסט 2025",
    "privacy.intro":
      'אנחנו ב־ActiveCrowd ("אנחנו", "שלנו") מכבדים את פרטיות המשתמשים ומתחייבים להגן על המידע האישי שלכם. מדיניות זו מסבירה אילו נתונים אנו אוספים, כיצד אנו משתמשים בהם, מהן זכויותיכם, וכיצד ניתן ליצור איתנו קשר.',
    "privacy.s1": "1. מידע שאנו אוספים",
    "privacy.p1":
      'פרטי קשר בסיסיים: שם, אימייל, שם העסק – נאספים כאשר אתם ממלאים טופס "צור קשר" או מבצעים רכישה.',
    "privacy.p2":
      "מידע טכני: כתובת IP, סוג דפדפן, מערכת הפעלה, עמודים שנצפו, זמן שהייה – לצרכי אבטחה, ניתוח ושיפור חוויית משתמש.",
    "privacy.p3":
      "מידע רשתות חברתיות (אופציונלי): במקרה של חיבור חשבון Facebook/Instagram/TikTok, אנו עשויים למשוך נתונים מצומצמים הדרושים להצגת מונה (כמו מספר עוקבים). איננו ניגשים לתוכן פרטי או מבצעים פעולות בחשבונותיכם.",
    "privacy.p4":
      "קבצי Cookie וטכנולוגיות דומות: לשמירת העדפות, אבטחה ומדידת שימוש. ניתן לנהל העדפות דרך הדפדפן.",
    "privacy.s2": "2. מטרות ושימושים",
    "privacy.p5": "מתן שירות ותמיכה, מענה לפניות וטיפול בהזמנות.",
    "privacy.p6":
      "שיפור האתר, האפיון והביצועים באמצעות מדדים מצרפיים ואנונימיים.",
    "privacy.p7":
      "עמידה בדרישות חוקיות, מניעת הונאה והגנה על זכויותינו ועל זכויות משתמשים אחרים.",
    "privacy.s3": "3. בסיס חוקי לעיבוד מידע",
    "privacy.p8": "ביצוע חוזה: לשם אספקת המוצר והשירות.",
    "privacy.p9": "הסכמה: למשל לקבלת תקשורת שיווקית (במידה ותתבקש).",
    "privacy.p10": "אינטרס לגיטימי: תחזוקת האתר, שיפורו ובקרת אבטחה.",
    "privacy.p11": "ציות לחוק: שמירה או גילוי מידע כנדרש על פי דין.",
    "privacy.s4": "4. שיתוף מידע עם צדדים שלישיים",
    "privacy.p12":
      "אנו עשויים להסתייע בספקי שירות (אחסון, ניתוח אנליטי, תמיכה) בכפוף להסכמים חוזיים המגבילים שימוש במידע למטרות מתן שירות בלבד. איננו מוכרים מידע אישי לצדדים שלישיים.",
    "privacy.s5": "5. העברות בינלאומיות",
    "privacy.p13":
      "יתכן שהמידע יעבור ויישמר בשרתים מחוץ לישראל. במקרה כזה, אנו נוודא הגנות מתאימות (למשל, סעיפים חוזיים סטנדרטיים) בהתאם לדין הרלוונטי.",
    "privacy.s6": "6. אבטחת מידע",
    "privacy.p14":
      "אנו מיישמים אמצעי הגנה סבירים, לרבות הצפנה בתעבורה (SSL/TLS), בקרות גישה, גיבויים ומדיניות הרשאות. יחד עם זאת, אין מערכת מאובטחת לחלוטין.",
    "privacy.s7": "7. שמירת מידע",
    "privacy.p15":
      "נשמור מידע אישי רק כל עוד נחוץ למטרות שלשמן נאסף, או כנדרש לפי דין. ברוב המקרים, מידע הקשר נשמר עד שנה ממועד התקשורת האחרונה.",
    "privacy.s8": "8. זכויותיכם",
    "privacy.p16": "זכות לעיין, לעדכן או למחוק מידע אישי;",
    "privacy.p17": "זכות להתנגד או להגביל עיבוד;",
    "privacy.p18": "זכות לניידות מידע (ככל שהדבר ישים);",
    "privacy.p19": "זכות למשוך הסכמה לעיבוד עתידי.",
    "privacy.p20":
      "כדי לממש זכויות – פנו אלינו ל־support@activecrowd.com. נטפל בבקשה תוך זמן סביר (עד 30 יום, בכפוף לדין).",
    "privacy.s9": "9. קטינים",
    "privacy.p21":
      "השירות אינו מיועד לילדים מתחת לגיל 13. אם נודע לנו שנאסף מידע מילד ללא הסכמת הורים, נפעל למחיקה מיידית.",
    "privacy.s10": "10. שינויים במדיניות",
    "privacy.p22":
      "נעדכן מדיניות זו מעת לעת. תאריך העדכון מופיע בראש העמוד. שינויים מהותיים ייעברו בהודעה מתאימה.",
    "privacy.s11": "11. יצירת קשר",
    "privacy.p23":
      "לשאלות, הערות או בקשות בנושא פרטיות – support@activecrowd.com.",

    "terms.metaTitle": "תנאי שימוש – ActiveCrowd",
    "terms.title": "תנאי שימוש – ActiveCrowd",
    "terms.effectiveLabel": "מועד תחולה:",
    "terms.effective": "אוגוסט 2025",
    "terms.intro":
      'ברוכים הבאים ל־ActiveCrowd ("אנחנו", "השירות"). בשימוש באתר, ברכישת המוצר או בהפעלת השירות, אתם מסכימים לתנאים אלו. אם אינכם מסכימים, אנא אל תשתמשו בשירות.',
    "terms.s1": "1. הגדרות",
    "terms.p1":
      '"השירות": אתר ActiveCrowd, המוצר (מונה תצוגה) וכל התכונות הנלוות.',
    "terms.p2": '"משתמש": כל גורם הניגש/משתמש באתר או בשירות.',
    "terms.p3": '"לקוח": משתמש שרכש מוצר/מנוי.',
    "terms.s2": "2. שימוש בשירות",
    "terms.p4":
      "השירות מיועד לעסקים קטנים ובינוניים, להצגת מונה עוקבים/לייקים בזמן אמת.",
    "terms.p5":
      "חל איסור להשתמש בשירות לצורך הפרת חוק, פגיעה בזולת, חדירה לפרטיות או פגיעה בקניין רוחני.",
    "terms.p6": "באחריות המשתמש להבטיח שסביבת ההתקנה בטוחה ומתאימה.",
    "terms.s3": "3. רישוי וקניין רוחני",
    "terms.p7":
      "כל הזכויות בתכנים, עיצובים, סימנים מסחריים ותוכנה – שמורות ל־ActiveCrowd.",
    "terms.p8":
      "אין להעתיק/לשכפל/לשנות/להפיץ כל חלק מהשירות ללא אישור מראש ובכתב.",
    "terms.s4": "4. רכישה, תשלום ומנויים",
    "terms.p9": "מחירים ועמלות מפורטים בעמוד המחירון ויכולים להשתנות מעת לעת.",
    "terms.p10":
      "התשלום יבוצע לפי התנאים בתהליך ההזמנה. מנויים מתחדשים אוטומטית, אלא אם צוין אחרת או בוטלו מבעוד מועד.",
    "terms.p11": 'מיסים/מע"מ יחולו בהתאם לדין החל.',
    "terms.s5": "5. משלוחים, התקנה והחזרות",
    "terms.p12":
      "זמני אספקה משוערים יימסרו בעת ההזמנה. יתכנו עיכובים שאינם בשליטתנו.",
    "terms.p13":
      "אחריות התקנה בסיסית על המשתמש; נדרשות נקודת חשמל ותקשורת יציבות (ככל שנדרש).",
    "terms.p14":
      "מדיניות החזרות/ביטולים (אם קיימת) תפורט בעמוד המחירון או בהזמנה. בהיעדר ציון – אין החזר לאחר פתיחת מוצר ושימוש בו, למעט כנדרש בדין.",
    "terms.s6": "6. תמיכה ועדכונים",
    "terms.p15":
      "נעניק עדכוני תוכנה/קושחה (אם נדרשים) ותמיכה בסיסית במסגרת המנוי.",
    "terms.p16":
      "יתכנו הפסקות שירות לצורך תחזוקה. נשתדל לצמצמן אך איננו מתחייבים לזמינות רציפה.",
    "terms.s7": "7. הגבלות אחריות",
    "terms.p17":
      'השירות והמוצר מסופקים "As-Is". איננו מתחייבים להתאמה למטרה מסוימת או לזמינות ללא תקלות.',
    "terms.p18":
      "לא נהיה אחראים לכל נזק עקיף/משני/תוצאתי (כגון אובדן רווחים, מוניטין או נתונים).",
    "terms.p19":
      "בכל מקרה, אחריותנו המצטברת כלפי משתמש לא תעלה על הסכום ששולם בפועל ב־12 החודשים שקדמו לאירוע.",
    "terms.s8": "8. פרטיות והגנת מידע",
    "terms.p20":
      "השימוש בשירות כפוף למדיניות הפרטיות שלנו. אנא קראו אותה בעיון.",
    "terms.s9": "9. סיום והשבתה",
    "terms.p21":
      "נוכל להשעות או לסיים גישה לשירות במקרה של הפרת תנאים אלו, שימוש לרעה או דרישת רשות מוסמכת.",
    "terms.p22":
      "המשתמש רשאי להפסיק שימוש בכל עת; תוצאות הביטול כפופות למדיניות החזרות (אם קיימת).",
    "terms.s10": "10. שינויים בשירות ובתנאים",
    "terms.p23":
      "אנו עשויים לעדכן את השירות ואת תנאי השימוש מעת לעת. נפרסם את התאריך העדכני בראש העמוד. שימוש מתמשך לאחר שינוי מהווה הסכמה לתנאים המעודכנים.",
    "terms.s11": "11. דין ושיפוט",
    "terms.p24":
      "על תנאים אלו יחולו דיני מדינת ישראל, וסמכות השיפוט הבלעדית תהיה לבתי המשפט המוסמכים במחוז תל אביב–יפו.",
    "terms.s12": "12. יצירת קשר",
    "terms.p25": "לשאלות בנוגע לתנאים אלו: support@activecrowd.com.",
  },
  en: {
    "meta.title":
      "ActiveCrowd — The live counter that bridges online and offline",
    "meta.description":
      "ActiveCrowd: a real-time digital counter that connects your business to social networks and grows engagement and followers right in your store.",
    "meta.ogTitle": "ActiveCrowd — Turning likes into loyal customers",
    "meta.ogDesc":
      "A real-time counter that connects your business to your social accounts. Customers follow and watch the number flip in front of their eyes.",
    brand: "ActiveCrowd",
    "nav.how": "How it works",
    "nav.benefits": "Benefits",
    "nav.pricing": "Pricing",
    "nav.contact": "Contact",
    "hero.title":
      "ActiveCrowd: Turning likes into loyal customers — live, in your store.",
    "hero.subtitle":
      "A smart digital counter that connects your business to your social accounts. Watch customers follow, share, and smile as the number flips in real time.",
    "hero.ctaMain": "Order your ActiveCrowd counter",
    "hero.ctaSecondary": "See how it works →",
    "hero.demo": "Demo",
    "hero.alt": "ActiveCrowd counter on a shop counter with customers",
    "problem.title": "Your customers are online. But your shop feels offline.",
    "problem.text":
      "You’ve built a great business. But getting people to actually follow your page isn’t easy. Paper signs don’t work. QR codes? Almost no one scans them.",
    "solution.title": "ActiveCrowd connects your worlds.",
    "solution.text":
      "Our device bridges your physical store and your social presence. Every new follow updates live — right in front of your customers.",
    "solution.alt": "ActiveCrowd counter showing follower count in real time",
    "how.title": "So easy, it just works.",
    "how.step1Title": "Step 1",
    "how.step1":
      "Connect the counter to your Facebook, Instagram, or TikTok — it takes two minutes.",
    "how.step2Title": "Step 2",
    "how.step2":
      "Place it on your counter, bar, or reception — where customers can see it.",
    "how.step3Title": "Step 3",
    "how.step3":
      "Watch customers hit “Follow” and see the number flip in real time.",
    "how.demoCta": "Watch demo video",
    "benefits.title": "Why SMBs choose ActiveCrowd.",
    "benefits.b1": "Increase your followers without begging.",
    "benefits.b2": "Make social engagement visible and fun.",
    "benefits.b3": "Delight customers with instant gratification.",
    "benefits.b4": "Plug & Play — no tech headaches.",
    "benefits.b5":
      "Built for SMBs: cafés, salons, gyms, restaurants, and shops.",
    "social.title": "Loved by local businesses.",
    "social.quote":
      "“ActiveCrowd made our Instagram take off. Customers follow just to watch the number flip. It’s addictive!”",
    "social.by": "— Avi, Salon Owner",
    "pricing.title": "Simple, transparent pricing.",
    "pricing.l1": "One-Time cost of purchasing the ActiveCrowd device: 990 ₪",
    "pricing.l2": "Monthly subscription: XX ₪/month",
    "pricing.l3": "Includes updates and support",
    "pricing.cta": "Order your counter today",
    "contact.title": "Interested? Get in touch.",
    "contact.subtitle":
      "We get back quickly. No spam, no long forms — only the essentials.",
    "contact.nameLabel": "Name",
    "contact.emailLabel": "Email",
    "contact.bizLabel": "Business name",
    "contact.msgLabel": "Message (optional)",
    "contact.msgPh": "How can we help?",
    "contact.submit": "Send →",
    "contact.privacyNote":
      "We only collect what’s needed to contact you. That’s it.",
    "contact.thanks":
      "Thanks! We got your details and will be in touch shortly.",
    "final.title": "Your next follower could be right in front of you.",
    "final.subtitle":
      "Don’t miss the chance to turn foot traffic into true fans with ActiveCrowd.",
    "final.cta": "Order now",
    "footer.tagline": "Connecting online and offline, one follower at a time.",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Use",
    "footer.home": "Home",

    "privacy.metaTitle": "Privacy Policy – ActiveCrowd",
    "privacy.title": "Privacy Policy – ActiveCrowd",
    "privacy.updatedLabel": "Last updated:",
    "privacy.updated": "August 2025",
    "privacy.intro":
      "At ActiveCrowd (“we”, “us”), we respect your privacy and are committed to protecting your personal data. This policy explains what data we collect, how we use it, your rights, and how to contact us.",
    "privacy.s1": "1. Data We Collect",
    "privacy.p1":
      "Basic contact details: name, email, business name — collected when you submit the contact form or make a purchase.",
    "privacy.p2":
      "Technical data: IP address, browser type, OS, pages viewed, time on site — for security, analytics, and UX improvements.",
    "privacy.p3":
      "Social media data (optional): when linking Facebook/Instagram/TikTok, we may retrieve minimal data required to display the counter (e.g., follower count). We do not access private content or act on your accounts.",
    "privacy.p4":
      "Cookies and similar technologies: to store preferences, secure sessions, and measure usage. You can control cookies via your browser.",
    "privacy.s2": "2. Purposes and Uses",
    "privacy.p5":
      "Provide the service and support, respond to inquiries, and process orders.",
    "privacy.p6":
      "Improve the site, features, and performance using aggregated, anonymized metrics.",
    "privacy.p7":
      "Comply with legal obligations, prevent fraud, and protect our rights and other users.",
    "privacy.s3": "3. Legal Bases",
    "privacy.p8": "Contract performance: to deliver the product and service.",
    "privacy.p9": "Consent: e.g., for marketing communications (if requested).",
    "privacy.p10":
      "Legitimate interest: site maintenance, improvements, and security.",
    "privacy.p11":
      "Legal obligation: retain or disclose data as required by law.",
    "privacy.s4": "4. Sharing with Third Parties",
    "privacy.p12":
      "We may use service providers (hosting, analytics, support) under contracts that limit use of data solely to providing the service. We do not sell personal data.",
    "privacy.s5": "5. International Transfers",
    "privacy.p13":
      "Data may be transferred to and stored on servers outside your country. Where applicable, we implement appropriate safeguards (e.g., standard contractual clauses).",
    "privacy.s6": "6. Data Security",
    "privacy.p14":
      "We implement reasonable safeguards including transport encryption (SSL/TLS), access controls, backups, and permission policies. However, no system is 100% secure.",
    "privacy.s7": "7. Data Retention",
    "privacy.p15":
      "We retain personal data only as long as necessary for the purposes collected or as required by law. Typically, contact data is kept up to one year from the last interaction.",
    "privacy.s8": "8. Your Rights",
    "privacy.p16": "Right to access, update, or delete personal data;",
    "privacy.p17": "Right to object to or restrict processing;",
    "privacy.p18": "Right to data portability (where applicable);",
    "privacy.p19": "Right to withdraw consent for future processing.",
    "privacy.p20":
      "To exercise rights, contact support@activecrowd.com. We’ll respond within a reasonable time (up to 30 days, subject to law).",
    "privacy.s9": "9. Children",
    "privacy.p21":
      "The service is not intended for children under 13. If we learn we collected data from a child without parental consent, we will delete it promptly.",
    "privacy.s10": "10. Changes to this Policy",
    "privacy.p22":
      "We may update this policy periodically. The update date appears at the top. Material changes will be communicated appropriately.",
    "privacy.s11": "11. Contact",
    "privacy.p23":
      "For privacy questions or requests — support@activecrowd.com.",

    "terms.metaTitle": "Terms of Use – ActiveCrowd",
    "terms.title": "Terms of Use – ActiveCrowd",
    "terms.effectiveLabel": "Effective date:",
    "terms.effective": "August 2025",
    "terms.intro":
      "Welcome to ActiveCrowd (“we”, “the service”). By using the site, purchasing the product, or activating the service, you agree to these terms. If you do not agree, please do not use the service.",
    "terms.s1": "1. Definitions",
    "terms.p1":
      "“Service”: the ActiveCrowd website, the device (display counter), and all related features.",
    "terms.p2": "“User”: any party accessing/using the site or the service.",
    "terms.p3": "“Customer”: a user who purchased a product/subscription.",
    "terms.s2": "2. Use of Service",
    "terms.p4":
      "The service is intended for SMBs to display a real-time follower/like counter.",
    "terms.p5":
      "You must not use the service to violate laws, harm others, invade privacy, or infringe IP.",
    "terms.p6":
      "Users are responsible for ensuring the installation environment is safe and suitable.",
    "terms.s3": "3. License & IP",
    "terms.p7":
      "All rights in content, designs, trademarks, and software are owned by ActiveCrowd.",
    "terms.p8":
      "You may not copy, modify, or distribute any part of the service without prior written consent.",
    "terms.s4": "4. Purchases, Payments & Subscriptions",
    "terms.p9":
      "Prices and fees are listed on the pricing page and may change from time to time.",
    "terms.p10":
      "Payments are made per the order terms. Subscriptions renew automatically unless otherwise stated or canceled in advance.",
    "terms.p11": "Taxes/VAT apply as required by law.",
    "terms.s5": "5. Shipping, Installation & Returns",
    "terms.p12":
      "Estimated delivery times are provided at checkout; delays beyond our control may occur.",
    "terms.p13":
      "Basic installation is the user’s responsibility; stable power and connectivity may be required.",
    "terms.p14":
      "Return/cancellation policy (if any) will be specified on the pricing page or order. Absent such terms, no returns after opening and using the product, except as required by law.",
    "terms.s6": "6. Support & Updates",
    "terms.p15":
      "We provide firmware/software updates (if needed) and basic support as part of the subscription.",
    "terms.p16":
      "Service interruptions for maintenance may occur. We strive to minimize downtime but do not guarantee uninterrupted availability.",
    "terms.s7": "7. Disclaimers & Liability",
    "terms.p17":
      "The service and product are provided “AS IS”. We do not guarantee fitness for a particular purpose or error-free availability.",
    "terms.p18":
      "We are not liable for indirect, incidental, or consequential damages (e.g., lost profits, goodwill, or data).",
    "terms.p19":
      "In any case, our total liability to a user will not exceed the amount actually paid in the 12 months preceding the event.",
    "terms.s8": "8. Privacy",
    "terms.p20":
      "Use of the service is subject to our Privacy Policy. Please read it carefully.",
    "terms.s9": "9. Termination & Suspension",
    "terms.p21":
      "We may suspend or terminate access in cases of breach, misuse, or lawful requests.",
    "terms.p22":
      "Users may stop using the service at any time; consequences depend on the return policy (if any).",
    "terms.s10": "10. Changes to Service & Terms",
    "terms.p23":
      "We may update the service and these terms from time to time. The current effective date appears at the top. Continued use constitutes acceptance.",
    "terms.s11": "11. Governing Law & Jurisdiction",
    "terms.p24":
      "These terms are governed by the laws of the State of Israel. Exclusive jurisdiction lies with the competent courts in Tel Aviv–Yafo.",
    "terms.s12": "12. Contact",
    "terms.p25":
      "For questions regarding these terms: support@activecrowd.com.",
  },
};

function setDirAndLang(lang) {
  document.dir = lang === "he" ? "rtl" : "ltr";
  document.documentElement.lang = lang;
}

function applyI18n(lang) {
  // Replace text nodes
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const val = t[lang][key];
    if (typeof val === "string") el.textContent = val;
  });
  // Replace attributes (e.g., alt, placeholder, meta content)
  document.querySelectorAll("[data-i18n-attr]").forEach((el) => {
    const pairs = el.getAttribute("data-i18n-attr").split(",");
    pairs.forEach((p) => {
      const [attr, key] = p.split(":").map((s) => s.trim());
      const val = t[lang][key];
      if (val) el.setAttribute(attr, val);
    });
  });
  // Update language toggle
  const toggle = document.getElementById("langToggle");
  if (toggle) toggle.textContent = lang === "he" ? "EN" : "עברית";
  setDirAndLang(lang);
  localStorage.setItem("ac_lang", lang);
}

// Smooth scroll anchors
document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener("click", (e) => {
    const id = a.getAttribute("href").slice(1);
    if (!id) return;
    const el = document.getElementById(id);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

// Demo counter animation (if exists)
(function animateCounter() {
  const el = document.getElementById("demoCounter");
  if (!el) return;
  const start = 1234;
  const end = 1350;
  const duration = 1600;
  const startTime = performance.now();
  const fmt = (n) => n.toLocaleString(document.documentElement.lang || "he-IL");
  function tick(now) {
    const p = Math.min(1, (now - startTime) / duration);
    const val = Math.round(start + (end - start) * p);
    el.textContent = fmt(val);
    if (p < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
})();

// Contact form handler (no network calls)
(function handleContact() {
  const form = document.getElementById("contactForm");
  if (!form) return;
  const thank = document.getElementById("thankYou");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = form.elements["name"].value.trim();
    const email = form.elements["email"].value.trim();
    const business = form.elements["business"].value.trim();
    if (!name || !email || !business) {
      alert(
        document.dir === "rtl"
          ? "אנא מלאו שם, אימייל ושם עסק."
          : "Please enter name, email, and business name."
      );
      return;
    }
    if (thank) {
      thank.hidden = false;
      thank.setAttribute("tabindex", "-1");
      thank.focus?.();
    }
    form.reset();
  });
})();

// Language toggle
document.getElementById("langToggle")?.addEventListener("click", () => {
  currentLang = currentLang === "he" ? "en" : "he";
  applyI18n(currentLang);
});

// Initial i18n setup
applyI18n(currentLang);
setDirAndLang(currentLang);
