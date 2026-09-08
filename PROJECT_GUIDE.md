# Guia do projeto — Thiago Biagi Portfolio

Este arquivo existe para qualquer IA ou pessoa conseguir continuar o projeto sem perder o contexto.

## Objetivo

Site-portfólio visual de Thiago Biagi, stylist, editor de moda e consultor criativo. A linguagem deve parecer editorial, limpa, sofisticada e imagética — mais revista/portfolio do que site comercial comum.

## Como pensar o site

- O site é uma seleção profissional, não um arquivo pessoal.
- Priorizar trabalhos com celebridades, capas, editoriais, campanhas, fashion films e estudos de styling.
- Evitar fotos pessoais, bastidores sem força visual ou imagens que pareçam “sobras”.
- Manter bastante respiro branco, grid irregular e sensação de curadoria.
- Não transformar cada seção em uma galeria enorme logo de cara. Quando houver muitas imagens, usar uma seleção enxuta na página e deixar o restante em pop-up/study.

## Estrutura principal

- `app/page.tsx`: conteúdo, listas de imagens, seções, estudos e pop-ups.
- `app/globals.css`: layout, grid, responsividade e estilos visuais.
- `public/portfolio/`: imagens e vídeos usados no site.
- `.openai/hosting.json`: configuração do Sites/Codex. Não alterar o `project_id`.

## Regras importantes de curadoria

- “Selected archive” e “Portfolio” devem ser tratados como a mesma área.
- A navegação pode mostrar “Portfolio”, mas não precisa duplicar uma seção separada chamada “Selected archive”.
- Fotos limpas devem ficar separadas de legendas/metadados.
- Não usar imagens quebradas, pretas/placeholder ou sem carregamento visível.
- Antes de publicar, sempre conferir se o site compila.

## Carnan + Niemeyer

- Deve aparecer na parte inicial do site, acima das capas da Marina.
- O desfile aconteceu em 04 Setembro 2026.
- A abertura deve ser enxuta, com poucas imagens fortes.
- O vídeo `bts-carnan.mov` deve aparecer abaixo das fotos principais da seção Carnan.
- O restante do material pode ficar no pop-up/study de Carnan + Niemeyer.
- Fundo da seção Carnan deve permanecer branco, como o restante do portfólio.

## PIET + Riachuelo

- Tem muitas fotos; a página principal deve mostrar apenas as melhores escolhidas.
- A quinta imagem abre um pop-up com o restante das fotos e vídeos, no mesmo espírito dos studies de celebrities.

## Celebrities

- Cada celebridade importante pode ter card e, quando houver material suficiente, um study em pop-up.
- Jão deve aparecer em Celebrities.
- A capa de Jão da Harper’s Bazaar Man Brasil deve aparecer em Magazine/Covers.

## Magazine

- Marina Ruy Barbosa / Marie Claire Brasil fica em destaque com quatro capas.
- A seção Magazine reúne capas, com possibilidade de abrir editoriais relacionados.

## Publicação

- O domínio público é `https://thiagobiagi.com`.
- O site é publicado via Sites/Codex, não pelo editor visual do Wix.
- O Wix pode estar relacionado ao domínio/DNS, mas o conteúdo atual é editado pelo código deste projeto.
- Para publicar: validar build, salvar uma versão e fazer deploy pelo fluxo de Sites.

## Para outra IA continuar

Antes de editar, leia:

1. `PROJECT_GUIDE.md`
2. `app/page.tsx`
3. `app/globals.css`

Depois:

1. Faça a alteração pedida.
2. Preserve o estilo editorial existente.
3. Não reorganize o site inteiro sem pedido explícito.
4. Rode a validação/build.
5. Só publique se o usuário pedir claramente para atualizar/subir o site.
