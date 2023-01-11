import express from "express";
import { fileURLToPath } from "url";
import { dirname } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
import { x100, x200, x300, x400, x500, x404 } from "./statuscode.js";
import { c100 } from "./contenus.js";
const app = express();
app.set("view engine", "ejs");
app.listen(3000);

app.get("/", (req, res) => {
  const titre = "StatusCode";
  res.render("index", { titre });
});
/*
app.get("/200", (req, res) => {
  res.render('status200', {status200});
});
*/
app.get("/100", (req, res) => {
  const titre = "100";
  res.render("status100", { titre, x100, c100 });
});

app.get("/200", (req, res) => {
  const titre = "200";
  res.render("status200", { titre, x200 });
});

app.get("/300", (req, res) => {
  const titre = "300";
  res.render("status300", { titre, x300 });
});

app.get("/400", (req, res) => {
  const titre = "400";
  res.render("status400", { titre, x400 });
});

app.get("/500", (req, res) => {
  const titre = "500";
  res.render("status500", { titre, x500 });
});

app.use((req, res) => {
  const titre = "404";
  res.render("404", { titre, x404 });
});
