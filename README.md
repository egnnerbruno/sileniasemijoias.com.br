# Sil Styllus Semijoias

Site institucional de página única da Sil Styllus Semijoias, revendedora oficial Styllus em Vitória/ES.
React 19 + TypeScript + Vite, CSS Modules, sem backend: todas as conversões vão para o WhatsApp.

## Rodar localmente

```bash
npm install
npm run dev
```

## Publicar (Hostinger, hospedagem compartilhada)

```bash
npm run build
```

Envie **o conteúdo** da pasta `dist/` para `public_html/` no Gerenciador de Arquivos da Hostinger,
substituindo o que estiver lá. O `.htaccess` (HTTPS, cache e compressão), o `robots.txt` e o
`sitemap.xml` já saem dentro de `dist/`.

## Estrutura

| Pasta / arquivo | O que é |
|---|---|
| `src/components/` | Uma pasta por seção: Header, Hero, About, Products, Instagram, ResellerBanner, Footer, Modal |
| `src/data/products.ts` | Catálogo fixo da Coleção: 48 peças reais da Styllus, 6 por categoria |
| `src/hooks/useScrollReveal.ts` | Animação de entrada das seções ao rolar (classes `.reveal-*`) |
| `src/index.css` | Tokens de design (cores, fontes, espaçamentos) e utilitários globais |
| `public/assets/produtos/` | Fotos das peças, WebP 800x800, nomeadas pelo código Styllus |
| `public/assets/instagram/` | Os 4 posts da seção Instagram, WebP 4:5 (800x1000) |
| `public/assets/` | Logo, foto da fundadora, fundo e modelo do hero, ícones e imagem de compartilhamento |

## Atualizações comuns

- **Trocar uma peça da Coleção:** salve a foto em `public/assets/produtos/` (WebP quadrado) e edite a entrada em `src/data/products.ts`.
- **Trocar os posts do Instagram:** substitua os arquivos em `public/assets/instagram/` ou edite a lista no topo de `src/components/Instagram.tsx`.
- **Número de WhatsApp:** as constantes `WA_*` ficam no topo de cada componente que tem botão de contato.
