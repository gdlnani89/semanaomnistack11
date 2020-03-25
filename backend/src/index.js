/* Tipos de parametros:

Query Params: Parâmetros nomeados enviados na rota após "?" (Filtro, paginação)
Route Params: Parâmetros utilizados para identificar recursos 
Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */
const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);