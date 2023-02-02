const fs = require('fs').promises;
const { join } = require('path');

const readCacauTrybeFile = async () => {
  const path = '/files/cacauTrybeFile.json';
  try {
    const contentFile = await fs.readFile(join(__dirname, path), 'utf-8');
    return JSON.parse(contentFile);
  } catch (error) {
    return null;
  }
};

const writeCacauTrybeFile = async (content) => {
  const path = '/files/cacauTrybeFile.json';
  // try {
  //   await fs.writeFile(join(__dirname, path), JSON.stringify(chocolate));
  //   console.log('aqui')
  // } catch (e) {
  //   return null;
  // }
  try {
    const completePath = join(__dirname, path);
    await fs.writeFile(completePath, JSON.stringify(content));
  } catch (e) {
    console.error('Erro ao salvar o arquivo', e.message);
    return null;
  }
}

const updateChocolate =  async (id, body) => {
  const cacauTrybe = await readCacauTrybeFile();
  const chocolate = cacauTrybe.chocolates.find((choco) => choco.id === Number(id));
  if (chocolate) {
    cacauTrybe.chocolates = cacauTrybe.chocolates.map((choco) => {
      if (choco.id === Number(id)) {
        return {...choco,...body};
      }
      return choco;
    });
    await writeCacauTrybeFile(cacauTrybe);
    return { ...chocolate, ...body };
  }
  return null;
} 

const getAllChocolates = async () => {
  const cacauTrybe = await readCacauTrybeFile();
  return cacauTrybe.chocolates;
};

const getTotalChocolates = async () => {
  const cacauTrybe = await readCacauTrybeFile();
  return cacauTrybe.chocolates.length;
};

const getSearchedChocolates = async (name) => {
  const cacauTrybe = await readCacauTrybeFile();
  return cacauTrybe.chocolates.filter((chocolate) => chocolate.name.toLowerCase().includes(name.toLowerCase()));
};

const getChocolateById = async (id) => {
  const cacauTrybe = await readCacauTrybeFile();
  return cacauTrybe.chocolates
    .find((chocolate) => chocolate.id === id);
};

const getChocolatesByBrand = async (brandId) => {
  const cacauTrybe = await readCacauTrybeFile();
  return cacauTrybe.chocolates
    .filter((chocolate) => chocolate.brandId === brandId);
};

const createChocolate = async (name, brandId) => {
  const cacauTrybe = await readCacauTrybeFile();
  const newChocolate = { id: cacauTrybe.nextChocolateId, name, brandId };
  
  cacauTrybe.chocolates.push(newChocolate);
  cacauTrybe.nextChocolateId += 1;
  await writeCacauTrybeFile(cacauTrybe);

  return newChocolate;
};

const deleteChocolate = async (id) => {
  const cacauTrybe = await readCacauTrybeFile();
  const chocolateExists = cacauTrybe.chocolates.some(
    (chocolate) => chocolate.id === id,
  );

  if (chocolateExists) {
    cacauTrybe.chocolates = cacauTrybe.chocolates.filter(
      (chocolate) => chocolate.id !== id,
    );
  
    await writeCacauTrybeFile(cacauTrybe);
    return true;
  }

  return false;
};

module.exports = {
    getAllChocolates,
    getChocolateById,
    getChocolatesByBrand,
    getTotalChocolates,
    getSearchedChocolates,
    updateChocolate,
    createChocolate,
    deleteChocolate,
};