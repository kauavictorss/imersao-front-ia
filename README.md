# Imersão Front-End + IA 🎬

Este projeto é o resultado da **Imersão Front-End com IA da Alura**, uma experiência prática focada em unir o desenvolvimento web moderno com o poder das ferramentas de Inteligência Artificial, como o **GitHub Copilot**.

O objetivo principal foi recriar a interface da Netflix, indo além do visual estático e implementando funcionalidades complexas com foco em performance, acessibilidade e experiência do usuário (UX).

## 🚀 Funcionalidades Implementadas

- **Gerenciamento Dinâmico de Perfis:**
  - Sistema de "Quem está assistindo?" totalmente funcional.
  - Criação, edição e exclusão de perfis (CRUD) persistidos no `localStorage`.
  - Limite de até 5 perfis ativos.
  - Escolha personalizada de avatares.
- **Catálogo de Filmes e Séries:**
  - Navegação inspirada na interface real, com carrosséis categorizados.
  - Preview de trailers via **YouTube API** ao passar o mouse (hover) nos cards.
  - Pontuação de relevância e badges de classificação de idade gerados dinamicamente.
- **Otimização de Alto Nível (Lighthouse):**
  - Foco em Core Web Vitals (Performance, Acessibilidade, Best Practices e SEO).
  - Notas próximas a 100 em acessibilidade e SEO.
  - Otimizações de imagens (Lazy Loading, Preload de LCP) e fontes (`font-display: swap`).

## 🤖 O Papel da IA no Desenvolvimento

Este projeto foi construído utilizando o **GitHub Copilot** como um parceiro de pair programming. A IA foi fundamental para:

1.  **Aceleração de Lógica:** Geração de estruturas de dados e funções complexas para manipulação do DOM e `localStorage`.
2.  **Refatoração de Código:** Sugestões para tornar o código mais limpo, modularizado (usando ES6 Modules) e eficiente.
3.  **Acessibilidade e SEO:** Identificação proativa de melhorias semânticas, atributos ARIA e metadados necessários para uma web inclusiva.
4.  **Resolução de Bugs:** Diagnóstico rápido de erros de layout e lógica de interface.

## 🛠️ Tecnologias Utilizadas

- **HTML5:** Estrutura semântica rigorosa.
- **CSS3:** Variáveis (Custom Properties), Flexbox, Grid e animações refinadas.
- **JavaScript (ES6+):** Manipulação dinâmica do DOM, persistência de dados e modularização.
- **GitHub Copilot:** Inteligência Artificial integrada ao fluxo de trabalho.

## 📂 Estrutura do Projeto

```text
C:\Projetos\imersao-front-ia\
├── index.html          # Página de login/seleção de perfis
├── assets/             # Recursos visuais (imagens, ícones)
├── styles/             # Estilos globais e da página de login
├── scripts/            # Lógica da página de seleção de perfis
└── catalogo/           # Módulo do catálogo principal
    ├── catalogo.html   # Estrutura do catálogo
    ├── catalogo.css    # Estilos específicos do catálogo
    └── js/             # Componentes e lógica modular (Carrosséis, Cards)
```

## 🏁 Como Executar o Projeto

1.  **Clone este repositório:**
    ```bash
    git clone https://github.com/seu-usuario/imersao-front-ia.git
    ```
2.  **Abra o projeto:**
    - Utilize a extensão **Live Server** no VS Code para uma melhor experiência (garantindo o funcionamento correto dos ES6 Modules); ou
    - Simplesmente abra o arquivo `index.html` no seu navegador favorito.

---

## ✍️ Autor

<div align="center">
  <img src="https://github.com/kauavictorss.png" width="150px" style="border-radius: 50%;" alt="Kauã Victor"/>
  <br><br>
  <strong>Kauã Victor Silva dos Santos</strong>
  <br><br>

[![GitHub](https://img.shields.io/badge/GitHub-kauavictorss-181717?style=for-the-badge&logo=github)](https://github.com/kauavictorss)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Kauã_Victor_S._Santos-0A66C2?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/kaua-victor-santos/)
</div>

---
## 🎓 Certificação Alura

Projeto desenvolvido como parte da **Imersão Front-End com IA** da **[Alura](https://www.alura.com.br)**, com foco em tecnologias frontend modernas e produtividade com ferramentas de Inteligência Artificial.

[![Certificado Alura](https://img.shields.io/badge/Certificado-ALura-000080?style=for-the-badge&logo=douban)](https://cursos.alura.com.br/immersion/imersao-front-end-iii/user/kauavictor/certificate)
