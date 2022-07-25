//Exercício 1

/*const valor = 10;
let fatorial = 1;

for (let index = 1; index <= valor; index += 1) {
    fatorial = fatorial * index;   
}

console.log(valor + "! = " + fatorial);*/

//Exercício 2

/*let word = 'tryber';
let palavraInvertida = '';

for (let index = word.length -1; index >= 0; index -= 1) {
    palavraInvertida = palavraInvertida + word[index];
}

console.log(palavraInvertida);*/

//Exercício 3 

/*let array = ['java', 'python', 'javascript', 'html', 'css'];
let maiorPalavra = 0;
let maior = '';

for (let index = 0; index < array.length; index += 1) {

        if (array[index].length > maiorPalavra) {
            maiorPalavra = array[index].length;
            maior = array[index];
        }
    }
console.log(maior);

let menorPalavra = 10000000000000000000000000000000000000000;
let menor = '';

for (let index = 0; index < array.length; index += 1) {

        if (array[index].length < menorPalavra) {
            menorPalavra = array[index].length;
            menor = array[index];
        }
    }
console.log(menor);*/

//Exercício 4

/*let maior = 0;

for (let index = 2; index <= 50; index += 1) {

    let quantidadeDeDivisores = 0;

    for (let divisor = 1; divisor < index; divisor += 1) {
        if (index % divisor == 0) {
            quantidadeDeDivisores += 1;
        }
    }
    if (quantidadeDeDivisores === 1) {
        if (index > maior) {
            maior = index;
        }
    }
}

console.log(maior);*/

//Bonûs 1

/*let n = 5;
let linha = '';

for (let index = 0; index < n; index += 1) {
    linha += '*';  
}

for (let index2 = 0; index2 < n; index2 += 1){
    console.log(linha)
}*/

//Bônus 2

/*let n = 5;
let linha = '';

for (let index = 0; index < n; index += 1) {
    linha += '*';
    console.log(linha);  
}*/

//Bônus 3

/*let n = 5;
let linha = '';
let posicao = 1;

for (let index = 0; index < n; index += 1) {
    if (index < n - 1) {
        if (index < n - 1) {
            linha += ' ';
        }else {
            linha += '*';
        }
    }else {
        linha += '*';
    }
    console.log(linha)  
}*/

/*let n = 5;
let linha = '';

for (let index = 0; index < n; index += 1) {    
    for (let index2 = n - index; index2 > 0; index2 -= 1) {
        linha += ' '; 
        //console.log(linha); 
    }
    for (let index2 = 0; index2 < index; index2 += 1) {
        linha += '*';
        //console.log(linha);
    }
    console.log(linha);          
}
//Bônus 6

/*let number = 8;
let quantidade = 0;

for (let index = 1; index < number; index += 1) {


    if ( number % index === 0) {
        quantidade += 1;
    }

}

if (quantidade === 1) {
    console.log('Número é primo');
} else {
    console.log('Número não é primo');
}*/