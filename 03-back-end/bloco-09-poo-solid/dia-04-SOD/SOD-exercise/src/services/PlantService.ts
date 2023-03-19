import HttpException from '../exceptions/HttpException';
import { INewPlant, IPlant } from '../interfaces/IPlant';
import { IModel } from '../models/interfaces/IModel';

class PlantService {
  private model: IModel<IPlant>;

  constructor(model: IModel<IPlant>) {
    this.model = model;
  }

  private static validatePlant(plant: INewPlant) {
    const {
      breed, needsSun, origin, size,
    } = plant;
    if (typeof breed !== 'string') {
      throw new HttpException(400, 'Attribute "breed" must be string.');
    }
    if (typeof needsSun !== 'boolean') {
      throw new HttpException(400, 'Attribute "needsSun" must be boolean.');
    }
    if (typeof origin !== 'string') {
      throw new HttpException(400, 'Attribute "origin" must be string.');
    }
    if (typeof size !== 'number') {
      throw new HttpException(400, 'Attribute "size" must be number.');
    }
  }

  private static waterFrequency(plant: INewPlant) {
    const { needsSun, origin, size } = plant;
    const water = needsSun
      ? size * 0.77 + (origin === 'Brazil' ? 8 : 7)
      : (size / 2) * 1.33 + (origin === 'Brazil' ? 8 : 7);
    return water;
  }

  public async getAll(): Promise<IPlant[]> {
    const plants = await this.model.getAll();
    return plants;
  }

  public async create(plant: INewPlant): Promise<IPlant> {
    PlantService.validatePlant(plant);
    const waterFrequency = PlantService.waterFrequency(plant);
    const newPlant = await this.model.create({ ...plant, waterFrequency });
    return newPlant;
  }

  async getById(id: string): Promise<IPlant> {
    const plant = await this.model.getById(Number(id));
    if (!plant) throw new HttpException(404, 'Plant not found');
    return plant;
  }

  async update(id: string, plant: INewPlant): Promise<IPlant> {
    PlantService.validatePlant(plant);
    const waterFrequency = PlantService.waterFrequency(plant);
    await this.getById(id);
    const updatedPlant = await this.model.update({ id: Number(id), ...plant, waterFrequency });
    return updatedPlant;
  }

  async removeById(id: string): Promise<void> {
    await this.getById(id);
    await this.model.removeById(Number(id));
  }
}

export default PlantService;
