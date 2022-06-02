## Como instalar

## Pre-requisitos para rodar o projeto Backend: 
- mongoDB
- MVN

Copie o ssh do projeto `git@github.com:EduardoPrando/CD_HTML_JAVA.git`

* Abra um terminal no seu computador em uma pastar que deseja armazenar o projeto e utilize os comandos a baixo na ordem que são apresentados:

  Para clonar o repositório:
  
  * `git clone git@github.com:EduardoPrando/desafio-trybe-Ebytr.git`

  Acessando o backend do projeto:

  * `cd CD_HTML_JAVA/backend`
  
  Rodando o SpringBoot:
  
  * `mvn spring-boot:run`

Com esses passos o Spring está rodando devidamente e conectado com o MongoDB.

* Observação:
  A aplicação está configurada para rodar na porta local 27017. Caso deseje utilizar outra porta utilize o arquivo `application.properties` para trocar para a porta desejada.


## Pre-requisitos para rodar frontend:
# Frontend HTTP
- vscode-live-server-plus-plus

Adicionar a extenção Liver-Server a sua IDE: `https://github.com/ritwickdey/vscode-live-server-plus-plus` para mais informações sobre a ultima versão do live server.

* Após o backend estar conectado basta acessar:
* `CD_HTML_JAVA/frontend`

Após selecionar o arquivo index.html, iniciar o Go Live
![image test](https://github.com/EduardoPrando/CD_HTML_JAVA/blob/main/img/goLive.png)

# Frontend Angular
- Angular - v13.3.7

* Após o backend estar conectado basta acessar:
* `CD_HTML_JAVA/frontend-angular`
* no terminal usar o comando `ng serve` para rodar o front

---

### Tecnologias


Foi utilizado para o desenvolvimento desse projeto o JAVA com SPRING BOOT para a criação do backend e HTML CSS puro para criação do front.

---

# INSTRUÇÕES
## CRUD pure JS

Criar um sistema que adicione uma pessoa em uma tabela e que seja possível remove-la também.

### FRONTEND

Você pode utilizar apenas HTML CSS e Javascript puro. Para isso você precisa apenas de campos de texto (inputs) um botão e uma tabela.

Essa tabela deverá conter todos os dados de uma pessoa: nome, e-mail, telefone, profissão. Ao final de cada linha da tabela adicione um botão “remover”, ao clicar nele a linha deverá ser removida da tabela. Essa ação deverá ser comandada pelo seu código em Javascript e cooredenada com o backend.

Veja abaixo uma foto do que se espera:

![image](https://user-images.githubusercontent.com/80851258/168498751-0875167e-90e1-4ed6-81c6-709c49ac27fa.png)

javascript-puro

### BACKEND

Você deve utilizar Java puro para criar o RESTful endpoint de insert (POST) e de remoção (DELETE) Deve salvar em um banco de dados MongoDB

#### SUGESTÕES:

Usar o Gson ou Jackson para serializar objetos JSON
