# ROADMAP

## Por fazer

### Botão de download do CV

- [ ] Rever o PDF antes de o publicar: tirar a morada completa e talvez o telefone (email + LinkedIn chegam)
- [ ] Pôr o PDF em `public/` com um nome simples, sem espaços nem acentos (URL fixo, ex.: `/cv.pdf`)
- [ ] Adicionar o botão no Hero, junto aos outros, com `<Button asChild><a href="…" download="…">`
- [ ] Ícone de download do `lucide-react`
- [ ] Acessibilidade: o texto do botão deve indicar que é um PDF
- [ ] Testar com `npm run dev` e com `npm run build && npm run preview`
- [ ] Se o deploy for num subpath (ex.: GitHub Pages), confirmar que o link continua a funcionar (ver `base` no Vite)

Notas: o atributo `download` só funciona com ficheiros do mesmo domínio. Ficheiros em `public/` não levam hash no nome; os importados de `src/assets/` levam.

### Avaliar migração para Astro (depois do deploy)

Não é prioritário: primeiro o site tem de estar online.

- [ ] Correr o Lighthouse no build (`npm run build && npm run preview` → DevTools → Lighthouse) e guardar os resultados
- [ ] Ler o tutorial oficial do Astro (sintaxe `.astro`, islands, integração com Tailwind e React)
- [ ] Migrar numa branch à parte, como projeto de aprendizagem
- [ ] Decidir o que fazer com os componentes shadcn: manter como islands React ou converter para `.astro`
- [ ] Comparar o Lighthouse antes e depois e decidir se a migração fica

Notas: o Astro gera HTML estático sem JS por defeito, o que é ideal para portfolios e sites de pequenos negócios (relevante para freelance). Vale mais a pena se o site ganhar um blog ou várias páginas.

## Feito

- [x] CLAUDE.md a importar as regras base do devHelper
