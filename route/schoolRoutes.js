const { addSchool, listSchools } = require('../controller/schoolController');

const router = require('express').Router();

router.route('/addSchool').post(addSchool);
router.route('/listSchools').get(listSchools);

module.exports = router;
