// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/Juan', (req, res) => {
//   res.send('Hello World!')
// })
// app.get('/Buscar', (req, res) => {
//     const nombre = req.query.nombre;
//     const edad = req.query.edad;    
//     res.send(`Hola ${nombre} tu edad es ${edad}`)
//   })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

const express = require('express')
const fs = require ('fs')
const app = express()
const port = 3000

app.get('/estudiantes/',(req, res)=>{
    const contenido = fs.readFileSync('data.json', 'utf8');
    const estudiantes = JSON.parse(contenido);
    res.json(estudiantes)
})

app.get('/Buscar', (req, res) => {
    const nombre =  req.query.nombre;
    const edad = req.query.edad;
    res.send(`hola ${nombre} tu edad es ${edad}`);
  })
  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
