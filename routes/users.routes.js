const router = require('express').Router();

const{
    getUsers, postUsers, putUsers, deleteUsers
}=require   ('../controllers/users.controllers');



router.get('/', )

router.post('/', postUsers)
router.put('/', putUsers)
router.delete('/', deleteUsers)

module.exports =  router;