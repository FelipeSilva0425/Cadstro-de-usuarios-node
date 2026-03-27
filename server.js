import expreess from "express";

const app = expreess();

app.get("/usuarios", (req, res) => {
  res.send("Lista de usuarios");
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
