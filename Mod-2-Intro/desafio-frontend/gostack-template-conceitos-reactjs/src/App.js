import React, { useState, useEffect } from "react";
import api from "./services/api";

import "./styles.css";

function App() {
  const [repositories, setRepositories] = useState([]);

  //Deve ser capaz de criar uma lista com o campo title de todos os
  //repositórios que estão cadastrados na sua API.
  useEffect(() => {
    api
      .get("/repositories")
      .then((response) => {
        setRepositories(response.data);
      })
      .catch((err) => {
        console.log({ error: err });
      });
  }, []);

  async function handleAddRepository() {
    const response = await api.post("/repositories", {
      title: `Novo projeto ${repositories.length}`,
      techs: ["JavaScript", "HTML"],
    });

    const newRepository = response.data;
    setRepositories([...repositories, newRepository]);
  }

  async function handleRemoveRepository(id) {
    await api.delete(`/repositories/${id}`);
    // The filter() method creates a new array with all elements that pass the test implemented by the provided function.
    setRepositories(repositories.filter((repo) => repo.id !== id));
  }

  return (
    <div>
      <ul data-testid="repository-list">
        {repositories.map((repo) => {
          return (
            <li key={repo.id}>
              {repo.title}
              <button onClick={() => handleRemoveRepository(repo.id)}>
                Remover
              </button>
            </li>
          );
        })}
      </ul>

      <button onClick={handleAddRepository}>Adicionar</button>
    </div>
  );
}

export default App;
