const confirm = require('express').Router()
const { confirm_list, create, approve, revision, resubmit, reject, remove, print } = require('../controllers/confirm')
const { upload } = require('../controllers/uploader')
const { islogin, admins, pic } = require('../middleware/privilege')

// READ
confirm.get('/', islogin, confirm_list)

// CREATE
confirm.post('/', admins, create)
confirm.post('/upload/:id_letter', admins, upload)

// UPDATE
confirm.put('/approve/:id_letter', pic, approve)
confirm.put('/revision/:id_letter', pic, revision)
confirm.put('/resubmit/:id_letter', admins, resubmit)
confirm.put('/reject/:id_letter', pic, reject)
confirm.put('/print/:id_letter', admins, print)

// DELETE
confirm.delete('/:id_letter', admins, remove)

module.exports = confirm