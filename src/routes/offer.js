const offer = require('express').Router()
const { offer_list, create, approve, resubmit, revision, reject, remove, print } = require('../controllers/offer')
const { upload } = require('../controllers/uploader')
const { islogin, admins, pic } = require('../middleware/privilege')

// READ
offer.get('/', islogin, offer_list)

// CREATE
offer.post('/', admins, create)
offer.post('/upload/:id_letter', admins, upload)

// UPDATE
offer.put('/approve/:id_letter', pic, approve)
offer.put('/revision/:id_letter', pic, revision)
offer.put('/resubmit/:id_letter', admins, resubmit)
offer.put('/reject/:id_letter', pic, reject)
offer.put('/print/:id_letter', admins, print)

// DELETE
offer.delete('/:id_letter', admins, remove)

module.exports = offer