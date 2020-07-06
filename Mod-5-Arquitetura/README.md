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

# Continuando back-end do app

Na primeira aula é dado continuidade ao mapeamento de funcionalidades (_features_) e regras de negócio da aplicação. Segundo o Diego, é uma das ferramentas mais utilizada ao longo do trajeto de desenvolvimento.

Os tópicos abaixo indicam as funcionalidades mapeadas de acordo com o _layout_ da aplicação.

- Recuperação de senha

  - RF (Requisitos Funcionais)
    - O usuário deve poder recuperar sua senha informando seu e-mail;
    - O usuário deve receber um e-mail com instruções de recuperação da senha;
    - O usuário deve poder resetar sua senha;
  - RNF (Requisitos Não-Funcionais)
    - Utilizar Mailtrap para testar envios em ambiente de desenvolvimento;
    - Utilizar o Amazon SES para envios em produção;
    - O envio de e-mails deve acontecer em segundo plano (background job);
  - RN (Regras de Negócio)
    - O link enviado por e-mail para resetar a senha, deve expirar em 2h;
    - O usuário precisa confirmar a nova senha ao resetar sua senha;

- Atualização do perfil

  - RF (Requisitos Funcionais)
    - O usuário deve poder atualizar seu nome, e-mail e senha;
  - RN (Regras de Negócio)
    - O usuário não pode alterar seu e-mail para um e-mail já utilizado por outro usuário;
    - Para atualizar sua senha, o usuário deve informar a senha antiga;
    - Para atualizar sua senha, o usuário deve confirmar a nova senha;

- Painel do prestador

  - RF (Requisitos Funcionais)
    - O usuário deve poder listar seus agendamentos de um dis específico;
    - O prestador deve receber uma notificação sempre que houver um novo agendamento;
    - O prestador deve poder visualizar as notificações não lidas;
  - RNF (Requisitos Não-Funcionais)
    - Os agendamentos do prestador no dia devem ser armazenados em cache;
    - As notificações do prestador devem ser armazenadas no MongoDB;
    - As notificações do prestador devem ser enviadas em tempo real utilizando Socket.io.
  - RN (Regras de Negócio)
    - A notificação deve ter um status de lida ou não-lida para que o prestador possa controlar;

- Agendamento de serviços
  - RF (Requisitos Funcionais)
    - O usuário deve poder listar todos os prestadores de serviço cadastrados;
    - O usuário deve poder listar os dias de um mês com pelo menos um horário disponível de um prestador;
    - O usuário deve poder listar horários disponíveis em um dia específico de um prestador;
    - O usuário deve poder realizar um novo agendamento com um prestador;
  - RNF (Requisitos Não-Funcionais)
    - A listagem de prestadores deve ser armazenada em cache;
  - RN (Regras de Negócio)
    - Cada agendamento deve durar 1h exatamente;
    - Os agendamentos devem estar disponíveis entre 8h às 18h (Primeiro horário às 8h, último às 17h);
    - O usuário não pode agendar em um horário já ocupado;
    - O usuário não pode agendar em um horário que já passou;
    - O usuário não pode agendar serviços consigo mesmo;
