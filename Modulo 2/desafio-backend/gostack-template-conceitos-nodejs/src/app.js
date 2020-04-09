const express = require("express");
const cors = require("cors");
const { uuid } = require("uuidv4");

const app = express();

app.use(express.json());
app.use(cors());

const repositories = [];

app.get("/repositories", (request, response) => {
  /**
   * REQUISITOS:
   *
   * Rota que lista todos os repositórios
   */

  return response.status(200).send(repositories);
});

app.post("/repositories", (request, response) => {
  /**
   * REQUISITOS:
   *
   * Esta rota deve receber title, url e techs dentro do corpo da requisição, sendo a URL o link para o github desse repositório. Ao cadastrar um novo projeto, ele deve ser armazenado dentro de um objeto no seguinte formato: { id: "uuid", title: 'Desafio Node.js', url: 'http://github.com/...', techs: ["Node.js", "..."], likes: 0 }; Certifique-se que o ID seja um UUID, e de sempre iniciar os likes como 0.
   */
  const { title, url, techs } = request.body;

  const newRepository = {
    id: uuid(),
    title,
    url,
    techs,
    likes: 0,
  };

  repositories.push(newRepository);

  // 201 === CREATED
  return response.status(201).send(newRepository);
});

app.put("/repositories/:id", (request, response) => {
  /**
   * REQUISITOS:
   *
   * A rota deve alterar apenas o título, a url e as techs do repositório que possua o id igual ao id presente nos parâmetros da rota;
   */

  const { id } = request.params;
  const { title, url, techs } = request.body;

  const repoIndex = repositories.findIndex((repo) => repo.id === id);
  if (repoIndex < 0) return response.status(400).json({ error: "Invalid id" });

  const newRepo = {
    id: repositories[repoIndex].id,
    title,
    url,
    techs,
    likes: repositories[repoIndex].likes,
  };

  repositories[repoIndex] = newRepo;

  return response.status(200).json(newRepo);
});

app.delete("/repositories/:id", (req, res) => {
  /**
   * REQUISITOS:
   *
   * A rota deve deletar o repositório com o id presente nos parâmetros da rota;
   */

  const { id } = req.params;

  const repoIndex = repositories.findIndex((repo) => repo.id === id);
  if (repoIndex < 0) return res.status(400).json({ error: "Invalid Id" });

  repositories.splice(repoIndex, 1);
  return res.status(204).send("");
});

app.post("/repositories/:id/like", (request, response) => {
  /**
   * REQUISITOS:
   *
   * A rota deve aumentar o número de likes do repositório específico escolhido através do id presente nos parâmetros da rota, a cada chamada dessa rota, o número de likes deve ser aumentado em 1
   */

  const { id } = request.params;

  const repoIndex = repositories.findIndex((repo) => repo.id === id);
  if (repoIndex < 0) return response.status(400).json({ error: "Invalid Id" });

  const repo = {
    id: repositories[repoIndex].id,
    title: repositories[repoIndex].title,
    techs: repositories[repoIndex].tecs,
    url: repositories[repoIndex].url,
    likes: repositories[repoIndex].likes + 1,
  };

  repositories[repoIndex] = repo;
  return response.status(200).json(repo);
});

module.exports = app;
