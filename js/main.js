var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++){
    var paciente = pacientes[i];

    var pesoTd = document.querySelector(".info-peso");
    var peso = pesoTd.textContent;

    var alturaTd = document.querySelector(".info-altura");
    var altura = alturaTd.textContent;

    var imcTd = document.querySelector(".info-imc");

    var pesoValidado = validandoPeso(peso);
    var alturaValidada = validandoAltura(altura);

    if (!pesoValidado){
        imcTd.textContent = "PESO INVÁLIDO!";
        pesoValidado = false;
        paciente.classList.add("paciente-invalido");
    }

    if (!alturaValidada){
        imcTd.textContent = "ALTURA INVÁLIDO!";
        alturaValidada = false;
        paciente.classList.add("paciente-invalido");
    }

    if(pesoValidado && alturaValidada){
        var imc = calcularImc(peso, altura);
        imcTd.textContent = imc;
    }
}

function calcularImc(peso, altura) {
    var imc = 0;
    imc = peso / (altura * altura);
    
    return imc.toFixed(2);
}

function validandoPeso(peso){
    if (peso >= 0 && peso <= 200){
        return true;
    } else {
        return false;
    }
}

function validandoAltura(altura){
    if (altura >= 0 && altura <= 2.80){
        return true;
    } else {
        return false;
    }
}