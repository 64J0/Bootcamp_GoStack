const express = require("express");
const cors = require("cors");
const { uuid } = require("uuidv4");

const app = express();

app.use(express.json());
app.use(cors());

const repositories = [];

app.get("/repositories", (request, response) => {
  return response.status(200).send(repositories);
});

app.post("/repositories", (request, response) => {
  const { title, url, techs } = request.body;

  const newRepository = {
    id: uuid(),
    title,
    url,
    techs,
    likes: 0,
  };

  repositories.push(newRepository);
  return response.status(201).send(newRepository);
});

app.put("/repositories/:id", (request, response) => {
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
  const { id } = req.params;

  const repoIndex = repositories.findIndex((repo) => repo.id === id);
  if (repoIndex < 0) return res.status(400).json({ error: "Invalid Id" });

  repositories.splice(repoIndex, 1);
  return res.status(204).send("");
});

app.post("/repositories/:id/like", (request, response) => {
  const { id } = request.params;

  const repoIndex = repositories.findIndex((repo) => repo.id === id);
  if (repoIndex < 0) return response.status(400).json({ error: "Invalid Id" });

  const repo = {
    id: repositories[repoIndex].id,
    title: repositories[repoIndex].title,
    techs: repositories[repoIndex].techs,
    url: repositories[repoIndex].url,
    likes: repositories[repoIndex].likes + 1,
  };

  repositories[repoIndex] = repo;
  return response.status(200).json(repo);
});

module.exports = app;
