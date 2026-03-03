// ─── TRANSLATIONS ───────────────────────────────────
const i18n = {
  ru: {
    logo_sub:'Адвокат · Баку', nav_practice:'Практика', nav_about:'О себе', nav_media:'Медиа', nav_contacts:'Контакты',
    hero_eyebrow:'Частная адвокатская и юридическая практика в Азербайджане и за рубежом',
    hero_h1:'Я готов защитить ваши<br><span style="color:var(--gold)">справедливые</span> права.',
    hero_sub:'Моя цель — защитить права каждого, кто выдвигает справедливое требование. Пусть путь к истине и справедливости будет успешным.',
    hero_cta:'Записаться на консультацию', hero_scroll:'Прокрутите вниз',
    practice_label:'Области права', practice_h2:'Направления<br>адвокатской практики',
    p1_title:'Гражданское право', p1_desc:'Споры между физическими и юридическими лицами, защита имущественных и неимущественных прав.',
    p2_title:'Уголовное право', p2_desc:'Защита обвиняемых и подозреваемых на всех стадиях уголовного процесса.',
    p3_title:'Семейное право', p3_desc:'Раздел имущества, вопросы опеки, алименты — с вниманием к интересам каждой стороны.',
    p4_title:'Трудовое право', p4_desc:'Трудовые споры, незаконное увольнение, защита прав работников и работодателей.',
    p5_title:'Жилищное право', p5_desc:'Споры о праве собственности, выселение, приватизация и иные жилищные конфликты.',
    p6_title:'Земельное право', p6_desc:'Оформление прав на земельные участки, земельные споры, сделки с недвижимостью.',
    p7_title:'Международное право', p7_desc:'Трансграничные споры, международные контракты, правовая помощь за рубежом.',
    p8_title:'Корпоративное право', p8_desc:'Корпоративные конфликты, сопровождение сделок, защита интересов акционеров.',
    p9_title:'Административное право', p9_desc:'Оспаривание решений государственных органов, административные правонарушения.',
    p10_title:'Регистрация юрлиц', p10_desc:'Регистрация компаний, изменения в уставных документах, ликвидация юридических лиц.',
    p11_title:'Составление договоров', p11_desc:'Разработка и правовая проверка договоров с учётом специфики сделки и рисков сторон.',
    p12_title:'Юридическая экспертиза', p12_desc:'Анализ договоров и документов — выявление правовых рисков до подписания или в ходе спора.',
    about_label:'Об адвокате',
    about_p1:'Адвокатская практика — это не только знание закона, но и способность видеть ситуацию глазами клиента. Я работаю с делами, в которых важна не только юридическая грамотность, но и точность в деталях.',
    about_p2:'Берусь за дела, в которых вижу справедливое требование — будь то гражданский спор, уголовное дело или корпоративный конфликт. Каждую ситуацию разбираю детально и говорю как есть.',
    about_p3:'Регулярно выступаю экспертом в прямых эфирах ведущих телеканалов и радиостанций Азербайджана. Это не самоцель, а возможность говорить о праве понятным языком — без терминологических барьеров.',
    about_p4:'На консультации я не даю обещаний. Я даю анализ.',
    media_label: 'В СМИ',
    press_h2: 'Экспертные комментарии<br>в ведущих изданиях',
    press_all: 'Все публикации ↓',
    press_tag_adm: 'Административное право',
    press_tag_civil: 'Гражданское право',
    press_tag_labour: 'Трудовое право',
    press_tag_family: 'Семейное право',
    media_section_h2: 'Публикации<br>и комментарии',
    media_section_sub: 'Эльмар Сулейманов регулярно выступает экспертом в ведущих азербайджанских изданиях — комментирует изменения в законодательстве и разъясняет права граждан.',
    faq_label: 'Вопрос — Ответ',
    faq_h2: 'Часто задаваемые<br>вопросы',
    faq_intro: 'Ответы основаны на действующем законодательстве Азербайджанской Республики. Каждая ситуация индивидуальна — для точного анализа обратитесь на консультацию.',
    read_more: 'Читать →',
    read_interview: 'Читать интервью →',
    media_section_label: 'В СМИ', media_video_btn: 'Смотреть видео на YouTube', media_video_sub: '21 видео с правовыми комментариями',
    mc1_excerpt: 'Обман покупателей — не просто плохая практика, а уголовно наказуемое деяние. Искусственно завышенные «старые» цены и скрытые сборы могут обернуться для рекламодателя реальным сроком.',
    mc1_title: 'Переборщил с рекламой? Сядешь на два года',
    mc2_excerpt: 'Ваш номер телефона — это персональные данные, и любая организация, использующая их без вашего согласия, нарушает закон. За это предусмотрен штраф и право на компенсацию.',
    mc2_title: 'Защита от SMS-бомбардировки: как наказать нарушителей',
    mc3_excerpt: 'Закон чётко определяет очерёдность наследников. Главное, о чём часто забывают: долги умершего тоже переходят к наследникам — но только в пределах полученного имущества.',
    mc3_title: 'Как распределяется наследство в Азербайджане?',
    mc4_excerpt: 'Работодатель обязан принять меры против курения в офисе — включая вейпы и кальяны. Если этого не сделано, штраф может достигнуть 2000 манатов. Для самого курильщика — 30 манатов.',
    mc4_title: 'Курильщиков и работодателей ждут крупные штрафы',
    mc5_excerpt: 'Развод — это не только эмоциональное решение. Раздел совместно нажитого имущества, вопросы опеки и алиментов требуют правовой подготовки ещё до подачи заявления.',
    mc5_title: 'Развод по-азербайджански: что важно знать',
    mc6_excerpt: 'Оспорить отцовство можно только в суде. Ключевое доказательство — ДНК-экспертиза. При успешном исходе запись об отцовстве аннулируется, и обязательство платить алименты прекращается.',
    mc6_title: 'ДНК, суд и алименты: нюансы оспаривания отцовства',
    media_label:'Медиаучастие', reviews_fb:'Все отзывы на Facebook',
    contacts_label:'Контакты', contacts_h2:'Записаться<br>на консультацию',
    addr_label:'Адрес', addr_val:'ул. Мирали Гашгай 24, AZ 1010<br>Баку, Азербайджан',
    hours_label:'График работы', hours_val:'Уточняйте по телефону',
    cta_p1:'Первичная консультация позволяет оценить ситуацию и определить возможные пути решения. Для записи достаточно одного звонка.',
    cta_p2:'Конфиденциальность переговоров гарантируется адвокатской тайной.',
    cta_btn:'Позвонить сейчас',
    footer_copy:'© 2025 Эльмар Сулейманов. Все права защищены.',
    footer_terms:'Пользовательское соглашение', footer_privacy:'Обработка персональных данных', footer_cookies:'Политика cookies',
    cookie_text:'Мы используем cookies для корректной работы сайта. Продолжая использование, вы соглашаетесь с нашей политикой конфиденциальности.',
    cookie_btn:'Принять'
  },
  en: {
    logo_sub:'Attorney · Baku', nav_practice:'Practice', nav_about:'About', nav_media:'Media', nav_contacts:'Contact',
    hero_eyebrow:'Private Legal Practice in Azerbaijan and Abroad',
    hero_h1:'I Stand Ready to Defend Your<br><span style="color:var(--gold)">Rightful</span> Rights.',
    hero_sub:'My goal is to protect the rights of everyone with a just claim. May the path to truth and justice be a successful one.',
    hero_cta:'Book a consultation', hero_scroll:'Scroll down',
    practice_label:'Areas of Law', practice_h2:'Practice<br>Areas',
    p1_title:'Civil Law', p1_desc:'Disputes between individuals and legal entities, protection of property and non-property rights.',
    p2_title:'Criminal Law', p2_desc:'Defence of suspects and accused at all stages of criminal proceedings.',
    p3_title:'Family Law', p3_desc:'Asset division, custody matters, alimony — with attention to every party\'s interests.',
    p4_title:'Labour Law', p4_desc:'Employment disputes, wrongful dismissal, protection of employee and employer rights.',
    p5_title:'Housing Law', p5_desc:'Ownership disputes, eviction, privatisation and other housing conflicts.',
    p6_title:'Land Law', p6_desc:'Registration of land rights, land disputes, real estate transactions.',
    p7_title:'International Law', p7_desc:'Cross-border disputes, international contracts, legal assistance abroad.',
    p8_title:'Corporate Law', p8_desc:'Corporate conflicts, deal support, protection of shareholder interests.',
    p9_title:'Administrative Law', p9_desc:'Challenging government decisions, administrative offences.',
    p10_title:'Business Registration', p10_desc:'Company registration, charter amendments, liquidation of legal entities.',
    p11_title:'Contract Drafting', p11_desc:'Development and legal review of contracts, accounting for transaction specifics and risks.',
    p12_title:'Legal Due Diligence', p12_desc:'Analysis of contracts and documents — identifying legal risks before signing or during a dispute.',
    about_label:'About',
    about_p1:'Legal practice is not only about knowledge of the law, but also the ability to see a situation through the client\'s eyes. I work on cases where legal competence and precision in detail both matter.',
    about_p2:'I specialise across a broad range of legal questions — from civil disputes to major transaction support. Completed matters include transactions totalling over €20,000,000.',
    about_p3:'I regularly appear as a legal expert in live broadcasts on Azerbaijan\'s leading TV channels and radio stations — to speak about law in plain language, without barriers.',
    about_p4:'In a consultation, I make no promises. I provide analysis.',
    media_label: 'In the Press',
    press_h2: 'Expert Commentary<br>in Leading Media',
    press_all: 'All publications ↓',
    press_tag_adm: 'Administrative law',
    press_tag_civil: 'Civil law',
    press_tag_labour: 'Labour law',
    press_tag_family: 'Family law',
    media_section_h2: 'Publications<br>& Commentary',
    media_section_sub: 'Elmar Suleymanov regularly appears as a legal expert in leading Azerbaijani media — commenting on legislative changes and explaining citizens\'s rights.',
    faq_label: 'Q & A',
    faq_h2: 'Frequently Asked<br>Questions',
    faq_intro: 'Answers are based on the current legislation of the Republic of Azerbaijan. Every situation is individual — book a consultation for precise analysis.',
    read_more: 'Read →',
    read_interview: 'Read interview →',
    media_section_label: 'In the Press', media_video_btn: 'Watch Videos on YouTube', media_video_sub: '21 legal commentary videos',
    mc1_excerpt: 'Deceiving consumers is not just bad practice — it is a criminal offence. Artificially inflated "original" prices and hidden fees can land an advertiser in prison.',
    mc1_title: 'Too much advertising? That could mean two years in jail',
    mc2_excerpt: 'Your phone number is personal data, and any organisation using it without your consent is breaking the law. Penalties apply and you are entitled to compensation.',
    mc2_title: 'How to stop spam messages and hold violators accountable',
    mc3_excerpt: 'The law defines the order of heirs precisely. The key detail many overlook: the deceased\'s debts also pass to heirs — but only up to the value of the inherited estate.',
    mc3_title: 'How is inheritance distributed in Azerbaijan?',
    mc4_excerpt: 'An employer must take action against smoking on premises — including vapes and hookahs. Failure to do so can result in a fine of up to 2,000 manats. The employee faces 30 manats.',
    mc4_title: 'Smokers and employers face heavy fines',
    mc5_excerpt: 'Divorce is more than an emotional decision. Division of jointly acquired property, custody, and alimony all require legal preparation before you file.',
    mc5_title: 'Azerbaijani-style divorce: what you need to know',
    mc6_excerpt: 'Paternity can only be contested in court. The key evidence is a DNA test. A successful outcome annuls the paternity record and terminates the obligation to pay alimony.',
    mc6_title: 'DNA, court and alimony: contesting paternity in Azerbaijan',
    media_label:'Media Appearances', reviews_fb:'All reviews on Facebook',
    contacts_label:'Contact', contacts_h2:'Book a<br>consultation',
    addr_label:'Address', addr_val:'27 Atatürk Avenue, AZ 1069<br>Baku, Azerbaijan',
    hours_label:'Working hours', hours_val:'Please inquire by phone',
    cta_p1:'An initial consultation helps assess the situation and identify possible solutions. One call is enough — I\'ll be in touch at a convenient time.',
    cta_p2:'Confidentiality is protected by attorney-client privilege.',
    cta_btn:'Call now',
    footer_copy:'© 2025 Elmar Suleymanov. All rights reserved.',
    footer_terms:'Terms of Use', footer_privacy:'Personal Data Policy', footer_cookies:'Cookie Policy',
    cookie_text:'We use cookies for site functionality. By continuing, you agree to our privacy policy.',
    cookie_btn:'Accept'
  },
  az: {
    logo_sub:'Vəkil · Bakı', nav_practice:'Təcrübə', nav_about:'Haqqımda', nav_media:'Media', nav_contacts:'Əlaqə',
    hero_eyebrow:'Azərbaycanda və Xaricdə Şəxsi Vəkillik və Hüquqi Təcrübə',
    hero_h1:'Ədalətli hüquqlarınızı müdafiə etməyə<br><span style="color:var(--gold)">hazıram</span>.',
    hero_sub:'Məqsədim ədalətli tələb irəli sürən hər kəsin hüquqlarını qorumaqдır. Qoy həqiqətə və ədalətə aparan yol uğurlu olsun.',
    hero_cta:'Konsultasiya üçün yazın', hero_scroll:'Aşağı sürüşdürün',
    practice_label:'Hüquq Sahələri', practice_h2:'Vəkillik<br>Təcrübəsi',
    p1_title:'Mülki hüquq', p1_desc:'Fiziki və hüquqi şəxslər arasında mübahisələr, əmlak hüquqlarının müdafiəsi.',
    p2_title:'Cinayət hüququ', p2_desc:'Cinayət prosesinin bütün mərhələlərində şübhəli və müttəhimlərin müdafiəsi.',
    p3_title:'Ailə hüququ', p3_desc:'Əmlakın bölüşdürülməsi, qəyyumluq, alimentlər — hər tərəfin maraqları nəzərə alınmaqla.',
    p4_title:'Əmək hüququ', p4_desc:'Əmək mübahisələri, qanunsuz işdən çıxarılma, işçi və işəgötürən hüquqlarının qorunması.',
    p5_title:'Mənzil hüququ', p5_desc:'Mülkiyyət hüququ mübahisələri, köçürülmə, özəlləşdirmə və digər mənzil konfliktləri.',
    p6_title:'Torpaq hüququ', p6_desc:'Torpaq hüquqlarının rəsmiləşdirilməsi, torpaq mübahisələri, daşınmaz əmlak əqdləri.',
    p7_title:'Beynəlxalq hüquq', p7_desc:'Transsərhəd mübahisələr, beynəlxalq müqavilələr, xaricdə hüquqi yardım.',
    p8_title:'Korporativ hüquq', p8_desc:'Korporativ konfliktlər, əqdlərə dəstək, səhmdarların maraqlarının qorunması.',
    p9_title:'İnzibati hüquq', p9_desc:'Dövlət orqanlarının qərarlarına etiraz, inzibati xətalar.',
    p10_title:'Hüquqi şəxslərin qeydiyyatı', p10_desc:'Şirkət qeydiyyatı, nizamnamə dəyişiklikləri, hüquqi şəxslərin ləğvi.',
    p11_title:'Müqavilə hazırlanması', p11_desc:'Əqdin xüsusiyyətləri və riskləri nəzərə alınaraq müqavilələrin hazırlanması və yoxlanması.',
    p12_title:'Hüquqi ekspertiza', p12_desc:'Müqavilə və sənədlərin təhlili — imzalanmadan əvvəl hüquqi risklərin müəyyən edilməsi.',
    about_label:'Haqqımda',
    about_p1:'Vəkillik təcrübəsi yalnız qanunları bilmək deyil, həm də vəziyyəti müvəkkilin gözü ilə görə bilmək bacarığıdır.',
    about_p2:'20 000 000 EUR-dan çox həcmli əqdlər daxil olmaqla geniş hüquqi məsələlər üzrə ixtisaslaşmışam.',
    about_p3:'Azərbaycanın aparıcı televiziya kanalları və radio stansiyalarının canlı yayımlarında mütəmadi olaraq ekspert kimi çıxış edirəm.',
    about_p4:'Konsultasiyada vəd vermirəm. Analiz edirəm.',
    media_label: 'KİV-də',
    press_h2: 'Aparıcı nəşrlərdə<br>ekspert şərhləri',
    press_all: 'Bütün nəşrlər ↓',
    press_tag_adm: 'İnzibati hüquq',
    press_tag_civil: 'Mülki hüquq',
    press_tag_labour: 'Əmək hüququ',
    press_tag_family: 'Ailə hüququ',
    media_section_h2: 'Nəşrlər<br>və şərhlər',
    media_section_sub: 'Elmar Süleymanov Azərbaycanın aparıcı nəşrlərində mütəmadi olaraq hüquq eksperti kimi çıxış edir — qanunvericilik dəyişikliklərini şərh edir və vətəndaşların hüquqlarını izah edir.',
    faq_label: 'Sual — Cavab',
    faq_h2: 'Tez-tez verilən<br>suallar',
    faq_intro: 'Cavablar Azərbaycan Respublikasının qüvvədə olan qanunvericiliyinə əsaslanır. Hər vəziyyət fərdidir — dəqiq analiz üçün konsultasiyaya müraciət edin.',
    read_more: 'Oxu →',
    read_interview: 'Müsahibəni oxu →',
    media_section_label: 'KİV-də', media_video_btn: 'YouTube-da video izlə', media_video_sub: '21 hüquqi şərh videosu',
    mc1_excerpt: 'Alıcıları aldatmaq yalnız pis praktika deyil, cinayət əməlidir. Süni şişirdilmiş "əvvəlki" qiymətlər və gizli ödənişlər reklam verənə real cəza gətirə bilər.',
    mc1_title: 'Reklamla həddi aşdınız? İki il həbs gözləyir',
    mc2_excerpt: 'Telefon nömrəniz şəxsi məlumatlardır, istənilən qurum onu icazəsiz istifadə edərsə, qanunu pozur. Cərimə və kompensasiya hüququ nəzərdə tutulub.',
    mc2_title: 'SMS hücumlarından qorunma: pozucuları necə cəzalandırmaq olar',
    mc3_excerpt: 'Qanun varislik ardıcıllığını dəqiq müəyyən edir. Çoxlarının unuduğu əsas məqam: mərhumun borcları da varisə keçir — lakin yalnız alınan əmlakın dəyəri həddində.',
    mc3_title: 'Azərbaycanda miras necə bölünür?',
    mc4_excerpt: 'İşəgötürən ofisdə siqaret çəkilməsinin qarşısını almalıdır — veyp və nərgizə daxil olmaqla. Tədbirlər görülmədikdə cərimə 2000 manat ola bilər. İşçiyə isə 30 manat.',
    mc4_title: 'Siqaretçilərə və işəgötürənlərə böyük cərimələr gözləyir',
    mc5_excerpt: 'Boşanma yalnız emosional qərar deyil. Birgə qazanılmış əmlakın bölüşdürülməsi, qəyyumluq və alimentlər ərizə verilməmişdən əvvəl hüquqi hazırlıq tələb edir.',
    mc5_title: 'Azərbaycan üslubunda boşanma: bilməli olduğunuz şeylər',
    mc6_excerpt: 'Atalıq yalnız məhkəmədə mübahisə edilə bilər. Əsas sübut DNT ekspertizasıdır. Müvəffəqiyyətli nəticədə atalıq qeydi ləğv edilir və aliment ödəmə öhdəliyi sona çatır.',
    mc6_title: 'DNT, məhkəmə və aliment: Azərbaycanda atalığın mübahisəsi',
    media_label:'Media çıxışları', reviews_fb:'Facebook-da bütün rəylər',
    contacts_label:'Əlaqə', contacts_h2:'Konsultasiya<br>üçün yazın',
    addr_label:'Ünvan', addr_val:'Mirəli Qaşqay küç. 24, AZ 1010<br>Bakı, Azərbaycan',
    hours_label:'İş saatları', hours_val:'Telefon ilə dəqiqləşdirin',
    cta_p1:'İlkin konsultasiya vəziyyəti qiymətləndirməyə və mümkün həll yollarını müəyyən etməyə imkan verir.',
    cta_p2:'Danışıqların məxfiliyi vəkillik sirri ilə təmin edilir.',
    cta_btn:'İndi zəng edin',
    footer_copy:'© 2025 Elmar Süleymanov. Bütün hüquqlar qorunur.',
    footer_terms:'İstifadəçi Razılaşması', footer_privacy:'Şəxsi Məlumatların Emalı', footer_cookies:'Cookie Siyasəti',
    cookie_text:'Saytın düzgün işləməsi üçün cookie-lərdən istifadə edirik. İstifadəni davam etdirərək məxfilik siyasətimizdə razılaşırsınız.',
    cookie_btn:'Qəbul et'
  }
};

const reviews = {
  ru: [
    { text: 'Грамотный специалист, подробно разъясняет ситуацию, наперед говорит какие исходы могут быть и как лучше решать тот или иной вопрос. Доверились полностью и не пожалели. Рекомендую 👍', name: 'Alla Alieva-Rafikova', stars: 5 },
    { text: 'Эльмар Мяллим. Вы профессионал своего дела. Огромная благодарность Вам за Ваш труд.', name: 'Tamila Heyderova', stars: 5 },
    { text: 'Специалист своего дела, подмечает даже самые мелкие детали в деле. Эльмар Бей — желаю Вам успехов в Вашей нелегкой работе, всех благ и процветания!', name: 'Виктория Юнина', stars: 5 },
    { text: 'Хорошо знает и выполняет свою работу', name: 'Богдан Тылинго', stars: 5 },
    { text: 'Огромное спасибо Эльмар м, вы всегда направляете людей в правильном направлении и даете дельные советы!', name: 'Лейла Агаева', stars: 5 },
    { text: 'Высококвалифицированный адвокат, грамотно и доступно проконсультировал по моему вопросу. Рекомендую!', name: 'Татьяна Гамидова', stars: 5 },
    { text: 'Mr. Suleymanov has been representing me remotely in resolving case in regards to citizenship. Very professional approach, acted proactively, good knowledge of Azeri and international law. I recommend.', name: 'Natali Yefimova', stars: 5 },
    { text: 'Грамотный юрист. Дал понятную консультацию по ситуации которую в России решать никто не взялся.', name: 'Alexander Kuntsman', stars: 5 },
    { text: 'Очень грамотный адвокат с большим опытом работы. Получил необходимые советы. Спасибо большое вам!!!', name: 'Азер Гасанов', stars: 5 },
    { text: 'Очень вежливый грамотный! Получила полноценный ответ на свой вопрос и рекомендации!', name: 'Tatyana Shnipenko', stars: 5 },
    { text: 'Высокопрофессиональный адвокат с большим опытом, относится с пониманием к людям. Очень оценил его советы и рекомендую другим.', name: 'Elkhan Nahmadov', stars: 5 },
    { text: 'Высокопорядочный человек и великолепный профессионал своего дела! Побольше бы таких людей, глядишь, реальность и начнёт потихоньку меняться к лучшему!', name: 'Искендер Кадымов', stars: 5 },
  ],
  en: [
    { text: 'A knowledgeable specialist who explains the situation in detail and tells you in advance what outcomes are possible. We trusted him completely and have no regrets. Highly recommend 👍', name: 'Alla Alieva-Rafikova', stars: 5 },
    { text: 'Elmar Mualim. You are a true professional. Enormous gratitude to you for your work.', name: 'Tamila Heyderova', stars: 5 },
    { text: 'A specialist in his field who notices even the smallest details. Elmar Bey — wishing you success in your challenging work, all the best and prosperity!', name: 'Victoria Yunina', stars: 5 },
    { text: 'Knows and performs his work well.', name: 'Bogdan Tylinko', stars: 5 },
    { text: 'Thank you so much, Elmar — you always point people in the right direction and give sound advice!', name: 'Leila Agaeva', stars: 5 },
    { text: 'A highly qualified attorney who consulted me clearly and accessibly on my matter. I recommend!', name: 'Tatiana Gamidova', stars: 5 },
    { text: 'Mr. Suleymanov has been representing me remotely in resolving a case in regards to citizenship. Very professional approach, acted proactively, good knowledge of Azeri and international law. I recommend.', name: 'Natali Yefimova', stars: 5 },
    { text: 'A competent lawyer. Gave me a clear consultation on a matter that nobody in Russia was willing to take on.', name: 'Alexander Kuntsman', stars: 5 },
    { text: 'A very competent attorney with extensive experience. Got the advice I needed. Thank you very much!', name: 'Azer Gasanov', stars: 5 },
    { text: 'Very polite and knowledgeable! Received a thorough answer to my question and practical recommendations!', name: 'Tatyana Shnipenko', stars: 5 },
    { text: 'A highly professional attorney with extensive experience, treats people with understanding. Greatly valued his advice and recommend to others.', name: 'Elkhan Nahmadov', stars: 5 },
    { text: 'A man of great integrity and an outstanding professional. If only there were more people like him — reality would quietly begin to change for the better!', name: 'Iskender Kadymov', stars: 5 },
  ],
  az: [
    { text: 'Bacarıqlı mütəxəssis, vəziyyəti ətraflı izah edir, hansı nəticələrin mümkün olduğunu əvvəlcədən bildirir. Ona tam etibar etdik və peşman olmadıq. Tövsiyə edirəm 👍', name: 'Alla Alieva-Rafikova', stars: 5 },
    { text: 'Elmar Müəllim. Siz öz işinizin peşəkarısınız. Əməyinizə görə böyük minnətdarlıq.', name: 'Tamila Heyderova', stars: 5 },
    { text: 'Öz sahəsinin mütəxəssisi, işdəki ən kiçik təfərrüatları belə fərq edir. Elmar Bəy — çətin işinizdə uğurlar, xeyir-bərəkət və firavanlıq arzulayıram!', name: 'Viktoria Yunina', stars: 5 },
    { text: 'İşini yaxşı bilir və yerinə yetirir.', name: 'Bohdan Tylynko', stars: 5 },
    { text: 'Çox böyük təşəkkür, Elmar müəllim — siz həmişə insanları doğru istiqamətə yönəldir və işə yarayan məsləhətlər verirsiniz!', name: 'Leyla Ağayeva', stars: 5 },
    { text: 'Yüksək ixtisaslı vəkil, məsələm üzrə savadlı və anlaşıqlı məsləhət verdi. Tövsiyə edirəm!', name: 'Tatyana Hamidova', stars: 5 },
    { text: 'Mr. Suleymanov vətəndaşlıq məsələsi ilə bağlı işimi uzaqdan həll etməkdə mənə nümayəndəlik etdi. Çox peşəkar yanaşma, proaktiv davrandı, Azərbaycan və beynəlxalq hüququ yaxşı bilir. Tövsiyə edirəm.', name: 'Natali Yefimova', stars: 5 },
    { text: 'Bacarıqlı hüquqşünas. Rusiyada heç kimin öhdəsinə götürmək istəmədiyi bir məsələ üzrə mənə aydın məsləhət verdi.', name: 'Alexander Kuntsman', stars: 5 },
    { text: 'Böyük təcrübəyə malik çox bacarıqlı vəkil. Lazımi məsləhətlər aldım. Çox sağ olun!!!', name: 'Azər Həsənov', stars: 5 },
    { text: 'Çox nəzakətli və savadlı! Sualıma ətraflı cavab və tövsiyələr aldım!', name: 'Tatyana Shnipenko', stars: 5 },
    { text: 'Böyük təcrübəyə malik yüksək peşəkar vəkil, insanlara anlayışla yanaşır. Məsləhətlərini çox qiymətləndirdim və başqalarına tövsiyə edirəm.', name: 'Elkhan Nahmadov', stars: 5 },
    { text: 'Şərəfli insan və öz sahəsinin əla peşəkarı! Belə insanlar çox olsa, gerçəklik yavaş-yavaş dəyişməyə başlayar!', name: 'İskəndər Kədimov', stars: 5 },
  ]
};

// ─── STATE ───────────────────────────────────────────
let currentLang = 'ru';
let reviewIndex = 0;
let reviewTimer = null;

// ─── LANGUAGE ────────────────────────────────────────
function detectLang() {
  const saved = localStorage.getItem('lang');
  if (saved && i18n[saved]) return saved;
  const bl = (navigator.language || 'ru').toLowerCase();
  if (bl.startsWith('az')) return 'az';
  if (bl.startsWith('en')) return 'en';
  return 'ru';
}

function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (i18n[lang][key] !== undefined) el.innerHTML = i18n[lang][key];
  });
  document.querySelectorAll('.lang-btn, .mobile-lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });
  reviewIndex = 0;
  renderReviews(lang);
  renderFAQ(lang);
}

// ─── REVIEWS ─────────────────────────────────────────
// Show 3 cards at a time, page through sets
const PAGE_SIZE = 3;

function renderReviews(lang) {
  const cardsEl = document.getElementById('reviews-cards');
  const dotsEl = document.getElementById('review-dots');
  cardsEl.innerHTML = '';
  dotsEl.innerHTML = '';
  const data = reviews[lang];
  const pages = Math.ceil(data.length / PAGE_SIZE);

  for (let p = 0; p < pages; p++) {
    const dot = document.createElement('div');
    dot.className = 'review-dot' + (p === 0 ? ' active' : '');
    dot.addEventListener('click', () => goToReview(p));
    dotsEl.appendChild(dot);
  }

  showPage(lang, 0);
  resetTimer();
}

function showPage(lang, page) {
  const cardsEl = document.getElementById('reviews-cards');
  cardsEl.innerHTML = '';
  const data = reviews[lang];
  const start = page * PAGE_SIZE;
  const slice = data.slice(start, start + PAGE_SIZE);
  slice.forEach((r) => {
    const card = document.createElement('div');
    card.className = 'review-card';
    card.innerHTML = `
      <div class="review-card-top">
        <div class="review-card-author">
          <div class="review-stars">${'★'.repeat(r.stars)}</div>
          <div class="review-name">${r.name}</div>
        </div>
        <svg class="review-fb-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
      </div>
      <div class="review-text">${r.text}</div>`;
    cardsEl.appendChild(card);
    // Trigger animation
    requestAnimationFrame(() => requestAnimationFrame(() => card.classList.add('visible-card')));
  });
}

function goToReview(idx) {
  const dots = document.querySelectorAll('.review-dot');
  dots[reviewIndex].classList.remove('active');
  reviewIndex = idx;
  dots[reviewIndex].classList.add('active');
  showPage(currentLang, reviewIndex);
  resetTimer();
}

function nextReview() {
  const pages = Math.ceil(reviews[currentLang].length / PAGE_SIZE);
  goToReview((reviewIndex + 1) % pages);
}

function resetTimer() {
  if (reviewTimer) clearInterval(reviewTimer);
  reviewTimer = setInterval(nextReview, 7000);
}

// ─── THEME (dark only) ───────────────────────────────
const html = document.documentElement;
html.setAttribute('data-theme', 'dark');

// ─── HEADER SCROLL ───────────────────────────────────
const header = document.getElementById('main-header');
window.addEventListener('scroll', () => header.classList.toggle('scrolled', window.scrollY > 40), { passive: true });

// ─── BURGER ──────────────────────────────────────────
const burger = document.getElementById('burger-btn');
const mobileNav = document.getElementById('mobile-nav');
burger.addEventListener('click', () => {
  const isOpen = mobileNav.classList.toggle('open');
  mobileNav.setAttribute('aria-hidden', !isOpen);
  document.body.style.overflow = isOpen ? 'hidden' : '';
});
document.querySelectorAll('.mobile-link').forEach(l => l.addEventListener('click', () => {
  mobileNav.classList.remove('open');
  mobileNav.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}));

// ─── REVEAL ──────────────────────────────────────────
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); revealObs.unobserve(e.target); } });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

// ─── MODALS ──────────────────────────────────────────
function openModal(id) { document.getElementById(id).classList.add('open'); document.body.style.overflow = 'hidden'; }
function closeModal(id) { document.getElementById(id).classList.remove('open'); document.body.style.overflow = ''; }
document.querySelectorAll('.modal-overlay').forEach(o => o.addEventListener('click', e => { if (e.target === o) closeModal(o.id); }));
document.addEventListener('keydown', e => { if (e.key === 'Escape') document.querySelectorAll('.modal-overlay.open').forEach(m => closeModal(m.id)); });

// ─── COOKIES ─────────────────────────────────────────
function acceptCookies() { localStorage.setItem('cookie_consent', 'true'); document.getElementById('cookies-banner').classList.add('hidden'); }
if (!localStorage.getItem('cookie_consent')) setTimeout(() => document.getElementById('cookies-banner').classList.remove('hidden'), 1200);

// ─── LANG BUTTONS ────────────────────────────────────
document.querySelectorAll('.lang-btn, .mobile-lang-btn').forEach(btn => btn.addEventListener('click', () => applyLang(btn.getAttribute('data-lang'))));


// ─── FAQ DATA ─────────────────────────────────────────
const faqData = {
  ru: [
    {
      q: 'Что считается ложной рекламой и можно ли взыскать компенсацию?',
      a: 'Да. Фальшивые скидки, выдуманные «старые» цены и скрытые платежи — прямое нарушение Закона о рекламе. Если из-за ложной рекламы вам причинён ущерб, рекламодатель по решению суда обязан его возместить. В тяжких случаях предусмотрено до двух лет лишения свободы (ст. 198 УК).',
      src: 'https://haqqin.az/newsarchive/368020', srcLabel: 'Haqqin.az'
    },
    {
      q: 'Могу ли я потребовать удалить мои данные из базы магазина или салона красоты?',
      a: 'Да. Телефонный номер — персональные данные, охраняемые законом. Вы вправе потребовать прекратить обработку и удалить данные. Отказ — нарушение ст. 375 КоАП, штраф от 300 до 500 манатов. За несанкционированное использование данных можно взыскать компенсацию морального и материального вреда.',
      src: 'https://haqqin.az/news/366488', srcLabel: 'Haqqin.az'
    },
    {
      q: 'Кто наследует имущество, если завещания нет?',
      a: 'Имущество делится по закону. В первую очередь — дети, супруг и родители (поровну). Вторая очередь — братья, сёстры, дедушки и бабушки. Если наследников нет вовсе, имущество переходит государству. Важно: долги переходят к наследникам лишь в пределах стоимости полученного имущества.',
      src: 'https://haqqin.az/news/364742', srcLabel: 'Haqqin.az'
    },
    {
      q: 'Чем грозит курение вейпа или кальяна в офисе?',
      a: 'Закон приравнивает вейпы и кальяны к табачным изделиям. Штраф для сотрудника — 30 манатов. Работодателю — до 400 манатов за отсутствие таблички «Курить запрещено», до 2000 манатов, если меры по профилактике не приняты вовсе.',
      src: 'https://haqqin.az/news/364030', srcLabel: 'Haqqin.az'
    },
    {
      q: 'Как делится совместно нажитое имущество при разводе?',
      a: 'Имущество, приобретённое в браке, по общему правилу делится пополам. Исключения: личные подарки, наследство, имущество, приобретённое до брака. Суд вправе отступить от равенства долей, если этого требуют интересы детей или иные существенные обстоятельства.',
      src: 'https://media.az/society/razvod-po-azerbajdzhanski-chto-vazhno-znat-prezhde-chem-postavit-tochku-v-brake', srcLabel: 'Media.az'
    },
    {
      q: 'Можно ли оспорить отцовство и как это влияет на алименты?',
      a: 'Оспаривание отцовства производится исключительно через суд. Ключевое доказательство — ДНК-экспертиза. При успешном оспаривании запись об отце аннулируется, обязанность платить алименты прекращается. Уже выплаченные суммы возврату не подлежат.',
      src: 'https://media.az/society/dnk-sud-i-alimenty-yuridicheskie-nyuansy-osparivaniya-otcovstva-v-azerbajdzhane', srcLabel: 'Media.az'
    },
  ],
  en: [
    {
      q: 'What counts as false advertising, and can I claim compensation?',
      a: 'Yes. Fake discounts, fabricated "original" prices and hidden charges are a direct violation of the Law on Advertising. If you suffered losses due to misleading advertising, the advertiser can be ordered by a court to compensate you. In serious cases, up to two years imprisonment applies (Article 198 of the Criminal Code).',
      src: 'https://haqqin.az/newsarchive/368020', srcLabel: 'Haqqin.az'
    },
    {
      q: 'Can I demand a company delete my personal data?',
      a: 'Yes. Your phone number is personal data protected by law. You have the right to demand that processing stops and your data is deleted. Refusal is a violation of Article 375 of the Code of Administrative Offences, carrying a fine of 300–500 manats. You can also claim compensation for unauthorised use of your data.',
      src: 'https://haqqin.az/news/366488', srcLabel: 'Haqqin.az'
    },
    {
      q: 'Who inherits property if there is no will?',
      a: 'Property is divided by law. First priority: children, spouse and parents (equally). Second priority: siblings and grandparents. If there are no heirs at all, property passes to the state. Note: debts pass to heirs only up to the value of the inherited property.',
      src: 'https://haqqin.az/news/364742', srcLabel: 'Haqqin.az'
    },
    {
      q: 'What are the penalties for vaping or smoking hookah in the office?',
      a: 'The law equates vapes and hookahs with tobacco products. Fine for the employee: 30 manats. For the employer: up to 400 manats for missing a "No Smoking" sign, up to 2,000 manats if no preventive measures were taken at all.',
      src: 'https://haqqin.az/news/364030', srcLabel: 'Haqqin.az'
    },
    {
      q: 'How is jointly acquired property divided in a divorce?',
      a: 'Property acquired during marriage is generally divided equally. Exceptions: personal gifts, inheritance, and property acquired before marriage. A court may deviate from equal division if the interests of children or other significant circumstances require it.',
      src: 'https://media.az/society/razvod-po-azerbajdzhanski-chto-vazhno-znat-prezhde-chem-postavit-tochku-v-brake', srcLabel: 'Media.az'
    },
    {
      q: 'Can paternity be contested and how does it affect alimony?',
      a: 'Contesting paternity is done exclusively through court. The key evidence is a DNA test. If successful, the paternity record is annulled and the obligation to pay alimony ceases. Amounts already paid are not subject to return.',
      src: 'https://media.az/society/dnk-sud-i-alimenty-yuridicheskie-nyuansy-osparivaniya-otcovstva-v-azerbajdzhane', srcLabel: 'Media.az'
    },
  ],
  az: [
    {
      q: 'Yanlış reklam nə sayılır və kompensasiya tələb etmək olarmı?',
      a: 'Bəli. Saxta endirimlər, uydurma "köhnə" qiymətlər və gizli ödənişlər Reklam Qanununun birbaşa pozuntusudur. Yanlış reklam nəticəsində zərər çəkmisinizsə, reklam verən məhkəmə qərarı ilə bunu ödəməyə məcbur edilə bilər. Ağır hallarda 2 ilə qədər azadlıqdan məhrum etmə nəzərdə tutulur.',
      src: 'https://haqqin.az/newsarchive/368020', srcLabel: 'Haqqin.az'
    },
    {
      q: 'Mağazadan məlumatlarımın silinməsini tələb edə bilərəmmi?',
      a: 'Bəli. Telefon nömrəniz qanunla qorunan şəxsi məlumatlardır. Emalın dayandırılmasını və məlumatların silinməsini tələb etmək hüququnuz var. İmtina İnzibati Xətalar Məcəlləsinin 375-ci maddəsinin pozuntusudur — 300–500 manat cərimə. İcazəsiz istifadəyə görə kompensasiya da tələb edilə bilər.',
      src: 'https://haqqin.az/news/366488', srcLabel: 'Haqqin.az'
    },
    {
      q: 'Vəsiyyət olmadıqda mülkü kim miras alır?',
      a: 'Əmlak qanun üzrə bölünür. Birinci növbə: uşaqlar, həyat yoldaşı və valideynlər (bərabər paylarla). İkinci növbə: qardaşlar, bacılar, baba-nənələr. Varis yoxdursa, əmlak dövlətə keçir. Vacib: borclar varisə yalnız alınan əmlakın dəyəri həddində keçir.',
      src: 'https://haqqin.az/news/364742', srcLabel: 'Haqqin.az'
    },
    {
      q: 'Ofisdə veyp və ya nərgizə çəkmək nə ilə nəticələnər?',
      a: 'Qanun veyp və nərgizəni tütün məmulatlarına bərabər tutur. İşçiyə cərimə: 30 manat. İşəgötürənə: "Siqaret çəkilməz" lövhəsi olmadığına görə 400 manatadək, ümumilikdə heç bir tədbirlər görülmədiyi halda 2000 manatadək.',
      src: 'https://haqqin.az/news/364030', srcLabel: 'Haqqin.az'
    },
    {
      q: 'Boşanmada birgə əmlak necə bölünür?',
      a: 'Nikahda əldə edilmiş əmlak ümumi qayda olaraq bərabər bölünür. İstisnalar: şəxsi hədiyyələr, miras, nikahdan əvvəl alınan əmlak. Uşaqların maraqları və ya digər mühüm hallar tələb edərsə, məhkəmə bərabər bölgüdən kənar ola bilər.',
      src: 'https://media.az/society/razvod-po-azerbajdzhanski-chto-vazhno-znat-prezhde-chem-postavit-tochku-v-brake', srcLabel: 'Media.az'
    },
    {
      q: 'Atalıq mübahisə edilə bilərmi və bu alimentə necə təsir edir?',
      a: 'Atalığın mübahisə edilməsi yalnız məhkəmə vasitəsilə həyata keçirilir. Əsas sübut DNT ekspertizasıdır. Uğurlu nəticədə atalıq qeydi ləğv edilir, aliment ödəmə öhdəliyi sona çatır. Artıq ödənilmiş məbləğlər geri qaytarılmır.',
      src: 'https://media.az/society/dnk-sud-i-alimenty-yuridicheskie-nyuansy-osparivaniya-otcovstva-v-azerbajdzhane', srcLabel: 'Media.az'
    },
  ]
};

function renderFAQ(lang) {
  const list = document.getElementById('faq-list');
  if (!list) return;
  list.innerHTML = '';
  (faqData[lang] || faqData.ru).forEach((item, i) => {
    const el = document.createElement('div');
    el.className = 'faq-item';
    el.innerHTML = `
      <button class="faq-question" onclick="toggleFaq(this)" aria-expanded="false">
        ${item.q}
        <span class="faq-icon">+</span>
      </button>
      <div class="faq-answer">
        ${item.a}
        <a href="${item.src}" target="_blank" rel="noopener" class="source-tag">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
          ${item.srcLabel}
        </a>
      </div>`;
    list.appendChild(el);
  });
}

function toggleFaq(btn) {
  const answer = btn.nextElementSibling;
  const isOpen = btn.classList.contains('open');
  // Close all
  document.querySelectorAll('.faq-question.open').forEach(b => {
    b.classList.remove('open');
    b.setAttribute('aria-expanded', 'false');
    b.nextElementSibling.classList.remove('open');
  });
  if (!isOpen) {
    btn.classList.add('open');
    btn.setAttribute('aria-expanded', 'true');
    answer.classList.add('open');
  }
}

// ─── PRACTICE SLIDER ─────────────────────────────────
(function() {
  const slider = document.getElementById('practice-slider');
  if (!slider) return;
  const dotsWrap = document.getElementById('practice-dots');
  const btnPrev = document.getElementById('practice-prev');
  const btnNext = document.getElementById('practice-next');

  const cards = slider.querySelectorAll('.practice-featured-card');
  const visibleCount = () => window.innerWidth <= 600 ? 1 : window.innerWidth <= 900 ? 2 : 3;
  const pageCount = () => Math.ceil(cards.length / visibleCount());
  let currentPage = 0;

  // Dots
  function buildDots() {
    dotsWrap.innerHTML = '';
    for (let i = 0; i < pageCount(); i++) {
      const d = document.createElement('div');
      d.className = 'practice-slider-dot' + (i === currentPage ? ' active' : '');
      d.onclick = () => goTo(i);
      dotsWrap.appendChild(d);
    }
  }

  function goTo(page) {
    currentPage = Math.max(0, Math.min(page, pageCount() - 1));
    const cardW = cards[0].offsetWidth + 1;
    slider.scrollTo({ left: currentPage * visibleCount() * cardW, behavior: 'smooth' });
    buildDots();
    btnPrev.disabled = currentPage === 0;
    btnNext.disabled = currentPage >= pageCount() - 1;
  }

  btnPrev.onclick = () => goTo(currentPage - 1);
  btnNext.onclick = () => goTo(currentPage + 1);

  // Drag to scroll
  let isDown = false, startX, scrollLeft;
  slider.addEventListener('mousedown', e => { isDown = true; slider.classList.add('grabbing'); startX = e.pageX - slider.offsetLeft; scrollLeft = slider.scrollLeft; });
  slider.addEventListener('mouseleave', () => { isDown = false; slider.classList.remove('grabbing'); });
  slider.addEventListener('mouseup', () => { isDown = false; slider.classList.remove('grabbing'); });
  slider.addEventListener('mousemove', e => { if (!isDown) return; e.preventDefault(); const x = e.pageX - slider.offsetLeft; slider.scrollLeft = scrollLeft - (x - startX); });

  // Sync dots on scroll
  slider.addEventListener('scroll', () => {
    const cardW = cards[0].offsetWidth + 1;
    currentPage = Math.round(slider.scrollLeft / (visibleCount() * cardW));
    buildDots();
    btnPrev.disabled = currentPage === 0;
    btnNext.disabled = currentPage >= pageCount() - 1;
  }, { passive: true });

  window.addEventListener('resize', () => { buildDots(); });
  buildDots();
  btnPrev.disabled = true;
})();


// ─── CONSULTATION MODAL ─────────────────────────────
function openConsultModal() {
  document.getElementById('modal-consult').classList.add('open');
  document.body.style.overflow = 'hidden';
  // Reset form state
  document.getElementById('consult-form-wrap').style.display = '';
  document.getElementById('consult-success').style.display = 'none';
  document.getElementById('consult-form').reset();
}
function closeConsultModal() {
  document.getElementById('modal-consult').classList.remove('open');
  document.body.style.overflow = '';
}
// Close on backdrop click
document.getElementById('modal-consult').addEventListener('click', function(e) {
  if (e.target === this) closeConsultModal();
});
// Close on Escape
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closeConsultModal();
});
// Form submit via Fetch (AJAX)
document.getElementById('consult-form').addEventListener('submit', async function(e) {
  e.preventDefault();
  const btn = document.getElementById('consult-submit-btn');
  const btnText = document.getElementById('consult-btn-text');
  btn.disabled = true;
  btnText.textContent = 'Отправляем...';
  try {
    const res = await fetch(this.action, {
      method: 'POST',
      body: new FormData(this),
      headers: { 'Accept': 'application/json' }
    });
    if (res.ok) {
      document.getElementById('consult-form-wrap').style.display = 'none';
      document.getElementById('consult-success').style.display = 'block';
    } else {
      btnText.textContent = 'Ошибка. Попробуйте ещё раз.';
      btn.disabled = false;
    }
  } catch(err) {
    btnText.textContent = 'Ошибка соединения.';
    btn.disabled = false;
  }
});

// ─── FLOATING SOCIAL WIDGET ─────────────────────────────
(function() {
  const widget = document.getElementById('float-widget');
  const btn = document.getElementById('float-main-btn');
  if (!widget || !btn) return;
  btn.addEventListener('click', function() {
    widget.classList.toggle('open');
  });
  document.addEventListener('click', function(e) {
    if (!widget.contains(e.target)) {
      widget.classList.remove('open');
    }
  });
})();

// ─── INIT  ─────────────────────────────────────────────
applyLang(detectLang());
