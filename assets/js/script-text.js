function typeWrite(elemento){
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = ' ';
    textoArray.forEach(function(letra, i){   
      
    setTimeout(function(){
        elemento.innerHTML += letra;
    }, 75 * i)

  });
}
const titulo1 = document.querySelector('.text-boa');
const titulo2 = document.querySelector('.text-ola');
const titulo3 = document.querySelector('.text-dev');
const titulo4 = document.querySelector('.text-dark');
typeWrite(titulo1);
typeWrite(titulo2);
typeWrite(titulo3);
typeWrite(titulo4);
    
