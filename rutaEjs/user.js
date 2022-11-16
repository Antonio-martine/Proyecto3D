/*Requerimientos*/
const express = require('express');
const ruta = express.Router();

/*Primera pantalla*/
ruta.get('/',(req,res)=>{
    res.render('index');
});

/*Iniciar Sesión*/
ruta.get('/iniciarSesion',(req,res)=>{
    res.render('iniciarSesion');
});

/*CrearSesion*/
ruta.get('/crearSesion',(req,res)=>{
    res.render('crearSesion');
});

/*Exportacion*/
module.exports=ruta;