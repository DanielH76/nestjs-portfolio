// @ts-ignore
import knexStringcase from "knex-stringcase";
/* import { Knex } from "knex"; */
import { config } from "dotenv";

config();

/* export const knex = require("knex")({
  client: "mysql",
  connection: {
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "sys",
  },
}); */

import knex, { Knex } from "knex";

let _client: Knex;

const connectionConfig: Knex.MySqlConnectionConfig = {
  host: process.env.DATABASE_HOST,
  database: process.env.DATABASE,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
};

const wrapConfig = (config: Knex.Config): Knex.Config =>
  knexStringcase({
    ...config,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    postProcessResponse: (result: unknown[] | any) =>
      result && Array.isArray(result.rows) ? result.rows : result,
  });

export const getClient = (): Knex<any, unknown[]> => {
  if (!_client)
/*     _client = knex(
      wrapConfig({ client: "mysql2", connection: connectionConfig })
    ); */
  _client = knex({ client: "mysql2", connection: connectionConfig })
  console.log(connectionConfig.password)

  return _client;
};

type Environment = "production" | "development";
