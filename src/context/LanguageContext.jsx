import { useEffect, useState } from 'react'
import { LanguageContext } from './languageContext'

const translations = {
  ar: {
    About: 'نبذة',
    Skills: 'المهارات',
    Projects: 'المشاريع',
    Designs: 'التصميمات',
    Certificates: 'الشهادات',
    Contact: 'تواصل',
    'Download CV': 'تحميل السيرة الذاتية',
    'Available for opportunities': 'متاح لفرص العمل',
    "Hi, I'm": 'مرحبًا، أنا',
    'I BUILD, DESIGN & ADVERTISE': 'أبني وأصمّم وأروّج',
    'SO YOUR': 'خلّي',
    BRAND: 'علامتك التجارية',
    'GETS SEEN.': 'تبان للكل.',
    'About me': 'نبذة عني',
    "I'm Mohamed Abdellah, a frontend developer, social media designer and media buyer. I build fast, clean websites, design eye-catching content, and run Meta ads that reach the right audience.":
      'أنا محمد عبد الله، مطور واجهات أمامية ومصمم سوشيال ميديا ومتخصص في شراء الإعلانات. أبني مواقع سريعة ومنظمة، وأصمم محتوى جذابًا، وأدير إعلانات ميتا لتصل إلى الجمهور المناسب.',
    'View My Work': 'شاهد أعمالي',
    'Contact Me': 'تواصل معي',
    Scroll: 'تصفّح',
    'Frontend Developer': 'مطور واجهات أمامية',
    Frontend: 'الواجهة الأمامية',
    'Creative Designer': 'مصمم إبداعي',
    'Social Media Design': 'تصميم سوشيال ميديا',
    'Media Buying': 'شراء الإعلانات',
    'Media Buyer': 'متخصص شراء إعلانات',
    'About Me': 'نبذة عني',
    'Who I am': 'من أنا',
    'Years Learning': 'سنوات من التعلم',
    'Projects Shipped': 'مشاريع مكتملة',
    'Designs Created': 'تصميمات منفذة',
    'Student at the Faculty of Science, Al-Azhar University, with a strong passion for frontend development and visual design. I enjoy turning ideas into real, working projects and I\'m always looking for opportunities to learn and grow.':
      'طالب بكلية العلوم في جامعة الأزهر، شغوف بتطوير الواجهات الأمامية والتصميم البصري. أستمتع بتحويل الأفكار إلى مشاريع حقيقية، وأسعى دائمًا للتعلم والتطور.',
    'Frontend Developer & Designer': 'مطور واجهات أمامية ومصمم',
    "I've built a solid foundation in HTML, CSS, and JavaScript, and I'm now focused on React and Tailwind CSS to create clean, modern, and interactive web experiences — from small UI components to complete applications. Alongside coding, I design social media content and brand visuals.":
      'أسست قاعدة قوية في HTML وCSS وJavaScript، وأركز حاليًا على React وTailwind CSS لإنشاء تجارب ويب عصرية وتفاعلية، من مكونات الواجهة إلى التطبيقات الكاملة. وإلى جانب البرمجة، أصمم محتوى السوشيال ميديا والهويات البصرية.',
    'My Skills': 'مهاراتي',
    'Technologies and tools I use to bring ideas to life': 'التقنيات والأدوات التي أستخدمها لتحويل الأفكار إلى واقع',
    'Tools & Workflow': 'الأدوات وسير العمل',
    'My Projects': 'مشاريعي',
    "A selection of things I've built while learning frontend development": 'مجموعة من المشاريع التي أنشأتها خلال تعلم تطوير الواجهات الأمامية',
    'A movie and TV discovery app built with React and the TMDB API, featuring live search, trending titles, and a favorites system with localStorage persistence.':
      'تطبيق لاكتشاف الأفلام والمسلسلات باستخدام React وTMDB API، يتضمن بحثًا مباشرًا وعناوين رائجة وقائمة مفضلة محفوظة.',
    'An Arabic (RTL) e-commerce storefront with product search, category filtering, and a shopping cart with live item count.':
      'متجر إلكتروني عربي يدعم البحث عن المنتجات والتصفية حسب الفئة وسلة مشتريات تفاعلية.',
    'A clean admin dashboard UI displaying user, post, and product stats alongside a detailed product table.':
      'لوحة تحكم إدارية تعرض إحصائيات المستخدمين والمنشورات والمنتجات مع جدول تفصيلي.',
    'A product management system supporting full create, read, update, and delete operations with search by title or category.':
      'نظام لإدارة المنتجات يدعم الإضافة والعرض والتعديل والحذف، مع البحث بالاسم أو الفئة.',
    'A stylish landing page for a coffee shop, focused on clean layout and an inviting hero section.':
      'صفحة هبوط أنيقة لمقهى بتصميم مرتب وواجهة ترحيبية جذابة.',
    'An Arabic (RTL) landing page for a professional software company, featuring a modern dark design with sections for services, portfolio, team, and contact.':
      'صفحة هبوط عربية لشركة برمجيات بتصميم داكن وعصري وأقسام للخدمات والأعمال والفريق والتواصل.',
    'Live Demo': 'معاينة مباشرة',
    'My Designs': 'تصميماتي',
    'A selection of my graphic design and social media work': 'مجموعة من أعمالي في التصميم الجرافيكي والسوشيال ميديا',
    View: 'عرض',
    Close: 'إغلاق',
    'My Certificates': 'شهاداتي',
    "Courses I've completed to strengthen my frontend fundamentals": 'الدورات التي أكملتها لتعزيز أساسياتي في تطوير الواجهات',
    'JavaScript Course': 'دورة JavaScript',
    'HTML and CSS Course': 'دورة HTML وCSS',
    'Nouvil Platform': 'منصة نوفيل',
    'July 2026': 'يوليو 2026',
    'Social Media Design 1': 'تصميم سوشيال ميديا ١',
    'Social Media Design 2': 'تصميم سوشيال ميديا ٢',
    'Burger Instagram Post': 'منشور برجر لإنستجرام',
    'Maraya Yogurt Ad 1': 'إعلان زبادي مراعي ١',
    'Maraya Yogurt Ad 2': 'إعلان زبادي مراعي ٢',
    'Restaurant Burger Ad': 'إعلان برجر لمطعم',
    'Pizza Instagram Post': 'منشور بيتزا لإنستجرام',
    'Hot Burger Post': 'منشور برجر حار',
    'Creative Design': 'تصميم إبداعي',
    'Get In Touch': 'تواصل معي',
    "Have an opportunity or a question? Feel free to reach out — I'd love to hear from you.":
      'لديك فرصة أو سؤال؟ يسعدني تواصلك معي.',
    Email: 'البريد الإلكتروني',
    'All rights reserved.': 'جميع الحقوق محفوظة.',
  },
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    const savedLanguage = window.localStorage.getItem('portfolio-language')
    return savedLanguage === 'ar' ? 'ar' : 'en'
  })

  useEffect(() => {
    document.documentElement.lang = language
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr'
    window.localStorage.setItem('portfolio-language', language)
  }, [language])

  const t = (text) => translations[language]?.[text] ?? text

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}
