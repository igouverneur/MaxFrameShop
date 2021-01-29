const express = require('express');
const router = express.Router();
const {userProtect} = require('../middleware/authMiddleware')

const {userRegister, userLogin, getUserProfile} = require('../controllers/userController')

router.route('/register').post(userRegister)
router.route('/login').post(userLogin)
router.route('/profile').get(userProtect, getUserProfile)

module.exports = router;