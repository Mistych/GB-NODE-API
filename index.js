import express from 'express';

const app = express();
const port = 3000;
app.use(express.json());


// Ruta inicial
app.get('/', (req, res) => {
  res.send('Bienvenido a la api con express');
});



// Ruta de repeticion
app.post('/repeat', (req, res) => {

  const { text } = req.body;

  if (!text) {
    return res.status(400).json({
      msg: 'No se ha enviado ningun texto',
    });
  }

  return res.json({
    msg: text,
  });

});


app.post("/suma/primeros_numero" , (req, res) => {

  const { numero } = req.body;

  if (!numero) {
    return res.status(400).json({
      msg: 'No se ha enviado ningun numero',
    });
  }

  if(typeof(numero) != "number" || numero <= 0 ){
    return res.status(400).json({
      msg: 'No se ha enviado ningun numero',
    });
  }

  // Calculamos la suma de los primeros n numeros

  const suma = (numero * (numero + 1)) / 2;

  res.json({
    Suma : suma,
  });

});


// Ruta de multiplicacion

app.post("/multiplicacion" , (req, res) => {

  const { numero1, numero2 } = req.body;

  if (!numero1 || !numero2) {
    return res.status(400).json({
      msg: 'No se ha enviado ningun numero',
    });
  }

  if(typeof(numero1) != "number" || typeof(numero2) != "number" ){
    return res.status(400).json({
      msg: 'No es un numero',
    });
  }

  // Calculamos la multiplicacion de los dos numeros

  const multiplicacion = numero1 * numero2;

  res.json({
    Multiplicacion : multiplicacion,
  });

});

app.listen(port, () => {
    console.log(`El servidor esta escuchando en http://localhost:${port}`)
    });

    