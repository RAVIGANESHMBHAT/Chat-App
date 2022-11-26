import express from 'express'
import { deleteUser, getAllUsers, getUser, updateUser } from '../Controllers/UserController.js'
import authMiddleWare from '../Middleware/AuthMiddleware.js';

const router = express.Router()

router.get('/:id', getUser);
router.get('/',getAllUsers)
router.put('/:id',authMiddleWare, updateUser)
router.delete('/:id',authMiddleWare, deleteUser)

export default router