import express, { Request, Response, Application } from "express";
import { Server } from "http";

const app: Application = express();

app.get("/", (req: Request, res: Response) => {
  res.send("hello");
});

const server: Server = app.listen(8000, () => {
  console.log("8000");
});
