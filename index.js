const api = require("./api");
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



server.get("/pokemon/:id" , async (req , res) => {
    const { id } = req.params;
    try {
        const { data } = await api.get(`pokemon/${id}`);

        return res.send({name: data.name });
    } catch (error) {
        res.send({error: error.message});
    }

});