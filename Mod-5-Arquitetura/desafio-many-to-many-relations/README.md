# Raciocínios da resolução

**Passo 1:** Criar o banco de dados do Postgres através do DBeaver.

**Passo 2:** Criar as tabelas dos bancos de dados seguindo os _models_ já definidos inicialmente. Para essa situação, como estamos utilizando o _Postgres_, iremos aplicar o conceito de _migration_ para gerar as colunas e relacionamentos das tabelas automaticamente.

```bash
  # cria uma migration com o nome CreateCustomersTable
  yarn typeorm migration:create -n CreateCustomersTable
```

E para executar a _migration_:

```bash
  # executa as migrations
  yarn typeorm migration:run

  # reverte as migrations
  yarn typeorm migration:revert
```

**_Para a migration funcionar corretamente é necessário que a entidade do banco de dados esteja configurado corretamente!!!!_**

## Cardinalidade do banco de dados da aplicação:

- Um cliente pode ter vários pedidos;
- Um pedido pode ter vários produtos;

_Resolução do desafio: [link](https://www.youtube.com/watch?v=nYcdmLIPr7s)_
