const adicionarProduto = document.querySelectorAll(".botao-carrinho");

adicionarProduto.forEach((item) => {
  item.addEventListener("click", adicionarAoCarrinho);
});

function adicionarAoCarrinho(event) {
  const botao = event.target;
  const produtoInfo = botao.parentElement.parentElement;
  const produtoImagem = produtoInfo.getElementsByTagName("img")[0].src;
  const produtoTitulo = produtoInfo.getElementsByTagName("h2")[0].innerText;
  const produtoPreco = produtoInfo.getElementsByTagName("span")[0].innerText;

  const produtoNome = document.querySelectorAll(
    ".carrinho-produtos-informacao div p"
  );
  const produtoId = document.querySelectorAll(".input-produto");
  produtoNome.forEach((item) => {
    if (item.innerText === produtoTitulo) {
      produtoId.value++;
    }
  });

  let carrinhoNovoProduto = document.createElement("li");
  carrinhoNovoProduto.classList.add("carrinho-produtos-lista");

  carrinhoNovoProduto.innerHTML = `
                            <div>
                                <img src="${produtoImagem}">
                            </div>

                            <span class="carrinho-produtos-informacao">
                                <div>
                                    <p>${produtoTitulo}</p>
                                </div>

                                <span class="produtos-preco-quantidade">

                                    <div>
                                        <input type="number" placeholder="Quantidade" class="input-produto" value="1">
                                    </div>

                                    <div>
                                        <p class="produto-preco">${produtoPreco}</p>
                                    </div>

                                </span>
                                
                                <div>
                                    <button class="botao-produto-remover">Remover</button>
                                </div>
                            </span>
    `;

  const carrinhoProdutosUl = document.querySelector(".carrinho-produtos ul");
  carrinhoProdutosUl.append(carrinhoNovoProduto);

  const botaoProdutoRemover = document.querySelectorAll(
    ".botao-produto-remover"
  );

  botaoProdutoRemover.forEach((item) => {
    item.addEventListener("click", removerProduto);
  });
  removerProduto();
}


const botaoProdutoRemover = document.querySelectorAll(".botao-produto-remover");

botaoProdutoRemover.forEach((item) => {
  item.addEventListener("click", removerProduto);
});

//Dando um preventDefault em cada produto pra não ter que refatorar no HTML/CSS
const linkProduto = document.querySelectorAll(".link-produto");

linkProduto.forEach((link) => {
  link.addEventListener("click", previnirLink);

  function previnirLink(event) {
    event.preventDefault();
  }
});

const inputProduto = document.querySelectorAll(".input-produto");
inputProduto.forEach((item) => {
  item.addEventListener("change", atualizarTotal);
});

function removerProduto(item) {
  item.target.parentElement.parentElement.parentElement.remove();
}

function atualizarTotal() {
  let total = 0;
  const carrinhoLista = document.querySelectorAll(".carrinho-produtos-lista");

  carrinhoLista.forEach((item) => {
    const produtoPreco = +item
      .querySelector(".produto-preco")
      .innerHTML.replace("R$", "")
      .replace(",", ".");
    const produtoQuantidade = +item.querySelector(".input-produto").value;

    if (produtoQuantidade >= 1) {
      total += produtoPreco * produtoQuantidade;
    }
    const precoTotal = (document.querySelector(".total-carrinho h4").innerText =
      "R$" + " " + total.toFixed(2));
  });
}

