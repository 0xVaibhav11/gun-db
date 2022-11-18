import express from "express";
import cors from "cors";
import Gun from "gun";

const app = express();
const port = process.env.PORT || 9000;
app.use(cors());
app.use(Gun.serve);

app.get("/", (_, res) => {
  res.status(200).send(`> DEBUG: RocketShare node is LIVE!`);
});

const server = app.listen(port, () => {
  console.log(
    `> DEBUG: RocketShare node is listening http://localhost:${port}`
  );
});

Gun({ web: server });
