
const GlobalService = {

    removeMask(txt, tipo){
        // Remove as máscaras dos valores passados de acordo com o tipo
        switch (tipo) {
            case 'cpf':
                txt = txt.replace(".", "");
                txt = txt.replace(".", "");
                txt = txt.replace("-", "");
                break;
            case 'cnpj':
                txt = txt.replace(".", "");
                txt = txt.replace(".", "");
                txt = txt.replace("/", "");
                txt = txt.replace("-", "");
                break;
        }

        return txt;
    },

    cnpjValidator(cnpj){

        if (cnpj) {
            // Retira a máscara
            cnpj = this.removeMask(cnpj, 'cnpj');

            /*
                Cálculo
                  - Distribua os 12 primeiros dígitos colocando os pesos 5,4,3,2,9,8,7,6,5,4,3,2 respectivamente em cada um
                - Multiplique os valores (peso e dígito do cnpj) e some os resultados
                - Divida o resultado da soma por 11 e considere apenas o resto da divisão para continuar. Caso o resto seja
                menor que 2, o 1° dígito verificador é 0. Caso contrário, subtraia 11 - restoDivisao.
                  2° Dígito:
                    Adicionar o 1° verificador no final do array e os pesos são 6,5,4,3,2,9,8,7,6,5,4,3,2
            */

            // Retira os dois últimos dígitos do cnpj e em seguida separa cada dígito em um índice do array
            let arrayCnpj = cnpj.substring(0, 12);
            arrayCnpj = arrayCnpj.split("");

            let somatoria = 0;
            let restoDivisao = 0;
            let firstValidator = 0;
            let secondValidator = 0;

            let cont = 5;
            let indiceCnpj = 0;

            while (indiceCnpj <= 11) {

                // Se o indice for igual a 4, o cont recebe 9 porque os pesos são 5,4,3,2,9,8,7,6,5,4,3,2
                indiceCnpj === 4 ? cont = 9 : '';

                somatoria += arrayCnpj[indiceCnpj] * cont;

                cont -= 1;
                indiceCnpj += 1;
            }

            restoDivisao = somatoria % 11;

            restoDivisao < 2 ? firstValidator = 0 : firstValidator = 11 - restoDivisao;

            /* CALCULANDO O SEGUNDO DÍGITO VERIFICADOR */

            arrayCnpj.push(firstValidator);

            somatoria = 0;

            cont = 6;
            indiceCnpj = 0;

            while (indiceCnpj <= 12) {

                // Se o indice for igual a 5, o cont recebe 9 porque os pesos são 6,5,4,3,2,9,8,7,6,5,4,3,2
                indiceCnpj === 5 ? cont = 9 : '';

                somatoria += arrayCnpj[indiceCnpj] * cont;

                cont -= 1;
                indiceCnpj += 1;
            }

            restoDivisao = somatoria % 11;

            restoDivisao < 2 ? secondValidator = 0 : secondValidator = 11 - restoDivisao;

            // Pega os dois últimos dígitos do cpf e separa em índices de outro array
            let ultimosDigitos = cnpj.substring(12, 14);

            ultimosDigitos = ultimosDigitos.split("");

            let valido = false;

            /*
                Verifica se o penúltimo e último dígito são iguais ao 1° e 2° validador.
                Se for igual, o cnpj é válido
            */

            if (ultimosDigitos[0] == firstValidator && ultimosDigitos[1] == secondValidator) {
                valido = true;
            }

            return valido;
        }
    },

    cpfValidator(cpf) {

        // Se existir cpf
        if (cpf && cpf.length === 14) {

            // Retira a máscara do cpf
            cpf = this.removeMask(cpf, 'cpf');

            // Retira os dois últimos dígitos do cpf e em seguida separa cada dígito em um índice do array
            let arrayCpf = cpf.substring(0, 9);
            arrayCpf = arrayCpf.split("");

            let somatoria = 0;
            let restoDivisao = 0;
            let firstValidator = 0;
            let secondValidator = 0;

            /*
                No primeiro while, pega cada índice e multiplica pelo peso* de acordo com o índice
                e depois junta o resultado na soma para calcular o PRIMEIRO NÚMERO VALIDADOR.
                  * No primeiro número validador, o peso vai de 10 a 2
            */
            let cont = 10;
            let indiceCpf = 0;
            while (cont >= 2) {
                somatoria += arrayCpf[indiceCpf] * cont;
                indiceCpf += 1;
                cont -= 1;
            }

            // Pega o resto da divisão do total da somatória por 11
            restoDivisao = somatoria % 11;

            // Se 11 - o resto for maior que 9, o primeiro validador é 0. Caso contrário, é o resultado mesmo.
            11 - restoDivisao > 9 ? firstValidator = 0 : firstValidator = 11 - restoDivisao;

            /******  CALCULANDO O SEGUNDO NÚMERO VALIDADOR *******/

            // Pega o primeiro validador e adiciona ao final do array dos dígitos do cpf
            arrayCpf.push(firstValidator);

            somatoria = 0;
            cont = 11;
            indiceCpf = 0;
            /*
                Exatamente o mesmo esquema, mas agora o peso é de 11 a 2
            */
            while (cont >= 2) {
                somatoria += arrayCpf[indiceCpf] * cont;
                indiceCpf += 1;
                cont -= 1;
            }

            restoDivisao = somatoria % 11;
            11 - restoDivisao > 9 ? secondValidator = 0 : secondValidator = 11 - restoDivisao;

            // Pega os dois últimos dígitos do cpf e separa em índices de outro array
            let ultimosDigitos = cpf.substring(9, 11);
            ultimosDigitos = ultimosDigitos.split("");

            let valido = false;

            /*
                Verifica se o penúltimo e último dígito são iguais ao 1° e 2° validador.
                Se for igual, o cpf é válido.
            */

            if (ultimosDigitos[0] == firstValidator && ultimosDigitos[1] == secondValidator) {
                valido = true;
            }

            return valido;
        }
    }


};

export default GlobalService;