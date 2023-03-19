import { Request, Response, NextFunction } from 'express';
import { INewPlant, IPlant } from '../interfaces/IPlant';
import { IService } from '../services/interfaces/IService';

class PlantController {
  public service: IService<IPlant, INewPlant>;

  constructor(service: IService<IPlant, INewPlant>) {
    this.service = service;
  }

  public async getAll(_req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    try {
      const plants = await this.service.getAll();
      return res.status(200).json(plants);
    } catch (error) {
      next(error);
    }
  }

  public async create(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    try {
      const plant = await this.service.create(req.body);
      return res.status(201).json(plant);
    } catch (error) {
      next(error);
    }
  }

  async getById(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    const { id } = req.params;
    try {
      const plant = await this.service.getById(id);
      return res.status(200).json(plant);
    } catch (error) {
      next(error);
    }
  }

  async remove(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    const { id } = req.params;
    try {
      await this.service.removeById(id);
      return res.sendStatus(204);
    } catch (error) {
      next(error);
    }
  }

  async update(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    const { id } = req.params;
    try {
      const plant = await this.service.update(id, req.body);
      return res.status(200).json(plant);
    } catch (error) {
      next(error);
    }
  }
}

export default PlantController;
