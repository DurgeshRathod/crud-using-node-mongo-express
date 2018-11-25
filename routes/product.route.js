const express = require('express')
const router = express.Router()

//CONTROLLER OBJECT
const product_controller = require('../controllers/product.controller')

//ROUTING TO THE CONTROLLER FOR HANDLING
router.get('/test',product_controller.test);
router.post('/create',product_controller.product_create);
router.get('/:id',product_controller.product_details);
router.put('/:id/update',product_controller.product_update);
router.delete('/:id/delete',product_controller.product_delete);
module.exports=router;
