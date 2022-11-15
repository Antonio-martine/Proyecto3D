/*Requerimientos*/
const express = require('express');
const ruta = express.Router();

/*Primera pantalla*/
ruta.get('/',(req,res)=>{
    res.render('index');
})


/*Exportacion*/
module.exports=ruta;