  const botaoFaq = document.querySelector('.interrogacao');
  const modal = document.querySelector('.faq');


  botaoFaq.addEventListener('click', mostrarModal);


  function mostrarModal(event){
    modal.classList.remove('escondido');

    botaoFaq.removeEventListener('click', mostrarModal);

    botaoFaq.addEventListener('click', esconderModal);
  }

  function esconderModal(event){
    modal.classList.add('escondido');

    botaoFaq.removeEventListener('click', esconderModal);

    botaoFaq.addEventListener('click', mostrarModal);
  }