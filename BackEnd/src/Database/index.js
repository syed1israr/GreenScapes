import mongoose from 'mongoose'

const connectDB = async () => {
 try {
    const Connection=await mongoose.connect(process.env.Mongo_URL)
    if(Connection){
        console.log(`MongoDb Connect at ${Connection.connection.host}`)
    }
 } catch (error) {
    console.log(`Error while connecting with Database ${error}`)
 }
}

export default connectDB;