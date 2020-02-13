const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();

var corsOptions = {
    origin: 'http://localhost:8080/'
};

require('./app/routes/user.route')(app);

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended:true}));

/*
 * app.get('/',(req,res) =>{
    res.json({message: 'Teste'});
});
 */

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log('Servidor na porta: ${PORT}');
});

const db = require('./app/models');
db.sequelize.sync();

db.sequelize.sync({force:true}).then(() =>{
    console.log('Testando sync');
});