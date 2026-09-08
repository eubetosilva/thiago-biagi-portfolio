# Como continuar este site em outra IA

Este projeto pode ser aberto no Codex, Claude Code, Cursor, Windsurf ou outra IA que consiga editar arquivos locais/GitHub.

## Antes de pedir alterações

Peça para a IA ler primeiro:

1. `PROJECT_GUIDE.md`
2. `app/page.tsx`
3. `app/globals.css`

Mensagem sugerida:

> Leia `PROJECT_GUIDE.md` antes de editar. Preserve a linguagem editorial do site Thiago Biagi. Faça apenas a alteração pedida, valide o build e não publique sem autorização explícita.

## Arquivos principais

- Conteúdo e ordem das seções: `app/page.tsx`
- Aparência e responsivo: `app/globals.css`
- Fotos e vídeos: `public/portfolio/`

## Comandos úteis

Instalar dependências, se necessário:

```bash
pnpm install
```

Rodar local:

```bash
pnpm dev
```

Validar antes de publicar:

```bash
pnpm build
```

## Cuidados

- Não publicar sem o Beto pedir claramente.
- Não apagar imagens originais sem confirmação.
- Não adicionar fotos pessoais ao portfólio.
- Não duplicar “Selected archive” e “Portfolio”; são a mesma área.
- Se mexer em Carnan + Niemeyer, manter o destaque inicial acima da Marina.
