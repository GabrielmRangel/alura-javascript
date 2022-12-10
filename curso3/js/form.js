var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();
    
    var form = document.querySelector("#form-adiciona");
    var paciente = obtemPaciente(form);
    var adicionaPaciente = validaPaciente(paciente);

    if (adicionaPaciente){
        adicionaNaTabela(paciente);
    
        form.reset();
    } 
});

function obtemPaciente(form){
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calcImc(form.peso.value, form.altura.value),
        grau: defineGrau(calcImc(form.peso.value, form.altura.value))
    }
    
    return paciente;
}

function validaPaciente(paciente){
    var adicionaPaciente = true;

    if (paciente.nome == ""){
        alert("Nome não preenchido!");
        adicionaPaciente = false;
    } 

    if (paciente.peso == "" || paciente.peso <= 0 || paciente.peso >= 600){
        alert("Peso não preenchido corretamente! Ex: 63");
        adicionaPaciente = false;
    }

    if (paciente.altura == "" || paciente.altura <= 0 || paciente.altura >= 3.00){
        alert("Altura não preenchida corretamente! Ex: 1.83");
        adicionaPaciente = false;
    }

    return adicionaPaciente;
}

function adicionaNaTabela(paciente){
    var pacienteTr = criaTr(paciente);

    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}

function criaTr(paciente){
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    paciente.grau = defineGrau(paciente.imc);
    
    pacienteTr.appendChild(criaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(criaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(criaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(criaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(criaTd(paciente.imc, "info-imc"));
    pacienteTr.appendChild(criaTd(paciente.grau, "info-grau"));

    return pacienteTr;
}

function criaTd(dado, classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    if(td.textContent == "Magreza"){
        td.classList.add("grau-magreza");
    } 
    if(td.textContent == "Normal"){
        td.classList.add("grau-normal");
    } 
    if(td.textContent == "Sobrepeso"){
        td.classList.add("grau-sobrepeso");
    } 
    if(td.textContent == "Obesidade"){
        td.classList.add("grau-obesidade");
    } 
    if(td.textContent == "Obesidade grave"){
        td.classList.add("grau-obesidade-grave");
    }

    return td;
}