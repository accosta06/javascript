function myFunction(){
    let paragrafoNome = document.getElementById("parag");
    let firstClientName = window.prompt("Qual é o teu primeiro nome?");
    let lastClientName = window.prompt("Qual é o teu último nome?");
    let clientAge = window.prompt("Qual é a tua idade?");
    let morada = window.prompt("Onde moras?");
    let fullName = firstClientName + " " + lastClientName;

    if (paragrafoNome.childElementCount > 1){
        paragrafoNome.removeChild(paragrafoNome.firstChild);
    }


    Objeto = document.getElementById("obj");

    const MY_OBJ = {
            'key': 115,
            'nome': {
                'primeiro': firstClientName,
                'ultimo': lastClientName,
            },

            'idade': clientAge,
            'morada': morada
        };

    document.getElementById("nome").append(" " + MY_OBJ.nome.primeiro + " " + MY_OBJ.nome.ultimo);
    document.getElementById("idade").append(" " + MY_OBJ.idade);
    document.getElementById("morada").append(" " + MY_OBJ.morada);
}

function calcularIMC(){
    let altura = parseInt(document
        .querySelector("#altura").value);

    let peso = parseInt(document
            .querySelector("#peso").value);

    let resultadoIMC = document.querySelector("#resultadoIMC");

    if (altura === "" || isNaN(altura)) 
        result.innerHTML = "Altura inválida!";

    else if (peso === "" || isNaN(peso)) 
        result.innerHTML = "Peso inválido!";

    else {

        let bmi = (peso / ((altura * altura) 
                            / 10000)).toFixed(2);

        if (bmi < 18.6) resultadoIMC.innerHTML =
            `Subpeso : <span>${bmi}</span>`;

        else if (bmi >= 18.6 && bmi < 24.9) 
            resultadoIMC.innerHTML = 
                `Normal : <span>${bmi}</span>`;

        else resultadoIMC.innerHTML =
            `Sobrepeso : <span>${bmi}</span>`;
    }
}

function aMinhaFuncao(value, index, array){
    console.log(value + ' ref ao indice ' + index + ' a multiplicar por 10 dá ' + value*10 )
}

const numeros_em = [1,2,3,4,5,6,7,8,9,10,
                    11,12,13,14,15,16,17,18,19,20,
                    21,22,23,24,25,26,27,28,29,30,
                    31,32,33,34,35,36,37,38,39,40,
                    41,42,43,44,45,46,47,48,49,50];

const estrelas_em = [1,2,3,4,5,6,7,8,9,10,11,12];

for (let i=1; i <=5; i++){
    var parent = document.getElementById("parentTTLT")
    let numerosort = numeros_em[Math.floor(Math.random() * 49)];
    let pos = String.toString('n' + i)
    console.log(pos)
    texto = ('O ' + i + 'º número sorteado foi ' + numeros_em[Math.floor(Math.random() * 49)]);
    parent.appendChild(texto);
    document.getElementById(pos).innerHTML = String.toString.numerosort
}

for (let i=1; i <=3; i++){
    totolotoParag = document.createElement("p");
    totolotoParag.append('A ' + i + 'ª estrela sorteada foi ' + estrelas_em[Math.floor(Math.random() * 11)]);
}