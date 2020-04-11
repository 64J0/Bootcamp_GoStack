const express = require("express");
const cors = require("cors");
const { uuid, isUuid } = require("uuidv4");
const app = express();

// Middlewares
function securityHeader(request, response, next) {
  response.setHeader("X-Powered-By", "");
  next();
}

function logRequests(request, response, next) {
  const { method, url } = request;

  const logLabel = `[${method.toUpperCase()} ${url}]`;
  console.log(logLabel);

  console.time(logLabel);

  next();

  console.timeEnd(logLabel);
}

function validateProjectId(request, response, next) {
  const { id } = request.params;

  if (!isUuid(id)) {
    return response.status(400).json({ error: "Invalid id" });
  }

  return next();
}

app.use(cors());
app.use(securityHeader);
app.use(logRequests);
app.use("/projects/:id", validateProjectId);
app.use(express.json());

const projects = [];

// Rotas
app.get("/projects", (request, response) => {
  const { title } = request.query;

  const results = title
    ? projects.filter((project) => project.title.includes(title))
    : projects;

  return response.status(200).json(results);
});

app.post("/projects", (request, response) => {
  const { title, owner } = request.body;

  const project = { id: uuid(), title, owner };
  projects.push(project);
  return response.status(201).send(project);
});

app.put("/projects/:id", (request, response) => {
  const { id } = request.params;
  const { title, owner } = request.body;

  const projectIndex = projects.findIndex((project) => project.id === id);

  if (projectIndex < 0)
    return response.status(404).json({ error: "Cannot find user" });

  const project = {
    id,
    title,
    owner,
  };

  projects[projectIndex] = project;

  return response.status(200).json(project);
});

app.delete("/projects/:id", (request, response) => {
  const { id } = request.params;

  const projectIndex = projects.findIndex((project) => project.id === id);

  if (projectIndex < 0)
    return response.status(404).json({ error: "Cannot find user" });

  projects.splice(projectIndex, 1);

  return response.status(204).send();
});

const port = process.env.PORT || 3333;
app.listen(port, () => {
  console.log(`😁 Back-end started!\n Listening on port ${port}`);
});
