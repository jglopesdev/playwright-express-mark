# Playwright eXpress

Projeto criado a partir dos conhecimentos aprendidos durante o curso [Playwright eXpress](https://www.udemy.com/course/playwright-express/), ministrado pelo [Fernando Papito](https://www.udemy.com/user/fernando-papito/) onde  utilizei o `Playwright` para desenvolver testes E2E escritos em Typescript, para validar uma aplicação de gerenciamento de tarefas.         

Através de API manuseei o banco de dados, facilitando a preparação do ambiente/massa de testes, tornando os testes totalmente independentes. Além disso, integrei com uma pipeline de CI no GitHub Actions.

## Pré condições

É necessário ter instalado o Node.js e o yarn ou npm para executar este projeto.

> Eu usei a versão `v18.20.7` and `1.3.2` do Node.js e yarn, respectivamente. Eu sugiro que você use a mesma versão do Node.js para não ter problemas para subir a api e o servidor web.

## Instalação

No diretorio raíz do projeto, rode o comando `yarn install` para instalar as dependencias de desenvolvimento.

###### Subir API e banco de dados
Acesse o diretório apps/api e execute os comando `yarn install` para baixar as dependências da API.      
Execute o comando `yarn db:init` para inicializar o banco de dados SQLite      
Execute o comando `yarn dev` para colocar a API no ar


###### Subir aplicação Web
Acesse o diretório apps/web e execute os comando `yarn install` para baixar as dependências. 
Execute o comando `yarn dev` para colocar a aplicação Web no ar

## Testes

Neste projeto, você pode executar os testes em viewports de desktop e mobile.

###### Desktop
Execute o comando `yarn playwright test tasks` (não sendo necessário colocar tasks.spec.ts, porque o Playwright já entende somente com o nome do arquivo) para executar o teste em modo headless.      
Execute o comando `yarn playwright test tasks --ui` para executar o teste em modo interativo (UI).     
Execute o comando `yarn playwright test tasks --headed` para executar o teste e ver toda ação sendo executada.      
Execute o comando `yarn playwright test tasks --debug` para executar o teste pela interface de debug.       
