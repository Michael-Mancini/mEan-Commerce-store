var express = require('express');
var router = express.Router();

const Item = require('../models/Item');

router.get('/items', (req, res, next) => {
    Item.find((err, items) => {
        if(err){
            res.json(err);
        } else {
            res.json(items);
        }
    });
});

router.post('/item', (req, res, next) => {
    let newItem = new Item({
        itemName: req.body.itemName,
        itemPrice: req.body.itemPrice,
        itemStock: req.body.itemStock
    });
    newItem.save((err, item) => {
        if(err){
            res.json(err);
        } else {
            res.json({msg: 'Item has been added successfully'});
        }
    });
});

router.put('/item/:id', (req, res, next) => {
    Item.findOneAndUpdate({
        _id: req.params.id
    }, {
        $set:{
            itemName: req.body.itemName,
            itemPrice: req.body.itemPrice,
            itemStock: req.body.itemStock
        }
    }, (err, result) => {
        if(err){
            res.json(err);
        } else {
            res.json(result);
        }
    });
});

router.delete('/item/:id', (req, res, next) => {
    Item.remove({_id: req.params.id}, (err, result) => {
        if(err){
            res.json(err);
        } else {
            res.json(result);
        }
    });
});

module.exports = router;