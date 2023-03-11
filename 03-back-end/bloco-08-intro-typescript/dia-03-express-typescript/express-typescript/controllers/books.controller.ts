import { Request, Response } from 'express';
import statusCodes from '../statusCodes';
import BookService from '../services/books.service';

class BooksController {
  constructor(private bookService = new BookService()) { }

  getAll = async (_req: Request, res: Response) => {
    const books = await this.bookService.getAll();
    res.status(statusCodes.OK).json(books);
  };

  getById = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id, 10);
    const book = await this.bookService.getById(id);

    if (!book) {
      return res.status(statusCodes.NOT_FOUND)
        .json({ message: 'Book not found!' });
    }

    res.status(statusCodes.OK).json(book);
  }

  create = async (req: Request, res: Response) => {
    const book = req.body;

    const bookCreated = await this.bookService.create(book);
    res.status(statusCodes.CREATED).json(bookCreated);
  };

  update = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const book = req.body;
    await this.bookService.update(id, book);

    res.status(statusCodes.NO_CONTENT).end();
  };

  remove = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    await this.bookService.remove(id);

    res.status(statusCodes.NO_CONTENT).end();
  };

  async partialUpdate(req: Request, res: Response): Promise<void> {
    const id = Number(req.params.id);
    const book = req.body;
    await this.bookService.partialUpdate(id, book);

    res.status(statusCodes.NO_CONTENT).end();
  }
}

export default BooksController;