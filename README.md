# Projeto Mobile - Aluno

Este é um projeto de aplicativo móvel desenvolvido com React Native e Expo. O objetivo principal é demonstrar um fluxo de autenticação de usuário (aluno), gerenciamento de estado de autenticação com a Context API e interação com uma API externa para validação de dados.

## ✨ Funcionalidades

- Tela de Login com validação de formulário.
- Navegação entre telas públicas e privadas.
- Gerenciamento de estado de autenticação global utilizando a Context API do React.
- Consumo de API externa para autenticação.
- Validação de CPF.
- Interface estilizada com Styled Components.

---

## 🚀 Tecnologias Utilizadas

Este projeto foi construído com as seguintes tecnologias e bibliotecas:

- **[React Native](https://reactnative.dev/)**: Framework para desenvolvimento de aplicativos móveis multiplataforma.
- **[Expo](https://expo.dev/)**: Plataforma e conjunto de ferramentas para construir e implantar aplicativos React Native.
- **[TypeScript](https://www.typescriptlang.org/)**: Superset do JavaScript que adiciona tipagem estática.
- **[React Navigation](https://reactnavigation.org/)**: Solução de roteamento e navegação (`@react-navigation/native`, `@react-navigation/native-stack`, `@react-navigation/bottom-tabs`).
- **Axios**: Cliente HTTP para realizar requisições à API.
- **React Hook Form**: Biblioteca para gerenciamento de formulários de forma performática.
- **Zod**: Biblioteca de declaração e validação de esquemas de dados, utilizada com o React Hook Form.
- **Styled Components**: Para estilização de componentes com CSS-in-JS.
- **Async Storage**: Para armazenamento local de dados (como o token de autenticação).
- **iscpf**: Utilitário para validação de números de CPF.

---

## 📋 Pré-requisitos

Antes de começar, você vai precisar ter as seguintes ferramentas instaladas em sua máquina:

- **Node.js** (versão LTS recomendada)
- **Yarn** ou **npm** (que já vem com o Node.js)
- **Expo CLI**:
  ```bash
  npm install -g expo-cli
  ```
- **Expo Go**: Aplicativo para Android e iOS que permite visualizar o projeto em um dispositivo físico sem a necessidade de compilação nativa.

---

## ⚙️ Instalação e Execução

Siga os passos abaixo para configurar e rodar o projeto em seu ambiente de desenvolvimento.

1. **Clone o repositório:**
   ```bash
   git clone <URL_DO_SEU_REPOSITORIO>
   ```

2. **Navegue até a pasta do projeto mobile:**
   ```bash
   cd mobileRequestAuthenticationContextAPIAluno/mobile
   ```

3. **Instale as dependências:**
   ```bash
   npm install
   ```
   ou se preferir usar o Yarn:
   ```bash
   yarn install
   ```

4. **Execute o projeto:**
   ```bash
   npm start
   ```
   ou
   ```bash
   expo start
   ```

5. **Abra no seu dispositivo:**
   - Após executar o comando acima, o Expo Dev Tools será aberto no seu navegador.
   - Escaneie o QR Code exibido com o aplicativo **Expo Go** no seu celular (Android ou iOS).
   - Você também pode optar por rodar em um emulador Android ou simulador iOS.

---

## 📜 Scripts Disponíveis

No diretório do projeto, você pode executar:

- `npm start`: Inicia o servidor de desenvolvimento do Expo.
- `npm run android`: Inicia o aplicativo em um emulador/dispositivo Android conectado.
- `npm run ios`: Inicia o aplicativo em um simulador/dispositivo iOS conectado.
- `npm run web`: Inicia o aplicativo em um navegador web.