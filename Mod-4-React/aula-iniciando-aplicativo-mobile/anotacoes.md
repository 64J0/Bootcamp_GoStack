Para criar a estrutura do projeto mobile será usada a ferramenta de CLI do React Native.

No React foi usado o create-react-app e no caso da aplicação mobile será usado o react-native-cli. De acordo com as últimas recomendações do time de desenvolvimento do React **não** é bacana nós instalarmos a react-native-cli globalmente na máquina, pois desta forma podemos estar perdendo as últimas funcionalidades adicionadas à ferramenta.

Para criar um novo projeto devemos executar no prompt:

```bash
  npx react-native init appgobarber --template react-native-template-typescript
```

Para executar o projeto é necessário primeiro "compilar" o código 
executando npx react-native run-android e em seguida iniciar o servidor que 
irá enviar os arquivos para o smartphone com o comando yarn start (ou npm 
start).
