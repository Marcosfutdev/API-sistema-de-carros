const mongoose = require('mongoose');

const connectToDatabase = async () => {
    try{
        await mongoose.connect(`mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@meubanco.hav29gh.mongodb.net/?retryWrites=true&w=majority&appName=meubanco`);
        console.log("Conexão efetuada com sucesso ao banco!!")
    }
    catch(error){
        console.log("Erro ao se conectar com o banco de dados!!", error)
    }
};
module.exports = connectToDatabase;