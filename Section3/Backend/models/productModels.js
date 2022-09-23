const {Schema, model} = require('../connection');

// structure of model
const mySchema = new Schema({
    title : String,
    description : String,
    price : Number
})

// name of collection
module.exports = model('products', mySchema);