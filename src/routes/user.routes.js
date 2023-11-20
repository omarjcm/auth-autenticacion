import { Router } from 'express'

import * as auth_ctrl from '../controllers/auth.controller'

const router = Router()

router.post('/signin', auth_ctrl.sign_in)
router.post('/signup', auth_ctrl.sign_up)

export default router