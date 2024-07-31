import express from 'express';
import { signup,login ,handleRefreshToken} from './controller/authController.js';
import { addEmploye, deleteEmploye, editEmploye, getEmploye, updatedEmploye } from './controller/employee.js';

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.get('/refresh', handleRefreshToken);
router.post('/addEmploye',addEmploye)
router.get('/getEmploye',getEmploye)
router.get('/edit/:id' ,editEmploye)
router.post('/edit/:id',updatedEmploye)
router.delete('/delete/:id',deleteEmploye)

export default router;
