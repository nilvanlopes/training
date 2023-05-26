const numero = 10

console.log(numero, typeof numero)

const numeroParaString = String(numero)

console.log(numeroParaString, typeof numeroParaString)

console.log((Number('314')))
console.log((Boolean(-1))) //qualquer valor acima de zero retorna positivo

console.log('10' + 1) // na soma de texto com numero ele transforma tudo pra string
console.log('10' - 1) // na subtracao de texto com numero ele transforma tudo pra numero caso o texto seja numero
console.log(1 + 'que bagunça')// talvez isso fosse util em algum lugar na cabeça de quem criou

