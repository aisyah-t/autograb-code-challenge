import express, { Request, Response } from "express";

export const app = express();

app.use(express.json());

app.get("/cars", (_req: Request, res: Response) =>
  res.json({ greetings: "Hello World!" })
);
