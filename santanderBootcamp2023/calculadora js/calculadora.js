function calculadora() {
    const operacao = Number(prompt('escolha uma operação\n 1- Soma \n 2- Subtração \n 3- Divisão \n 4-Multiplicação'));

    if (!operacao || operacao >= 7) {
        alert('operação inválida');
        calculadora();
    } else {

        let n1 = Number(prompt('valor1'));

        let n2 = Number(prompt('valor2'));

        if (!n1 || !n2) {
            alert('valores incorretos');
            calculadora();
        } else {
            function soma() {
                res = n1 + n2;
                alert(`${n1} + ${n2} = ${res}`);
                novaOperacao();
            }

            function subtracao() {
                res = n1 - n2;
                alert(`${n1} - ${n2} = ${res}`);
                novaOperacao();
            }

            function divisao() {
                res = n1 / n2;
                alert(`${n1} / ${n2} = ${res}`);
                novaOperacao();
            }

            function multiplicacao() {
                res = n1 * n2;
                alert(`${n1} * ${n2} = ${res}`);
                novaOperacao();
            }

            function novaOperacao() {
                let opcao = prompt('Calcular de novo? \n1- sim \n 2- não');
                if (opcao == 1) {
                    calculadora();
                } else if (opcao == 2) {
                    alert('flw');
                }
                else {
                    alert('digite uma opção válida');
                    novaOperacao();
                }
            }

            if (operacao == 1) {
                soma();
            } else if (operacao == 2) {
                subtracao();
            } else if (operacao == 3) {
                divisao();
            } else if (operacao == 4) {
                multiplicacao();
            }
        }
    }


}
calculadora();