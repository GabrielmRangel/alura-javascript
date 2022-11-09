var titulo = document.querySelector('.titulo');
titulo.textContent = "Meus clientes";

var paulo = document.querySelector('#paciente-paulo');
var tdPauloPeso = paulo.querySelector('.info-peso');
var pauloPeso = tdPauloPeso.textContent;

var tdPauloAltura = paulo.querySelector('.info-altura');
var pauloAltura = tdPauloAltura.textContent;

var tdPauloImc = paulo.querySelector('.info-imc');

var alturaEhValida = true;
var pesoEhValido = true;

if (pauloPeso <= 0 || pauloPeso >= 1000) {
    console.log("Peso inválido!");
    tdPauloImc.textContent = "Peso inválido!";
    pesoEhValido = false;
}

if (pauloAltura <= 0 || pauloAltura >= 3) {
    console.log("Altura inválida!");
    tdPauloImc.textContent = "Altura inválida!";
    alturaEhValida = false;
}

if (alturaEhValida && pesoEhValido) {
    var pauloImc = pauloPeso / (pauloAltura * pauloAltura);
    tdPauloImc.textContent = pauloImc;    
}

