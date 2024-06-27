# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

Projeto de Lista de Tarefas
Este é um simples aplicativo de lista de tarefas desenvolvido em React. O projeto permite adicionar, marcar como concluída e deletar tarefas.

Funcionalidades
Adicionar nova tarefa
Marcar tarefa como concluída/não concluída
Deletar tarefa
Pré-requisitos
Node.js (versão 12 ou superior)
npm (gerenciador de pacotes do Node)

Clone o repositório para a sua máquina local

O projeto estará disponível no endereço http://localhost:3000.

App.js: Componente principal do projeto, que contém a lógica para adicionar, concluir e deletar tarefas.
styles.js: Arquivo contendo os estilos para os componentes do projeto.
index.js: Ponto de entrada da aplicação React.

React: Biblioteca JavaScript para construção de interfaces de usuário.
uuid: Biblioteca para geração de IDs únicos.
react-icons: Biblioteca de ícones para React.
Uso de uma biblioteca avançada que usa Css e javaScript

State
list: Estado que guarda a lista de tarefas. Cada tarefa é um objeto com id, task e finished.
inputTask: Estado que guarda o valor do input para adicionar uma nova tarefa.
Funções
inputMudou(event): Atualiza o estado inputTask conforme o usuário digita.
clickButton(): Adiciona uma nova tarefa à lista quando o botão é clicado.
finishTask(id): Alterna o estado finished da tarefa com o ID fornecido.
deleteTask(id): Remove a tarefa com o ID fornecido da lista.
Estilização
Os componentes são estilizados utilizando styled-components. Abaixo estão os componentes estilizados:

Container
ContainerCenter
InputList
ButtonList
ListItem