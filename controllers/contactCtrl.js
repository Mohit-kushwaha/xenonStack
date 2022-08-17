const Contact = require('../models/ContacUs')

const ContactCtrl = {

    addSuggestion: async (req, res) =>
    {
        try
        {
            const { name, email, suggesstion } = req.body
            const newContact = new Contact({
                name, email, suggesstion
            })
            await newContact.save()
            res.json({ newContact })
        } catch (err)
        {
            return res.status(500).json({ msg: err.message })
        }
    }


}

module.exports = ContactCtrl