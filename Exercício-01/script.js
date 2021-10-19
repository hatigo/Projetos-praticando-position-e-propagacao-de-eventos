 const imgOlho = document.querySelector('img');
 const inputSenha = document.querySelector('#txt-senha')

 function mostrarSenha(event) {
    const olho = event.target;
    olho.src = "/classe-01/assets/olho-aberto.svg";

    inputSenha.type = 'text'

    olho.removeEventListener('click', mostrarSenha);

    olho.addEventListener('click', protegerSenha);
}

function protegerSenha (event) {
    const olho = event.target;
    olho.src =  "/classe-01/assets/olho-fechado.svg";

    inputSenha.type = 'password'

    olho.removeEventListener('click', protegerSenha);

    olho.addEventListener('click', mostrarSenha);
}


 imgOlho.addEventListener('click', mostrarSenha);
     
 

