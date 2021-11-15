var btnAdicionar = document.querySelector("#adicionar")

function addPaciente(event) {
    event.preventDefault(); //Faz com que o botão não atualize a pagina!

    var form = document.querySelector("#form-adiciona"); //Selecionando o formulário
    var paciente = addInfoForm(form); //Adicionando o objeto a uma variável
    var pacienteLinha = gerarTr(paciente);

    var erros = validacaoDePaciente(paciente);
    if(erros.length > 0){
        exibeMsgErros(erros);
        return;
    }
    var ul = document.querySelector(".erro");
    ul.innerHTML = "";

    var tabela = document.querySelector(".tabela-info");
    tabela.appendChild(pacienteLinha);
    form.reset();
}

btnAdicionar.addEventListener("click", addPaciente);

function addInfoForm(form){
    //Criando objeto pessoa com referencia aos names descritos
    var paciente = {
        nome: form.nome.value,
        sobrenome: form.sobrenome.value,
        altura: form.altura.value,
        peso: form.peso.value,
        gordura: form.gordura.value,
        imc: calcularImc(form.peso.value, form.altura.value)
    }
    return paciente;
}


function gerarTd(dado, classe){ //Criando linha da tabela para entrar com os dados;
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function gerarTr(paciente){
    var pacienteLinha = document.createElement("tr");//Atribuindo dados a linha criada a cima
    pacienteLinha.classList.add("paciente");

    //Atribuindo todos os td para a tr
    pacienteLinha.appendChild(gerarTd(paciente.nome, "info-nome"));
    pacienteLinha.appendChild(gerarTd(paciente.sobrenome, "info-sobrenome"));
    pacienteLinha.appendChild(gerarTd(paciente.altura, "info-altura"));
    pacienteLinha.appendChild(gerarTd(paciente.peso, "info-peso"));
    pacienteLinha.appendChild(gerarTd(paciente.gordura, "info-gordura"));
    pacienteLinha.appendChild(gerarTd(paciente.imc, "info-imc"));

    return pacienteLinha;
}

function validacaoDePaciente (paciente) {
    var erros = []; //Criando vetor parar guardar todos os erros

    if(paciente.nome.length == 0){
        erros.push("O nome precisa ser digitado!");
    }

    if(paciente.sobrenome.length == 0){
        erros.push("O sobrenome precisar ser digitado!");
    }

    if(paciente.peso.length == 0){
        erros.push("O peso não pode ficar em branco!");
    }
    if(!validandoPeso(paciente.peso)){
        erros.push("Peso inválido!")
    }

    if(paciente.altura.length == 0){
        erros.push("Por favor digite uma altura!");
    }
    if(!validandoAltura(paciente.altura)){
        erros.push("Altura inválida!")
    }

    if(paciente.gordura.length == 0){
        erros.push("A % de gordura precisa estar preenchida!");
    }
    return erros;
}

function exibeMsgErros(erros){
    var ul = document.querySelector(".erro");
    ul.innerHTML = "";
    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}