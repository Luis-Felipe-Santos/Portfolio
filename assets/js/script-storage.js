    //Recebe os seletores
    const formCont = document.getElementById("form");
    const enviarBtn = document.getElementById("enviar"); 
    const cancelarBtn = document.getElementById("cancelar"); 
    const modalCont = document.getElementById("modalMensagens");
    const limparBtn = document.getElementById("clear"); 
    const btnModal = document.getElementById("openModal");

    formCont.addEventListener("submit", (e) => {
    //Não recarrega a página
    e.preventDefault();
    //limpa os inputs do form quando é submetido
    nome_usuario.value = '';
    email_usuario.value = '';
    telefone_usuario.value ='';
    mensagem_usuario.value = '';
    });

    enviarBtn.addEventListener("click", (e) => {
        var nome_usuario = document.getElementById("nome_usuario").value;
        var email_usuario = document.getElementById("email_usuario").value;
        var telefone_usuario = document.getElementById("telefone_usuario").value;
        var mensagem_usuario = document.getElementById("mensagem_usuario").value;

        //Cria o array de objetos
        let contatos = new Array();
      
        //Verifica se existe a proriedade no localStorage
        if (localStorage.hasOwnProperty("contatos")) {
          //Converte string em objeto
          contatos = JSON.parse(localStorage.getItem("contatos"));
        }
      
        //Adiciona um novo objeto no array criado
        contatos.push({
          nome_usuario,
          email_usuario,
          telefone_usuario,
          mensagem_usuario,
        });
      
        //Salva os dados no localStorage e converte o objeto em string
        localStorage.setItem("contatos", JSON.stringify(contatos));

        
      });
      
    // clicando no modal mensagens
    btnModal.addEventListener("click", (e) => {
      if (localStorage.hasOwnProperty("contatos")) {
        contatos = JSON.parse(localStorage.getItem("contatos"));
    
        let mensagemItens = document.getElementById("mensagens");
        mensagemItens.innerHTML = '';

        limparBtn.removeAttribute("disabled");
    
        contatos.map((contato, index) => {
          return mensagemItens.insertAdjacentHTML(
            "beforeend",
            "Nome: " +
              contato.nome_usuario +
              "<br>E-mail: " +
              contato.email_usuario +
              "<br> Telefone: " +
              contato.telefone_usuario +
              "<br> Mensagem: " +
              contato.mensagem_usuario +
              "<br><hr>"
          );
        });
      } else {
        document.getElementById("mensagens").innerHTML = (
         "<div>Não há mensagens</div>"
        );
        limparBtn.setAttribute("disabled", "true");
      }
    });


    cancelarBtn.addEventListener('click', (e) => {
        nome_usuario.value = '';
        email_usuario.value = '';
        telefone_usuario.value ='';
        mensagem_usuario.value = '';
    });

    limparBtn.addEventListener('click', (e) => {
        if(localStorage.hasOwnProperty("contatos")){
            var x;
            var r= confirm("Tem certeza que deseja excluir todas as mensagens?");
                if (r==true){
                    x = limparBtn;
                }else{
                    return;
                }
            localStorage.clear();
            document.getElementById("mensagens").innerHTML = "Mensagens Excluidas";
            limparBtn.setAttribute("disabled", "true");

        } else {
            return;
        }
    });
  

    



