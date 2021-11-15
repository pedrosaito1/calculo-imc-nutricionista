var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event){ //Adicionando evento de double click
    event.target.parentNode.classList.add("delay-remover");
    
    setTimeout(function(){
        event.target.parentNode.remove();
    }, 500)
    
    //event.target selecionando o evento que foi clicado
    //selecionando o pai do evento clicado
    //remove() removendo seleção
});