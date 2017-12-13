const mongoose = require('mongoose');

const ItemSchema = mongoose.Schema({
    itemName:{
        type: String,
        required: true
    },
    itemPrice:{
        type: Number,
        required: true
    },
    itemStock:{
        type: Number,
        required: true
    }
});

const Item = module.exports = mongoose.model('Item', ItemSchema);