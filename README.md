# SeaStay

Uma aplicação web moderna para explorar e filtrar propriedades para aluguel.

## 🚀 Live Demo

A aplicação está disponível para visualização e teste no seguinte link:

[**https://seastay.vercel.app**](https://seastay.vercel.app)

---

## 🔧 Instalação e Execução

### Pré-requisitos

* Node.js (versão 18.x ou superior)
* NPM ou Yarn

### Setup

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/GuilhermeCiole/SeaStay.git
    cd SeaStay
    ```

2.  **Instale as dependências:**
    ```bash
    # Usando NPM
    npm install

    # Ou usando Yarn
    yarn
    ```

3.  **Execute o servidor de desenvolvimento:**
    ```bash
    # Usando NPM
    npm run dev

    # Ou usando Yarn
    yarn dev
    ```

4.  Abra seu navegador e acesse [http://localhost:3000](http://localhost:3000) para ver a aplicação em funcionamento.

---

## ✨ Tecnologias Utilizadas

* Next.js 14 (App Router)
* React 18 & TypeScript
* Styled Components para estilização
* TanStack Query (React Query) para data fetching e cache
* Context API para gerenciamento de estado global
* Jest & React Testing Library para testes

## 📋 Funcionalidades

* Listagem de propriedades com busca e filtragem dinâmica
* Visualização de página de detalhes completa para cada imóvel
* Interface moderna e totalmente responsiva (mobile-first)
* Navegação otimizada entre páginas

## 🏗️ Estrutura do Projeto

```
src/
  ├── app/          # Páginas, layouts e estilos globais
  ├── components/   # Componentes React reutilizáveis
  ├── contexts/     # Definição dos Contextos
  ├── lib/          # Utilitário para integração do Styled Components (SSR)
  ├── providers/    # Componentes Provedores de Contexto
```

---

## 🎯 Decisões Técnicas

* **Framework e Renderização:** A aplicação foi construída com **Next.js 14** e **React**, utilizando a **App Router**. Para a página de listagem de imóveis, foi adotada a estratégia de **Renderização no Servidor (SSR)**. Esta abordagem garante que os dados mais recentes estejam sempre disponíveis para o usuário a cada requisição e beneficia o **SEO**, pois a página chega ao navegador já com o conteúdo renderizado.

* **Linguagem e Organização de Código:** O **TypeScript** foi utilizado em todo o projeto para garantir a segurança de tipos e a manutenibilidade do código. A arquitetura segue uma estrutura **limpa e escalável**, com uma clara separação de responsabilidades. A **co-localização** de arquivos (componentes, tipos, testes e estilos) foi aplicada para promover a modularidade.

* **Estilização e Responsividade:** A estilização foi feita com **Styled Components**, permitindo a criação de **componentes reutilizáveis** e totalmente encapsulados. A abordagem **mobile-first** foi seguida para garantir uma experiência de usuário de qualidade em qualquer tamanho de tela.

* **Gerenciamento de Estado e Consumo de API:** A arquitetura de estado foi dividida de forma clara:
    * **Estado do Servidor:** Gerenciado com **TanStack Query (React Query)**, que envolve um cliente Fetch API para consumir os dados. A biblioteca abstrai a complexidade de *data fetching*, cache e revalidação.
    * **Estado da UI:** Para o estado global dos filtros, foi utilizada a **Context API** do React. Essa escolha manteve o projeto leve e atendeu à necessidade de compartilhamento de estado de forma eficiente.

* **Fundamentos e Testes:** Foi dada atenção especial à **acessibilidade básica** (atributos `alt`, roles) e ao uso correto de **semântica HTML5**. A suíte de testes foi configurada com **Jest** e **React Testing Library** para garantir a confiabilidade das funcionalidades críticas.

---

## 📈 Pontos de Melhoria e Próximos Passos

* **Experiência de Carregamento (UX):**
    * **O que:** Implementar **"Loading Skeletons"** nos cards de propriedades e na página de detalhes.
    * **Por que:** Para melhorar a percepção de performance do usuário, mostrando um placeholder da interface enquanto os dados reais estão sendo carregados, em vez de um spinner genérico.

* **Refatoração da Interface de Filtros:**
    * **O que:** Repensar a forma como os filtros são exibidos, possivelmente implementando um modal ou um painel lateral retrátil.
    * **Por que:** A exibição atual dos filtros é funcional, mas pode ser aprimorada para otimizar o espaço na tela principal e oferecer uma interação mais fluida, especialmente em dispositivos móveis.

* **Correção das Imagens da API:**
    * **O que:** Substituir as imagens de placeholder, utilizadas temporariamente, pelas URLs corretas assim que a API fornecer os links funcionais.
    * **Por que:** As URLs de imagem retornadas pela API apresentaram instabilidade durante o desenvolvimento. O uso de placeholders foi uma solução pragmática para não interromper a construção da UI.

* **Paginação ou Scroll Infinito:**
    * **O que:** Adicionar paginação na lista de propriedades.
    * **Por que:** Para garantir a escalabilidade da aplicação, evitando carregar milhares de imóveis de uma só vez, o que melhoraria drasticamente a performance inicial da página principal.

* **Cobertura de Testes Avançada:**
    * **O que:** Aumentar a cobertura de testes, implementando testes de integração mais complexos.
    * **Por que:** Para garantir que os fluxos completos do usuário (ex: aplicar um filtro e navegar para a página de detalhes) funcionem como esperado em um ambiente similar ao de produção.
