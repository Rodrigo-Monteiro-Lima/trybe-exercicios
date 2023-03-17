// class Estudante {
//   #matricula: string;
//   #nome: string;
//   #prova: number[];
//   #trabalho: number[];

//   constructor(matricula: string, nome: string) {
//     this.#matricula = matricula,
//       this.#nome = nome;
//     this.#prova = [];
//     this.#trabalho = [];
//   }

//   get matricula(): string {
//     return this.#matricula;
//   }

//   set matricula(value: string) {
//     if (value.length < 6) throw new Error('matricula deve ter no mínimo 6 caracteres');
//     this.#matricula = value
//   }

//   get nome(): string {
//     return this.#nome;
//   }

//   set nome(value: string) {
//     if (value.length < 4) throw new Error('nome deve ter no mínimo 4 caracteres');
//     this.#nome = value
//   }

//   get prova(): number[] {
//     return this.#prova;
//   }

//   set prova(value: number[]) {
//     if (value.length > 4) throw new Error('O estudante pode ter no máximo 4 notas de prova');
//     this.#prova = value
//   }


//   get trabalho(): number[] {
//     return this.#trabalho;
//   }

//   set trabalho(value: number[]) {
//     if (value.length > 2) throw new Error('O estudante pode ter no máximo 2 notas de trabalho');
//     this.#trabalho = value
//   }

//   somarNotas = (): number => {
//     return [...this.#prova, ...this.#trabalho].reduce((acc, curr) => acc + curr);
//   }

//   media = (): number => {
//     const notas = [...this.#prova, ...this.#trabalho];
//     return +(this.somarNotas() / notas.length).toFixed(2);
//   }
// }

// const rodrigo = new Estudante('201920010019', 'Rodrigo');

// // rodrigo.matricula = '123456';
// // rodrigo.nome = 'Rodrigo Monteiro'
// // rodrigo.prova = [10, 9, 8, 7];
// // rodrigo.trabalho = [10, 9]

// console.log(rodrigo.somarNotas(), rodrigo.media());

class Client {
  #nome = String();

  constructor(nome: string) {
    this.#nome = nome
  }

  get nome(): string {
    return this.#nome;
  }

  set nome(value: string) {
    if (value.length < 4) throw new Error('nome deve ter no mínimo 4 caracteres');
    this.#nome = value
  }

}

class ItemPedido {
  #nome: string;
  #preco: number;

  constructor(nome: string, preco: number) {
    this.#nome = nome;
    this.#preco = preco
  }

  get nome(): string {
    return this.#nome;
  }

  set nome(value: string) {
    if (value.length < 4) throw new Error('nome deve ter no mínimo 4 caracteres');
    this.#nome = value
  }

  get preco(): number {
    return this.#preco;
  }

  set preco(value: number) {
    if (value < 0) throw new Error('preco deve ser maior do que 0,00');
    this.#preco = value
  }

}

class Pedido {
  #cliente: Client;
  #itens: ItemPedido[];
  #pagamento: "cartão" | "dinheiro";
  #desconto: number = 0;

  constructor(cliente: Client, itens: ItemPedido[], pagamento: "cartão" | "dinheiro", desconto: number) {
    this.#cliente = cliente
    this.#itens = itens;
    this.#pagamento = pagamento;
    this.#desconto = desconto;
  }

  get cliente(): Client {
    return this.#cliente;
  }

  set cliente(value: Client) {
    this.#cliente = value;
  }

  get itens(): ItemPedido[] {
    return this.#itens;
  }

  set itens(value: ItemPedido[]) {
    if (value.length === 0) throw new Error('O pedido deve ter pelo menos um item.');
    this.#itens = value;
  }

  get pagamento(): "cartão" | "dinheiro" {
    return this.#pagamento;
  }

  set pagamento(value: "cartão" | "dinheiro") {
    this.#pagamento = value;
  }

  get desconto(): number {
    return this.#desconto;
  }

  set desconto(value: number) {
    if (value < 0) throw new Error('O desconto deve ser maior do que 0.');
    this.#desconto = value;
  }

  total = (): number => {
    const valor = this.#itens.map(({ preco }) => preco);
    return valor.reduce((acc, curr) => acc + curr)
  }

  totalDesconto = (): number => {
    return this.total() * (1 - this.#desconto);
  }

}

const cliente = new Client('Rodrigo');

const sanduba = new ItemPedido('Sanduíche Natural', 5.00);
const suco = new ItemPedido('Suco de Abacaxi', 5.00);



const ordem = new Pedido(cliente, [sanduba, suco], 'dinheiro', 0.30);

console.log(ordem.total(), ordem.totalDesconto());


// class Client {
//   private _nome: string;

//   constructor(nome: string) {
//     this._nome = nome
//   }

//   get nome(): string {
//     return this._nome;
//   }

//   set nome(value: string) {
//     if (value.length < 4) throw new Error('nome deve ter no mínimo 4 caracteres');
//     this._nome = value
//   }

// }

// class ItemPedido {
//   private _nome: string;
//   private _preco: number;

//   constructor(nome: string, preco: number) {
//     this._nome = nome;
//     this._preco = preco
//   }

//   get nome(): string {
//     return this._nome;
//   }

//   set nome(value: string) {
//     if (value.length < 4) throw new Error('nome deve ter no mínimo 4 caracteres');
//     this._nome = value
//   }

//   get preco(): number {
//     return this._preco;
//   }

//   set preco(value: number) {
//     if (value < 0) throw new Error('preco deve ser maior do que 0,00');
//     this._preco = value
//   }

// }

// class Pedido {
//   private _cliente: Client;
//   private _itens: ItemPedido[];
//   private _pagamento: "cartão" | "dinheiro";
//   private _desconto: number;

//   constructor(cliente: Client, itens: ItemPedido[], pagamento: "cartão" | "dinheiro", desconto: number) {
//     this._cliente = cliente
//     this._itens = itens;
//     this._pagamento = pagamento;
//     this._desconto = desconto;
//   }

//   get cliente(): Client {
//     return this._cliente;
//   }

//   set cliente(value: Client) {
//     this._cliente = value;
//   }

//   get itens(): ItemPedido[] {
//     return this._itens;
//   }

//   set itens(value: ItemPedido[]) {
//     if (value.length === 0) throw new Error('O pedido deve ter pelo menos um item.');
//     this._itens = value;
//   }

//   get pagamento(): "cartão" | "dinheiro" {
//     return this._pagamento;
//   }

//   set pagamento(value: "cartão" | "dinheiro") {
//     this._pagamento = value;
//   }

//   get desconto(): number {
//     return this._desconto;
//   }

//   set desconto(value: number) {
//     if (value < 0) throw new Error('O desconto deve ser maior do que 0.');
//     this._desconto = value;
//   }

// }

// const cliente = new Client('Rodrigo');

// const sanduba = new ItemPedido('Sanduíche Natural', 5.00);
// const suco = new ItemPedido('Suco de Abacaxi', 5.00);



// const ordem = new Pedido(cliente, [sanduba, suco], 'dinheiro', 0.10);

// console.log(ordem.cliente.nome);

class Data {
  #dia: number;
  #mes: number;
  #ano: number;

  constructor(dia: number, mes: number, ano: number) {
    const data = `${ano}-${mes}-${dia}`;
    if (new Date(data).getDate() !== dia) {
      this.#dia = 1;
      this.#mes = 1;
      this.#ano = 1900;
    } else {
      this.#dia = dia;
      this.#mes = mes;
      this.#ano = ano;
    }
  }

  get dia(): number {
    return this.#dia;
  }
  set dia(value: number) {
    this.#dia = value;
  }

  get mes(): number {
    return this.#mes;
  }
  set mes(value: number) {
    this.#mes = value;
  }

  get ano(): number {
    return this.#ano;
  }
  set ano(value: number) {
    this.#ano = value;
  }

  getMonthName = (): string => {
    const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho',
      'Agosto',
      'Setembro',
      'Outubro',
      'Novembro',
      'Dezembro',

    ]
    return meses[this.#mes - 1];
  }

  isLeapYear = (): boolean => {
    return this.#ano % 4 === 0;
  }

  getDate = () => {
    return new Date(`${this.#ano}-${this.#mes}-${this.#dia}`);
  }

  compare = (data: Data): number => {
    if (this.getDate() > data.getDate()) return 1
    if (this.getDate() < data.getDate()) return -1
    return 0;
  }

  format = (formatting: string): string => {
    const conditions: boolean[] = [
      (!formatting.match(/a{2,4}/g)),
      (!formatting.match(/m{2}/g) && !formatting.match(/M{1}/g)),
      (!formatting.match(/d{2}/g)),
    ];
    if (conditions.every((cond) => cond)) {
      throw new Error(`O formato passado é inválido: ${formatting}`);
    }
    const day = this.#dia > 9 ? this.#dia.toString() : `0${this.#dia.toString()}`;
    const month = this.#mes > 9
      ? this.#mes.toString()
      : `0${this.#mes.toString()}`;
    const year = this.#ano.toString();
    const dateFormatting = formatting
      .replace('dd', day).replace('mm', month)
      .replace('M', this.getMonthName()).replace('aaaa', year)
      .replace('aa', year.substr(-2));
    return dateFormatting;
  }
}

const data = new Data(16, 3, 2023)
const data2 = new Data(16, 3, 2023)
const invalidDate = new Data(31, 2, 2021);
console.log(data.compare(data2))
console.log(data.format('dd/mm/aaaa'));
console.log(data.format('dd-mm-aaaa'));
console.log(data.format('aaaa/mm/dd'));
console.log(data.format('aaaa-mm-dd'));
console.log(data.format('dd de M de aa'));
console.log(data.format('dd, M de aaaa'));
console.log(invalidDate.format('a m d'));

