const mongoose = require('mongoose');

const connectDB =  async () => {

    try{
        await mongoose.connect('mongodb://mongo:27017/mydatabase',{

        }),
        console.log('Conectando a MongoDB');
    }catch (error){
        console.error('Error al conectar a MongoDB',error);
        process.exit(1);
    }
};

module.exports = connectDB;