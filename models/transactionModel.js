const mongoose = require('mongoose');
const { userSchema } = require('./userModel');
const Schema = mongoose.Schema;

const TransactonSchema = new Schema({
    amount: String,
    status: String,
    last_account_amount: Number,
    new_account_amount: Number,
    user: userSchema
})

let TransactionModel = mongoose.model("Transaction", TransactonSchema)
module.exports = TransactionModel;