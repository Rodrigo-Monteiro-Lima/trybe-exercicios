let peca = "peão";
peca.toLowerCase();

switch (peca.toLocaleLowerCase()) {
  case "rei":
    console.log("O rei se move em todas as direções (horizontal, verttical e diagonal), mas somente uma casa por vez");
    break
  
  case "rainha":
    console.log("A rainha se move em todas as direções (horizontal, vertical e diagonal) e quantas casas a pessoa quiser mover");
    break

  case "bispo":
    console.log("O bispo se move na diagonal e quantas casas a pessoa quiser");
    break

  case "cavalo":
    console.log("O cavalo se move em forma de L, duas casas na horizontal e uma casa na vertical, e pode pular outras peças");
    break

  case "torre":
    console.log(" A torre se move na horizontal e vertical, quantas casas a pessoa quiser");
    break

  case "peão":
    console.log("O peão se move na horizontal e uma casa por vez, só pode capturar outras peças na diagonal e pode andar duas casas no seu primeiro movimento do jogo");
    break

  default:
    console.log("Peça inválida");  
}