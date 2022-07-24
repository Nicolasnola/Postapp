const express = require ("express") ;  
const app = express();
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const Post = require("./models/Post");
const Postroutes = require('./routes/Postroutes')


// config
    // Template Engine
      app.engine('handlebars',handlebars.engine({defaultLayout: 'main'}))
      app.set('view engine', 'handlebars')

    // Body Parser
      app.use(bodyParser.urlencoded({extended: false}));
      app.use(bodyParser.json());

  
//Rotas
   
   app.use(Postroutes)

app.listen(8081, function() {
    console.log("Servidor Rodadando na url http://localhost:8081")
});
