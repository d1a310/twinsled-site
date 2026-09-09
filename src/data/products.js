const products = [
  {
    id: 1,
    name: 'Fast Food Tasty',
    category: 'Yazılı ve Şekilli',
    description:
      'Fast Food Tasty yazılı ve renkli fast food figürlerinden oluşan neon tabela.',
    price: '₺3.184,09',
    badge: 'Çok Satan',
    color: '#48ff91',
    image:
      'https://cdn.dsmcdn.com/mnresize/620/920/ty1640/prod/QC/20250219/13/5b3df88b-d8ad-370a-9355-d323df5f6bb5/1_org_zoom.jpg',
    sourceUrl:
      'https://www.trendyol.com/twins-led-aydinlatma/fast-food-tasty-yazili-ve-sekilli-neon-tabela-p-851076312',
    features: ['Çok Renkli', 'LED', 'Özel Tasarım'],
  },

  {
    id: 2,
    name: 'Tattoo Studio',
    category: 'Yazılı ve Şekilli',
    description:
      'Tattoo Studio konseptine özel yazı ve figürlerle hazırlanmış neon tabela.',
    price: '₺2.579,14',
    badge: 'Profesyonel',
    color: '#91edff',
    image:
      'https://cdn.dsmcdn.com/mnresize/620/920/ty1722/prod/QC_ENRICHMENT/20250812/15/5490632f-85cc-3cab-a721-b27d186d8142/1_org_zoom.jpg',
    sourceUrl:
      'https://www.trendyol.com/twins-led-aydinlatma/tattoo-studio-yazili-neon-tabela-p-790194526',
    features: ['Çok Renkli', 'LED', 'Tek Ebat'],
  },

  {
    id: 3,
    name: 'But First Nails',
    category: 'Güzellik',
    description:
      'Nail salon ve güzellik merkezleri için pembe neon yazı ve oje figürü.',
    price: '₺2.345,98',
    badge: 'Popüler',
    color: '#ff3cac',
    image:
      'https://cdn.dsmcdn.com/mnresize/620/920/ty1362/product/media/images/prod/QC/20240614/09/d933b4d4-a3c8-3188-9fa9-6ea90a170f28/1_org_zoom.jpg',
    sourceUrl:
      'https://www.trendyol.com/twins-led-aydinlatma/but-first-nails-yazili-ve-oje-sekilli-neon-tabela-p-790200747',
    features: ['Pembe', 'LED', 'Enerji Tasarrufu'],
  },

  {
    id: 4,
    name: 'XOXO',
    category: 'Dekoratif',
    description:
      'İnce el yazısı karakteriyle hazırlanmış zarif dekoratif neon tabela.',
    price: '₺1.633,14',
    badge: 'Yeni',
    color: '#ffad22',
    image:
      'https://cdn.dsmcdn.com/mnresize/620/920/ty1739/prod/QC_PREP/20250826/13/5c6cfbad-51ba-3dfe-b1f8-a299287aabdd/1_org_zoom.jpg',
    sourceUrl:
      'https://www.trendyol.com/twins-led-aydinlatma/xoxo-yazili-ve-sekilli-neon-tabela-p-978243615',
    features: ['Amber', 'LED', 'Dekoratif'],
  },

  {
    id: 5,
    name: 'Pilates Mode ON',
    category: 'Spor & Studio',
    description:
      'Pilates ve fitness stüdyoları için hazırlanmış modern neon tabela.',
    price: '₺1.839,08',
    badge: 'Stüdyo',
    color: '#ff3cac',
    image:
      'https://cdn.dsmcdn.com/mnresize/620/920/ty1655/prod/QC/20250327/03/07996bea-a545-3487-ac34-9e83b1edb8ee/1_org_zoom.jpg',
    sourceUrl:
      'https://www.trendyol.com/twins-led-aydinlatma/pilates-mode-on-yazili-neon-tabela-p-922899539',
    features: ['Pembe', 'LED', 'Studio'],
  },

  {
    id: 6,
    name: 'Coffee Bardak',
    category: 'Kafe',
    description:
      'Kafeler ve kahve noktaları için bardak figürlü dekoratif neon tabela.',
    price: '₺1.699,00',
    badge: 'Kafe',
    color: '#91edff',
    image:
      'https://cdn.dsmcdn.com/mnresize/620/920/ty1397/product/media/images/prod/QC/20240702/09/b0a4b510-55f9-3750-afcd-5c7ea1d2482c/1_org_zoom.jpg',
    sourceUrl:
      'https://www.trendyol.com/twins-led-aydinlatma/coffee-bardak-neon-tabela-p-762694651',
    features: ['Mavi', 'Pembe', 'LED'],
  },

  {
    id: 7,
    name: 'Boxing',
    category: 'Spor',
    description:
      'Boks salonları ve spor alanları için eldiven figürlü neon tabela.',
    price: '₺2.365,09',
    badge: 'Spor',
    color: '#ffad22',
    image:
      'https://image.badem.shop/base/images/PU/QE/PUQEoTK9EiU7w99J.jpg_/280x280.jpg',
    sourceUrl:
      'https://badem.shop/p/0cebd5dd-68be-44e8-96d6-78efdc167769/twins-led-bo-x-ing-yazili-ve-boks-eldiveni-figurlu-neon-tabela-amber-model-model-28823366/',
    features: ['Amber', 'LED', 'Figürlü'],
  },

  {
    id: 8,
    name: 'Gamer Mode ON',
    category: 'Gaming',
    description:
      'Gaming odaları ve oyun alanları için çok renkli neon tabela.',
    price: '₺2.900,00',
    badge: 'Gaming',
    color: '#9b5cff',
    image:
      'https://cdn-s3.pttavm.com/pimages/592/111/051/681b6aef-3f82-445a-9965-e2723461026b.webp',
    sourceUrl:
      'https://www.pttavm.com/twins-led-aydinlatma-gamer-mode-on-yazili-ve-sekilli-neon-tabela-p-1110514077',
    features: ['RGB', 'LED', 'Gaming'],
  },

  {
    id: 9,
    name: 'Nail Beauty',
    category: 'Güzellik',
    description:
      'Nail salonları için tırnak figürlü ve yazılı dekoratif neon tabela.',
    price: '₺2.198,90',
    badge: 'Güzellik',
    color: '#ff3cac',
    image:
      'https://cdn.dsmcdn.com/mnresize/620/920/ty1098/product/media/images/prod/SPM/PIM/20231220/14/de025ab6-f44c-32a0-9693-cc69e484cb67/1_org_zoom.jpg',
    sourceUrl:
      'https://www.trendyol.com/twins-led-aydinlatma/nail-beauty-yazili-ve-tirnak-sekilli-neon-tabela-p-790269312',
    features: ['Pembe', 'Beyaz', 'LED'],
  },

  {
    id: 10,
    name: 'Kişiselleştirilebilir Kalp',
    category: 'Özel Tasarım',
    description:
      'İsim ve harflerle kişiselleştirilebilen kalp formunda neon tabela.',
    price: '₺2.499,00',
    badge: 'Özel',
    color: '#ff3cac',
    image:
      'https://cdn.dsmcdn.com/mnresize/620/920/ty1624/prod/QC/20250113/22/d9e393b8-3571-38ae-aeaf-c8ab77b59958/1_org_zoom.jpg',
    sourceUrl:
      'https://www.trendyol.com/twins-led-aydinlatma/kisilestirilebilir-harfli-kalp-neon-tabela-p-891575774',
    features: ['Kişiye Özel', 'Pembe', 'LED'],
  },

  {
    id: 11,
    name: 'ICE CREAM',
    category: 'Kafe & Tatlı',
    description:
      'Dondurma işletmeleri ve tatlı dükkânları için buzlu neon tabela.',
    price: '₺2.667,08',
    badge: 'Popüler',
    color: '#ff3038',
    image:
      'https://cdn-img.pttavm.com/pimages/170/111/052/4a9f9272-228a-44fb-8f72-f9aa5e2c3103.webp?v=202402141157',
    sourceUrl:
      'https://www.pttavm.com/twins-led-aydinlatma-ice-cream-yazili-ve-sekilli-neon-tabela-p-1110520503',
    features: ['Kırmızı', 'LED', 'Figürlü'],
  },

  {
    id: 12,
    name: 'Pizza Here',
    category: 'Kafe & Restoran',
    description:
      'Pizza restoranları için pizza figürü ve yazı kombinasyonlu neon tabela.',
    price: '₺2.698,90',
    badge: 'Yeni',
    color: '#91edff',
    image:
      'https://images.pexels.com/photos/7911701/pexels-photo-7911701.jpeg?auto=compress&cs=tinysrgb&w=1200',
    sourceUrl:
      'https://www.n11.com/urun/twins-led-pizza-here-yazili-ve-sekilli-neon-tabela-buz-mavisi-modelmodel65683366-54225065',
    features: ['Buz Mavisi', 'LED', 'Restoran'],
  },
]

export default products