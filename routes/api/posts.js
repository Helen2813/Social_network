const express = require('express');
const router = express.Router();


//@route    GET api/posts
//@desk     Test route
//@access   Public
router.get('/',
    (req, res) => res.send('Posts rout'));

module.exports = router;