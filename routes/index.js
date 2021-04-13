const router = require('express').Router();

router.use('/users', require('./users'));
router.use('/api/contacts', require('./api/contacts'));

module.exports = router;
