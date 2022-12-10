var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");
    var tdGrau = paciente.querySelector(".info-grau");

    var pesoEhValido = true;
    var alturaEhValida = true;

    if (peso <= 0 || peso >= 600) {
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido";
        paciente.classList.add("paciente-invalido");
    }

    if (altura <= 0 || altura >= 3.00) {
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida";
        paciente.classList.add("paciente-invalido");
    }

    if (pesoEhValido && alturaEhValida) {
        var imc = calcImc(peso, altura);
        tdImc.textContent = imc;

        var grau = defineGrau(imc);
        tdGrau.textContent = grau;

        defineCor(imc);
    }
}

function calcImc(peso, altura){
    var imc = 0;
    imc = peso / (altura * altura);
    
    return imc.toFixed(2);
}

function defineGrau(imc){
    var grau = "";

    if(imc < 18.5){
        grau = "Magreza";
    } 
    if(imc >= 18.5 && imc <= 24.9){
        grau = "Normal";
    } 
    if(imc >= 25 && imc <= 29.9){
        grau = "Sobrepeso";
    } 
    if(imc >= 30 && imc <= 39.9){
        grau = "Obesidade";
    } 
    if(imc >= 40){
        grau = "Obesidade grave";
    }

    return grau;
}

function defineCor(imc){
    if(imc < 18.5){
        tdGrau.classList.add("grau-magreza");
    } 
    if(imc >= 18.5 && imc <= 24.9){
        tdGrau.classList.add("grau-normal");
    } 
    if(imc >= 25 && imc <= 29.9){
        tdGrau.classList.add("grau-sobrepeso");
    } 
    if(imc >= 30 && imc <= 39.9){
        tdGrau.classList.add("grau-obesidade");
    } 
    if(imc >= 40){
        tdGrau.classList.add("grau-obesidade-grave");
    }
}
