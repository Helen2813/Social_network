const express = require('express');
const router = express.Router();


//@route    GET api/profile
//@desk     Test route
//@access   Public
router.get('/',
    (req, res) => res.send('Profile rout'));

module.exports = router;