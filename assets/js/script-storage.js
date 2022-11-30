var contForm = document.getElementById("form");

contForm.addEventListener("submit", (e) => {
    e.preventDefault();
    var nome_usuario = document.getElementById("nome_usuario").value;
    var email_usuario = document.getElementById("email_usuario").value;
    var telefone_usuario = document.getElementById("telefone_usuario").value;
    var mensagem_usuario = document.getElementById("mensagem_usuario").value;

    let usuarios = new Array();

    if(localStorage.hasOwnProperty("usuarios")){
        usuarios = JSON.parse(localStorage.getItem("usuarios"));
    }

    usuarios.push({nome_usuario, email_usuario, telefone_usuario, mensagem_usuario});

    localStorage.setItem("usuarios", JSON.stringify(usuarios));
    
});

