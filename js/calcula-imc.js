var titulo = document.querySelector(".titulo");
titulo.textContent = "Roni Wellington";

var pacientes =  document.querySelectorAll(".paciente");


for(var i = 0; i < pacientes.length; i++) {
    
    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoEhValido = validaPeso(peso); //tru ou false
    var alturaEhValida = validaAltura(altura);

    if(!pesoEhValido){
        console.log("Peso inválido");
        pesoEhValido = false;
        tdImc.textContent = "Peso Inválido";
        paciente.classList.add("paciente-invalido");
    }

    if (!alturaEhValida) {
        console.log("Altura inválida");
        alturaEhValida = false;
        tdImc.textContent = "Altura Inválida";
        paciente.classList.add("paciente-invalido");
    } 

    if(alturaEhValida && pesoEhValido) {
        var imc = calculaImc(peso, altura); // 100 / 2.0 * 2.0 = 100 / 4 = 25
        tdImc.textContent = imc;
    }

}

function validaPeso(peso){

    if(peso >= 0 && peso <200) {
        return true;
    }else {
        return false;
    }
}

function validaAltura(altura) {
    if(altura >= 0 && altura <= 3.0)  {
        return true;
    }else {
        return false;
    }

}


function calculaImc(peso, altura) {
    var imc = 0;

    imc = peso / (altura * altura);

    return imc.toFixed(2);
}





/*
console.log(paciente); // tr
console.log(tdAltura); //td que tem o peso
console.log(altura); //Obter 100
*/