import express from "express";
import compression from "compression";
import { handler as ssrHandler } from "../dist/server/entry.mjs";

const app = express();

app.use(compression());

app.use(express.static("dist/client/"));
app.use(ssrHandler);

app.listen(8080, () => {
  console.log("Server running at port 8080");
});
