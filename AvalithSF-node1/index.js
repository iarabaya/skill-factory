const express = require('express')
const app = express()
const port = 3000
const fs = require('fs')

app.use(express.json())

//devuelve la fecha
app.get('/api/date', (req, res) =>{
  const date = new Date();
  res.send(`Fecha: ${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`)
})

//responde saludo 
app.post('/api/buendia', (req,res) =>{
  const {nombre} = req.body;
  res.send(`Buenos días ${nombre}!`);
})

//devuelve el contenido de un archivo de texto
app.get('/api/text', async (req,res)=>{
  await fs.readFile('test.txt', 'utf8', (err,data)=>{
      if (err) {
        console.error(err);
        return
      }
      console.log(data);
      res.send(data);
    })
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})