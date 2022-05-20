const express = require("express");
const cors = require('cors');
const connectDB = require("../db/dbConfig");

class Server {

    constructor() {

        this.app = express()
        this.port = process.env.PORT || 8080 ;
        this.path = '/api/task'

        this.middelware();
        this.conectionDB();
        this.routes();
    }

    middelware() {
        this.app.use( cors() );
        this.app.use( express.json() ); //Lectura y parseo del body 
    }

    async conectionDB () {
        await connectDB()
    }

    routes () {
        this.app.use( this.path , require('../routes/task.route') );
    }

    listen () {
        this.app.listen( this.port, () => {
            console.log(`Servidor con Clase corriendo en puerto ${this.port}
            http://localhost:${this.port}/api/task`)
        })
    }
}

module.exports = Server;