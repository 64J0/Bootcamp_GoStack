# Arquiteturas de software do Back-end

As arquiteturas de _software_ são regras aplicáveis a projetos que deverão escalar e permitir uma manutenção do código mais simples, evitando acoplamento de funcionalidades. Todavia, **nem sempre é necessário aplicar uma arquitetura de _software_ complexa em determinados projetos mais simples**.

Estrutura atual do projeto:

src
|-config
|-database
|-errors
|-middlewares
|-models
|-repositories
|-routes
|-services

Os códigos estão sendo separados pelas suas funcionalidades, em cada pasta do projeto.

Definição:

- Domínio: Qual a área de conhecimento daquele módulo/arquivo

Nas próximas aulas será aplicada uma metodologia chamada **DDD** - _Domain Driven Design_. Segundo o Diego, esta metodologia é aplicável idealmente apenas ao _Back-end_ da aplicação.

Na aplicação dessa metodologia, os arquivos serão separados pelos seus **domínios**. Cada domínio pode ser entendido também como um departamendo de uma empresa, sendo independentes um do outro.

Para arquivos que deverão ser compartilhados entre módulos diferentes devemos criar uma pasta chamada _shared_ dentro da pasta _src_.

Definição:

- Camada de infra: São as **ferramentas** escolhidas para lidar/comunicar com a camada de domínio, baseada em decisões técnicas, por exemplo, a escolha do **Node.js** para o _back-end_ e do **Postgres** como banco de dados. Além disso, são colocadas nesta camada os arquivos que dependem de alguma tecnologia específica que poderá ser alterada futuramente, por exemplo, o **Express.js** poderia ser substituído futuramente pelo **Koa**, ou o **Postgres** poderia ser substituido pelo **MySQL**.

- Camada de domínio: Contém as regras de negócio da aplicação, com conhecimentos separados da Camada de infra.

SOLI**D**:

- Inversão de dependência: Ao invés do service precisar saber qual o formato do repositório que ele está lidando, essa relação será invertida.

### Injeção de dependências:

Para injetar dependências em um projeto é utilizado o pacote **tsyringe**. Para utilizar suas funcionalidades foi criada uma nova pasta chamada **container** dentro de _shared_, que é responsável por gerenciar a injeção de dependências.

## Utilização dos Controllers:

Na arquitetura adotada para o projeto do _back-end_, a principal responsabilidade dos **controllers** será lidar com as rotas da aplicação.

Segundo algumas bibliografias, os _controllers_ devem implementar apenas cinco métodos: **index, show, create, update, delete**.

## Testes automatizados

Garantem o funcionamento da aplicação independentemente das próximas atualizações do código com o acréscimo de novas funcionalidades e do número de _devs_ no time.

### Tipos de testes:

1. Teste unitários (TDD):

Testam funcionalidades específicas e isoladas da aplicação (precisam ser funções puras => não dependem de outras partes da aplicação).

**JAMAIS**: Realizará chamadas à uma API, não terá um efeito colateral, depende apenas da própria aplicação.

2. Teste de integração:

Testam uma funcionalidade completa, passando por várias camadas da aplicação.

Exemplo: Route -> Controller -> Serviço -> Repositório -> ...

3. Teste E2E (_End-to-end_):

São testes que simulam a ação do usuário dentro da nossa aplicação. Mais aplicável ao _front-end_.

Exemplo: Clique no input de e-mail -> Preencha diego@rocketseat.com.br -> Clique no input de senha -> Preencha 123456 -> Clique no botão "Logar" -> Espero que a página tenha enviado o usuário para o dashboard.

### TDD (Test Driven Development)

Nessa metodologia os testes são criados antes da criação das próprias funcionalidades.
