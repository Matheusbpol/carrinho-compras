let totalGeral = 0
document.getElementById('lista-produtos').innerHTML='';
document.getElementById('valor-total').textContent = 'R$ 0';

function adicionar(){
    // puxar valor do nome, quantidade e preço    
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let precoProduto = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;
    
    //calcular o subtotal    
    let subtotal = quantidade * precoProduto;

    //adicionar ao carrinho
    let listaDeProdutos = document.getElementById('lista-produtos');
    if (quantidade > 0) {
        listaDeProdutos.innerHTML = listaDeProdutos.innerHTML + `<section class="carrinho__produtos__produto"><span class="texto-azul">${parseInt(quantidade)}x</span> ${nomeProduto} <span class="texto-azul">R$${subtotal}</span>
        </section>`;
    } 
    //atualizar o valor do carrinho
    totalGeral = totalGeral  + subtotal
    let campoTotal = document.getElementById('valor-total');
    campoTotal.innerHTML = `R$ ${totalGeral}`

    document.getElementById('quantidade').value = 0;
    }

    function limpar(){
        totalGeral = 0
        document.getElementById('lista-produtos').innerHTML='';
        document.getElementById('valor-total').textContent = 'R$ 0';
    }