# sae.js
Server Api Engine JS

## Framework como Layer do Lambda
Para adicionar o node_modules como layer do lambda, deve ser movido a pasta `node_modules` para `nodejs/node_modules`, zipar a pasta e adicionar como layer.
O node irá visualizar as libs nesta pasta.

## Testar local
Para testar localmente as rotas, pode ser executado o comando abaixo que será possivel verificar em `http://localhost:3080`.

```batch
npm run local
```