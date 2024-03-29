const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../src/app');
const sinon = require('sinon');
const fs = require('fs');

const { expect } = chai;
chai.use(chaiHttp);

const output = [
  { id: 1, name: 'Mint Intense', brandId: 1 },
  { id: 2, name: 'White Coconut', brandId: 1 },
  { id: 3, name: 'Mon Chéri', brandId: 2 },
  { id: 4, name: 'Mounds', brandId: 3 },
];
const mockFile = JSON.stringify({ 
  brands: [
    {
      id: 1,
      name: 'Lindt & Sprungli',
    },
    {
      id: 2,
      name: 'Ferrero',
    },
    {
      id: 3,
      name: 'Ghirardelli',
    },
  ],
  chocolates: [
    {
      id: 1,
      name: 'Mint Intense',
      brandId: 1,
    },
    {
      id: 2,
      name: 'White Coconut',
      brandId: 1,
    },
    {
      id: 3,
      name: 'Mon Chéri',
      brandId: 2,
    },
    {
      id: 4,
      name: 'Mounds',
      brandId: 3,
    },
  ],
  nextChocolateId: 5,
});

describe('Usando o método GET em /chocolates', function () {
  beforeEach(function () {
    sinon.stub(fs.promises, 'readFile')
      .resolves(mockFile);
    sinon.stub(fs.promises, 'writeFile').resolves();
  });

  afterEach(function () {
    sinon.restore();
  });
  describe('Usando o método GET em /chocolates', function () {
    it('Retorna a lista completa de chocolates!', async function () {
      const output = [
        { id: 1, name: 'Mint Intense', brandId: 1 },
        { id: 2, name: 'White Coconut', brandId: 1 },
        { id: 3, name: 'Mon Chéri', brandId: 2 },
        { id: 4, name: 'Mounds', brandId: 3 },
      ];

      const response = await chai
        .request(app)
        .get('/chocolates');
      expect(response.status).to.be.equal(200);
      expect(response.body.chocolates).to.deep.equal(output);
    });
  });
  describe('Usando o método GET em /chocolates/:id para buscar o ID 4', function () {
    it('Retorna o chocolate Mounds', async function () {
      const response = await chai
        .request(app)
        .get('/chocolates/4');

      expect(response.status).to.be.equal(200);
      expect(response.body.chocolate).to.deep.equal(
        {
          id: 4,
          name: 'Mounds',
          brandId: 3,
        });
    });
  });
  describe('Usando o método GET em /chocolates/:id para buscar o ID 99', function () {
    it('Retorna status 404 com a mensagem "Chocolate not found"', async function () {
      const response = await chai
        .request(app)
        .get('/chocolates/99');

      expect(response.status).to.be.equal(404);
      expect(response.body).to.deep.equal({ message: 'Chocolate not found' })
    });
  });
  describe('Usando o método GET em /chocolates/brand/:brandId para buscar brandId 1', function () {
    it('Retorna os chocolates da marca Lindt & Sprungli', async function () {
      const response = await chai
        .request(app)
        .get('/chocolates/brand/1');

      expect(response.status).to.be.equal(200);
      expect(response.body.chocolates).to.deep.equal([
        {
          id: 1,
          name: 'Mint Intense',
          brandId: 1,
        },
        {
          id: 2,
          name: 'White Coconut',
          brandId: 1,
        },
      ]);
    });
  });
  describe('Usando o método GET em /chocolates/total para buscar o total de chocolates', function () {
    it('Retorna os chocolates que começam com Mo', async function () {
      const response = await chai
        .request(app)
        .get('/chocolates/search?name=Mo');
        expect(response.status).to.be.equal(200);
        expect(response.body.searchChocolates).to.deep.equal([
          {
            id: 3,
            name: "Mon Chéri",
            brandId: 2
          },
          {
            id: 4,
            name: "Mounds",
            brandId: 3
          }
        ])
    });
    it('Retorna um array vazio quando nenhum parâmetro é passado', async function () {
      const response = await chai
        .request(app)
        .get('/chocolates/search?name');
        expect(response.status).to.be.equal(404);
        expect(response.body.searchChocolates).to.deep.equal([]);
    });
  });
  describe('Usando o método GET em /chocolates/search para buscar chocolates', function () {
    it('Retornando o total de chocolates igual a 4', async function () {
      const response = await chai
        .request(app)
        .get('/chocolates/total');
        expect(response.status).to.be.equal(200);
        expect(response.body).to.deep.equal({
          totalChocolates: 4
        });
    });
  });

  describe('Usando o método PUT em /chocolates/:id para atualizar um chocolate', function () {
    // beforeEach(function () {
    //   sinon.stub(fs.promises, 'writeFile').resolves();
    // });
    // afterEach(function () {
    //   sinon.restore();
    // });
    it('Retorna o chocolate do id 1 atualizado', async function () {
      // sinon.stub(fs.promises, 'writeFile').resolves();
      const response = await chai
        .request(app)
        .put('/chocolates/1').send({
        name: 'Mint Pretty Good',
        brandId: 2,
      });

      expect(response.status).to.be.equal(200);
      expect(response.body.chocolate).to.deep.equal({ 
        id: 1,
        name: "Mint Pretty Good",
        brandId: 2
      });
      // sinon.restore();
    });
    it('Retorna um erro quando não existir o id', async function () {
      const response = await chai
        .request(app)
        .put('/chocolates/123').send({
        name: 'Mint Pretty Good',
        brandId: 2,
      });

      expect(response.status).to.be.equal(404);
      expect(response.body).to.deep.equal({ 
        message: "Chocolate not found"
      });
    });
  });
  describe('Usando o método POST em /chocolates para criar um novo chocolate', function(){
    it('Criar um chocolate Trybe', async function() {
      const expectedStatus = 201;
      const expectedResponse = {
        id: 5,
        name: 'Trybe Chocolate',
        brandId: 1
      };
      const requestBody = {
        name: 'Trybe Chocolate',
        brandId: 1
      }
      const response = await chai
        .request(app)
        .post('/chocolates')
        .send(requestBody);
      expect(response.status).to.be.equal(expectedStatus);
      expect(response.body).to.be.deep.equal(expectedResponse);
    })
  })
});