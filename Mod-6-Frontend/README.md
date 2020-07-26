# Módulo 6 do Bootcamp

Neste módulo será dado continuidade ao desenvolvimento do _front-end_ da aplicação utilizando o _ReactJS_ como framework principal. Serão criadas as últimas páginas da aplicação e suas funções serão definidas também.

No _ReactJS_ nós nunca devemos manipular ou criar variáveis com a sintaxe normal nos componentes, pois deste jeito será necessário consumir mais processamento para renderizar o componente novamente.

### Testes com React JS e React Native

A sintaxe para criar os testes em ambos ambientes é a mesma, embora algumas ferramentas mudem.

Segundo o Diego, para os projetos _WEB_ não faz tanto sentido aplicar a metodologia _TDD_. Como os testes do _front-end_ são basicamente do tipo _end-to-end_, onde são testadas as funcionalidades completamente da aplicação, não faz sentido escrevermos os códigos antes de termos o _layout_ do projeto implementado.

Assim como no caso do _back-end_ devemos testar os componentes que interagem diretamente com o usuário (Componentes, _Hooks_, Páginas, etc).

<u>_Libs_ que serão usadas:</u>

- **React Testing Library**: [link](https://testing-library.com/docs/react-testing-library/intro). Essa biblioteca tem compatibilidade com grande parte dos _frameworks_ de desenvolvimento _front-end_, por isso é uma ótima escolha para o projeto. Por padrão ela já é instalada pelo **create-react-app**.
- **React hooks testing library**: [link](https://react-hooks-testing-library.com/reference/api). Essa biblioteca, como o nome sugere, será utilizada especificamente para testar os _hooks_.
- **React native testing library**: [link](https://github.com/callstack/react-native-testing-library).

<hr>

Para renderizar qualquer componente ou página durante os testes é utilizada uma função chamada _render_ que vem da lib _React Testing Library_.

#### COVERAGE REPORT:

Para gerar o arquivo de _coverage report_ devemos executar o seguinte comando no terminal:

```bash
  # gera a pasta de coverage report
  yarn test --coverage --watchAll fase
```

Para que este _coverage report_ não tente lidar com todos os arquivos do projeto devemos definir no arquivo **package.json** uma chave como a seguinte:

```javascript
  {
    //... outras coisas,
    "jest": {
      "collectCoverageFrom": [
        "src/pages/**/*.tsx",
        "src/components/**/*.tsx",
        "src/hooks/**/*.tsx",
        "!src/hooks/index.tsx"
      ]
    }
    //... outras coisas,
  }
```

#### ATIVIDADES:

CRIAR OS TESTES DAS PÁGINAS DE CRIAR UM USUÁRIO E DE RESETAR UMA SENHA.
