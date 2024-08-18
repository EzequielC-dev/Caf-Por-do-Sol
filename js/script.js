if (window.innerWidth > 300) {
  function navMenu() {
    const accordList = document.querySelector(".cabecalho-navegacao");
    const burgerCheckbox = document.getElementById("burger-checkbox");
    if (window.innerWidth > 1050) {
      accordList.classList.add("ativo");
    }

    function activeAccordion() {
      if (burgerCheckbox.checked) {
        accordList.classList.add("ativo");
      } else {
        accordList.classList.remove("ativo");
      }
    }
    burgerCheckbox.addEventListener("change", activeAccordion);
  }
  navMenu();
}

function animacaoScroll() {
  const elementosScroll = document.querySelectorAll(".scroll");

  if (elementosScroll.length) {
    const windowMetade = window.innerHeight * 0.6;

    function animaScroll() {
      elementosScroll.forEach((elemento) => {
        const pegarTop = elemento.getBoundingClientRect().top;
        const sessaoVisivel = pegarTop - windowMetade < 0;
        if (sessaoVisivel) {
          elemento.classList.add("ativo");
        }
      });
    }
  }
  window.addEventListener("scroll", animaScroll);
}
animacaoScroll();

function carrinhoAtivo() {
  const carrinho = document.querySelector('#carrinho');
  const carrinhoInterface = document.querySelector('.carrinho-Interface')

  function mostrarCarrinho() {
    carrinhoInterface.classList.toggle('ativo')
  }
  carrinho.addEventListener('click', mostrarCarrinho);
}
carrinhoAtivo();

function compraCarrinho() {
  const carrinhoInterface = document.querySelector('.carrinho-interface');
  const botaoCompra = document.querySelector('.botao-carrinho');
  const card = document.getElementsByClassName('li');
  const cardArray = Array.from(card);
  
  function adicionarAoCarrinho() {
    cardArray.forEach(item => {
      element.classList.add('Comprado');
    });
  }

  botaoCompra.addEventListener('click', adicionarAoCarrinho);
}
compraCarrinho();