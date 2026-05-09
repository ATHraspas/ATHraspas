import { Assignment, GlossaryTerm, ModuleContent, NavGroup } from '@/types/content';

const glossaryTerms: GlossaryTerm[] = [
  {term:'Motion Tracker',category:'After Effects',tr:'Nokta tabanlı hareket takibi.',why:'Basit yüzeylerde hızlı başlangıç sağlar.',adExample:'Sabit poster değişimi.',relatedModule:'After Effects Tracking'},
  {term:'Mocha',category:'After Effects',tr:'Planar tracking aracı.',why:'Açılı ve zor yüzeylerde daha stabil takip verir.',adExample:'Yürüyen elde telefon ekranı.',relatedModule:'After Effects Tracking'},
  {term:'Corner Pin',category:'After Effects',tr:'4 köşe perspektif oturtma.',why:'Ekran ve billboard değişimi için temel adımdır.',adExample:'Açılı billboard kampanyası.',relatedModule:'After Effects Tracking'},
  {term:'Null Object',category:'After Effects',tr:'Takip verisini taşıyan yardımcı katman.',why:'Animasyon ve kontrolü esnekleştirir.',adExample:'Araç üstü logo takibi.',relatedModule:'After Effects Tracking'},
  {term:'Track Matte',category:'After Effects',tr:'Katmanı başka bir katmanla maskeleme.',why:'Occlusion çözümlerinde kullanılır.',adExample:'Karakter arkasından geçen sticker.',relatedModule:'After Effects Tracking'},
  {term:'Planar Tracking',category:'After Effects',tr:'Düzlemsel yüzey takibi.',why:'Açılı ekran ve etiketlerde kaymayı azaltır.',adExample:'Telefon ekranı replacement.',relatedModule:'After Effects Tracking'},
  {term:'Screen Replacement',category:'After Effects',tr:'Ekran içeriğini değiştirme süreci.',why:'Reklamlarda uygulama/web demo için çok yaygındır.',adExample:'Kurye telefonuna app akışı.',relatedModule:'After Effects Tracking'},
  {term:'Clean Plate',category:'Post Production',tr:'Önce bozuk öğeyi temizlenmiş yüzeye çevirme.',why:'Yazı/logo tamirinin ilk adımıdır.',adExample:'Dönen etikette bozuk yazı düzeltme.',relatedModule:'AI logoyu bozdu'},
  {term:'Stabilization',category:'After Effects',tr:'Kameradaki sarsıntıyı dengeleme.',why:'Takip kararlılığını artırır.',adExample:'Handheld çekimde ekran sabitleme.',relatedModule:'After Effects Tracking'},
  {term:'Motion Blur',category:'After Effects',tr:'Hareket bulanıklığı.',why:'Eklenen grafiğin doğal görünmesini sağlar.',adExample:'Hızlı geçen araç logosu.',relatedModule:'After Effects Tracking'},
  {term:'Grain',category:'Post Production',tr:'Görüntü noise dokusu.',why:'Eklenen katmanı sahneye entegre eder.',adExample:'UI layer çok temiz kaldığında.',relatedModule:'After Effects Tracking'},
  {term:'Bitrate',category:'Export',tr:'Video veri yoğunluğu.',why:'Platformdaki kaliteyi etkiler.',adExample:'Reels sıkıştırma öncesi optimum değer.',relatedModule:'Sosyal Medya Export ve Kalite'},
  {term:'Smash Cut',category:'Kurgu',tr:'Sert ani geçiş.',why:'Enerji ve vurgu yaratır.',adExample:'Sakin sahneden aksiyon kesmesi.',relatedModule:'Cut Türleri'}
];

const starterAssignments = (prefix:string): Assignment[] => [1,2,3].map((n)=>({id:`${prefix}-${n}`,title:`Pratik ${n}`,level:n===1?'Kolay':n===2?'Orta':'Zor',shortGoal:'Kısa üretim egzersizi.',goal:'Konuya ait kısa üretim pratiği yap.',adMatch:'Gerçek reklam mini simülasyonu.',programs:['After Effects','Photoshop'],scene:'10 saniyelik örnek sahne.',steps:['Referans seç','Uygula','Kontrol et'],deliverable:'1080p MP4',success:'Temel kalite checklisti sağlandı.',commonError:'Acele export ile kalite kaybı.',checklist:['Perspektif','Renk','Keskinlik']}));

const trackingAssignments: Assignment[] = [
  {id:'a1',title:'Laptop Screen Replacement',level:'Kolay',shortGoal:'Sabit laptop ekranına site yerleştir.',goal:'Laptop ekranına web arayüzünü doğal şekilde yerleştir.',adMatch:'SaaS demo reklamı.',programs:['After Effects','Motion Tracker','Corner Pin'],scene:'Sabit tripod, hafif ışık değişimi.',steps:['Motion Tracker ile köşe referansları al','Corner Pin uygula','Ekran parlaklığını eşle'],deliverable:'1080p 6 sn',success:'Ekran kayması yok, ışık uyumlu.',commonError:'Parlaklığı sahneden bağımsız bırakmak.',checklist:['Kayma yok','Işık uyumu']},
  {id:'a2',title:'Static Poster Replacement',level:'Kolay',shortGoal:'Duvardaki posteri değiştir.',goal:'Sabit duvar posterini yeni KV ile değiştir.',adMatch:'Perakende kampanya duyurusu.',programs:['After Effects','Corner Pin'],scene:'Sabit kamera, açılı yüzey.',steps:['Yüzey köşelerini tanımla','Corner Pin ile oturt','Duvar dokusuna göre grain ekle'],deliverable:'1080p 5 sn',success:'Poster duvar dokusuna entegre.',commonError:'Yüzeyi düz kabul etmek.',checklist:['Perspektif','Doku uyumu']},
  {id:'a3',title:'Walking Phone Screen Replacement',level:'Kolay',shortGoal:'Yürüyen elde ekranı değiştir.',goal:'Telefon ekranını yürüyüş boyunca stabil tut.',adMatch:'Fintech onboarding reklamı.',programs:['Mocha','Planar Tracking'],scene:'Handheld yürüyüş, parlamalı ekran.',steps:['Mocha spline ile düz yüzeyi kapsa','Parlama bölgelerini dışarıda bırak','Surface ve corner pin data uygula'],deliverable:'9:16 7 sn',success:'Ekran drift yapmaz.',commonError:'Parlamayı takip noktası seçmek.',checklist:['Drift yok','Parlama kontrol']},
  {id:'a4',title:'Bike Handlebar Phone Tracking',level:'Orta',shortGoal:'Titreşimli gidonda ekran sabitle.',goal:'Bisiklet gidonundaki telefonda UI stabil kalsın.',adMatch:'Teslimat uygulaması reklamı.',programs:['Mocha','Stabilization'],scene:'Handheld + titreşim + hızlı motion.',steps:['Önce stabilization test yap','Segment bazlı planar track al','Kayan frameleri manuel düzelt'],deliverable:'9:16 8 sn',success:'Titreşimde kayma minimize.',commonError:'Tek track pass ile tüm shotı çözmeye çalışmak.',checklist:['Segment düzeltme','Stabil görünüm']},
  {id:'a5',title:'Angled Billboard Tracking',level:'Orta',shortGoal:'Açılı billboarda KV yerleştir.',goal:'Açılı dış mekan billboardunu kampanya KV ile değiştir.',adMatch:'OOH kampanya simülasyonu.',programs:['After Effects','Corner Pin','Mocha'],scene:'Açılı bina yüzeyi, kamera pan.',steps:['Planar tracking ile yüzeyi yakala','Corner pin köşelerini frame-frame doğrula','Lens distortion ile eşleştir'],deliverable:'1920x1080 8 sn',success:'Köşe taşması olmadan doğal entegrasyon.',commonError:'Pan boyunca köşe kontrolünü atlamak.',checklist:['Köşe doğruluğu','Distortion uyumu']},
  {id:'a6',title:'Courier Phone App Screen',level:'Orta',shortGoal:'Kurye telefonuna app akışı koy.',goal:'Kurye telefonunda app UI gerçek çekim gibi görünmeli.',adMatch:'Quick commerce performans reklamı.',programs:['Mocha','Motion Blur','Grain'],scene:'Kurye elinde telefon, ışık geçişi.',steps:['Planar tracking data al','UI animasyonunu sync et','Motion blur + grain + reflection uygula'],deliverable:'9:16 10 sn',success:'UI sahneye entegre, fake durmuyor.',commonError:'UI layer’ı aşırı temiz bırakmak.',checklist:['Blur','Grain','Reflection']},
  {id:'a7',title:'Glass Storefront Campaign Sticker',level:'Orta',shortGoal:'Cam vitrine sticker yerleştir.',goal:'Vitrin camına kampanya metnini perspektifle yerleştir.',adMatch:'Mağaza indirim kampanyası.',programs:['Planar Tracking','Track Matte'],scene:'Önden geçen insanlar ile occlusion.',steps:['Cam yüzeyi takip et','Occlusion için track matte oluştur','Opacity ve blend ile cam hissini ver'],deliverable:'1080p 6 sn',success:'Sticker cam üzerinde doğal görünür.',commonError:'Occlusion katmanını kurmamak.',checklist:['Occlusion','Blend']},
  {id:'a8',title:'Rotating Product Label Repair',level:'Zor',shortGoal:'Dönen üründe etiketi düzelt.',goal:'Bozuk etiketi clean plate sonrası yeni etiketle değiştir.',adMatch:'Ürün hero reklamı.',programs:['Clean Plate','Mocha','Corner Pin'],scene:'Dönen ambalaj, ışık geçişleri.',steps:['Clean plate hazırla','Planar tracking uygula','Yeni etiketi warp et','Işık değişimine göre color match yap'],deliverable:'4K 6 sn',success:'Etiket dönüş boyunca sabit ve doğal.',commonError:'Işık değişimini hesaba katmamak.',checklist:['Warp','Color match']},
  {id:'a9',title:'Moving Vehicle Logo Replacement',level:'Zor',shortGoal:'Hareketli araç logosunu değiştir.',goal:'Araç panelindeki logo hareket boyunca doğru takip edilsin.',adMatch:'Filo branding kampanyası.',programs:['Mocha','Null Object','Track Matte'],scene:'Araç hareketi + kısa occlusion.',steps:['Araç panelini planar takip et','Null Object ile kontrol katmanı kur','Occlusion için matte oluştur','Logo katmanını sahneye grade et'],deliverable:'1920x1080 8 sn',success:'Logo gövdeye entegre görünür.',commonError:'Occlusion anlarında logonun üstte kalması.',checklist:['Occlusion','Grade']},
  {id:'a10',title:'8 Second Multi Surface Ad Simulation',level:'Müşteri Simülasyonu',shortGoal:'8 sn’de üç yüzey tracking çöz.',goal:'Telefon + billboard + etiket aynı reklamda çözülsün.',adMatch:'Gerçek müşteri revizyon simülasyonu.',programs:['After Effects','Premiere Pro','Mocha'],scene:'Çoklu shot, handheld + açı değişimi.',steps:['Shot planı çıkar','Her yüzeye uygun yöntemi seç','Renk/blur/grain birliğini kur','Final export QC uygula'],deliverable:'9:16 8 sn final',success:'Tüm yüzeyler tutarlı ve doğal.',commonError:'Her yüzeye tek yöntemle yaklaşmak.',checklist:['3 yüzey doğru','Görsel tutarlılık','Export temiz']}
];

const baseModule = (id:string, category:string, title:string): ModuleContent => ({id,category,title,hero:`${title} pratik dersi`,description:`${title} modülü, doğrudan üretimde kullanacağın pratikleri öğretir.`,why:'Konuya hakim olmak teslim kalitesi ve revizyon hızını artırır.',useCases:['Gerçek işte kullanım 1','Gerçek işte kullanım 2','Gerçek işte kullanım 3'],scenarios:['Müşteri revizyonu altında hızlı çözüm üretmek','Platform teslim formatına uyarlamak','AI çıktısını production kalitesine taşımak'],tools:['Motion Tracker','Mocha','Corner Pin'],glossary:glossaryTerms,tips:['Önce yüzeyi doğru oku','Kısa test export al','Final öncesi checklist çalıştır'],mistakes:[{problem:'Teknik doğru ama görüntü fake',reason:'Blur/grain/renk uyumsuz',solution:'Sahne ile optik uyumu eşleştir'}],resources:[],assignments:starterAssignments(id),checklist:['3 kullanım örneğini uyguladım'],assistantPrompts:['Bu modül için en hızlı çalışma sırası ne?'],badge:{name:`${title} Operator`,description:`${title} pratik modülü`}});

export const modules: ModuleContent[] = [
  baseModule('baslangic','Başlangıç Merkezi','Başlangıç Merkezi'),
  {...baseModule('genel-sozluk','Sözlük','Genel Sözlük'), tools:['Motion Tracker','Mocha','Bitrate']},
  {...baseModule('ae-tracking','After Effects','After Effects Tracking'), description:'Tracking; telefon ekranı, billboard, ürün etiketi ve tabela değişimlerinde kullanılır. Sadece point tracking yetmez: perspektif, blur, grain, color ve reflection eşleşmesi gerekir.', resources:[
    {title:'Adobe Help: Tracking and stabilization motion workflows',platform:'Adobe',language:'EN',duration:'Guide',level:'All',learn:'Mocha/planar tracking ve stabilization akışını resmi dokümantasyonla öğren.',practice:'Bir handheld shotta stabilization + planar track dene.',url:'https://helpx.adobe.com/after-effects/using/tracking-stabilization-motion-workflows.html'},
    {title:'TipTut: Screen Replacement',platform:'YouTube',language:'EN',duration:'Video',level:'Beginner',learn:'Corner pin ve perspektif eşleme adımlarını gör.',practice:'Sabit poster replacement ödevini bu akışla uygula.',url:'https://www.youtube.com/watch?v=_1e4D1rrBAA'},
    {title:'Surfaced Studio: Mocha AE for beginners',platform:'Blog',language:'EN',duration:'Article',level:'Beginner',learn:'Mocha AE’de düzgün spline ve track prensiplerini öğren.',practice:'Walking phone assignment için spline’i parlama dışında kur.',url:'https://surfacedstudio.com/blog/mocha-ae-tracking-for-beginners'},
    {title:'Noble Desktop: Motion tracking overview',platform:'Article',language:'EN',duration:'Article',level:'Beginner',learn:'Motion tracking + screen replacement sürecini uçtan uca özetler.',practice:'Laptop screen replacement çıktını checklist ile değerlendir.',url:'https://www.nobledesktop.com/learn/after-effects/motion-tracking'},
    {title:'ActionVFX: Corner pin with Mocha',platform:'Blog',language:'EN',duration:'Quick Tip',level:'Intermediate',learn:'Mocha verisini corner pin ile güvenli uygulama yöntemi.',practice:'Angled billboard ödevinde köşe drift kontrolü yap.',url:'https://www.actionvfx.com/blog/after-effects-quick-tip-corner-pin-tracking-with-mocha'},
    {title:'VDCI: Screen tracking replacement walkthrough',platform:'Blog',language:'EN',duration:'Walkthrough',level:'Intermediate',learn:'Screen replacement pipeline ve hata noktalarını adım adım gösterir.',practice:'Courier phone assignment’ı bu sırayla yeniden yap.',url:'https://www.vdci.edu/blog/after-effects-screen-tracking-replacement'}
  ], assignments:trackingAssignments, assistantPrompts:['Track doğru ama fake görünüyor, neyi eşleştirmeliyim?','Handheld shotta drift azaltmak için ne yapmalıyım?']},
  baseModule('ps-logo','Photoshop','Photoshop Logo ve Etiket Düzeltme'),
  baseModule('ai-video-start-end','AI Video Üretim','AI Video Start Frame ve End Frame'),
  baseModule('kurgu-cut','Kurgu Dili','Kurgu Dili Cut Türleri'),
  baseModule('post-ai-logo','Post Production Tamir Masası','Post Production AI logoyu bozdu'),
  baseModule('social-export','Sosyal Medya Export ve Kalite','Sosyal Medya Export ve Kalite'),
  baseModule('kamera-dil','Kamera ve Görsel Dil','Kamera ve Görsel Dil'),
  baseModule('stil-kutuphanesi','Stil Kütüphanesi','Stil Kütüphanesi'),
  baseModule('reklamcilik','Reklamcılık Mantığı','Reklamcılık Mantığı'),
  baseModule('premiere','Premiere Pro','Premiere Pro'),
  baseModule('ai-gorsel','AI Görsel Üretim','AI Görsel Üretim'),
  baseModule('odev-kutuphanesi','Ödev Kütüphanesi','Ödev Kütüphanesi'),
  baseModule('asistan','Asistan','Asistan'),
  baseModule('rozetler','Rozetler','Rozetler')
];

export const navigation: NavGroup[] = [
  {group:'Başlangıç Merkezi',items:[{title:'Başlangıç Merkezi',moduleId:'baslangic'}]},
  {group:'Reklamcılık Mantığı',items:[{title:'Reklamcılık Mantığı',moduleId:'reklamcilik'}]},
  {group:'Sözlük',items:[{title:'Genel Sözlük',moduleId:'genel-sozluk'}]},
  {group:'Photoshop',items:[{title:'Logo ve Etiket Düzeltme',moduleId:'ps-logo'}]},
  {group:'After Effects',items:[{title:'Tracking',moduleId:'ae-tracking'}]},
  {group:'Premiere Pro',items:[{title:'Premiere Pro',moduleId:'premiere'}]},
  {group:'Kurgu Dili',items:[{title:'Cut Türleri',moduleId:'kurgu-cut'}]},
  {group:'AI Görsel Üretim',items:[{title:'AI Görsel Üretim',moduleId:'ai-gorsel'}]},
  {group:'AI Video Üretim',items:[{title:'Start Frame ve End Frame',moduleId:'ai-video-start-end'}]},
  {group:'Kamera ve Görsel Dil',items:[{title:'Kamera ve Görsel Dil',moduleId:'kamera-dil'}]},
  {group:'Stil Kütüphanesi',items:[{title:'Stil Kütüphanesi',moduleId:'stil-kutuphanesi'}]},
  {group:'Post Production Tamir Masası',items:[{title:'AI logoyu bozdu',moduleId:'post-ai-logo'}]},
  {group:'Sosyal Medya Export ve Kalite',items:[{title:'Sosyal Medya Export ve Kalite',moduleId:'social-export'}]},
  {group:'Ödev Kütüphanesi',items:[{title:'Ödev Kütüphanesi',moduleId:'odev-kutuphanesi'}]},
  {group:'Asistan',items:[{title:'Asistan',moduleId:'asistan'}]},
  {group:'Rozetler',items:[{title:'Rozetler',moduleId:'rozetler'}]}
];
