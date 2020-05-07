# GoFinances WEB

Principais tecnologias usadas neste projeto:

- Typescript
- React JS
- Axios
- Styled Components

Neste projeto é dado continuidade ao desenvolvimento da aplicação **GoFinances**, focando no front-end do sistema, utilizando o **React JS** para criar as telas que serão exibidas para o usuário final. Esse sistema WEB se comunica com a API Rest desenvolvida no projeto **GoFinances Backend**, e portanto, só irá funcionar adequadamente caso esteja sendo executado este projeto.

Através da chamada a determinadas rotas dessa API é possível receber dados em formato JSON que estavam armazenados no banco de dados da aplicação, que é executado em um container Docker localmente na máquina do usuário com uma imagem do Postgres configurada.

Com a realização deste projeto foi possível colocar em prática e exercitar alguns conhecimentos adquiridos ao assistir as aulas do nível 3 do Bootcamp GoStack (Primeiro projeto com React).

Requisitos do sistema:

1. `Listar as transações da API`: Sua página Dashboard deve ser capaz de exibir uma listagem através de uma tabela com o campo title, value, type e category de todas as transações que estão cadastradas na sua API.

2. `Exibir o balance da sua API`: Sua página Dashboard deve exibir o balance que é retornado pelo back-end contendo os valores de entrada, saída e o total dos valores armazenados.

3. `Importar arquivos CSV (Comma-separated values)`: Na página import, deve ser permitido o envio de um arquivo no formato csv para o seu backend, que irá fazer a importação das transações para o banco de dados configurados corretamente. O arquivo csv deve seguir o seguinte <a href="https://github.com/Rocketseat/bootcamp-gostack-desafios/blob/master/desafio-database-upload/assets/file.csv">modelo</a>.

PS: Caso você esteja no windows e esteja sofrendo com algum erro ao tentar importar o arquivo .csv, altere o tipo de arquivo dentro do código em components/upload/index.ts de text/csv para .csv, application/vnd.ms-excel, text/csv.

### Como executar:

```bash
  # Clona os códigos desse repositório para um local do seu computador
  git clone <link_deste_repositório>

  # Entra na pasta do projeto
  cd gostack-template-fundamentos-reactjs/

  # Caso você não tenha intalado o yarn:
  npm start

  # Caso você tenha o yarn instalado:
  yarn start
```

Vinícius Gajo Marques Oliveira, 2020.
