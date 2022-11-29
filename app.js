import express from "express";
const app = express();
import { fileURLToPath } from "url";
import { dirname } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.set("view engine", "ejs");
app.listen(3000);
import { statuscode } from "./statuscode.js";

const status200 = [{ status: "200", contenu: "succès de la requète" }];

console.log(statuscode, status200);

app.get("/", (req, res) => {
  let titre = "StatusCode";
  res.render("index", { titre });
});
/*
app.get("/200", (req, res) => {
  res.render('status200', {status200});
});
*/
app.get("/200", (req, res) => {
  let titre = "200";
  res.render("status200", { titre });
});
