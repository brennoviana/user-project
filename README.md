# User Project

Este é um projeto que utiliza React com Vite para o frontend e Express.js para o backend, ambos rodando em contêineres Docker.

## Pré-requisitos

Antes de iniciar, certifique-se de que você tem o Docker e o Docker Compose instalados em sua máquina. Estas ferramentas são necessárias para construir e rodar os contêineres do projeto.

- [Instalar Docker](https://docs.docker.com/get-docker/)
- [Instalar Docker Compose](https://docs.docker.com/compose/install/)

## Estrutura do Projeto

O projeto está dividido em duas partes principais:

- `react-project`: Diretório contendo o código fonte do frontend, construído com React e Vite.
- `express-project`: Diretório contendo o código fonte do backend, construído com Express.js.

## Como rodar o projeto

Para iniciar o projeto, siga os passos abaixo:

1. Clone o repositório:

   git clone <URL_DO_REPOSITORIO>
   cd user-project

2. Construir e iniciar os contêineres:

   docker-compose up --build