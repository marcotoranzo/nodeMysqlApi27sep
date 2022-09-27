import { createPool } from "mysql2/promise";

const pool = createPool({
  host: "localhost",
  user: "marco",
  password: "marco",
  port: 3306,
  database: "nodemysqlapi27sep",
});

export default pool;
