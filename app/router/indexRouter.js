//import { proposalPlugins } from "@babel/preset-env/lib/shipped-proposals";
import { Router } from "express";
import pool from "../db.js";

const indexRouter = Router();

indexRouter.get("/ping", async (req, res) => {
  //const result1 = pool.query("use database nodemysqlapi27sep");
  const result = await pool.query("select * from employee");
  //res.send({ base: pool.get("") });
  //res.json(result);
  res.send(result);
});

export default indexRouter;
