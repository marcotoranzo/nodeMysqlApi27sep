import express from "express";
import employeeRouter from "./router/employeeRouter.js";
import indexRouter from "./router/indexRouter.js";

const main = express();

//carga de enrutadores de employee, main, ...
main.use(employeeRouter);
main.use(indexRouter);

main.listen(3200);
console.log("Servidor online esperando llamadas");

export default main;
