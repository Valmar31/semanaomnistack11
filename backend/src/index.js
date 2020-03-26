/**
 * Rota / Recurso
 */

/**
 * Método HTTP:
 *
 * GET: Buscar/Listar uma informação no back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

/**
 * Tipos de parâmetros:
 *
 * Query Params: Parâmetros nomeados enviados na rota após o "?" (Filtros, paginação)
 * Route Params: Parâmetros utilizados para identificar recursos
 * Request Body: Corpo da requisião, utilizado para criar ou alterar recursos
 */

/**
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB
 */

/** Como usar banco
 * Driver: SELECT * FRPM users
 * Query Builder:  table('users').select('*').where()
 * knex.js
 */

const express = require("express");
const cors = require("cors");
const routes = require("./routes"); // ./ para arquivos

const app = express();

app.use(cors()); //em produção colocar {origin: ' http://meuapp.com'} dentro do parâmetro
app.use(express.json());
app.use(routes);

app.listen(3333);
