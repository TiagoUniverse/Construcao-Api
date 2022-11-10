const express = require("express");


const server = express();

server.use(express.json());


server.listen(3000);



server.get('/' , (req, res) => {
    return res.send({message: "OIIIIIIIE! Seja bem vindoo"});
});

server.get('/babado' , (req, res) => {
    return res.send({message: "Qual é o babado?"});
});