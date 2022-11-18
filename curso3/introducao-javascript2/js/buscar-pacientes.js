var botaoBuscar = document.querySelector('#buscar-pacientes');

botaoBuscar.addEventListener('click', function(){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api-pacientes.herokuapp.com/pacientes');
    xhr.send();
    xhr.addEventListener('load', function(){
        var erroAjax = document.querySelector('#erro-ajax');

        if(xhr.status == 200){
            erroAjax.classList.add('invisivel');
            
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta);

            for (var i = 0; i < pacientes.length; i++) {
                var paciente = pacientes[i];
                adicionaNaTabela(paciente);
            }
        } else {
            console.log(xhr.status, xhr.responseText);
            
            erroAjax.classList.remove('invisivel');
            erroAjax.classList.add('paciente-invalido');
        }
    });
});