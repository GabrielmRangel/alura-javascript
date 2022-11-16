var titulo = document.querySelector('.titulo');
titulo.textContent = "Meus clientes";

var pacientes = document.querySelectorAll('.paciente');

for (var i = 0; i <= pacientes.length; i++){
    var tdPeso = pacientes[i].querySelector('.info-peso');
    var peso = tdPeso.textContent;

    var tdAltura = pacientes[i].querySelector('.info-altura');
    var altura = tdAltura.textContent;

    var tdImc = pacientes[i].querySelector('.info-imc');

    var alturaEhValida = true;
    var pesoEhValido = true;

    if (peso <= 0 || peso >= 1000) {
        console.log("Peso inválido!");
        tdImc.textContent = "Peso inválido!";
        pacientes[i].classList.add('paciente-invalido');
        pesoEhValido = false;
    }
    
    if (altura <= 0 || altura >= 3.00) {
        console.log("Altura inválida!");
        tdImc.textContent = "Altura inválida!";
        pacientes[i].classList.add('paciente-invalido');
        alturaEhValida = false;
    }
    
    if (alturaEhValida && pesoEhValido) {
        var imc = peso / (altura * altura);
        tdImc.textContent = Math.round(imc);    
    }
}

var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();
    
    var form = document.querySelector('#form-adiciona');
    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    var pacienteTr = document.createElement('tr');

    var nomeTd = document.createElement('td');
    var pesoTd = document.createElement('td');
    var alturaTd = document.createElement('td');
    var gorduraTd = document.createElement('td');
    var imcTd = document.createElement('td');

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    var tabela = document.querySelector('#tabela-pacientes');
    tabela.appendChild(pacienteTr);
});
