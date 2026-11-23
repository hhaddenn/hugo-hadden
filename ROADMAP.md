# ROADMAP

## Por fazer

### Atualizar a secção Projects

- [ ] Confirmar que os repos do ticktask e do pawtrait são públicos (se não forem, `github: null`)
- [ ] Acrescentar um campo `status` aos projetos (`'done'` / `'in-progress'`)
- [ ] No `ProjectCard`, mostrar um badge "In progress" só quando `status === 'in-progress'`
- [ ] Adicionar o Ticktask (React, Django, PostgreSQL, Docker)
- [ ] Adicionar o Pawtrait (React, Vite, Tailwind, Canvas API)
- [ ] Tirar o card placeholder "Recipe App": o whisk-taker e o stitch-happens só entram quando tiverem algo para mostrar
- [ ] Screenshots reais em `src/assets/` para substituir o placeholder (o Pawtrait a meio do desenho dá uma boa imagem)
- [ ] Testar com `npm run dev` e `npm run lint`

### Deploy no Cloudflare Pages (sair da Raspberry)

Objetivo: cada push para `main` publica o site sozinho, sem entrar na Raspberry.

- [ ] Confirmar que `npm run build` e `npm run preview` funcionam localmente (é o que o Pages vai correr)
- [ ] Cloudflare dashboard → Workers & Pages → criar projeto Pages → ligar ao repo `hugo-hadden` do GitHub
- [ ] Configuração do build: preset Vite (ou React (Vite)), build command `npm run build`, output `dist`, production branch `main`
- [ ] Variável de ambiente `NODE_VERSION` com uma versão suportada pelo Vite 8 (ver os requisitos de Node na doc do Vite)
- [ ] Primeiro deploy: testar o site no URL `*.pages.dev` (secções, imagens, links, favicon, modo escuro)
- [ ] Abrir uma branch de teste e ver o URL de preview que o Pages cria para ela
- [ ] Custom domain: adicionar `hugo-hadden.com` (e `www`, se o usares) ao projeto Pages
    - Se já existir um registo DNS para esse nome (ex: o CNAME do tunnel), o Pages pode pedir para o removeres primeiro. Fazer numa hora calma: o site pode ficar uns minutos em baixo
    - Não mexer nos registos de `finance.` e `financeapi.`, que continuam a apontar para a Raspberry
- [ ] Confirmar que `https://hugo-hadden.com` serve a versão do Pages (HTTPS ok, sem avisos)
- [ ] Na Raspberry (última vez!): tirar a ingress do `hugo-hadden.com` do tunnel e parar/remover o que servia o portfolio
- [ ] Atualizar o README com o link do site e uma linha sobre o deploy

Notas: o Pages serve o site na raiz do domínio, por isso não é preciso mexer no `base` do Vite. Não há router, por isso também não é preciso regra de fallback para SPA.

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
