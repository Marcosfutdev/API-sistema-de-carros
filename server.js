const express = require('express');
const CarModel = require('./src/models/car.model');
const app = express();
app.use(express.json());

const cors = require('cors');
app.use(cors({
    origin:'http://localhost:5173'
}));

//rotas
app.get('/cars', async (req, res) => {
    try{
        const cars = await CarModel.find({});
        return res.status(200).json(cars);
    }
    catch(error){
        return res.status(500).send(error.message)
    }
});
app.get('/cars/:id', async(req, res) => {
    try{
        const id = req.params.id;
        const car = await CarModel.findById(id);
        return res.status(200).json(car);
    }
    catch(error){
        return res.status(500).send(error.message);
    }
});

app.post('/cars', async (req, res) => {
    try{
        const car = await CarModel.create(req.body);
        res.status(201).json(car);
    }
    catch(error){
        return res.status(500).send(error.message);
    }
});

app.patch('/cars/:id', async (req, res) => {
    try{
        const id = req.params.id;
        const car = await CarModel.findByIdAndUpdate(id, req.body, {new:true});
        res.status(200).json(car);
    }
    catch(error){
        return res.status(500).send(error.message);
    }
});

app.delete('/cars/:id', async (req, res) => {
    try{
        const id = req.params.id;
        const car = await CarModel.findByIdAndDelete(id);
        res.status(200).json(car);
    }
    catch(error){
        return res.status(500).send(error.message);
    }
})
const port = 3030;

app.listen(port, () => console.log("Rodando o servidor na porta", port));