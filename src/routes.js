const routes = require('express').Router();

routes.get('/', (req, res) =>  res.json('hello, world'));

routes.post('/', async (req, res) => {
    res.json('save product')
}) 

module.exports = routes;