const { connect } = require('mongoose');

const connectDB = async () => {
    
    try {
        await connect( process.env.MONGO_DB_CNN );
        console.log('Base de datos Conectada :)')
    } catch (error) {
        console.log( error.message )
        throw new Error('Error al conectar a BD')
    }
    
}

module.exports = connectDB;