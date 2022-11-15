/*Requerimientos*/
const express = require('express');
const path = require('path');
const session = require('express-session');
const mongoose = require('mongoose');
const app = express();
const RutasEJs = require('./rutaEjs/user')

/*Conexion a moongose
mongoose.connect('')
.then(()=>{
    console.log('Conexión a MongoDB correcta')
})
.catch(()=>{
    console.log('Error al conectar a MongoDB, verificar conexión...')
});*/

/*Ruta*/
app.use('/estatico', express.static(path.join(__dirname,'public')));
app.set('view engine','ejs');
app.use(express.urlencoded({extended:true}));
app.use(session({
    secret: '*****',
    resave: true,
    saveUninitialized: true
}))

/*Ruta principal*/
app.use('/',RutasEJs)

/*Puerto*/
app.listen(process.env.PORT || 8080,()=>{
    console.log('3D in 8080')
});

