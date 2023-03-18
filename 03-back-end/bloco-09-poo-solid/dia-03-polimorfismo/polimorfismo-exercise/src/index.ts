import Clube from "./Clube";
import QuadraFutebol from "./QuadraFutebol";
import QuadraTenis from "./QuadraTenis";

const clube = new Clube();
const quadraF = new QuadraFutebol();
const quadraT = new QuadraTenis();

clube.adicionarQuadra(quadraF);
clube.adicionarQuadra(quadraT);
console.log(clube.buscarQuadra(0).reservar(new Date('2023-03-18')));
console.log(clube.buscarQuadra(1).reservar(new Date('2023-03-19')))