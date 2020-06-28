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
