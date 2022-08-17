const router = require('express').Router()
const ContactCtrl = require('../controllers/contactCtrl')


router.post('/contact', ContactCtrl.addSuggestion)


module.exports = router