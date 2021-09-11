# Projeto sds3

# Sobre o projeto

É uma aplicação simples de vendas. Tem o intuito de aprender sobre tecnologias como o react, e seus pilares: state, hook e props. E também navegação de páginas, além de consumir uma API. A ideia da API também tem o intuito de praticar Spring boot, a criação de um modelo de domínio, conexão de consulta com banco de dados através do Spring Data, a camada de serviços(services) o uso de DTO(data transfer objetcs) e a criação e exposição de verbos/rotas HTTP.

A aplicação está hospedada na nuvem, com seu frontend hospedados no netlifly(https://www.netlify.com/) e o backend no heroku(https://dashboard.heroku.com/).

# Layout
![Tela 1](https://github.com/victor35/projeto-sds3/blob/main/assets/tela1-projeto-sds3.png)
![Tela 2](https://github.com/victor35/projeto-sds3/blob/main/assets/tela3-projeto-sds3.png)
![Tela 3](https://github.com/victor35/projeto-sds3/blob/main/assets/tela2-projeto-sds3.png)
![Tela 4](https://github.com/victor35/projeto-sds3/blob/main/assets/tela4-projeto-sds3.png)

# Tecnologias
## Backend
  - Java 11
  - Spring boot
  - Spring data
  - Spring security
  - PostgreSql
  - Banco de memória H2 do Spring Boot
## Frontend  
  - React
  - apex charts (para gráficos)
  - Bootstrap

# Como Executar a aplicação
## URL
https://dsvendas-victor35.netlify.app/

pode demorar um pouco para carregar, pois a versão do sistema de nuvem é a versão FREE.
## Backend
```bash

# clonar repositório
git clone https://github.com/victor35/projeto-sds3.git

# entrar na pasta do projeto
cd projetos-sds3/backend

# abrir no eclipse ou STS(Spring Tool Suite)
import existing maven projects

# iniciar projeto
rode a aplicação

```

## Frontend
```bash

# clonar repositório
git clone https://github.com/victor35/projeto-sds3.git

# entrar na pasta do projeto
cd projetos-sds3/frontend

# baixar dependências via npm
npm i

# iniciar projeto
npm start

# ou via yarn, baixar dependências
yarn install

# iniciar projeto
yarn start

```


