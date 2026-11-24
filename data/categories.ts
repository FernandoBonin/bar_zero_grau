import { Category } from '@/types/menu';

export const categories: Category[] = [
  {
    id: 'cat-1',
    slug: 'porcoes-petiscos',
    name: 'Porções & Petiscos',
    description: 'Pastéis, bolinhos artesanais, dadinhos de tapioca e clássicos de boteco.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCqJ4x6XwnVouADwCLj6mALOd6fFkx4ki9SpMX9yIjGX1wHqrf63wwfL5rx3A74owUkGxkzAYbBFpjFUhqtrlp-nPpQBELPhPiX90s5wtqf6jf9-IICXti8yun9oSlv_Dfupis29t1108VRpl0TllIot9x0Hqrw0BPoT4nSVOtV4UIHm_ZgxxG7NSUeu_s6biEl9VxS1mFiRxHRtw1NoqQiyybABcKlTeV-0p2BD6L8mOTdIpmLwwVAkg',
    badge: '8 opções',
    tag: 'Tradicional',
    itemCount: 8,
    filterGroup: 'petiscos',
  },
  {
    id: 'cat-2',
    slug: 'chapas-carnes',
    name: 'Chapas & Carnes',
    description: 'Picanha no rechaud fumegante, cortes nobres na chapa e guarnições generosas.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDE9_g6o98euJlfVPRsVFUyBli2pN2Aev5T6s-5QYauPb18VXHwbQN_rfdDeQj9rPDD5YLFs8pIGQIm3Ua0jFNgWdaF9ypkc8KvGRHbGrOTTAT9pCUW1jzwWKWAeWR_MCiJecPZKYqnfR2u8g8mRAhfxS3Tb3au6F_ZC97pLFNZclLDSYKOe9ogswv-NRlM8wF8Spwkp9FDJjqxjVkRAc4dxhjA_5nEUHHs7gxeyPxb',
    badge: 'Destaque da Casa',
    tag: 'No Rechaud',
    itemCount: 5,
    filterGroup: 'chapas',
  },
  {
    id: 'cat-3',
    slug: 'chopp-cervejas',
    name: 'Chopp & Cervejas',
    description: 'Chopp Amstel e Heineken tirados com colarinho cremoso a zero grau e cervejas especiais.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD-awvy55QN6qYLoBqD79jf0iecMryPpWf7eC8C8kyBMIwysb6FjNq80jSUmELFtDKE7lcQyW8TxsxEYAIGYu6zo0mjvE5LnKKfgnEV-fLoM7RKRlL2HhpQoE08TAjn6-6cPDsuRz_UWA8Wx4K_D-1m1ayovPf4_msLhzGebl_EfHMLu-G9t1qxd1IQ1y5FqDzRNACT9-bRwh6a1uFRvD6T770Ot1GloDX8T3Z8HIMo',
    badge: 'Super Gelado',
    tag: 'A 0º Grau',
    itemCount: 5,
    filterGroup: 'bebidas',
  },
  {
    id: 'cat-4',
    slug: 'drinks-coqueteis',
    name: 'Drinks & Coquetéis',
    description: 'Gin tônicas botânicas, caipirinhas de frutas selecionadas e coquetelaria autoral.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB_lu4xQojm74bchernXuS6KewLwIURC3snK6xtSI7gEVgvOlscvfBI4QGejBqdL08q8Cr7EIBd1HZ6473jEhDnt_qebYkibixvpgb72Q0AIlCvh9BgZHj75TW0vcV-KZFhodHps2Az1pswGy_jbAn1EyUjJk2COsPSYGa4rom_-imaUDKdKtw589PRl4TfAEYr8-ZUj3L0dU5LG1buy43hJAoYHFZzBvYIQk8BGs__Jfl2tGvz0an5SA',
    badge: 'Mixologia',
    tag: 'Autorais',
    itemCount: 6,
    filterGroup: 'bebidas',
  },
  {
    id: 'cat-5',
    slug: 'sugestoes-casa',
    name: 'Sugestões da Casa',
    description: 'Especialidades do chef criadas para momentos de partilha.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCk_U_83yHRMOQS6wg4Y1EALWFU2_6GyKZoAYf9CNgatFdDQ0ePd0KoirCum4Sz9U1f679CS5A3JN5mYdFHLgfxu5xihvtk5n-CwQTbuqzX0ex2-T43M-fV8ACrq_tZLea_kTSsGUaTv4lSGLGcuyXjdKxTJ3ct0tpbCGnAumc1bC_cysUKYo3ZxzfRW_5j-USDBw1Oo5tU7i8W-HbR2aJizIwpch8_FKYRDjDovrOI',
    badge: 'Pratos Nobres',
    tag: 'Assinatura',
    itemCount: 4,
    filterGroup: 'chapas',
  },
  {
    id: 'cat-6',
    slug: 'entradas-saladas',
    name: 'Entradas & Saladas',
    description: 'Opções leves, bruschettas crocantes e saladas frescas.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC-gbEdYp_aO-GfgWvkltL0ZxMkj964hp5nF0ny2K0s0vTus6zeUu_9pXoQzYtkbplSDxuaqnRnXsgERKwDQU2MUPoUw2Lj-EgzhYZ2Qp1RkkB-zDAbAMegoA3qVMI8xhykD0RsHxAivBlW_1w8iuzReZ-UMLVxMQGsBSM45kwvuX4m0N4oKYO5zc4bxiFRS1gKCyqXkrHc01sxghZkRCLQljVu6mCxBuPTSt95_b97',
    badge: 'Frescor & Sabor',
    tag: 'Leves & Frescas',
    itemCount: 4,
    filterGroup: 'petiscos',
  },
  {
    id: 'cat-7',
    slug: 'almoco-feijoada',
    name: 'Almoço & Feijoada',
    description: 'Pratos executivos durante a semana e nossa tradicional feijoada completa aos sábados.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB7_5YTehWPQ2YUhRIPQFJ15CVEWw4xvAgZTUKsCH7z5MJRP1rLO_AJS7XdxQe1zJsCz4I53W0-L6qy9auH_hryJs5GO36mqEoMS-4LbFDk84GRMpZOlyjQ4YfXWeWzFm21QiIFwO6fmalJpHo6dWTNoLnzkdtMKfUGcfBbMBLNxCeQTYH41xwWk0EcSXBzVojoeT6cvO9OQkLc4jwSqCSQLReNTKD9_6a5Wk0DLrRO',
    badge: 'Aos Sábados',
    tag: 'Tradicional',
    itemCount: 3,
    filterGroup: 'almoco',
  },
  {
    id: 'cat-8',
    slug: 'sobremesas',
    name: 'Sobremesas',
    description: 'Finalize sua experiência com delícias artesanais da casa.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB98fU_tuQugnQZ2CMwUFMTxYi4HtRVHz-ywwQC8rWomDo-kNy8inshpjuk7prG4hxENqBntAJi-6hKdleRXz2SNv1YHxzi8iTAipCoaW5GmlOx0nFnb1b1iGZyEm15S6R5h1a91P0hx0tRrWc90AsQH-nN1uMWwuhIKbIq_W7Bezxz3S6pvu533TOEPQzM4FRCVObOwmJZW-0qExu9AnwiNA_2yW5uPgfGRCzvOGUu',
    badge: 'Artesanal',
    tag: 'Final Doce',
    itemCount: 3,
    filterGroup: 'sobremesas',
  },
];
