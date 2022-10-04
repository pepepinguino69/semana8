// server.js
const express = require("express");
const productRouter = require("./routes/routes")
const app = express();
const port = 8080;
app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use("/api/productos", productRouter);
const path = require("path");
app.use(express.static('public'))

const express = require("express");
const productRouter = require("./routes/products");

const app = express();

app.listen(8080,()=>console.log("server listening on port 8080"));

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/api/productos", productRouter);

// posibles rutas