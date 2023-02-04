const TransactionModel = require("../models/transactionModel");
const { userModel } = require("../models/userModel");

let transactiCtrl = {
    addTransaction: async (req, res) => {
        let trans = {last_account_amount: 200, new_account_amount: 400, amount: 100, status: "pending"}
        let user = await userModel.findById(req.user.id)
        trans.last_account_amount = user.solde;
        user.solde = user.solde - trans.amount - (trans.amount * 0.01)
        user = await userModel.findByIdAndUpdate(user.id, user, {new: true})
        console.log(user);
        let transaction = {...trans};
        transaction.new_account_amount = user.solde;
        transaction.user = user
        const newTransaction = new TransactionModel(transaction)
        const monTrans = await newTransaction.save()
        res.send(monTrans)
    }
}

module.exports = transactiCtrl;