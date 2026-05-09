import { ModuleContent, NavGroup } from '@/types/content';

const trackingAssignments = [
  'Düz duran laptop ekranına web sitesi koy','Sabit kamerada duvardaki posteri değiştir','Yavaş yürüyen kişinin telefon ekranını değiştir','Bisiklet gidonuna bağlı telefonu trackle','Açılı billboarda kampanya KV yerleştir','Kurye elindeki telefona uygulama ekranı koy','Vitrin camına kampanya stickerı ekle','AI videoda dönen ürün etiketini düzelt','Hareketli araç üzerindeki logo alanını değiştir','8 saniyelik reklamda 3 yüzeyi aynı projede trackle'
];

const makeAssignment = (title:string, i:number) => ({
  id:`tracking-${i+1}`,
  title,
  level: i < 3 ? 'Kolay' : i < 7 ? 'Orta' : i < 9 ? 'Zor' : 'Müşteri Simülasyonu' as const,
  goal:'Tracking + compositing refleksini gerçek reklam temposunda geliştirmek.',
  adMatch:'Telefon ekranı, billboard, etiket veya araç üstü grafik yerleştirme işi.',
  programs:['After Effects','Mocha AE','Media Encoder'],
  scene:'Telefon, tabela veya ambalaj içeren kısa bir çekim/AI video sahnesi.',
  steps:['Footage içe aktar','Doğru tracking yöntemini seç (Point/Planar)','Corner Pin veya Null ile grafiği bağla','Blur + grain + color match uygula','Export al ve checklist ile kalite kontrol yap'],
  deliverable:'H.264 MP4, 1080x1920 veya 1920x1080, 8-12 saniye.',
  success:'Grafik kaymadan, doğal motion blur ve doğru perspektifle sahneye oturmalı.',
  commonError:'Yüzey yerine parlama takibi yapmak kayma üretir.',
  checklist:['Yüzey yapışması doğru','Perspektif tutarlı','Renk/parlaklık uyumlu','Fazla keskin değil']
});

export const modules: ModuleContent[] = [
  { id:'baslangic-merkezi', category:'Başlangıç Merkezi', title:'Sistemi Anla ve Çalışma Akışı', description:'Bu ürün bir kurs değil; gerçek reklam üretim OS rehberidir.', why:'Hedef rolün AI Creative Production Assistant. Öğrenme, modül + ödev + checklist mantığında ilerler.', useCases:['Günlük çalışılacak modülü seçmek','Sıralı öğrenme planı kurmak','Asistanla hızlı sorun çözmek'], scenarios:['Önce Tracking modülünü çalış, sonra Post Production Tamir Masasına geç.'], tools:['Modül kartları','Ödev drawer','Checklist','Rozet'], glossary:[], tips:['Her gün tek modül odaklı çalış.','Önce senaryoyu oku, sonra ödeve geç.'], mistakes:[{problem:'Teoride kalmak',reason:'Ödev uygulanmıyor',solution:'Her modülde en az 1 görev tamamla.'}], resources:[], assignments:[], checklist:['Sistem akışını anladım','Ödev ve rozet mantığını anladım'], assistantPrompts:['Bu sistemi haftalık nasıl çalışmalıyım?'], badge:{name:'System Ready',description:'Başlangıç merkezi tamamlandı.'} },
  { id:'ae-tracking', category:'After Effects / Tracking', title:'Tracking', description:'Tracking, hareket eden bir yüzeyi takip edip üzerine yeni görsel sabitleme tekniğidir.', why:'Reklam işlerinde ekran, etiket, tabela ve logo değişimleri çoğu zaman çekim sonrası yapılır; tracking para kazandıran temel production becerisidir.', useCases:['Telefon ekranı değiştirme','Billboard replacement','Ürün etiketi sabitleme','Araç üstü logo değiştirme','Mağaza tabelası kampanya yerleştirme','Laptop ekranına web sitesi koyma','AI video bozuk yazı tamiri','Vitrin camı sticker yerleşimi'], scenarios:['Kurye elindeki telefona app UI koyma','Açılı binadaki billboardu kampanya KV ile değiştirme','Dönen üründe bozuk etiketi temizleyip yenisini koyma','Otobüs üstü reklam alanını yenileme','Kahve bardağına hareketli logo sabitleme','Vitrin camına kampanya stickerı ekleme','Laptop ekranına satış sayfası yerleştirme','Araç camına yansımayla teklif grafiği koyma','AI videoda bozuk ürün yazısını düzeltme','Telefon ekranına ödeme onay akışı ekleme'], tools:['Motion Tracker','Mocha AE','Planar Tracking','Corner Pin','Null Object','Mask','Track Matte','Precompose','Motion Blur','Clean Plate'], glossary:[{term:'Corner Pin',tr:'Dört Köşe Oturtma',desc:'Grafiğin 4 köşesini ayrı kontrol ederek açılı yüzeye oturtma tekniği.',adExample:'Telefon ekranı veya billboard yerleştirme.'},{term:'Planar Tracking',tr:'Düzlemsel Takip',desc:'Düz yüzeyi bir bütün olarak takip eden yöntem.',adExample:'Tabela, duvar, ambalaj yüzeyi.'},{term:'Clean Plate',tr:'Temiz Yüzey',desc:'Yeni öğeyi koymadan önce sahneden bozuk öğeyi temizleme katmanı.',adExample:'AI videoda bozulan yazıyı düzeltmeden önce yüzeyi temizleme.'}], tips:['Yansımayı değil düz yüzey dokusunu takip et.','Açılı ekranlarda Point Tracking yerine Planar Tracking tercih et.','Track kayarsa tüm shotı değil sadece kayan frame aralığını düzelt.','Grafik fazla keskinse hafif blur + grain ekle.','Motion blur uyumu fake hissi kırar.','Billboard açılıysa 4 köşe perspektif şart.','Takip öncesi geçici contrast artırmak track kalitesini yükseltir.','Önce clean plate, sonra yazı/logo ekle.','Sahnenin noise seviyesini taklit et.','Telefon ekranı için düşük opacity reflection layer gerçekçilik katar.'], mistakes:[{problem:'Track doğru ama grafik fake',reason:'Renk/ışık/blur uyumsuz',solution:'Brightness, blur, grain ve contrast değerlerini sahneye eşle.'},{problem:'Ekran kayıyor',reason:'Yanlış feature noktaları',solution:'Planar tracking ile yüzey bazlı takip al.'},{problem:'Köşeler yüzeyi taşırıyor',reason:'Corner pin köşeleri yanlış oturmuş',solution:'Surface köşelerini gerçek ekran köşelerine frame frame kontrol et.'},{problem:'Yazı jitter yapıyor',reason:'Aşırı keskin ve subpixel titreşim',solution:'0.3-0.7 px blur + motion blur uygula.'},{problem:'Logo patlak duruyor',reason:'Aşırı kontrast/saturation',solution:'Curves/levels ile sahne tonuna çek.'}], resources:[{title:'Tracking Crash Course (Placeholder)',platform:'YouTube',language:'EN',duration:'12 dk',level:'Başlangıç',learn:'Mocha AE + Corner Pin temel akışı',practice:'Telefon ekranı footage üzerinde uygula'},{title:'Billboard Replace Walkthrough (Placeholder)',platform:'YouTube',language:'EN',duration:'18 dk',level:'Orta',learn:'Açılı billboard replacement',practice:'Şehir çekiminde billboard değiştir'},{title:'Screen Insert Workflow (Placeholder)',platform:'Blog',language:'TR',duration:'7 dk',level:'Başlangıç',learn:'Hızlı screen replacement checklist',practice:'Laptop ekranına site yerleştir'}], assignments:trackingAssignments.map(makeAssignment), checklist:['Eklenen görsel yüzeye yapışık mı?','Perspektif doğru mu?','Kenar kayması var mı?','Motion blur eklendi mi?','Renk/parlaklık uyumu doğru mu?','Grain seviyesi sahneyle uyumlu mu?','Grafik fazla keskin mi?','Export formatı doğru mu?'], assistantPrompts:['Telefon ekranım kayıyor, neyi yanlış yapmış olabilirim?','Billboard çok açılı duruyor, hangi tracking yöntemini seçmeliyim?','Track doğru ama görüntü fake, gerçekçilik için ne eklemeliyim?','Screenshot atsam adım adım nereden düzeltirim?'], badge:{name:'Tracking Operator',description:'Tracking modülündeki 10 ödevi tamamla.'} },
  { id:'kurgu-cut-turleri', category:'Kurgu Dili', title:'Cut Türleri', description:'Cut türleriyle ritim ve duygu yönetimi.', why:'Reklam kurgusunda doğru cut türü satış etkisini doğrudan etkiler.', useCases:['Hook güçlendirme','Ritim kurma'], scenarios:['Smash cut ile enerji artışı'], tools:['Premiere Pro','SFX'], glossary:[], tips:['Her cuta amaç ver.'], mistakes:[], resources:[], assignments:[], checklist:['Cut amacı net'], assistantPrompts:['Smash cutı nerede kullanmalıyım?'], badge:{name:'Kurgu Dili Basic Operator',description:'Cut türleri temel modülü.'} }
];

export const navigation: NavGroup[] = [
  { group:'Başlangıç Merkezi', items:[{title:'Sistemi Anla ve Çalışma Akışı', moduleId:'baslangic-merkezi'}] },
  { group:'Reklamcılık Mantığı', items:[{title:'Brief',},{title:'KV'},{title:'Ajans Süreci'}] },
  { group:'Sözlük', items:[{title:'Temel Terimler'}] },
  { group:'Photoshop', items:[{title:'Logo ve Etiket Düzeltme'}] },
  { group:'After Effects', items:[{title:'Tracking', moduleId:'ae-tracking'},{title:'Masking'},{title:'Rotoscope'}] },
  { group:'Premiere Pro', items:[{title:'Timeline'},{title:'Export'}] },
  { group:'Kurgu Dili', items:[{title:'Cut Türleri', moduleId:'kurgu-cut-turleri'}] },
  { group:'AI Görsel Üretim', items:[{title:'Prompt Formu'}] },
  { group:'AI Video Üretim', items:[{title:'Start Frame ve End Frame'}] },
  { group:'Kamera ve Görsel Dil', items:[{title:'Açılar'},{title:'Hareketler'}] },
  { group:'Stil Kütüphanesi', items:[{title:'Stil Kartları'}] },
  { group:'Post Production Tamir Masası', items:[{title:'AI logoyu bozdu'}] },
  { group:'Sosyal Medya Export ve Kalite', items:[{title:'FPS & Codec'}] },
  { group:'Ödev Kütüphanesi', items:[{title:'Tüm Ödevler'}] },
  { group:'Asistan', items:[{title:'Soru Sor'}] },
  { group:'Rozetler', items:[{title:'Kazanılan Rozetler'}] }
];
