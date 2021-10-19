 const bugs = document.querySelectorAll('.imagens img');
 const modal = document.querySelector('.modal');
 const imgModal = document.querySelector('.modal img');
 const linkModal = document.querySelector('.modal a');


function MostrarModal(src) {
    imgModal.src = src;
}

function addLinkNaImagem(imagem){
    if(imagem === 'bug-1' ){
        linkModal.href = 'http://127.0.0.1:5500/classe-03/assets/bug-1.png';
    }else {
        linkModal.href = 'http://127.0.0.1:5500/classe-03/assets/bug-2.png';
    }

}

 bugs.forEach( imagem => {
     imagem.addEventListener('click', function(event){
         MostrarModal(event.target.src);
        modal.classList.remove('escondido');
        
        addLinkNaImagem(event.target.classList.value);
     });
 })
 
 modal.addEventListener('click', function(event){
     modal.classList.add('escondido');
 })
 