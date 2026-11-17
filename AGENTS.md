<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Contexto do Projeto: Talles Furtado - Personal Trainer (Landing Page)

Este repositório contém a landing page profissional e o site institucional do personal trainer e atleta de fisiculturismo **Talles Furtado** (Time TF). O projeto foi desenvolvido para conversão de clientes, exibição de planos de consultoria, portfólio de resultados de alunos, conquistas em campeonatos e engajamento com a comunidade fitness.

---

## 🛑 Regra Crítica: Autorização Obrigatória Antes de Qualquer Alteração

- **NUNCA modifique, crie ou exclua arquivos diretamente sem permissão prévia.**
- Antes de executar **qualquer** alteração no código, você deve obrigatoriamente:
  1. Explicar de forma breve e clara o que pretende fazer e quais arquivos serão afetados.
  2. Solicitar explicitamente a minha autorização.
- Aguarde a minha confirmação antes de prosseguir com a escrita ou edição dos arquivos.

---

## 🛠️ Stack Tecnológica

- **Framework:** Next.js (App Router)[cite: 1]
- **Biblioteca UI / Linguagem:** React, TypeScript[cite: 1]
- **Estilização:** Tailwind CSS v4 (`@tailwindcss/postcss`)[cite: 1]
- **Animações:** Motion (`motion/react`)[cite: 1]
- **Carrosséis:** Embla Carousel (`embla-carousel-react`)[cite: 1]
- **Gerenciamento de Estado Global:** Zustand (`zustand` para controle da seção ativa na navbar/menu mobile)[cite: 1]
- **Ícones:** React Icons (`react-icons`)[cite: 1]
- **Qualidade de Código & Linting:** ESLint, Prettier com o plugin `prettier-plugin-tailwindcss`[cite: 1]

---

## 📂 Arquitetura de Pastas

- `src/app/`: Rotas do Next.js App Router (`page.tsx`, `layout.tsx`, `globals.css`)[cite: 1]
- `src/components/`: Componentes modulares divididos por seções da landing page (`Home`, `Sobre`, `Beneficios`, `Planos`, `Resultados`, `Conquistas`, `FeedBack`, `TimeTF`, `NavBar`, `MobileMenu`, etc.)[cite: 1]
- `src/components/animatedComponents/`: Componentes reutilizáveis de animação baseados em `motion/react` (FadeIn, SlideUp, StaggerContainer, variants)[cite: 1]
- `src/components/carousel/`: Componente centralizado e flexível de carrossel (`Carousel.tsx`)[cite: 1]
- `src/store/`: Stores globais (ex: `useActiveSectionStore.ts`)[cite: 1]
- `public/`: Assets estáticos (imagens de alunos, campeonatos, logotipos, vídeos e ícones)[cite: 1]

---

## 📐 Regras e Diretrizes de Codificação (Coding Standards)

Para manter o código limpo, de fácil manutenção e acessível para desenvolvedores em nível júnior, siga estritamente as regras abaixo ao criar ou modificar componentes:

### 1. Clareza e Simplicidade para Desenvolvedores Júnior

- **Código legível:** Evite abstrações excessivas, funções de alta complexidade ou encadeamentos complexos de métodos quando uma abordagem direta e linear for mais fácil de entender.
- **Tipagem explícita:** Utilize interfaces ou types claros do TypeScript para as propriedades (`Props`) dos componentes.
- **Estrutura modular:** Cada seção da landing page deve ser isolada em seu próprio componente dentro de `src/components/`.[cite: 1]

### 2. Diretrizes de Comentários (Documentação Interna)

- **Comente por blocos lógicos:** Adicione comentários explicativos em blocos de lógica complexa, manipulação de estado, efeitos colaterais (`useEffect`) ou lógica de scroll/interação.
- **Explique o "Porquê":** O comentário deve justificar _por que_ uma abordagem foi tomada (ex: otimização de performance, tratamento de comportamento de scroll em containers customizados), e não apenas traduzir o código literal.
- **Proibido comentários redundantes:** **NUNCA** comente o óbvio. Evite comentários em linhas de importação, variáveis simples ou renderizações JSX diretas que não agregam valor (Ex: Evite `// Importa o React`, `// Renderiza a div`, `// Constante com o nome`).

### 3. Padrões de Estilização e Responsividade

- Utilize **Tailwind CSS** para estilização.[cite: 1]
- Mantenha a consistência com o tema escuro padrão da aplicação (`bg-deepBlue`, `text-myWhite`, cores customizadas `--color-mainTheme` e `--color-secondaryTheme`).[cite: 1]
- Garanta total responsividade (Mobile First), utilizando a barra de navegação inferior (`MobileMenu`) em telas menores e a navbar superior (`NavBar`) em desktops.[cite: 1]

### 4. Animações e Performance

- Utilize os componentes wrapper de animação existentes em `src/components/animatedComponents/` (como `SlideUp`, `FadeIn`) em vez de recriar lógica de animação do zero.[cite: 1]
- Respeite as preferências de redução de movimento do usuário (`prefers-reduced-motion`) sempre que implementar novas animações globais.[cite: 1]
- Otimize mídias (imagens via componente `<Image />` do Next.js ou tags com `loading="lazy"`, e vídeos em loop otimizados).[cite: 1]
