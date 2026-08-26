# Sitio Riacho Doce - Versao Otimizada

Nova versao consolidada do site (baseada em index.html). Os originais permanecem intactos na pasta raiz.

## Estrutura
- index.html: pagina unica canonica (elimina as 3 homepages duplicadas antigas)
- styles.css: CSS extraido + melhorias (reduced-motion, focus-visible, nav-brand)
- main.js: scroll passive, menu acessivel (aria-expanded), IntersectionObserver com unobserve
- manifest.json corrigido + icons PNG (192/512/maskable) gerados da logomarca
- favicon.ico, robots.txt, sitemap.xml, netlify.toml (cache headers)

## Melhorias aplicadas
- SEO: meta description, canonical, Open Graph/Twitter Card, JSON-LD LodgingBusiness
- Bug de producao corrigido: saladeestar.jpg -> saladeEstar.jpg (case-sensitivo no Netlify)
- Acessibilidade: alts corretos, aria-hidden em icones decorativos, title no iframe, rel=noopener nos links externos, prefers-reduced-motion, foco visivel
- Performance: preconnect fontes, pesos reduzidos, preload hero, width/height anti-CLS nas imagens lazy, hero como img fetchpriority=high
- Conteudo: estatistica 10 pessoas, typos corrigidos, ano do rodape dinamico, legendas coerentes

## Nao incluidos (antigos nao utilizados)
aguascristalinas.webp, orio2.jpg, areagormet2.jpg, riacho-doce.html, v2-pool-recreation.html, pool-test.txt, logoMarca - Copy.jpg, template-*.html

## Publicar
Arraste esta pasta para app.netlify.com/drop ou conecte o repo (publish dir = nova-versao).
