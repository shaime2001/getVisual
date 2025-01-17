const mongoose = require('mongoose');

const connectDB = async ()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        
        const dbName = conn.connections[0].name; // Extract the database name

        console.log(`Connected to database: ${dbName}`);
        console.log(`connected successfully : ${conn.connection.host}`.cyan.underline);

    } catch (error) {
        console.log(error);
        process.exit(1)
    }
}

module.exports = connectDB