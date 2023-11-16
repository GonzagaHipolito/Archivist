const express = require('expres');
const bodyparser = require('body-parser');
const app = express(cors);
const cors = require('cors');

app.bodyparser(bodyparser.urlencoded({extended:false}));
app.bodyparser(bodyparser.json());

const allowedOrigins =['http//localhost']

app.use(cors(
    { origin:(origin,callback)=>{
        if(!origin || allowedOrigins.indexOf(origin)!==-1){
            console.log("Dominio permitido");
            callback(null, true);
        } else {
            console.log("Dominio no permitido");
            callback(new Error("Esrte dominio no esta permitido"));
        }
    }
    
    }));

//ruteo 
const authRouter = require('./src/autenticacion');
app.use('/src',authRouter);


module.exports = app;