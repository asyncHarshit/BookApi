import { Router } from "express";
import {getAllBook,getSingleBookById,addNewBook,updateBookById,deleteBook} from '../controllers/book.controller.js'

const router = Router();

router.get('/get',getAllBook);
router.get('/get/:id',getSingleBookById);
router.post('/add',addNewBook);
router.put('/update/:id',updateBookById);
router.delete('/delete/:id',deleteBook);

export default router;