const { addTransaction } = require("../controllers/transactionCtrl");
const auth = require("../middleware/auth");

const router = require("express").Router()

router.post('/add', auth, addTransaction)

module.exports = router;