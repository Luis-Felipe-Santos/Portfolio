//Recebe o seletor do formulário
    const formCont = document.getElementById("form");
    const enviarBtn = document.getElementById("enviar"); 
    const cancelarBtn = document.getElementById("cancelar"); 
    const modalCont = document.getElementById("modalMensagens");
    const limparBtn = document.getElementById("clear"); 

    formCont.addEventListener("submit", (e) => {
    //Não recarrega a página
    e.preventDefault();
    });

    enviarBtn.addEventListener('click', (e) => {
        var nome_usuario = document.getElementById("nome_usuario").value;
        var email_usuario = document.getElementById("email_usuario").value;
        var telefone_usuario = document.getElementById("telefone_usuario").value;
        var mensagem_usuario = document.getElementById("mensagem_usuario").value;

        //Cria o array de objetos
        let contatos = new Array();
    
        //Verifica se existe a proriedade no localStorage
        if(localStorage.hasOwnProperty("contatos")){
        //Converte string em objeto
        contatos = JSON.parse(localStorage.getItem("contatos"));
        }
        
        //Adiciona um novo objeto no array criado
        contatos.push({nome_usuario, email_usuario, telefone_usuario, mensagem_usuario});
    
        //Salva os dados no localStorage e converte o objeto em string
        localStorage.setItem("contatos", JSON.stringify(contatos));
        
        //Recupera os dados salvados no localStorage e exibe no modal
        document.getElementById("mensagens").insertAdjacentHTML('beforeend', "Nome: " + nome_usuario + "<br>E-mail: " + email_usuario + "<br> Telefone: " + telefone_usuario + "<br> Mensagem: " + mensagem_usuario + "<br><hr>"); 
    });

    cancelarBtn.addEventListener('click', (e) => {
        nome_usuario.value = '';
        email_usuario.value = '';
        telefone_usuario.value ='';
        mensagem_usuario.value = '';
    });

    limparBtn.addEventListener('click', (e) => {
        localStorage.clear()
    
    });

    



