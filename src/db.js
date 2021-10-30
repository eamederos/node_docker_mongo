const mongoose = require('mongoose')

mongoose.connect('mongodb://mongo/mydatabase')
        .then(db=>console.log('DB CONECTECTED', db.connection.host))
        .catch(error=>console.log(error))