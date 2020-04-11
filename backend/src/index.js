/* Tipos de parametros:

Query Params: Parâmetros nomeados enviados na rota após "?" (Filtro, paginação)
Route Params: Parâmetros utilizados para identificar recursos 
Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */
const express = require('express');
const cors = require('cors');
const { errors} = require('celebrate');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());//para evitar o status code 500(ou seja, nossa aplicação não soube se comportar com esse erro)

app.listen(3333);