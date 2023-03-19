import fs from 'fs/promises';
import path from 'path';
import { IOpsInfo, IPlant } from '../interfaces/IPlant';
import { IModel } from './interfaces/IModel';

export default class PlantModel implements IModel<IPlant> {
  private readonly plantsFile = path.join(__dirname, '..', 'models', 'database', 'plantsData.json');

  private readonly opsFile = path.join(__dirname, '..', 'models', 'database', 'opsInfo.json');

  private static async readFile<T>(file: string):Promise<T> {
    const data = await fs.readFile(file, { encoding: 'utf8' });
    const info = JSON.parse(data);
    return info;
  }

  private static async writeFile<T>(file: string, info: T): Promise<void> {
    await fs.writeFile(file, JSON.stringify(info, null, 2));
  }

  private async updateOpsInfo(incrementAmount = 1): Promise<number> {
    const opsInfo = await PlantModel.readFile<IOpsInfo>(this.opsFile);
    opsInfo.createdPlants += incrementAmount;
    await PlantModel.writeFile<IOpsInfo>(this.opsFile, opsInfo);
    return opsInfo.createdPlants;
  }

  public async getAll(): Promise<IPlant[]> {
    const plants = await PlantModel.readFile<IPlant[]>(this.plantsFile);
    return plants;
  }

  public async create(plant: Omit<IPlant, 'id'>): Promise<IPlant> {
    const plants = await PlantModel.readFile<IPlant[]>(this.plantsFile);
    const newPlantId = await this.updateOpsInfo(1);
    const newPlant = { id: newPlantId, ...plant };
    plants.push(newPlant);
    await PlantModel.writeFile<IPlant[]>(this.plantsFile, plants);
    return newPlant;
  }

  async getById(id: number): Promise<IPlant | null> {
    const plants = await PlantModel.readFile<IPlant[]>(this.plantsFile);
    const plant = plants.find((el) => el.id === id);
    if (!plant) return null;
    return plant;
  }

  async removeById(id: number): Promise<void> {
    const plants = await PlantModel.readFile<IPlant[]>(this.plantsFile);
    const filteredPlants = plants.filter((plant) => plant.id !== id);
    await PlantModel.writeFile(this.plantsFile, filteredPlants);
  }

  async update(plant: IPlant): Promise<IPlant> {
    const plants = await PlantModel.readFile<IPlant[]>(this.plantsFile);
    const updatedPlants = plants.map((el) => {
      if (el.id === plant.id) return { ...plant };
      return el;
    });
    await PlantModel.writeFile(this.plantsFile, updatedPlants);
    return plant;
  }
}
