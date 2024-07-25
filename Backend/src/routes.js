import express from 'express';
import { signup,login ,handleRefreshToken} from './controller/authController.js';
import { addEmploye } from './controller/employee.js';

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.get('/refresh', handleRefreshToken);
router.post('/addEmploye',addEmploye)


export default router;
