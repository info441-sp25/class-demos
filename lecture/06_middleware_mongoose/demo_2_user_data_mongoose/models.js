import mongoose from 'mongoose'

const models = {}

console.log("connecting to mongodb")

// TODO: Insert your mongodb connection url below
await mongoose.connect("mongodb://localhost:27017/userDemo")

console.log("successfully connected to mongodb!")

const userSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    favorite_ice_cream: String
})

models.User = mongoose.model('User', userSchema)

console.log("finished creating models")

export default models