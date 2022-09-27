import { Router } from "express";

const employeeRouter = Router();

employeeRouter.get("/employees", (req, res) => {
  res.send("Employees -> get");
});

employeeRouter.post("/employees", (req, res) => {
  res.send("Employees-> post");
});

export default employeeRouter;
