const input = require('readline-sync')

// const numeroSorteado = 5

// let numero = Number(input.question('qual numero vc acha que vai ganhar'))

// console.log(numero, typeof numero);

// while (numero !== numeroSorteado) {
//     console.log('acerta o numero pfv');
//     numero = Number(input.question('qual numero vc acha que vai ganhar'))
// }
// console.log('acerto miseravi');
let media = 0
for (let i = 0; i < 4; i++) {
    media += Number(input.question(`digite a nota ${i + 1}`))
}
console.log('a media :', media / 4);