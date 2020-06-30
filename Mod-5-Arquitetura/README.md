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
