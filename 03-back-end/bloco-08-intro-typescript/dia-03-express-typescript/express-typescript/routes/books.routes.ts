import { Router } from 'express';
import BooksController from '../controllers/books.controller';
import {
  validatePartialBook,
} from '../middleware/books.middleware';

const router = Router();

const booksController = new BooksController();

const booksSlashId = '/books/:id';

router.get('/books', booksController.getAll);
router.post('/books', booksController.create);
router.get(booksSlashId, booksController.getById);
router.put(booksSlashId, booksController.update);
router.delete(booksSlashId, booksController.remove);
router.patch(booksSlashId, validatePartialBook, booksController.partialUpdate)

export default router;