import { Router } from 'express'

import * as product_ctrl from '../controllers/products.controller'
import { auth_jwt } from '../middlewares'

const router = Router()

router.get('/:productId', [auth_jwt.verify_token, auth_jwt.is_moderator], product_ctrl.getProductById)
router.get('/', auth_jwt.verify_token, product_ctrl.getProducts)
router.post('/', [auth_jwt.verify_token, auth_jwt.is_admin], product_ctrl.createProduct)

export default router