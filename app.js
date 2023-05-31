const url = 'http://localhost:3000/produtos';
fetch(url)
  .then((req) => req.json())
  .then((data) => mostraProdutos(data));

function mostraProdutos(produtos) {
  const htmlProdutos = produtos.map(
    (produto) => `
    <div class="col-md-4 mb-3">
      <div class="card">
        <img src=${produto.imagem} class="card-img-top" alt="Imagem do Produto">
        <div class="card-body">
          <h5 class="card-title">${produto.descricao}</h5>
          <p class="card-text">Valor: R$${produto.valor}</p>
        </div>
      </div>
    </div>`
  );
  document.getElementById('app').innerHTML = `<div class="row">${htmlProdutos.join('')}</div>`;
}
