// Objeto para armazenar os produtos
var estoque = [];

// Função para adicionar um novo produto ao estoque
function adicionarProduto(nomeProduto, precoNovo, qtd) {
    // Verifica se o produto já existe no estoque
    var produtoExistente = estoque.find(produto => produto.nome === nomeProduto);
    if (produtoExistente) {
        console.log("Produto já existente no estoque.");
        return;
    }
    
    // Adiciona o novo produto ao estoque
    estoque.push({ nome: nomeProduto, preco: precoNovo, qtdEstoque: qtd });
}

// Função para buscar o índice de um produto no estoque
function encontrarIndiceProduto(nomeProduto) {
    return estoque.findIndex(produto => produto.nome === nomeProduto);
}

// Função para realizar uma compra
function comprar(qtdComprada, produtoComprado) {
    var indiceProduto = encontrarIndiceProduto(produtoComprado);
    if (indiceProduto !== -1) {
        estoque[indiceProduto].qtdEstoque += qtdComprada;
        console.log("Compra realizada com sucesso. Novo estoque:", estoque[indiceProduto].qtdEstoque);
    } else {
        console.log("Produto não encontrado no estoque.");
    }
}

// Função para realizar uma venda
function vender(qtdVendida, produtoVendido) {
    var indiceProduto = encontrarIndiceProduto(produtoVendido);
    if (indiceProduto !== -1) {
        if (estoque[indiceProduto].qtdEstoque >= qtdVendida) {
            estoque[indiceProduto].qtdEstoque -= qtdVendida;
            console.log("Venda realizada com sucesso. Novo estoque:", estoque[indiceProduto].qtdEstoque);
        } else {
            console.log("Quantidade insuficiente em estoque para realizar a venda.");
        }
    } else {
        console.log("Produto não encontrado no estoque.");
    }
}

// Exemplo de uso
adicionarProduto('caneta', 5.25, 27);
adicionarProduto('lápis', 2.99, 53);
adicionarProduto('borracha', 3.99, 60);

comprar(10, 'caneta');
vender(5, 'lápis');
