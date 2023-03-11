import express, { Request, Response, NextFunction } from 'express';
import UserRoutes from './routes/user.route';

const app = express();

app.use(express.json());

const PORT = 3001;

app.get('/', (_req: Request, res: Response) => {
  res.status(200).send('Express + TypeScript')
});

app.use(UserRoutes);

app.use((err: Error, _req: Request, res: Response, next: NextFunction) => {
  const { status, message } = err as any;
  console.log(`status: ${status}`);
  return res.status(status || 500).json({ message })
  // switch (status) {
  //   case 'BadRequestError':
  //     res.status(400).json({ message });
  //     break;
  //   case 'ValidationError':
  //     res.status(400).json({ message: details[0].message });
  //     break;
  //   case 'NotFoundError':
  //     res.status(404).json({ message });
  //     break;
  //   case 'ConflictError':
  //     res.status(409).json({ message });
  //     break;
  //   default:
  //     console.error(err);
  //     res.sendStatus(500);
  // }

  // next();
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});