import express, { Request, Response } from "express";
import { MODELS } from "../mockData.ts";

export const app = express();

app.use(express.json());

app.get("/cars", (_req: Request, res: Response) =>
  res.status(200).json(MODELS)
);

app.post("/upload", (req: Request, res: Response) => {
  const { make, model, badge, logbook } = req.body;

  if (!make || !model || !badge || !logbook) {
    res.status(400).json({ error: "Required field missing" });
  }

  try {
    res.status(200).send({ make, model, badge, logbook });
  } catch (error) {
    console.error(error);
  }
});
