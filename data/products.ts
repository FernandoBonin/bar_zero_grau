import { Product } from '@/types/menu';

export const products: Product[] = [
  // ==========================================
  // CHAPAS & CARNES
  // ==========================================
  {
    id: 'prod-picanha-no-rechaud',
    slug: 'picanha-no-rechaud',
    categorySlug: 'chapas-carnes',
    name: 'Picanha no Rechaud',
    subname: 'Picanha Zero Grau Tradicional',
    description:
      'Fatias nobres de picanha grelhada servidas na chapa quente com farofa da casa, vinagrete fresco e alho dourado crocante.',
    detailedDescription:
      'Corte nobre e suculento de picanha maturada, fatiada e servida sobre rechaud com chapa de ferro fundido quente à mesa. Mantém o calor envolvente e o ponto ideal da carne estalando durante todo o seu encontro com amigos e família.',
    portion: 'Serve 2 a 3 pessoas generosamente',
    priceLabel: 'Consulte o Garçom',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDE9_g6o98euJlfVPRsVFUyBli2pN2Aev5T6s-5QYauPb18VXHwbQN_rfdDeQj9rPDD5YLFs8pIGQIm3Ua0jFNgWdaF9ypkc8KvGRHbGrOTTAT9pCUW1jzwWKWAeWR_MCiJecPZKYqnfR2u8g8mRAhfxS3Tb3au6F_ZC97pLFNZclLDSYKOe9ogswv-NRlM8wF8Spwkp9FDJjqxjVkRAc4dxhjA_5nEUHHs7gxeyPxb',
    badge: 'Carro-Chefe',
    tag: 'Especialidade da Casa • Chapa Quente',
    featured: true,
    prepTime: '25 a 30 min',
    allergens: 'Contém glúten nos pães e farofa',
    subCategoryFilter: 'grelhados',
    dietaryTag: 'Para Compartilhar',
    pairing: {
      title: 'Sugestão do Bartender',
      description:
        'Chopp Amstel Extra Gelado ou Coquetel Negroni Clássico para equilibrar a suculência do corte grelhado.',
      categoryLink: '/categorias/chopp-cervejas',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDfmhYTCpx5-GBCTyi0iLWiMI_ptGmnZDXViq9-6DM29T_MCkIPQVX12Eaz-wCbJxsPbEifBvabyPwrJ87sAMBQTv_cuKuFz2h1zWQREr54l-mVk6txbiEvZ_QikjESiEhSHj5-k-JuBmCnSy1FzP-_wYOzTQnwnHHlXyp3oCS3Fv2bUaTOxBt7gux7Nsh5chZsrelmdAZEDmWHzelplXTKFwBaiBIcLwpxMd_31n5i',
    },
    accompaniments: [
      {
        name: 'Farofa Crocante da Casa',
        description: 'Temperada lentamente na manteiga com especiarias boteco.',
        icon: 'grain',
      },
      {
        name: 'Vinagrete Fresco Artesanal',
        description: 'Tomates frescos picados, cebola roxa e mix de ervas finas.',
        icon: 'eco',
      },
      {
        name: 'Alho Dourado Frito',
        description: 'Lâminas crocantes salpicadas diretamente sobre o corte da carne.',
        icon: 'flare',
      },
      {
        name: 'Cesta de Pães Quentinhos',
        description: 'Fatiados na hora com casca crocante para molhar no azeite da chapa.',
        icon: 'bakery_dining',
      },
    ],
  },
  {
    id: 'prod-contra-file-argentino',
    slug: 'contra-file-argentino-na-chapa',
    categorySlug: 'chapas-carnes',
    name: 'Contrafilé Argentino na Chapa',
    subname: 'Com Queijo Coalho Tostado',
    description:
      'Bife de ancho argentino selado na brasa e servido na chapa fumegante com queijo coalho e cebolas douradas.',
    detailedDescription:
      'Generosos bifes de corte argentino com marmoreio nobre, chapeados na hora com tiras de queijo coalho tostadinho e cebolas caramelizadas no suco da própria carne. Acompanha farofa de ovos e vinagrete da casa.',
    portion: 'Serve 2 pessoas',
    priceLabel: 'Consulte o Garçom',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCqJ4x6XwnVouADwCLj6mALOd6fFkx4ki9SpMX9yIjGX1wHqrf63wwfL5rx3A74owUkGxkzAYbBFpjFUhqtrlp-nPpQBELPhPiX90s5wtqf6jf9-IICXti8yun9oSlv_Dfupis29t1108VRpl0TllIot9x0Hqrw0BPoT4nSVOtV4UIHm_ZgxxG7NSUeu_s6biEl9VxS1mFiRxHRtw1NoqQiyybABcKlTeV-0p2BD6L8mOTdIpmLwwVAkg',
    badge: 'Corte Nobre',
    tag: 'Chapa de Ferro',
    featured: false,
    prepTime: '20 a 25 min',
    allergens: 'Contém lactose e glúten',
    subCategoryFilter: 'grelhados',
    dietaryTag: 'Para Compartilhar',
    pairing: {
      title: 'Harmonização do Sommelier',
      description: 'Chopp Heineken Puro Malte ou Vinho Tinto Malbec Encorpado.',
      categoryLink: '/categorias/chopp-cervejas',
    },
    accompaniments: [
      {
        name: 'Farofa de Ovos',
        description: 'Ovos caipiras mexidos com farinha torrada de mandioca e cheiro-verde.',
        icon: 'grain',
      },
      {
        name: 'Queijo Coalho Grelhado',
        description: 'Tiras douradas na manteiga de garrafa.',
        icon: 'restaurant',
      },
      {
        name: 'Molho Chimichurri Fresco',
        description: 'Ervas frescas picadas no azeite extravirgem e vinagre de vinho tinto.',
        icon: 'eco',
      },
    ],
  },
  {
    id: 'prod-misto-da-grelha',
    slug: 'misto-da-grelha-zero-grau',
    categorySlug: 'chapas-carnes',
    name: 'Misto da Grelha Zero Grau',
    subname: 'Picanha, Linguiça Toscana & Frango',
    description:
      'Combinação campeã com fatias de picanha, linguiça artesanal toscana e cubos suculentos de peito de frango temperado.',
    detailedDescription:
      'O prato ideal para quem deseja provar o melhor da chapa. Combina a maciez da picanha, o tempero rústico da linguiça toscana de produção artesanal e peito de frango marinado em ervas de boteco.',
    portion: 'Serve 3 a 4 pessoas',
    priceLabel: 'Consulte o Garçom',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCqJ4x6XwnVouADwCLj6mALOd6fFkx4ki9SpMX9yIjGX1wHqrf63wwfL5rx3A74owUkGxkzAYbBFpjFUhqtrlp-nPpQBELPhPiX90s5wtqf6jf9-IICXti8yun9oSlv_Dfupis29t1108VRpl0TllIot9x0Hqrw0BPoT4nSVOtV4UIHm_ZgxxG7NSUeu_s6biEl9VxS1mFiRxHRtw1NoqQiyybABcKlTeV-0p2BD6L8mOTdIpmLwwVAkg',
    badge: 'Porção Família',
    tag: 'Mais Completo',
    featured: false,
    prepTime: '25 a 35 min',
    allergens: 'Contém glúten',
    subCategoryFilter: 'grelhados',
    dietaryTag: 'Para Compartilhar',
    pairing: {
      title: 'Sugestão da Mesa',
      description: 'Balde de Cerveja Original 600ml ou Caipirinha Três Limões.',
      categoryLink: '/categorias/drinks-coqueteis',
    },
    accompaniments: [
      {
        name: 'Arroz Branco Soltinho',
        description: 'Feito na hora com alho crocante.',
        icon: 'room_service',
      },
      {
        name: 'Mandioca Cozida na Manteiga',
        description: 'Mandioca macia que derrete ao toque.',
        icon: 'eco',
      },
      {
        name: 'Farofa e Vinagrete',
        description: 'A dupla inseparável do churrasco paulista.',
        icon: 'grain',
      },
    ],
  },
  {
    id: 'prod-costela-bovina-bafo',
    slug: 'costela-bovina-no-bafo',
    categorySlug: 'chapas-carnes',
    name: 'Costela Bovina no Bafo',
    subname: 'Cozimento Lento de 8 Horas',
    description:
      'Costela desmanchando na mesa, glaceada com o próprio molho encorpado e acompanhada de mandioca frita crocante.',
    detailedDescription:
      'Assada lentamente no bafo por oito horas em fogo controlado. A carne se solta do osso com facilidade estonteante, preservando todo o sabor suculento e a textura incrivelmente macia.',
    portion: 'Serve 2 a 3 pessoas',
    priceLabel: 'Consulte o Garçom',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCk_U_83yHRMOQS6wg4Y1EALWFU2_6GyKZoAYf9CNgatFdDQ0ePd0KoirCum4Sz9U1f679CS5A3JN5mYdFHLgfxu5xihvtk5n-CwQTbuqzX0ex2-T43M-fV8ACrq_tZLea_kTSsGUaTv4lSGLGcuyXjdKxTJ3ct0tpbCGnAumc1bC_cysUKYo3ZxzfRW_5j-USDBw1Oo5tU7i8W-HbR2aJizIwpch8_FKYRDjDovrOI',
    badge: 'Lento Cozimento',
    tag: 'Especial do Chef',
    featured: false,
    prepTime: '20 min',
    allergens: 'Contém glúten',
    subCategoryFilter: 'grelhados',
    dietaryTag: 'Para Compartilhar',
    pairing: {
      title: 'Harmonização do Sommelier',
      description: 'Cerveja IPA Artesanal com notas lupuladas marcantes.',
      categoryLink: '/categorias/chopp-cervejas',
    },
    accompaniments: [
      {
        name: 'Mandioca Frita Crocante',
        description: 'Dourada por fora e aveludada por dentro.',
        icon: 'restaurant',
      },
      {
        name: 'Molho de Pimenta da Casa',
        description: 'Macerada com cachaça artesanal e ervas finas.',
        icon: 'local_fire_department',
      },
    ],
  },
  {
    id: 'prod-linguica-toscana-chapa',
    slug: 'linguica-artesanal-toscana-na-chapa',
    categorySlug: 'chapas-carnes',
    name: 'Linguiça Artesanal Toscana na Chapa',
    subname: 'Com Cebola Petisco e Alho Dourado',
    description:
      'Linguiça toscana artesanal chapeada em rodelas fartas, salpicada com alho frito e cebola roxa refogada.',
    detailedDescription:
      'Preparada com carne suína de primeira e especiarias tradicionais italianas. Servida estalando na chapa com pimentões coloridos e pães quentes fatiados.',
    portion: 'Serve 2 pessoas',
    priceLabel: 'Consulte o Garçom',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCqJ4x6XwnVouADwCLj6mALOd6fFkx4ki9SpMX9yIjGX1wHqrf63wwfL5rx3A74owUkGxkzAYbBFpjFUhqtrlp-nPpQBELPhPiX90s5wtqf6jf9-IICXti8yun9oSlv_Dfupis29t1108VRpl0TllIot9x0Hqrw0BPoT4nSVOtV4UIHm_ZgxxG7NSUeu_s6biEl9VxS1mFiRxHRtw1NoqQiyybABcKlTeV-0p2BD6L8mOTdIpmLwwVAkg',
    badge: 'Tradicional',
    tag: 'Clássico Boteco',
    featured: false,
    prepTime: '15 a 20 min',
    allergens: 'Contém glúten nos pães',
    subCategoryFilter: 'grelhados',
    dietaryTag: 'Para Compartilhar',
    pairing: {
      title: 'Sugestão do Bar',
      description: 'Chopp Amstel Trincando no caneco congelado.',
      categoryLink: '/categorias/chopp-cervejas',
    },
  },

  // ==========================================
  // PORÇÕES & PETISCOS
  // ==========================================
  {
    id: 'prod-pasteizinhos-mistos',
    slug: 'pasteizinhos-mistos-da-casa',
    categorySlug: 'porcoes-petiscos',
    name: 'Pasteizinhos Mistos da Casa',
    subname: 'Carne, Queijo & Palmito Fresco',
    description:
      'Porção com pasteizinhos crocantes e sequinhos recheados com carne temperada, queijo cremoso e palmito. Acompanha vinagrete da casa.',
    detailedDescription:
      'Porção clássica paulistana contendo 8 unidades quentinhas (carne bovina marinada, queijo minas padrão derretido e palmito fresco selecionado). Acompanha o autêntico vinagrete artesanal de tomates maduros, cebola roxa picadinha e azeite extravirgem.',
    portion: 'Porção 8 un.',
    priceLabel: 'Consulte o Garçom',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCqJ4x6XwnVouADwCLj6mALOd6fFkx4ki9SpMX9yIjGX1wHqrf63wwfL5rx3A74owUkGxkzAYbBFpjFUhqtrlp-nPpQBELPhPiX90s5wtqf6jf9-IICXti8yun9oSlv_Dfupis29t1108VRpl0TllIot9x0Hqrw0BPoT4nSVOtV4UIHm_ZgxxG7NSUeu_s6biEl9VxS1mFiRxHRtw1NoqQiyybABcKlTeV-0p2BD6L8mOTdIpmLwwVAkg',
    badge: 'Mais Pedido',
    tag: 'Para Compartilhar',
    featured: true,
    prepTime: '15 a 20 min',
    allergens: 'Contém glúten e derivados de leite',
    subCategoryFilter: 'pasteis fritos',
    dietaryTag: 'Para Compartilhar',
    pairing: {
      title: 'Sugestão do Bartender',
      description: 'Chopp Zero Grau ou Caipirinha Limão com Cachaça Tradicional.',
      categoryLink: '/categorias/chopp-cervejas',
    },
    accompaniments: [
      {
        name: 'Vinagrete Artesanal',
        description: 'Tomates em cubinhos, cebola roxa e azeite virgem.',
        icon: 'eco',
      },
      {
        name: 'Molho de Pimenta Especial',
        description: 'Pimenta dedo-de-moça macerada artesanalmente.',
        icon: 'local_fire_department',
      },
    ],
  },
  {
    id: 'prod-bolinho-de-bacalhau',
    slug: 'bolinho-de-bacalhau-tradicional',
    categorySlug: 'porcoes-petiscos',
    name: 'Bolinho de Bacalhau Tradicional',
    subname: 'Receita Secular Portuguesa',
    description:
      'Massa leve de bacalhau nobre com batata selecionada, ervas finas e gomos de limão fresco.',
    detailedDescription:
      'Receita secular portuguesa com alta concentração de bacalhau Gadus Morhua desfiado, batatas asterix e temperado com cheiro-verde fresco e azeite português. Frito por imersão até atingir a casca dourada e interior aveludado.',
    portion: 'Porção 10 un.',
    priceLabel: 'Consulte o Garçom',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCqJ4x6XwnVouADwCLj6mALOd6fFkx4ki9SpMX9yIjGX1wHqrf63wwfL5rx3A74owUkGxkzAYbBFpjFUhqtrlp-nPpQBELPhPiX90s5wtqf6jf9-IICXti8yun9oSlv_Dfupis29t1108VRpl0TllIot9x0Hqrw0BPoT4nSVOtV4UIHm_ZgxxG7NSUeu_s6biEl9VxS1mFiRxHRtw1NoqQiyybABcKlTeV-0p2BD6L8mOTdIpmLwwVAkg',
    badge: 'Campeão de Vendas',
    tag: 'Clássico do Boteco',
    featured: true,
    prepTime: '15 min',
    allergens: 'Contém peixe e derivados de trigo',
    subCategoryFilter: 'fritos',
    dietaryTag: 'Para Compartilhar',
    pairing: {
      title: 'Melhor Combinação',
      description: 'Chopp Amstel Estupidamente Gelado ou Vinho Verde Branco.',
      categoryLink: '/categorias/chopp-cervejas',
    },
  },
  {
    id: 'prod-dadinhos-de-tapioca',
    slug: 'dadinhos-de-tapioca-com-geleia',
    categorySlug: 'porcoes-petiscos',
    name: 'Dadinhos de Tapioca com Geléia de Pimenta',
    subname: 'Com Queijo Coalho do Agreste',
    description:
      'Cubinhos dourados de queijo coalho e tapioca granulada, servidos com geléia artesanal levemente picante.',
    detailedDescription:
      'Mistura harmoniosa de tapioca granulada hidratada no leite integral com queijo coalho do agreste ralado grosso. Dourados no ponto exato para criar crosta estaladiça com coração elástico e macio. Acompanha geléia picante de dedo-de-moça com maçã.',
    portion: 'Porção 12 un.',
    priceLabel: 'Consulte o Garçom',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCdaBD3YV2CS4z5kUEFLnUkfyEypH6nhiUAPC4_W3yszEh-0zuxXalYj_XRopHkbYXaLR6y5gr3-JoF6CbGeM7OVYF_Ui9qrG2km8I9j9GjTWEEd_0-C9bazndUgQOg_IhHZ59V4RaJc3JADFcNiYy1A09SpOmgqNjJvh2U8VJc0-kt9bPMRAMbC28h2LSFrLpdY6ygnLk3steDk46KoT8amCkMiz71JVJGn7HEhVmG',
    badge: 'Vegetariano',
    tag: 'Autoral & Crocante',
    featured: false,
    prepTime: '15 min',
    allergens: 'Contém leite e derivados',
    subCategoryFilter: 'fritos',
    dietaryTag: 'Vegetariano',
    pairing: {
      title: 'Harmonização Perfeita',
      description: 'Caipirinha Tradicional de Cachaça da Casa ou Moscow Mule.',
      categoryLink: '/categorias/drinks-coqueteis',
    },
  },
  {
    id: 'prod-bruschetta-zero-grau',
    slug: 'bruschetta-zero-grau',
    categorySlug: 'porcoes-petiscos',
    name: 'Bruschetta Zero Grau',
    subname: 'Tomates Confitados & Manjericão',
    description:
      'Fatias de pão italiano rústico tostado com azeite extravirgem, tomates concassé marinados, alho, manjericão fresco e queijo gratinado.',
    detailedDescription:
      'Pão italiano de fermentação natural levemente grelhado na brasa para absorver toques defumados, esfregado com dentes de alho roxo fresco, coberto com tomates em cubos marinados no azeite português, folhas frescas de manjericão e camada sutil de queijo derretido no maçarico.',
    portion: '6 fatias',
    priceLabel: 'Consulte o Garçom',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDrqVaBGFNzMDgs-9L8C6H_XJlCQJoah1AgthzmePB3AsS2cydHtDI2dTZxIuLYvoUx5suVhKYdS0Y--YhY4Ey8mytIrzUGi7V7E-Ee4lh3cA5NejyM6rGtkZ31LGegwI1l1S_MJULIUp-_dHN_9C1QanPORc2u97V5JhE8ECaH14fNM7aZ6hoRappFh5oOsluBjK709PmXqEwB0AyNPl5c3KqUL131-TbhrZ4dBIFY',
    badge: 'Receita Especial',
    tag: 'Leve & Saboroso',
    featured: false,
    prepTime: '12 min',
    allergens: 'Contém glúten e lactose',
    subCategoryFilter: 'grelhados',
    dietaryTag: 'Vegetariano',
    pairing: {
      title: 'Sugestão da Casa',
      description: 'Chopp Claro ou Taça de Vinho Branco Gelado.',
      categoryLink: '/categorias/chopp-cervejas',
    },
  },
  {
    id: 'prod-torresmo-com-mandioca',
    slug: 'torresmo-com-mandioca-cremosa',
    categorySlug: 'porcoes-petiscos',
    name: 'Torresmo com Mandioca Cremosa',
    subname: 'Panceta Pururuca na Manteiga de Garrafa',
    description:
      'Torresmo crocante e carnudo em corte especial, acompanhado de mandioca macia na manteiga de garrafa.',
    detailedDescription:
      'Corte de panceta suína selecionada marinada com cachaça e especiarias, lentamente confitada e finalizada em óleo fervente para criar pururuca estaladiça com miolo incrivelmente tenro. Acompanha mandioca amarela cozida até desmanchar e regada na legítima manteiga de garrafa nordestina.',
    portion: 'Serve 2 a 3 pessoas',
    priceLabel: 'Consulte o Garçom',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBMo9HsAQrI8X5w0Da7lNKWJ5zAze1uf3f8G8UrBGi8xXfZLhDAAhmqHdECfdUjkBTkV9lWsbIefyrGtOFXnidYfvZ9KYX593ugQStiZuECKPDWAilQmPY29yVNiKmea92TLtngPAorMFvzhGH-qqNNzXXzYRRN3Pe9xX1M0GluUtANUNwG2Nw4vLKDyquPrxasO3tQQwvzkhFpQn1F51vzMZ1xeQCaKny23FU28TDQ',
    badge: 'Destaque Boteco',
    tag: 'Pururuca Crocante',
    featured: true,
    prepTime: '15 min',
    allergens: 'Não contém glúten',
    subCategoryFilter: 'fritos',
    dietaryTag: 'Para Compartilhar',
    pairing: {
      title: 'Combinação Clássica',
      description: 'Chopp Zero Grau Trincando no caneco congelado.',
      categoryLink: '/categorias/chopp-cervejas',
    },
  },
  {
    id: 'prod-frango-a-passarinho',
    slug: 'frango-a-passarinho-crocante',
    categorySlug: 'porcoes-petiscos',
    name: 'Frango à Passarinho Crocante',
    subname: 'Com Chuva de Alho Dourado',
    description:
      'Cortes crocantes de frango frito marinados com tempero especial do chef e salpicados com alho dourado e cheiro-verde.',
    detailedDescription:
      'Pedaços nobres de sobrecoxa e asa de frango marinado por 12 horas em vinho branco seco, alho, louro e ervas do boteco. Fritos até ficarem com casquinha dourada e crocante, salpicados com uma generosa chuva de lâminas de alho tostadas na hora e cheiro-verde.',
    portion: 'Serve 2 pessoas',
    priceLabel: 'Consulte o Garçom',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCVnrQOrvR0vBPoKfTZhfzH5OsSHpc8K8sLSwCnYqkeHiDhvkz2ZS_1OyUuV9Aw1ijmJJdAN6TQplD2S4B7IdAi1pJD5TJvwh-UEuhgLvtMXbU4u9mbFH-F7t78fuZ0cyjflBTimhHPWPKlhtCuLM87KQUkz0jRRjn2NAp0aNX5WpawS6uX76h6wz6SF7_0uQ3L9wOh-7qWlZ8PP91-iMjf3A47xVvExVe2A6kST5HY',
    badge: 'Clássico SP',
    tag: 'Alho Crocante',
    featured: false,
    prepTime: '18 min',
    allergens: 'Contém glúten',
    subCategoryFilter: 'fritos',
    dietaryTag: 'Para Compartilhar',
    pairing: {
      title: 'Harmonização',
      description: 'Caipirinha Tradicional de Cachaça da Casa ou Chopp Amstel.',
      categoryLink: '/categorias/drinks-coqueteis',
    },
  },
  {
    id: 'prod-coxinha-de-costela',
    slug: 'coxinha-cremosa-de-costela',
    categorySlug: 'porcoes-petiscos',
    name: 'Coxinha Cremosa de Costela Bovina',
    subname: 'Com Recheio Cremoso e Catupiry',
    description:
      'Mini coxinhas com massa fina e crocante recheadas com costela desfiada marinada e toque de queijo catupiry.',
    detailedDescription:
      'Massa artesanal à base de mandioca e caldo de carne reduzido. O recheio farto leva costela bovina cozida no bafo por horas, desfiada com cheiro-verde e catupiry legítimo para garantir cremosidade ímpar.',
    portion: 'Porção 8 un.',
    priceLabel: 'Consulte o Garçom',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCqJ4x6XwnVouADwCLj6mALOd6fFkx4ki9SpMX9yIjGX1wHqrf63wwfL5rx3A74owUkGxkzAYbBFpjFUhqtrlp-nPpQBELPhPiX90s5wtqf6jf9-IICXti8yun9oSlv_Dfupis29t1108VRpl0TllIot9x0Hqrw0BPoT4nSVOtV4UIHm_ZgxxG7NSUeu_s6biEl9VxS1mFiRxHRtw1NoqQiyybABcKlTeV-0p2BD6L8mOTdIpmLwwVAkg',
    badge: 'Gourmet',
    tag: 'Artesanal',
    featured: false,
    prepTime: '15 min',
    allergens: 'Contém glúten e derivados de leite',
    subCategoryFilter: 'fritos',
    dietaryTag: 'Para Compartilhar',
    pairing: {
      title: 'Sugestão da Cozinha',
      description: 'Chopp Heineken ou Gin Tônica refrescante.',
      categoryLink: '/categorias/chopp-cervejas',
    },
  },
  {
    id: 'prod-provolone-a-milanesa',
    slug: 'provolone-a-milanesa-crocante',
    categorySlug: 'porcoes-petiscos',
    name: 'Provolone à Milanesa Crocante',
    subname: 'Com Molho Tártaro da Casa',
    description:
      'Cubos de queijo provolone empanados em farinha panko crocante, servidos quentes com molho tártaro caseiro.',
    detailedDescription:
      'Cubos generosos de provolone defumado selecionado, passados em ovo batido e empanamento duplo com farinha panko temperada com orégano selvagem. Casquinha ultracrocante e queijo esticando.',
    portion: 'Porção 350g',
    priceLabel: 'Consulte o Garçom',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCdaBD3YV2CS4z5kUEFLnUkfyEypH6nhiUAPC4_W3yszEh-0zuxXalYj_XRopHkbYXaLR6y5gr3-JoF6CbGeM7OVYF_Ui9qrG2km8I9j9GjTWEEd_0-C9bazndUgQOg_IhHZ59V4RaJc3JADFcNiYy1A09SpOmgqNjJvh2U8VJc0-kt9bPMRAMbC28h2LSFrLpdY6ygnLk3steDk46KoT8amCkMiz71JVJGn7HEhVmG',
    badge: 'Queijo Derretido',
    tag: 'Para Beliscar',
    featured: false,
    prepTime: '12 min',
    allergens: 'Contém derivados de leite e glúten',
    subCategoryFilter: 'fritos',
    dietaryTag: 'Vegetariano',
    pairing: {
      title: 'Sugestão do Bar',
      description: 'Chopp Amstel bem tirado com colarinho cremoso.',
      categoryLink: '/categorias/chopp-cervejas',
    },
  },

  // ==========================================
  // CHOPP & CERVEJAS
  // ==========================================
  {
    id: 'prod-chopp-amstel',
    slug: 'chopp-amstel-zero-grau',
    categorySlug: 'chopp-cervejas',
    name: 'Chopp Amstel Extra Gelado',
    subname: 'Servido no Caneco Congelado',
    description:
      'Chopp puro malte dourado, leve e refrescante, tirado diretamente da serpentina na temperatura exata de zero grau.',
    detailedDescription:
      'O símbolo do bar. Caneco resfriado a temperaturas negativas para receber o chopp Amstel com colarinho cremoso de dois dedos, mantendo o gás e o frescor durante toda a degustação.',
    portion: 'Caneco 350ml / Tulipa 300ml',
    priceLabel: 'Consulte o Garçom',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD-awvy55QN6qYLoBqD79jf0iecMryPpWf7eC8C8kyBMIwysb6FjNq80jSUmELFtDKE7lcQyW8TxsxEYAIGYu6zo0mjvE5LnKKfgnEV-fLoM7RKRlL2HhpQoE08TAjn6-6cPDsuRz_UWA8Wx4K_D-1m1ayovPf4_msLhzGebl_EfHMLu-G9t1qxd1IQ1y5FqDzRNACT9-bRwh6a1uFRvD6T770Ot1GloDX8T3Z8HIMo',
    badge: 'A 0º Grau',
    tag: 'Caneco Congelado',
    featured: true,
    prepTime: 'Imediato',
    allergens: 'Contém cevada e glúten',
    subCategoryFilter: 'chopp',
    dietaryTag: 'Especialidade',
    pairing: {
      title: 'Harmoniza com:',
      description: 'Pasteizinhos Mistos da Casa ou Picanha no Rechaud.',
      categoryLink: '/categorias/porcoes-petiscos',
    },
  },
  {
    id: 'prod-chopp-heineken',
    slug: 'chopp-heineken-puro-malte',
    categorySlug: 'chopp-cervejas',
    name: 'Chopp Heineken Puro Malte',
    subname: 'Tulipa com Colarinho Denso',
    description:
      'Lager puro malte com amargor característico equilibrado e notas frutadas sutis.',
    detailedDescription:
      'A clássica cerveja holandesa tirada sob pressão calibrada na serpentina resfriada. Aroma limpo de malte e lúpulos nobres com final seco e refrescante.',
    portion: 'Tulipa 350ml',
    priceLabel: 'Consulte o Garçom',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD-awvy55QN6qYLoBqD79jf0iecMryPpWf7eC8C8kyBMIwysb6FjNq80jSUmELFtDKE7lcQyW8TxsxEYAIGYu6zo0mjvE5LnKKfgnEV-fLoM7RKRlL2HhpQoE08TAjn6-6cPDsuRz_UWA8Wx4K_D-1m1ayovPf4_msLhzGebl_EfHMLu-G9t1qxd1IQ1y5FqDzRNACT9-bRwh6a1uFRvD6T770Ot1GloDX8T3Z8HIMo',
    badge: 'Puro Malte',
    tag: 'Premium',
    featured: false,
    prepTime: 'Imediato',
    allergens: 'Contém cevada e glúten',
    subCategoryFilter: 'chopp',
    dietaryTag: 'Puro Malte',
    pairing: {
      title: 'Harmoniza com:',
      description: 'Bolinho de Bacalhau Tradicional com azeite extravirgem.',
      categoryLink: '/categorias/porcoes-petiscos',
    },
  },
  {
    id: 'prod-cerveja-original-600',
    slug: 'cerveja-original-600ml',
    categorySlug: 'chopp-cervejas',
    name: 'Cerveja Antárctica Original 600ml',
    subname: 'Servida no Balde de Gelo',
    description:
      'A clássica garrafa de boteco paulistano mantida no ponto trincando para compartilhar na mesa.',
    detailedDescription:
      'Pilsen tradicional brasileira de alta drinkability. Servida em garrafa de vidro de 600ml acomodada em balde de gelo picado com copos tulipa ou americanos gelados.',
    portion: 'Garrafa 600ml',
    priceLabel: 'Consulte o Garçom',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD-awvy55QN6qYLoBqD79jf0iecMryPpWf7eC8C8kyBMIwysb6FjNq80jSUmELFtDKE7lcQyW8TxsxEYAIGYu6zo0mjvE5LnKKfgnEV-fLoM7RKRlL2HhpQoE08TAjn6-6cPDsuRz_UWA8Wx4K_D-1m1ayovPf4_msLhzGebl_EfHMLu-G9t1qxd1IQ1y5FqDzRNACT9-bRwh6a1uFRvD6T770Ot1GloDX8T3Z8HIMo',
    badge: 'Tradição SP',
    tag: 'Garrafa 600ml',
    featured: false,
    prepTime: 'Imediato',
    allergens: 'Contém glúten',
    subCategoryFilter: 'garrafa',
    dietaryTag: 'Para Compartilhar',
  },
  {
    id: 'prod-ipa-artesanal',
    slug: 'cerveja-artesanal-ipa-tatuape',
    categorySlug: 'chopp-cervejas',
    name: 'IPA Artesanal da Casa',
    subname: 'India Pale Ale com Dry Hopping',
    description:
      'Cerveja encorpada com notas cítricas intensas de maracujá e pinho, final amargo persistente e elegante.',
    detailedDescription:
      'Produção artesanal parceira do Zero Grau. Receita com blend de lúpulos americanos Citra e Mosaic. Uma explosão sensorial para quem aprecia amargor refinado e buquê aromático floral.',
    portion: 'Pint 473ml',
    priceLabel: 'Consulte o Garçom',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD-awvy55QN6qYLoBqD79jf0iecMryPpWf7eC8C8kyBMIwysb6FjNq80jSUmELFtDKE7lcQyW8TxsxEYAIGYu6zo0mjvE5LnKKfgnEV-fLoM7RKRlL2HhpQoE08TAjn6-6cPDsuRz_UWA8Wx4K_D-1m1ayovPf4_msLhzGebl_EfHMLu-G9t1qxd1IQ1y5FqDzRNACT9-bRwh6a1uFRvD6T770Ot1GloDX8T3Z8HIMo',
    badge: 'Artesanal',
    tag: 'Lupulada',
    featured: false,
    prepTime: 'Imediato',
    allergens: 'Contém cevada e glúten',
    subCategoryFilter: 'artesanal',
    dietaryTag: 'Cerveja Especial',
    pairing: {
      title: 'Harmoniza com:',
      description: 'Costela Bovina no Bafo ou Torresmo com Mandioca.',
      categoryLink: '/categorias/chapas-carnes',
    },
  },
  {
    id: 'prod-witbier-laranja',
    slug: 'cerveja-witbier-laranja',
    categorySlug: 'chopp-cervejas',
    name: 'Witbier Artesanal com Casca de Laranja',
    subname: 'Com Sementes de Coentro e Trigo',
    description:
      'Estilo belga de trigo, turva e aromática, com toques cítricos de laranja da terra e sementes de coentro.',
    detailedDescription:
      'Cerveja de trigo não filtrada, extremamente aromática, leve e refrescante. A adição de raspas de casca de laranja bahia e coentro confere perfil cítrico e refrescância inigualável.',
    portion: 'Tulipa 350ml',
    priceLabel: 'Consulte o Garçom',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD-awvy55QN6qYLoBqD79jf0iecMryPpWf7eC8C8kyBMIwysb6FjNq80jSUmELFtDKE7lcQyW8TxsxEYAIGYu6zo0mjvE5LnKKfgnEV-fLoM7RKRlL2HhpQoE08TAjn6-6cPDsuRz_UWA8Wx4K_D-1m1ayovPf4_msLhzGebl_EfHMLu-G9t1qxd1IQ1y5FqDzRNACT9-bRwh6a1uFRvD6T770Ot1GloDX8T3Z8HIMo',
    badge: 'Refrescante',
    tag: 'Trigo & Laranja',
    featured: false,
    prepTime: 'Imediato',
    allergens: 'Contém trigo e cevada',
    subCategoryFilter: 'artesanal',
    dietaryTag: 'Cerveja Especial',
  },

  // ==========================================
  // DRINKS & COQUETÉIS
  // ==========================================
  {
    id: 'prod-caipirinha-tres-limoes',
    slug: 'caipirinha-zero-grau-tres-limoes',
    categorySlug: 'drinks-coqueteis',
    name: 'Caipirinha Três Limões Zero Grau',
    subname: 'Tahiti, Siciliano & Cravo com Cachaça Amburana',
    description:
      'Nossa versão da clássica caipirinha brasileira combinando três tipos de limões macerados com açúcar orgânico e cachaça premium envelhecida em amburana.',
    detailedDescription:
      'Equilíbrio primoroso entre a acidez cortante do limão tahiti, o perfume cítrico do limão siciliano e a doçura rústica do limão cravo. Macerados com gelo cristalino e cachaça artesanal de alambique.',
    portion: 'Copo Baixo 350ml',
    priceLabel: 'Consulte o Garçom',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB_lu4xQojm74bchernXuS6KewLwIURC3snK6xtSI7gEVgvOlscvfBI4QGejBqdL08q8Cr7EIBd1HZ6473jEhDnt_qebYkibixvpgb72Q0AIlCvh9BgZHj75TW0vcV-KZFhodHps2Az1pswGy_jbAn1EyUjJk2COsPSYGa4rom_-imaUDKdKtw589PRl4TfAEYr8-ZUj3L0dU5LG1buy43hJAoYHFZzBvYIQk8BGs__Jfl2tGvz0an5SA',
    badge: 'Assinatura',
    tag: 'Autoral Zero Grau',
    featured: true,
    prepTime: '8 min',
    allergens: 'Não contém glúten',
    subCategoryFilter: 'autorais',
    dietaryTag: 'Alcoólico',
    pairing: {
      title: 'Harmoniza com:',
      description: 'Frango à Passarinho Crocante ou Picanha na Chapa.',
      categoryLink: '/categorias/porcoes-petiscos',
    },
  },
  {
    id: 'prod-gin-tonica-botanica',
    slug: 'gin-tonica-botanica',
    categorySlug: 'drinks-coqueteis',
    name: 'Gin Tônica Botânica',
    subname: 'Com Zimbro, Alecrim e Toranja',
    description:
      'Gin London Dry premium, água tônica artesanal, bagas de zimbro levemente esmagadas, ramo de alecrim tostado e fatia de toranja.',
    detailedDescription:
      'Taça balão generosamente servida com pedras sólidas de gelo translúcido. O alecrim é maçaricado levemente antes de ir à taça para liberar óleos essenciais amadeirados.',
    portion: 'Taça Balão 550ml',
    priceLabel: 'Consulte o Garçom',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB_lu4xQojm74bchernXuS6KewLwIURC3snK6xtSI7gEVgvOlscvfBI4QGejBqdL08q8Cr7EIBd1HZ6473jEhDnt_qebYkibixvpgb72Q0AIlCvh9BgZHj75TW0vcV-KZFhodHps2Az1pswGy_jbAn1EyUjJk2COsPSYGa4rom_-imaUDKdKtw589PRl4TfAEYr8-ZUj3L0dU5LG1buy43hJAoYHFZzBvYIQk8BGs__Jfl2tGvz0an5SA',
    badge: 'Refrescante',
    tag: 'Botânicos Selecionados',
    featured: true,
    prepTime: '6 min',
    allergens: 'Contém quinino',
    subCategoryFilter: 'gin',
    dietaryTag: 'Alcoólico',
    pairing: {
      title: 'Combina com:',
      description: 'Dadinhos de Tapioca com Geléia de Pimenta.',
      categoryLink: '/categorias/porcoes-petiscos',
    },
  },
  {
    id: 'prod-moscow-mule-tatuape',
    slug: 'moscow-mule-tatuape',
    categorySlug: 'drinks-coqueteis',
    name: 'Moscow Mule Tatuapé',
    subname: 'Caneca de Cobre com Espuma de Gengibre',
    description:
      'Vodka premium, suco fresco de limão tahiti, xarope de açúcar e a famosa espuma artesanal de gengibre do Zero Grau com raspas de limão.',
    detailedDescription:
      'Servido na caneca de cobre tradicional para reter a temperatura gelada. A espuma de gengibre é aerada na hora com sifão, trazendo textura aveludada e toque picante elegante.',
    portion: 'Caneca Cobre 400ml',
    priceLabel: 'Consulte o Garçom',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB_lu4xQojm74bchernXuS6KewLwIURC3snK6xtSI7gEVgvOlscvfBI4QGejBqdL08q8Cr7EIBd1HZ6473jEhDnt_qebYkibixvpgb72Q0AIlCvh9BgZHj75TW0vcV-KZFhodHps2Az1pswGy_jbAn1EyUjJk2COsPSYGa4rom_-imaUDKdKtw589PRl4TfAEYr8-ZUj3L0dU5LG1buy43hJAoYHFZzBvYIQk8BGs__Jfl2tGvz0an5SA',
    badge: 'Queridinho',
    tag: 'Espuma Artesanal',
    featured: false,
    prepTime: '7 min',
    allergens: 'Não contém glúten',
    subCategoryFilter: 'autorais',
    dietaryTag: 'Alcoólico',
  },
  {
    id: 'prod-negroni-classico',
    slug: 'negroni-classico-envelhecido',
    categorySlug: 'drinks-coqueteis',
    name: 'Negroni Clássico Envelhecido',
    subname: 'Campari, Gin e Vermute Rosso',
    description:
      'Partes iguais de Gin premium, Campari e Vermute tinto italiano artesanal, guarnecido com casca de laranja Bahia retorcida.',
    detailedDescription:
      'Mexido no mixing glass com cubos grandes de gelo cristalino para a diluição ideal. Um coquetel sofisticado, amargo e aromático para abrir o apetite antes dos pratos principais.',
    portion: 'Copo Baixo Old Fashioned 250ml',
    priceLabel: 'Consulte o Garçom',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDfmhYTCpx5-GBCTyi0iLWiMI_ptGmnZDXViq9-6DM29T_MCkIPQVX12Eaz-wCbJxsPbEifBvabyPwrJ87sAMBQTv_cuKuFz2h1zWQREr54l-mVk6txbiEvZ_QikjESiEhSHj5-k-JuBmCnSy1FzP-_wYOzTQnwnHHlXyp3oCS3Fv2bUaTOxBt7gux7Nsh5chZsrelmdAZEDmWHzelplXTKFwBaiBIcLwpxMd_31n5i',
    badge: 'Clássico Mundial',
    tag: 'Amargo & Elegante',
    featured: false,
    prepTime: '5 min',
    allergens: 'Não contém glúten',
    subCategoryFilter: 'classicos',
    dietaryTag: 'Alcoólico',
  },
  {
    id: 'prod-aperol-spritz',
    slug: 'aperol-spritz-fresco',
    categorySlug: 'drinks-coqueteis',
    name: 'Aperol Spritz Refrescante',
    subname: 'Com Espumante Prosecco Brut e Laranja',
    description:
      'Aperol italiano, espumante prosecco brut gelado, splash de água com gás e fatia fresca de laranja em taça generosa.',
    detailedDescription:
      'O coquetel mais solar dos fins de tarde paulistanos. Doce na medida certa, vibrante na cor laranja e extremamente borbulhante e refrescante.',
    portion: 'Taça de Vinho 500ml',
    priceLabel: 'Consulte o Garçom',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB_lu4xQojm74bchernXuS6KewLwIURC3snK6xtSI7gEVgvOlscvfBI4QGejBqdL08q8Cr7EIBd1HZ6473jEhDnt_qebYkibixvpgb72Q0AIlCvh9BgZHj75TW0vcV-KZFhodHps2Az1pswGy_jbAn1EyUjJk2COsPSYGa4rom_-imaUDKdKtw589PRl4TfAEYr8-ZUj3L0dU5LG1buy43hJAoYHFZzBvYIQk8BGs__Jfl2tGvz0an5SA',
    badge: 'Happy Hour',
    tag: 'Frutado & Borbulhante',
    featured: false,
    prepTime: '5 min',
    allergens: 'Contém sulfitos',
    subCategoryFilter: 'classicos',
    dietaryTag: 'Alcoólico',
  },
  {
    id: 'prod-fitzgerald',
    slug: 'fitzgerald-paulistano',
    categorySlug: 'drinks-coqueteis',
    name: 'Fitzgerald Paulistano',
    subname: 'Gin, Limão Siciliano & Angostura',
    description:
      'Gin London Dry batido com suco de limão siciliano fresco, xarope de açúcar simples e gotas aromáticas de Angostura bitters.',
    detailedDescription:
      'Coquetel elegante e equilibrado da família dos sours. Apresenta equilíbrio cítrico brilhante com o perfil herbal dos botânicos do gin.',
    portion: 'Copo Baixo 250ml',
    priceLabel: 'Consulte o Garçom',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB_lu4xQojm74bchernXuS6KewLwIURC3snK6xtSI7gEVgvOlscvfBI4QGejBqdL08q8Cr7EIBd1HZ6473jEhDnt_qebYkibixvpgb72Q0AIlCvh9BgZHj75TW0vcV-KZFhodHps2Az1pswGy_jbAn1EyUjJk2COsPSYGa4rom_-imaUDKdKtw589PRl4TfAEYr8-ZUj3L0dU5LG1buy43hJAoYHFZzBvYIQk8BGs__Jfl2tGvz0an5SA',
    badge: 'Coquetelaria Fina',
    tag: 'Cítrico & Refinado',
    featured: false,
    prepTime: '6 min',
    allergens: 'Não contém glúten',
    subCategoryFilter: 'classicos',
    dietaryTag: 'Alcoólico',
  },

  // ==========================================
  // SUGESTÕES DA CASA
  // ==========================================
  {
    id: 'prod-costela-desfiada-farofa',
    slug: 'costela-desfiada-com-farofa-de-castanhas',
    categorySlug: 'sugestoes-casa',
    name: 'Costela Desfiada com Farofa de Castanhas',
    subname: 'Servida em Rechaud de Ferro Fundido',
    description:
      'Costela bovina desfiada lentamente caramelizada, servida fumegante com farofa crocante de castanha-do-pará e ervas frescas.',
    detailedDescription:
      'Especialidade autoral desenvolvida para ser apreciada sem pressa. A costela marinada é cozida em fogo brando por horas com vinho e cebolas confitadas até atingir textura desfiável irresistível.',
    portion: 'Serve 2 a 3 pessoas',
    priceLabel: 'Consulte o Garçom',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCk_U_83yHRMOQS6wg4Y1EALWFU2_6GyKZoAYf9CNgatFdDQ0ePd0KoirCum4Sz9U1f679CS5A3JN5mYdFHLgfxu5xihvtk5n-CwQTbuqzX0ex2-T43M-fV8ACrq_tZLea_kTSsGUaTv4lSGLGcuyXjdKxTJ3ct0tpbCGnAumc1bC_cysUKYo3ZxzfRW_5j-USDBw1Oo5tU7i8W-HbR2aJizIwpch8_FKYRDjDovrOI',
    badge: 'Assinatura',
    tag: 'Especial do Chef',
    featured: true,
    prepTime: '20 min',
    allergens: 'Contém castanhas e glúten',
    subCategoryFilter: 'autorais',
    dietaryTag: 'Para Compartilhar',
    pairing: {
      title: 'Sugestão do Sommelier',
      description: 'Chopp Escuro ou Cerveja IPA Encorpada.',
      categoryLink: '/categorias/chopp-cervejas',
    },
    accompaniments: [
      {
        name: 'Farofa de Castanhas',
        description: 'Castanha-do-pará laminada e manteiga de garrafa.',
        icon: 'grain',
      },
      {
        name: 'Vinagrete de Frutas',
        description: 'Tomatinho doce e maçã verde em cubinhos.',
        icon: 'eco',
      },
    ],
  },
  {
    id: 'prod-polvo-grelhado',
    slug: 'polvo-grelhado-a-moda-zero-grau',
    categorySlug: 'sugestoes-casa',
    name: 'Polvo Grelhado à Moda Zero Grau',
    subname: 'Com Batatas ao Murro e Alho Assado',
    description:
      'Tentáculos nobres de polvo grelhados no azeite extravirgem com páprica espanhola, batatas ao murro tostadas e dentes de alho confitado.',
    detailedDescription:
      'Polvo tenro cozido no ponto exato e finalizado na chapa de ferro em temperatura altíssima para garantir tostado exterior e maciez no interior. Regado com azeite aromático de ervas.',
    portion: 'Serve 2 pessoas',
    priceLabel: 'Consulte o Garçom',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC-gbEdYp_aO-GfgWvkltL0ZxMkj964hp5nF0ny2K0s0vTus6zeUu_9pXoQzYtkbplSDxuaqnRnXsgERKwDQU2MUPoUw2Lj-EgzhYZ2Qp1RkkB-zDAbAMegoA3qVMI8xhykD0RsHxAivBlW_1w8iuzReZ-UMLVxMQGsBSM45kwvuX4m0N4oKYO5zc4bxiFRS1gKCyqXkrHc01sxghZkRCLQljVu6mCxBuPTSt95_b97',
    badge: 'Frutos do Mar',
    tag: 'Gourmet',
    featured: false,
    prepTime: '25 min',
    allergens: 'Contém moluscos',
    subCategoryFilter: 'frutos-do-mar',
    dietaryTag: 'Prato Especial',
    pairing: {
      title: 'Harmonização',
      description: 'Chopp Witbier Cítrico ou Taça de Vinho Branco Sauvignon Blanc.',
      categoryLink: '/categorias/chopp-cervejas',
    },
  },
  {
    id: 'prod-file-mignon-gorgonzola',
    slug: 'file-mignon-ao-molho-gorgonzola',
    categorySlug: 'sugestoes-casa',
    name: 'Medalhões de Mignon ao Gorgonzola',
    subname: 'Com Redução Cremosa e Crostinis',
    description:
      'Medalhões altos de filé mignon grelhados ao ponto, envoltos em molho aveludado de queijo gorgonzola e crostinis de pão italiano.',
    detailedDescription:
      'Corte de filé mignon selecionado, grelhado na manteiga clarificada e coberto com molho cremoso à base de creme de leite fresco e queijo gorgonzola nobre. Acompanha fatias de pão italiano artesanal tostadas.',
    portion: 'Serve 2 pessoas',
    priceLabel: 'Consulte o Garçom',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDE9_g6o98euJlfVPRsVFUyBli2pN2Aev5T6s-5QYauPb18VXHwbQN_rfdDeQj9rPDD5YLFs8pIGQIm3Ua0jFNgWdaF9ypkc8KvGRHbGrOTTAT9pCUW1jzwWKWAeWR_MCiJecPZKYqnfR2u8g8mRAhfxS3Tb3au6F_ZC97pLFNZclLDSYKOe9ogswv-NRlM8wF8Spwkp9FDJjqxjVkRAc4dxhjA_5nEUHHs7gxeyPxb',
    badge: 'Elegante',
    tag: 'Queijo Nobre',
    featured: false,
    prepTime: '20 min',
    allergens: 'Contém glúten e derivados de leite',
    subCategoryFilter: 'carnes',
    dietaryTag: 'Para Compartilhar',
  },

  // ==========================================
  // ENTRADAS & SALADAS
  // ==========================================
  {
    id: 'prod-salada-burrata',
    slug: 'salada-caprese-burrata',
    categorySlug: 'entradas-saladas',
    name: 'Salada de Burrata Fresca Caprese',
    subname: 'Com Tomates Confit e Pesto de Manjericão',
    description:
      'Burrata cremosa inteira, tomatinhos sweet grape confitados no azeite, folhas de rúcula selvagem, pesto caseiro e redução balsâmica.',
    detailedDescription:
      'Prato fresco e sensorial. O coração de queijo cremoso da burrata se mescla perfeitamente com a acidez suave do tomate confit e o frescor aromático do pesto de manjericão genovês.',
    portion: 'Serve 2 pessoas',
    priceLabel: 'Consulte o Garçom',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC-gbEdYp_aO-GfgWvkltL0ZxMkj964hp5nF0ny2K0s0vTus6zeUu_9pXoQzYtkbplSDxuaqnRnXsgERKwDQU2MUPoUw2Lj-EgzhYZ2Qp1RkkB-zDAbAMegoA3qVMI8xhykD0RsHxAivBlW_1w8iuzReZ-UMLVxMQGsBSM45kwvuX4m0N4oKYO5zc4bxiFRS1gKCyqXkrHc01sxghZkRCLQljVu6mCxBuPTSt95_b97',
    badge: 'Frescor',
    tag: 'Queijo Artesanal',
    featured: false,
    prepTime: '10 min',
    allergens: 'Contém derivados de leite e nozes',
    subCategoryFilter: 'saladas',
    dietaryTag: 'Vegetariano',
  },
  {
    id: 'prod-carpaccio-mignon',
    slug: 'salada-carpaccio-de-mignon',
    categorySlug: 'entradas-saladas',
    name: 'Carpaccio Clássico de Mignon',
    subname: 'Com Mostarda Dijon, Alcaparras e Parmesão',
    description:
      'Lâminas finíssimas de filé mignon cru temperado com molho de alcaparras, azeite extravirgem, mostarda dijon e lascas de parmesão curado.',
    detailedDescription:
      'O autêntico carpaccio de bistrô. Servido em prato gelado com cesta de torradas crocantes temperadas com ervas finas e sal grosso.',
    portion: 'Serve 2 pessoas',
    priceLabel: 'Consulte o Garçom',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC-gbEdYp_aO-GfgWvkltL0ZxMkj964hp5nF0ny2K0s0vTus6zeUu_9pXoQzYtkbplSDxuaqnRnXsgERKwDQU2MUPoUw2Lj-EgzhYZ2Qp1RkkB-zDAbAMegoA3qVMI8xhykD0RsHxAivBlW_1w8iuzReZ-UMLVxMQGsBSM45kwvuX4m0N4oKYO5zc4bxiFRS1gKCyqXkrHc01sxghZkRCLQljVu6mCxBuPTSt95_b97',
    badge: 'Clássico',
    tag: 'Entrada Fria',
    featured: false,
    prepTime: '12 min',
    allergens: 'Contém derivados de leite e glúten nas torradas',
    subCategoryFilter: 'entradas',
    dietaryTag: 'Para Compartilhar',
  },
  {
    id: 'prod-casquinha-siri',
    slug: 'casquinha-de-siri-especial',
    categorySlug: 'entradas-saladas',
    name: 'Casquinha de Siri Gratinada',
    subname: 'Com Dendê, Leite de Coco e Parmesão',
    description:
      'Carne de siri pura e desfiada, refogada com pimentões, azeite de dendê e leite de coco, gratinada com queijo parmesão.',
    detailedDescription:
      'Servida na tradicional concha cerâmica fumegante com gomo de limão tahiti e farofinha crocante de dendê para acompanhar.',
    portion: 'Individual (1 concha)',
    priceLabel: 'Consulte o Garçom',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCqJ4x6XwnVouADwCLj6mALOd6fFkx4ki9SpMX9yIjGX1wHqrf63wwfL5rx3A74owUkGxkzAYbBFpjFUhqtrlp-nPpQBELPhPiX90s5wtqf6jf9-IICXti8yun9oSlv_Dfupis29t1108VRpl0TllIot9x0Hqrw0BPoT4nSVOtV4UIHm_ZgxxG7NSUeu_s6biEl9VxS1mFiRxHRtw1NoqQiyybABcKlTeV-0p2BD6L8mOTdIpmLwwVAkg',
    badge: 'Litoral',
    tag: 'Gratinada',
    featured: false,
    prepTime: '15 min',
    allergens: 'Contém crustáceos e derivados de leite',
    subCategoryFilter: 'entradas',
  },

  // ==========================================
  // ALMOÇO & FEIJOADA
  // ==========================================
  {
    id: 'prod-feijoada-completa',
    slug: 'feijoada-completa-zero-grau',
    categorySlug: 'almoco-feijoada',
    name: 'Feijoada Completa Tradicional',
    subname: 'Servida Exclusivamente aos Sábados',
    description:
      'Caldeirão fumegante com feijão preto e carnes nobres (carne seca, lombo, costelinha e paio), acompanhado de arroz, couve, torresmo e laranja.',
    detailedDescription:
      'O clássico sagrado do almoço de sábado no Tatuapé. Feita no processo tradicional de três dias de dessalga e cozimento lento. Servida em travessa de barro artesanal com guarnições completas e farofa amarela.',
    portion: 'Serve 2 a 3 pessoas',
    priceLabel: 'Consulte o Garçom',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB7_5YTehWPQ2YUhRIPQFJ15CVEWw4xvAgZTUKsCH7z5MJRP1rLO_AJS7XdxQe1zJsCz4I53W0-L6qy9auH_hryJs5GO36mqEoMS-4LbFDk84GRMpZOlyjQ4YfXWeWzFm21QiIFwO6fmalJpHo6dWTNoLnzkdtMKfUGcfBbMBLNxCeQTYH41xwWk0EcSXBzVojoeT6cvO9OQkLc4jwSqCSQLReNTKD9_6a5Wk0DLrRO',
    badge: 'Aos Sábados',
    tag: 'Tradição Brasileira',
    featured: true,
    prepTime: '15 min',
    allergens: 'Contém glúten na farofa',
    subCategoryFilter: 'feijoada',
    dietaryTag: 'Para Compartilhar',
    pairing: {
      title: 'Parceiro Obrigatório:',
      description: 'Caipirinha Tradicional de Cachaça da Casa ou Chopp Amstel Trincando.',
      categoryLink: '/categorias/drinks-coqueteis',
    },
    accompaniments: [
      {
        name: 'Torresmo Pururuca',
        description: 'Crocante e sequinho frito na hora.',
        icon: 'local_fire_department',
      },
      {
        name: 'Couve Fatiada Fininha',
        description: 'Refogada na manteiga com alho.',
        icon: 'eco',
      },
      {
        name: 'Arroz Branco & Laranja',
        description: 'Soltinho e fatias frescas de laranja pêra.',
        icon: 'room_service',
      },
    ],
  },
  {
    id: 'prod-parmegiana-mignon',
    slug: 'parmegiana-de-mignon-executivo',
    categorySlug: 'almoco-feijoada',
    name: 'Parmegiana de Filé Mignon Executivo',
    subname: 'Com Molho de Tomate Caseiro e Fritas',
    description:
      'Bife alto de filé mignon empanado crocante, coberto com molho artesanal de tomates frescos e queijo derretido, servido com arroz e batatas fritas.',
    detailedDescription:
      'O prato executivo mais querido dos almoços de semana. O molho de tomate é apurado lentamente com manjericão fresco e gratinado ao forno para formar a crosta de queijo dourada.',
    portion: 'Individual generoso ou 2 pessoas',
    priceLabel: 'Consulte o Garçom',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDE9_g6o98euJlfVPRsVFUyBli2pN2Aev5T6s-5QYauPb18VXHwbQN_rfdDeQj9rPDD5YLFs8pIGQIm3Ua0jFNgWdaF9ypkc8KvGRHbGrOTTAT9pCUW1jzwWKWAeWR_MCiJecPZKYqnfR2u8g8mRAhfxS3Tb3au6F_ZC97pLFNZclLDSYKOe9ogswv-NRlM8wF8Spwkp9FDJjqxjVkRAc4dxhjA_5nEUHHs7gxeyPxb',
    badge: 'Almoço Executivo',
    tag: 'Terça a Sexta',
    featured: false,
    prepTime: '20 min',
    allergens: 'Contém glúten e derivados de leite',
    subCategoryFilter: 'executivos',
    dietaryTag: 'Executivo',
  },

  // ==========================================
  // SOBREMESAS
  // ==========================================
  {
    id: 'prod-pudim-de-leite',
    slug: 'pudim-de-leite-condensado',
    categorySlug: 'sobremesas',
    name: 'Pudim de Leite da Vovó',
    subname: 'Aveludado com Calda de Caramelo Âmbar',
    description:
      'Receita clássica artesanal, sem furinhos, extremamente cremosa e aveludada, coberta por calda brilhante de caramelo âmbar.',
    detailedDescription:
      'Feito diariamente com leite condensado integral e ovos frescos, assado lentamente em banho-maria. Uma colherada macia e reconfortante para fechar a refeição com chave de ouro.',
    portion: 'Fatia individual generosa',
    priceLabel: 'Consulte o Garçom',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB98fU_tuQugnQZ2CMwUFMTxYi4HtRVHz-ywwQC8rWomDo-kNy8inshpjuk7prG4hxENqBntAJi-6hKdleRXz2SNv1YHxzi8iTAipCoaW5GmlOx0nFnb1b1iGZyEm15S6R5h1a91P0hx0tRrWc90AsQH-nN1uMWwuhIKbIq_W7Bezxz3S6pvu533TOEPQzM4FRCVObOwmJZW-0qExu9AnwiNA_2yW5uPgfGRCzvOGUu',
    badge: 'Favorito',
    tag: 'Sem Furinhos',
    featured: true,
    prepTime: 'Imediato',
    allergens: 'Contém leite e ovos',
    subCategoryFilter: 'doces',
    dietaryTag: 'Sobremesa',
    pairing: {
      title: 'Sugestão do Café:',
      description: 'Café Espresso curto ou Dose de Licor de Café.',
      categoryLink: '/categorias/drinks-coqueteis',
    },
  },
  {
    id: 'prod-petit-gateau',
    slug: 'petit-gateau-de-chocolate',
    categorySlug: 'sobremesas',
    name: 'Petit Gâteau de Chocolate Meio Amargo',
    subname: 'Com Sorvete de Baunilha e Calda Quente',
    description:
      'Bolo quente de chocolate nobre com recheio cremoso que escorre ao corte, servido com bola de sorvete de baunilha em favas.',
    detailedDescription:
      'O contraste perfeito de temperaturas: o bolinho quentinho e denso de cacau 50% com o frescor refrescante do sorvete artesanal de baunilha.',
    portion: 'Sobremesa Individual',
    priceLabel: 'Consulte o Garçom',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB98fU_tuQugnQZ2CMwUFMTxYi4HtRVHz-ywwQC8rWomDo-kNy8inshpjuk7prG4hxENqBntAJi-6hKdleRXz2SNv1YHxzi8iTAipCoaW5GmlOx0nFnb1b1iGZyEm15S6R5h1a91P0hx0tRrWc90AsQH-nN1uMWwuhIKbIq_W7Bezxz3S6pvu533TOEPQzM4FRCVObOwmJZW-0qExu9AnwiNA_2yW5uPgfGRCzvOGUu',
    badge: 'Chocolate Belga',
    tag: 'Quente & Frio',
    featured: false,
    prepTime: '12 min',
    allergens: 'Contém glúten, leite e ovos',
    subCategoryFilter: 'doces',
    dietaryTag: 'Sobremesa',
  },
  {
    id: 'prod-churros-espanhois',
    slug: 'churros-espanhois-com-doce-de-leite',
    categorySlug: 'sobremesas',
    name: 'Churros Espanhóis Crocantes',
    subname: 'Com Doce de Leite Viçosa e Canela',
    description:
      'Porção de mini churros fininhos e estaladiços, polvilhados com açúcar e canela, servidos com pote de doce de leite artesanal.',
    detailedDescription:
      'Massa frita no ponto exato, sequinha e dourada. Para mergulhar à vontade no doce de leite cremoso da fazenda.',
    portion: 'Porção com 6 unidades',
    priceLabel: 'Consulte o Garçom',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB98fU_tuQugnQZ2CMwUFMTxYi4HtRVHz-ywwQC8rWomDo-kNy8inshpjuk7prG4hxENqBntAJi-6hKdleRXz2SNv1YHxzi8iTAipCoaW5GmlOx0nFnb1b1iGZyEm15S6R5h1a91P0hx0tRrWc90AsQH-nN1uMWwuhIKbIq_W7Bezxz3S6pvu533TOEPQzM4FRCVObOwmJZW-0qExu9AnwiNA_2yW5uPgfGRCzvOGUu',
    badge: 'Para Compartilhar',
    tag: 'Doce de Leite',
    featured: false,
    prepTime: '10 min',
    allergens: 'Contém glúten e derivados de leite',
    subCategoryFilter: 'doces',
    dietaryTag: 'Para Compartilhar',
  },
];
