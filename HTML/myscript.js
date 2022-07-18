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
    divImagem = document.querySelector("#imagem");

    if (altura === "" || isNaN(altura)) 
        result.innerHTML = "Altura inválida!";

    else if (peso === "" || isNaN(peso)) 
        result.innerHTML = "Peso inválido!";

    function displayResult(){

        let bmi = (peso / ((altura * altura) 
                            / 10000)).toFixed(2);

        if (bmi < 18.6){
            resultadoIMC.innerHTML = `Subpeso : <span>${bmi}</span>`;
        }

        else if (bmi >= 18.6 && bmi < 24.9){
            resultadoIMC.innerHTML = `Normal : <span>${bmi}</span>`;
        }

        else if (bmi >= 24.9 && bmi < 50){
            resultadoIMC.innerHTML = `Sobrepeso : <span>${bmi}</span>`;
        }

        else if (bmi > 50 && divImagem.childElementCount == 0){
                resultadoIMC.innerHTML = "";
                img = document.createElement("img");
                img.src = "./balofo.jpg";
                img.width = 200;
                img.height = 200;
                divImagem.append(img);
        }
    }

    if (divImagem.childElementCount == 0){
        displayResult();
    }

    else if (divImagem.childElementCount > 0){
        divImagem.lastChild.remove();
        displayResult();
    }
}