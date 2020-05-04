<p align="center">
  <img src="https://raw.githubusercontent.com/Rocketseat/rocketseat-vscode-react-native-snippets/master/images/rocketseat_logo.png" />
</p>

# Bootcamp GoStack 🚀


Nesse repositório serão mantidos os códigos referentes às aulas do bootcamp e a resolução dos desafios propostas por mim. As principais tecnologias estudadas nas aulas são:

* <a href="https://nodejs.org/en/">Node.js</a>
* <a href="https://pt-br.reactjs.org/">ReactJS</a>
* <a href="https://reactnative.dev/">React Native</a>
* <a href="https://www.typescriptlang.org/">Typescript</a>

## Breve descrição das pastas/módulos:

# 2️⃣️

No Módulo 2 foi dado uma introdução às tecnologias da Stack (mencionadas acima). O ambiente de desenvolvimento foi configurado para que possamos continuar trilhando o caminho da OmniStack.

---

# 3️⃣️

Já no Módulo 3, focou-se mais detalhadamente na parte do Back-end da aplicação. Para isso foi usada a plataforma Node.js em conjunto com o Express para fazer as rotas do projeto. Nesse módulo foi dado muito enfoque ao **TypeScript**, onde foi possível perceber suas vantagens em relação ao JavaScript comum. Nas primeiras aulas foram abordadas algumas estruturas e padrões, onde aprendemos a configurar coisas como ESLint, Prettier, além de ter um gostinho de como é possível usar o VSCode para debugar aplicações NodeJS.

Em seguida, deu-se início ao desenvolvimento do back-end da aplicação **GoBarber**, levando em consideração o pattern de projetos com *Repositórios*, *Services* e *Models*.

* **Repositório:** 

O Repository é um conceito introduzido no Data Mapper Patterns ou Repository Pattern que consiste em uma ponte entre nossa aplicação e a fonte de dados, seja ela um banco de dados, um arquivo físico ou qualquer outro meio de persistência de dados da aplicação. 

Essa implementação visa isolar a forma com que nos comunicamos com os dados, abstraindo lógicas comuns de operações no banco.

Geralmente o Repository possui os métodos comuns de comunicação com uma fonte de dados como listagem, busca, criação, edição, remoção, mas conforme a aplicação cresce, o desenvolvedor tende a encontrar outras operações repetitíveis e, com isso, popula o repositório com mais funcionalidades.

* **Service:**

O Service é um conceito introduzido no Service Pattern. Ele tem como objetivo abstrair regras de negócios das rotas, além de tornar nosso código mais reutilizável.

No contexto da nossa jornada, essa implementação visa reduzir a complexidade das rotas da nossa aplicação e deixá-las responsáveis apenas pelo que realmente devem fazer; receber uma requisição, repassar os dados da requisição a outro arquivo e devolver uma resposta.

O Service deve ter um nome descritivo (ex.: updateDeliveryManProfileService) e sempre possuir apenas **um método** (ex.: execute()). Além disso, caso outra rota ou arquivo precise executar essa mesma ação, basta chamar e executar esse Service, obedecendo assim a outro importante princípio: DRY (Don't Repeat Yourself).

* **Models:**

Os Models podem ser entendidos como um esqueleto de uma informação que será salva num banco de dados. Além disso, com a utilização de ORM é possível mapear esse Model para uma determinada tabela de um banco de dados, podendo portanto executar operações baseadas nesse Model.

Os Services e Repositories so utilizados para construir uma base sólida, visando a escalabilidade e aplicação de boas práticas. Com seu uso, apesar de uma maior complexidade no início, é possível obter diversos benefícios ao atender princípios importantes da programação.

Para ler o texto completo da explicação basta acessar <a href="https://www.notion.so/Repository-service-e-patterns-82419cceb11c4c4fbbc055ade7fb1ac5">esse link</a>.

Dando prosseguimento às aulas deste módulo, em seguida é iniciado o desenvolvimento, realmente, do back-end da aplicação **GoBarber**. Para configurar o banco de dados da aplicação é utilizado o **Docker**, que oferece um ambiente separado do restante das aplicações, estando escapsulado em um Container. Desta forma, pode-se entender que o Docker ajuda a controlar os serviços da aplicação que está sendo desenvolvida. 

O Docker permite a criação de ambientes isolados (Containers), que não interferem no funcionamento de outras aplicações no mesmo servidor. Estes Containers por sua vez expõe portas para comunicação.

Dentro deste Container é instânciada uma imagem de um banco de dados Postgres, que será o utilizado no restante dos vídeos, sendo um banco SQL com algumas décadas de desenvolvimento.

Algumas definições do Docker:

* Imagem -> um serviço disponível do Docker (Postgres, MongoDB). São ferramentas que podemos colocar dentro de um Container da aplicação.

* Container -> uma instância de uma imagem.

* Docker Registry (Docker Hub) -> local onde são encontradas as imagens (semelhante ao registro do NPM).

* Dockerfile -> é uma receita de uma imagem do Docker. Basicamente são alguns passos que devem ser seguidos pela máquina para fazer a aplicação funcionar do zero em um novo ambiente.

Para fazer as queries ao banco de dados são apresentadas três opções, sendo estas:

* Usar um Driver nativo (Postgres, MongoDB, etc). Um benefício dessa opção  a possibilidade de escrever queries otimizadas para cada um dos bancos. Já uma característica ruim é a não possibilidade de reaproveitar as queries caso no futuro opte-se por mudar o banco da aplicação.

* Usar um Query Builder (KnexJS). Essa abordagem já apresenta uma camada de abstração em relação às queries que são criadas nativamente, porém ainda não está no nível de uma ORM.

* Usar um ORM (Object Relational Mapping). Por fim, essa abordagem é a mais abstrata possível. Nela é possível usar os Models para mapear os atributos destes Models para alguma tabela do banco de dados. Em outras palavras, sempre que for criada uma nova instância de uma classe, as alterações realizadas nesse objeto são refletidas no banco de dados. Alguns exemplos são: Sequelize, TypeORM, Mongoose (ODM).

Dentre estas opções a escolhida para ser estudada neste momento foi o TypeORM. Para configurar as tabelas do banco de dados, por sua vez, foi escolhido trabalhar com **migrations**. As migrations são trechos de código que especificam alguma operação que é realizada no banco de dados, por exemplo, a criação de uma nova tabela, ou edição de alguma coluna de uma tabela já criada.

Uma possível analogia é: O que o Git faz com as versões dos códigos, as migrations fazem com o banco de dados. Ou seja, evita que os bancos de dados utilizados durante o desenvolvimento de algum projeto, estejam em versões diferentes.

Todas as migrations tem pelo menos dois métodos (up e down). O método **up** é utilizado para fazer alguma alteração no banco de dados quando a migration é executada. Já o método **down** é utilizado para justamente desfazer as alterações realizadas no método up.

*Regra prática: Só é possível alterar uma migration se ela não foi enviada ainda para o sistema de controle de versões, por exemplo, Git. Se já estiver no Git então devemos criar uma nova migration para executar a mudança que desejamos.*

Em seguida foram criadas as funcionalidades de cadastro de usuários, com criptografia de senha, autenticação de usuários, usando um token JWT, e foi apresentada a funcionalidade de upload de arquivos utilizando o multer, que é um middleware para o Express.

---

# 4️⃣️

---

**Vinícius Gajo Marques Oliveira, 2020.**
