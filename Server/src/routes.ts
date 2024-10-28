import express from 'express'
import { serverTime } from './Routes/serverTime';
import { authMiddleware } from './Middleware/authMiddleware';

const router = express.Router();
router.get('/time', authMiddleware, serverTime)

export {router}