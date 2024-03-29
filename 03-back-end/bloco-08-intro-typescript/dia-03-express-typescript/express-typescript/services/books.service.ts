import connection from '../models/connection';
import BookModel from '../models/book.model';
import Book from '../interfaces/book.interface';
import { BadRequestError, NotFoundError } from 'restify-errors';


class BookService {
  model: BookModel;

  constructor() {
    this.model = new BookModel(connection);
  }

  static validateProperties(book: Book): [boolean, string | null] {
    const properties = ['title', 'price', 'author', 'isbn'];
    for (let i = 0; i < properties.length; i += 1) {
      if (!Object.prototype.hasOwnProperty.call(book, properties[i])) {
        return [false, properties[i]];
      }
    }
    return [true, null];
  }

  static validateValues(book: Book): [boolean, string | null] {
    const entries = Object.entries(book);
    for (let i = 0; i < entries.length; i += 1) {
      const [property, value] = entries[i];
      if (!value) {
        return [false, property];
      }
    }
    return [true, null];
  }

  static validationBook(book: Book): void | string {
    let [valid, property] = BookService.validateProperties(book);

    if (!valid) {
      return `O campo ${property} é obrigatório.`;
    }
    [valid, property] = BookService.validateValues(book);

    if (!valid) {
      return `O campo ${property} não pode ser nulo ou vazio.`;
    }
  }

  async getAll(): Promise<Book[]> {
    const books = await this.model.getAll();
    return books;
  }

  async getById(id: number): Promise<Book> {
    const book = await this.model.getById(id);
    return book;
  }

  create(book: Book): Promise<Book> {
    // chamamos o método validationBook
    const isValidBook = BookService.validationBook(book);

    if (typeof isValidBook === 'string') {
      // aqui estamos jogando o erro para o nosso middleware de erro fazer o tratamento e dar a resposta da requisição
      throw new BadRequestError(isValidBook);
    }
    // depois de todas as verificações chamamos a camada de model
    return this.model.create(book);
  }

  async update(id: number, book: Book): Promise<void> {
    // vamos utilizar a mesma validação do método create
    const isValidBook = BookService.validationBook(book);
    if (typeof isValidBook === 'string') {
      throw new BadRequestError(isValidBook);
    }
    //
    const bookFound = await this.model.getById(id);

    if (!bookFound) {
      throw new NotFoundError('Book not found!');
    }

    return this.model.update(id, book);
  }

  async remove(id: number): Promise<void> {
    const bookFound = await this.model.getById(id);
    if (!bookFound) {
      throw new NotFoundError('Book not found!');
    }

    this.model.remove(id);
  }

  async partialUpdate(id: number, book: Book): Promise<void> {
    const bookFound = await this.model.getById(id);
    if (!bookFound) {
      throw new NotFoundError('NotFoundError');
    }

    this.model.partialUpdate(id, book);
  }

}

export default BookService;