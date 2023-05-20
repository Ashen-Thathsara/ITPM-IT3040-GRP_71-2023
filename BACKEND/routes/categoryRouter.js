const express = require('express');
const { protect } = require('../middlewares/authMiddleware');
const router = express.Router();
const {  getCategory,
     CreateCategory,
     getCategoryById,
     UpdateCategory,
     DeleteCategory  
     } = require('../controllers/categoryControllers');

router.route('/').get( protect,getCategory);
router.route('/create').post(protect, CreateCategory);
router.route('/:id').get(getCategoryById).put(protect,UpdateCategory).delete(protect,DeleteCategory);

module.exports = router;
