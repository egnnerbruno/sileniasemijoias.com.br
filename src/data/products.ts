/**
 * Catálogo fixo da seção Coleção.
 *
 * Peças reais do catálogo Styllus (styllusvirtual.com.br), escolhidas a dedo:
 * 6 por categoria, com foto oficial otimizada em /public/assets/produtos.
 * O código (Cód.) é o mesmo da Styllus, para a consultora localizar a peça no kit.
 */

export type CategoryId =
    | 'colares'
    | 'chokers'
    | 'brincos'
    | 'argolas'
    | 'aneis'
    | 'pulseiras'
    | 'conjuntos'
    | 'tornozeleiras';

export type Finish = 'Banho de ouro 18k' | 'Banho de prata';

export interface Category {
    id: CategoryId;
    label: string;
    /** Frase curta exibida abaixo do filtro quando a categoria está ativa. */
    tagline: string;
}

export interface Product {
    id: string;
    code: string;
    name: string;
    category: CategoryId;
    finish: Finish;
    img: string;
    desc: string;
}

export const categories: Category[] = [
    { id: 'colares', label: 'Colares', tagline: 'Correntes venezianas finas e pingentes que acompanham o decote com leveza.' },
    { id: 'chokers', label: 'Chokers', tagline: 'Curtos e marcantes, ficam rentes ao pescoço e valorizam qualquer look.' },
    { id: 'brincos', label: 'Brincos', tagline: 'Do pendurado que balança ao pequeno que brilha discreto.' },
    { id: 'argolas', label: 'Argolas', tagline: 'O clássico que nunca sai de moda, do fio fino à argola grande.' },
    { id: 'aneis', label: 'Anéis', tagline: 'Cravejados, falanges e alianças para compor a mão.' },
    { id: 'pulseiras', label: 'Pulseiras', tagline: 'Braceletes, correntes e riviera para vestir o pulso.' },
    { id: 'conjuntos', label: 'Conjuntos', tagline: 'Brinco e colar combinando, prontos para usar ou presentear.' },
    { id: 'tornozeleiras', label: 'Tornozeleiras', tagline: 'O detalhe delicado que faz diferença no verão.' },
];

const OURO: Finish = 'Banho de ouro 18k';
const PRATA: Finish = 'Banho de prata';

export const products: Product[] = [
    /* ===== Colares ===== */
    {
        id: 'sco-2607', code: 'SCO-2607', category: 'colares', finish: OURO,
        name: 'Colar Veneziana com Globinhos e Pérolas',
        img: '/assets/produtos/sco-2607.webp',
        desc: 'Corrente veneziana de 45 cm intercalada por globinhos trabalhados e pérolas de 6 mm. Um clássico atemporal, delicado o bastante para o dia a dia e elegante para a noite.',
    },
    {
        id: 'sco-2615', code: 'SCO-2615', category: 'colares', finish: OURO,
        name: 'Colar Veneziana Pingente Quadrado com Zircônia',
        img: '/assets/produtos/sco-2615.webp',
        desc: 'Veneziana de 45 cm com pingente quadrado listrado e uma zircônia central. Moderno e discreto, dá brilho na medida certa sem pesar no visual.',
    },
    {
        id: 'sco-0131dr', code: 'SCO-0131DR', category: 'colares', finish: OURO,
        name: 'Colar Arco Cravejado com Zircônias',
        img: '/assets/produtos/sco-0131dr.webp',
        desc: 'Pingente em arco de 4 cm cravejado com zircônias e detalhes em ródio, sobre corrente veneziana de 45 cm. O contraste entre o dourado e o ródio deixa a peça sofisticada.',
    },
    {
        id: 'sco-2613', code: 'SCO-2613', category: 'colares', finish: OURO,
        name: 'Colar Veneziana Gota Grande com Zircônias',
        img: '/assets/produtos/sco-2613.webp',
        desc: 'Gota grande vazada com zircônias em corrente veneziana de 45 cm. É a peça de destaque: chama atenção sozinha e combina com decotes abertos.',
    },
    {
        id: 'sco-2725', code: 'SCO-2725', category: 'colares', finish: PRATA,
        name: 'Colar Veneziana Trevo com Zircônias',
        img: '/assets/produtos/sco-2725.webp',
        desc: 'O trevo de quatro folhas cravejado com zircônias, símbolo de sorte, em corrente veneziana de 45 cm. Delicado, brilhante e ótimo para presentear.',
    },
    {
        id: 'sco-2619', code: 'SCO-2619', category: 'colares', finish: PRATA,
        name: 'Colar Tubinhos Diamantados',
        img: '/assets/produtos/sco-2619.webp',
        desc: 'Corrente de 45 cm formada por tubinhos diamantados e frisados que refletem a luz a cada movimento. Minimalista, fica lindo sozinho ou em camadas.',
    },

    /* ===== Chokers ===== */
    {
        id: 'sco-2606', code: 'SCO-2606', category: 'chokers', finish: OURO,
        name: 'Choker Elos 1x1 com Chapinhas e Zircônias',
        img: '/assets/produtos/sco-2606.webp',
        desc: 'Choker de 38 cm com elos 1x1, chapinhas lisas e pontos de zircônia. Fica rente ao pescoço e valoriza blusas de gola baixa e vestidos.',
    },
    {
        id: 'sco-2603', code: 'SCO-2603', category: 'chokers', finish: OURO,
        name: 'Choker Cruzes com Zircônias',
        img: '/assets/produtos/sco-2603.webp',
        desc: 'Elos 1x1 de 38 cm com chapas e cruzes cravejadas de zircônia. Uma choker marcante, para quem gosta de peça com personalidade.',
    },
    {
        id: 'sco-1893', code: 'SCO-1893', category: 'chokers', finish: PRATA,
        name: 'Choker Chapa Diamantada com Pedra',
        img: '/assets/produtos/sco-1893.webp',
        desc: 'Choker de 35 cm com chapa diamantada, detalhes tipo vírgula e pedra redonda central. Brilho sutil que combina com looks do dia a dia.',
    },
    {
        id: 'sco-1882', code: 'SCO-1882', category: 'chokers', finish: PRATA,
        name: 'Choker Pedras Marteladas Coloridas',
        img: '/assets/produtos/sco-1882.webp',
        desc: 'Pedras coloridas envolvidas em chapinhas marteladas ao longo de 35 cm. Alegre e versátil, é a peça que dá cor a um look neutro.',
    },
    {
        id: 'sco-2407', code: 'SCO-2407', category: 'chokers', finish: PRATA,
        name: 'Choker Alhambra com Chapinhas',
        img: '/assets/produtos/sco-2407.webp',
        desc: 'Inspirada no clássico trevo Alhambra, com pingente único de 1 cm e chapinhas ao longo da corrente de 35 cm. Elegante e atual, fica linda sozinha ou em mix com outros colares.',
    },
    {
        id: 'sco-1885', code: 'SCO-1885', category: 'chokers', finish: PRATA,
        name: 'Choker Argolas Frisadas com Pedra',
        img: '/assets/produtos/sco-1885.webp',
        desc: 'Choker de 35 cm com argolinhas frisadas intercaladas e pedra redonda. Leve e delicada, ótima para compor com outros colares.',
    },

    /* ===== Brincos ===== */
    {
        id: 'spd-2404', code: 'SPD-2404', category: 'brincos', finish: OURO,
        name: 'Brinco Pendurado Pedras Retangulares',
        img: '/assets/produtos/spd-2404.webp',
        desc: 'Brinco longo de 6,5 cm com pedras retangulares de zircônia em sequência. Movimento e brilho para festas, casamentos e eventos.',
    },
    {
        id: 'spd-2280', code: 'SPD-2280', category: 'brincos', finish: OURO,
        name: 'Brinco Oval Vazado Amassado',
        img: '/assets/produtos/spd-2280.webp',
        desc: 'Oval vazado de 3,8 cm com textura amassada, de inspiração orgânica. Leve no peso e forte na presença, é tendência entre as peças douradas.',
    },
    {
        id: 'spd-2350', code: 'SPD-2350', category: 'brincos', finish: OURO,
        name: 'Brinco Coração Trabalhado',
        img: '/assets/produtos/spd-2350.webp',
        desc: 'Chapa em formato de coração com textura trabalhada, 2,5 cm. Romântico sem ser óbvio, funciona tanto de dia quanto à noite.',
    },
    {
        id: 'spd-2347', code: 'SPD-2347', category: 'brincos', finish: PRATA,
        name: 'Brinco Borboleta com Zircônias',
        img: '/assets/produtos/spd-2347.webp',
        desc: 'Asa de borboleta grande e plissada, de 5,5 cm, com fileira de zircônias. Uma peça escultural que vira o ponto alto do look.',
    },
    {
        id: 'spq-1585', code: 'SPQ-1585', category: 'brincos', finish: OURO,
        name: 'Brinco Gota Abaulada Listrada',
        img: '/assets/produtos/spq-1585.webp',
        desc: 'Gota abaulada e listrada de 2,5 cm, com volume e acabamento polido. Um pequeno com cara de joia grande, perfeito para o trabalho.',
    },
    {
        id: 'spq-2148', code: 'SPQ-2148', category: 'brincos', finish: PRATA,
        name: 'Brinco Coração Cravejado',
        img: '/assets/produtos/spq-2148.webp',
        desc: 'Coração de 1,4 cm todo cravejado com zircônias. Delicado e brilhante, é daqueles que a cliente usa todo dia e nunca tira.',
    },

    /* ===== Argolas ===== */
    {
        id: 'sag-2118', code: 'SAG-2118', category: 'argolas', finish: OURO,
        name: 'Argola Fio Aberto com Riscos',
        img: '/assets/produtos/sag-2118.webp',
        desc: 'Argola de 4,5 cm em fio aberto com riscos finos gravados. Tamanho médio, clássica e fácil de combinar.',
    },
    {
        id: 'sag-2119', code: 'SAG-2119', category: 'argolas', finish: OURO,
        name: 'Argola Fio Fechado com Pontos',
        img: '/assets/produtos/sag-2119.webp',
        desc: 'Fio fechado com detalhes em pontos ao longo de toda a argola. O relevo dá textura e brilho sem perder a leveza.',
    },
    {
        id: 'sag-1939', code: 'SAG-1939', category: 'argolas', finish: OURO,
        name: 'Argola Grande Fio Frisado',
        img: '/assets/produtos/sag-1939.webp',
        desc: 'Argola grande de 7 cm com fio frisado inclinado. Para quem gosta de argola de impacto, com aquele visual de revista.',
    },
    {
        id: 'sag-1680', code: 'SAG-1680', category: 'argolas', finish: OURO,
        name: 'Argola Fio com Coraçõezinhos',
        img: '/assets/produtos/sag-1680.webp',
        desc: 'Argola fina de 7 cm com tarraxa e coraçõezinhos gravados no fio. Grande no tamanho e delicada no detalhe.',
    },
    {
        id: 'sag-2099', code: 'SAG-2099', category: 'argolas', finish: PRATA,
        name: 'Argola Encaixe Frontal com Pedras',
        img: '/assets/produtos/sag-2099.webp',
        desc: 'Argolinha de 1 cm com encaixe frontal, detalhes listrados e pedras. Ideal para segundo e terceiro furo, ou para quem prefere brinco discreto.',
    },
    {
        id: 'sag-2093', code: 'SAG-2093', category: 'argolas', finish: PRATA,
        name: 'Argola Coração Vazado com Zircônia',
        img: '/assets/produtos/sag-2093.webp',
        desc: 'Argola com encaixe frontal em formato de coração vazado e pedra de zircônia. Pequena, romântica e cheia de brilho.',
    },

    /* ===== Anéis ===== */
    {
        id: 'san-0054dr', code: 'SAN-0054DR', category: 'aneis', finish: OURO,
        name: 'Anel Meia Aliança com Micro Zircônias',
        img: '/assets/produtos/san-0054dr.webp',
        desc: 'Aro fino trabalhado com fileira de micro zircônias na frente. Funciona como meia aliança e fica lindo sozinho ou empilhado com outros anéis.',
    },
    {
        id: 'san-0701dr', code: 'SAN-0701DR', category: 'aneis', finish: OURO,
        name: 'Anel de Falange Losango com Zircônias',
        img: '/assets/produtos/san-0701dr.webp',
        desc: 'Anel de falange com losango cravejado de pedrinhas de zircônia. Pequeno e delicado, feito para compor a mão com outros anéis.',
    },
    {
        id: 'san-0884', code: 'SAN-0884', category: 'aneis', finish: OURO,
        name: 'Anel Coração Cravejado',
        img: '/assets/produtos/san-0884.webp',
        desc: 'Frente em coração cravejado com pedras e detalhe em ródio, que dá contraste ao dourado. Uma peça afetiva, ótima para presente.',
    },
    {
        id: 'san-0885dr', code: 'SAN-0885DR', category: 'aneis', finish: OURO,
        name: 'Anel Pedrinhas com Borda Ondulada',
        img: '/assets/produtos/san-0885dr.webp',
        desc: 'Frente com pedrinhas e bordinha ondulada que emoldura o brilho. Discreto e elegante para usar todos os dias.',
    },
    {
        id: 'san-0886dr', code: 'SAN-0886DR', category: 'aneis', finish: OURO,
        name: 'Anel Duas Vias com 18 Pedrinhas',
        img: '/assets/produtos/san-0886dr.webp',
        desc: 'Aro trabalhado em duas vias entrelaçadas, adornadas com 18 pedrinhas brilhantes. Glamour e luminosidade em uma peça que vai da rotina ao evento.',
    },
    {
        id: 'san-1328', code: 'SAN-1328', category: 'aneis', finish: PRATA,
        name: 'Anel Frente Trabalhada Jesus',
        img: '/assets/produtos/san-1328.webp',
        desc: 'Frente trabalhada com a escrita "Jesus" em relevo. Uma peça de fé, delicada, que muitas clientes procuram para si e para presentear.',
    },

    /* ===== Pulseiras ===== */
    {
        id: 'spl-1631', code: 'SPL-1631', category: 'pulseiras', finish: OURO,
        name: 'Bracelete Círculo Boleado Xadrez',
        img: '/assets/produtos/spl-1631.webp',
        desc: 'Bracelete aberto de 6,7 cm com pontas em círculo boleado e textura xadrez. Marcante e fácil de colocar, fica lindo com relógio.',
    },
    {
        id: 'spl-1482', code: 'SPL-1482', category: 'pulseiras', finish: OURO,
        name: 'Pulseira Dupla Corações e Pedras Coloridas',
        img: '/assets/produtos/spl-1482.webp',
        desc: 'Duas voltas de 17 cm com elos em coração e pedras coloridas. Alegre e delicada, parece duas pulseiras em uma.',
    },
    {
        id: 'spl-1292', code: 'SPL-1292', category: 'pulseiras', finish: OURO,
        name: 'Pulseira Elos 1x1 com Pedras Coloridas',
        img: '/assets/produtos/spl-1292.webp',
        desc: 'Elos 1x1 de 18 cm intercalados por pedras coloridas e bolinhas. Colorida na medida, combina com o verão e com looks claros.',
    },
    {
        id: 'spl-0087dr', code: 'SPL-0087DR', category: 'pulseiras', finish: OURO,
        name: 'Pulseira Riviera de Zircônias',
        img: '/assets/produtos/spl-0087dr.webp',
        desc: 'Linha contínua de zircônias ao longo de 21 cm, no estilo riviera. A pulseira de festa por excelência, com brilho de joia.',
    },
    {
        id: 'spl-1655', code: 'SPL-1655', category: 'pulseiras', finish: OURO,
        name: 'Pulseira Elos Ovais com Círculos Trabalhados',
        img: '/assets/produtos/spl-1655.webp',
        desc: 'Elos ovais grandes intercalados por círculos trabalhados, 20 cm. Uma pulseira de presença, para quem gosta de peça statement.',
    },
    {
        id: 'spl-2077', code: 'SPL-2077', category: 'pulseiras', finish: PRATA,
        name: 'Pulseira Alhambra 3D com Corações',
        img: '/assets/produtos/spl-2077.webp',
        desc: 'Quatro trevos Alhambra em 3D e corações diamantados em corrente de 17 cm. Inspiração clássica com acabamento brilhante.',
    },

    /* ===== Conjuntos ===== */
    {
        id: 'scj-0376', code: 'SCJ-0376', category: 'conjuntos', finish: OURO,
        name: 'Conjunto Pingente Oval Quadriculado',
        img: '/assets/produtos/scj-0376.webp',
        desc: 'Brinco e colar veneziana de 45 cm com pingente oval quadriculado vazado e zircônia. Conjunto completo, pronto para presentear.',
    },
    {
        id: 'scj-0369', code: 'SCJ-0369', category: 'conjuntos', finish: PRATA,
        name: 'Conjunto Gota Vazada com Pedras Coloridas',
        img: '/assets/produtos/scj-0369.webp',
        desc: 'Gota vazada com pedras coloridas no colar de 45 cm e brincos combinando. Leve, colorido e feminino.',
    },
    {
        id: 'scj-0374', code: 'SCJ-0374', category: 'conjuntos', finish: PRATA,
        name: 'Conjunto Pingente Oval com Zircônia',
        img: '/assets/produtos/scj-0374.webp',
        desc: 'Pingente oval com quadrado central e zircônia, em corrente veneziana de 45 cm, mais o par de brincos. Clássico e versátil.',
    },
    {
        id: 'scj-0370', code: 'SCJ-0370', category: 'conjuntos', finish: PRATA,
        name: 'Conjunto Globinho com Zircônia',
        img: '/assets/produtos/scj-0370.webp',
        desc: 'Globinho cravejado com detalhe em zircônia no colar de 45 cm e brincos iguais. Brilho redondo e delicado para qualquer ocasião.',
    },
    {
        id: 'scj-0353', code: 'SCJ-0353', category: 'conjuntos', finish: PRATA,
        name: 'Conjunto Pedra Coração',
        img: '/assets/produtos/scj-0353.webp',
        desc: 'Coração em pedra azul intensa no pingente de 45 cm e nos brincos. Cor forte que se destaca sobre roupas claras e escuras.',
    },
    {
        id: 'scj-0345', code: 'SCJ-0345', category: 'conjuntos', finish: PRATA,
        name: 'Conjunto Coração Vazado com Pérola',
        img: '/assets/produtos/scj-0345.webp',
        desc: 'Coração vazado com pérola no colar veneziano de 45 cm e brincos combinando. Romântico e delicado, um presente certeiro.',
    },

    /* ===== Tornozeleiras ===== */
    {
        id: 'str-0466', code: 'STR-0466', category: 'tornozeleiras', finish: OURO,
        name: 'Tornozeleira Elos Português com Chapas',
        img: '/assets/produtos/str-0466.webp',
        desc: 'Elos português de 23 cm com chapas ovais lisas que refletem a luz. Fica linda com sandália e vestido de verão.',
    },
    {
        id: 'str-0406', code: 'STR-0406', category: 'tornozeleiras', finish: OURO,
        name: 'Tornozeleira Pingente Leque',
        img: '/assets/produtos/str-0406.webp',
        desc: 'Elos 1x1 achatados de 22 cm com pingente de leque aberto. Detalhe charmoso e discreto para o tornozelo.',
    },
    {
        id: 'str-0441', code: 'STR-0441', category: 'tornozeleiras', finish: OURO,
        name: 'Tornozeleira Olho Grego Vazado',
        img: '/assets/produtos/str-0441.webp',
        desc: 'Corrente de 23 cm com olho grego vazado e trabalhado, símbolo de proteção. Uma das mais pedidas da categoria.',
    },
    {
        id: 'str-0308', code: 'STR-0308', category: 'tornozeleiras', finish: OURO,
        name: 'Tornozeleira Fina com Pedrinhas Coloridas',
        img: '/assets/produtos/str-0308.webp',
        desc: 'Corrente fina de 25 cm pontuada por pedrinhas coloridas. Leve e alegre, quase invisível até a luz bater.',
    },
    {
        id: 'str-0306', code: 'STR-0306', category: 'tornozeleiras', finish: OURO,
        name: 'Tornozeleira Veneziana com Coração',
        img: '/assets/produtos/str-0306.webp',
        desc: 'Veneziana de 23 cm com bolinhas e pingente de coração trabalhado. Delicada e romântica.',
    },
    {
        id: 'str-0520', code: 'STR-0520', category: 'tornozeleiras', finish: PRATA,
        name: 'Tornozeleira Corações Vazados',
        img: '/assets/produtos/str-0520.webp',
        desc: 'Elos português de 22 cm com corações vazados ao longo da corrente. Brilho prateado e leve para o dia a dia.',
    },
];
