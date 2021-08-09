const routes = require("express").Router();
const PurchaseController = require("./controller/PurchaseController");

// const PurchaseController = require('./controller/PurchaseController');

routes.get("/", (req, res) => res.json("hello, world"));

routes.post("/save", PurchaseController.SavePurchase);

routes.get("/data", PurchaseController.GetPurchaseInfo);

module.exports = routes;
