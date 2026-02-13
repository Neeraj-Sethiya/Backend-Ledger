const {Router} = require('express');
const authMiddleware = require("../middleware/auth.middleware");
const transactionController = require("../controllers/transaction.controller");
const ledgerModel = require("../models/ledger.model");

const transactionRouter = Router();


transactionRouter.post("/", authMiddleware.authMiddleware,transactionController.createTransaction);
transactionRouter.post("/system/initial-funds", authMiddleware.authMiddlewareSystemUser, transactionController.createInitialFundTransaction);


module.exports = transactionRouter; 