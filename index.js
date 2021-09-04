const express = require('express')
const app = express()

//middleware
app.use(express.json());
app.use(express.urlencoded({extended : false}));


//rutas
app.use(require('./routes/users.routes'));
/* app.get('/', function (req, res) {
  res.send('Peticion get')
})
app.post('/', function (req, res) {
  res.send('Peticion post')
})
app.put('/', function (req, res) {
  res.send('Peticion put')
})
app.delete('/', function (req, res) {
  res.send('Peticion delete')
}) */
 
app.listen(3000, ()=>console.log('corriendo el el puerto 3000'))