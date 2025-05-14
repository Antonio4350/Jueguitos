const express = require("express");
const app = express();
const path = require("path");//utilizamos el express y el path para el serv
const PORT =3000;

app.use(express.static(path.join(__dirname, "public")));//carpeta estatica publica donde vamos a estar trabajando
// rutas para enviar archivos html segun la url 
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, 'public','paginas','index.html'));//direccion del index
});
app.get("/juego1", (req, res) => {
  res.sendFile(path.join(__dirname, 'public','paginas','ej1.html'));//direccion de las paginas
});
app.get("/juego2", (req, res) => {
  res.sendFile(path.join(__dirname, 'public','paginas','ej2.html'));
});
app.get("/juego3", (req, res) => {
  res.sendFile(path.join(__dirname, 'public','paginas','ej3.html'));
});

// inicia el servidor en el puerto definido
app.listen(3000, () => {//puerto
  console.log("http://localhost:"+PORT); // muestra url en consola
});
