let nomes = ['pyu', 'dudu', 'jao', 'mirdas', 'celio', 'ivan']


console.log(nomes.length); // tamanho

for (let i = 0; i < 6; i++) {
    console.log(nomes[i]);
}
for (let nome of nomes) { // elementos
    console.log(nome);
}

for (let nome in nomes) { // indices
    console.log(nomes[nome]);
}

