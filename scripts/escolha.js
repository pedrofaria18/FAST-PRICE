// BANCO DE DADOS COM OS PRODUTOS
var lista = {
    "produtos": [{
            "id": 1,
            "nome": "recheados_negresco",
            "imagem": "IMG/PRODUTOS/BISCOITOS/negresco.jpg",
            "descricao": "Biscoito Recheado Baunilha Negresco 140g",
            "botao": "ADICIONAR",
            "categoria": "recheados",
            "extra": 2.29,
            "bh": 1.99,
            "carrefour": 1.79
        },

        {
            "id": 2,
            "nome": "recheados_nesfit",
            "imagem": "IMG/PRODUTOS/BISCOITOS/nesfit.jpg",
            "descricao": "Biscoito Morango e Cereais Nesfit 200g",
            "botao": "ADICIONAR",
            "categoria": "recheados",
            "extra": 4.20,
            "bh": 3.70,
            "carrefour": 4.09
        },

        {
            "id": 3,
            "nome": "waffer_chocolate",
            "imagem": "IMG/PRODUTOS/BISCOITOS/bauduco chocolate.jpg",
            "descricao": "Wafer de Chocolate Bauducco 140g",
            "botao": "ADICIONAR",
            "categoria": "waffer",
            "extra": 2.99,
            "bh": 2.51,
            "carrefour": 2.49
        },

        {
            "id": 4,
            "nome": "waffer_morango",
            "imagem": "IMG/PRODUTOS/BISCOITOS/bauduco morango.jpg",
            "descricao": "Wafer de Morango Bauducco 140g",
            "botao": "ADICIONAR",
            "categoria": "waffer",
            "extra": 2.99,
            "bh": 2.51,
            "carrefour": 2.49
        },

        {
            "id": 5,
            "nome": "desodorante_nivia",
            "imagem": "IMG/PRODUTOS/HIGIENE PESSOAL/nivea men.jpg",
            "descricao": "Desodorante Aerosol Nivea Men Sensitive Protect Masculino 150ml",
            "botao": "ADICIONAR",
            "categoria": "desodorante",
            "extra": 11.49,
            "bh": 11.19,
            "carrefour": 12.49
        },

        {
            "id": 6,
            "nome": "desodorante_rexona",
            "imagem": "IMG/PRODUTOS/HIGIENE PESSOAL/rexona.jpg",
            "descricao": "Desodorante Aerosol Rexona Motion Sense Powder Rosa Feminino 150ml/90g",
            "botao": "ADICIONAR",
            "categoria": "desodorante",
            "extra": 13.90,
            "bh": 11.19,
            "carrefour": 12.49
        },

        {
            "id": 7,
            "nome": "sabonete_nivia",
            "imagem": "IMG/PRODUTOS/HIGIENE PESSOAL/nivea leite.jpg",
            "descricao": "Sabonete em Barra Corporal Nivea Leite 85g",
            "botao": "ADICIONAR",
            "categoria": "sabonete",
            "extra": 1.59,
            "bh": 1.59,
            "carrefour": 1.69
        },

        {
            "id": 8,
            "nome": "sabonete_dove",
            "imagem": "IMG/PRODUTOS/HIGIENE PESSOAL/dove.jpg",
            "descricao": "Sabonete em Barra Corporal Dove Original 90g",
            "botao": "ADICIONAR",
            "categoria": "sabonete",
            "extra": 2.66,
            "bh": 2.33,
            "carrefour": 2.49
        },

        {
            "id": 9,
            "nome": "manteiga_itambe",
            "imagem": "IMG/PRODUTOS/LATICÍNIOS/manteiga itambe.jpg",
            "descricao": "Manteiga Com Sal Itambé 200g",
            "botao": "ADICIONAR",
            "categoria": "manteiga",
            "extra": 11.19,
            "bh": 9.90,
            "carrefour": 10.49
        },

        {
            "id": 10,
            "nome": "manteiga_batavo",
            "imagem": "IMG/PRODUTOS/LATICÍNIOS/manteiga batavo.jpg",
            "descricao": "Manteiga Sem Sal Batavo em Barra 200g",
            "botao": "ADICIONAR",
            "categoria": "manteiga",
            "extra": 8.49,
            "bh": 7.89,
            "carrefour": 8.49
        },
        {
            "id": 11,
            "nome": "requeijao_itambe",
            "imagem": "IMG/PRODUTOS/LATICÍNIOS/requeijao itambe.jpg",
            "descricao": "Requeijão Cremoso Tradicional Itambé 420g",
            "botao": "ADICIONAR",
            "categoria": "requeijao",
            "extra": 11.29,
            "bh": 11.29,
            "carrefour": 11.79
        },

        {
            "id": 12,
            "nome": "requeijao_vigor",
            "imagem": "IMG/PRODUTOS/LATICÍNIOS/requeijao vigor.jpg",
            "descricao": "Requeijão Cremoso Vigor 500g",
            "botao": "ADICIONAR",
            "categoria": "requeijao",
            "extra": 13.99,
            "bh": 11.59,
            "carrefour": 11.99
        },

        {
            "id": 13,
            "nome": "desinfetante_pinhoBril",
            "imagem": "IMG/PRODUTOS/LIMPEZA/pinho.jpg",
            "descricao": "Desinfetante Pinho Bril Campos de Lavanda 1 Litro",
            "botao": "ADICIONAR",
            "categoria": "desinfetante",
            "extra": 8.90,
            "bh": 7.59,
            "carrefour": 7.39
        },

        {
            "id": 14,
            "nome": "desinfetante_lysoform",
            "imagem": "IMG/PRODUTOS/LIMPEZA/lyso.jpg",
            "descricao": "Desinfetante Lysoform Original 1 Litro",
            "botao": "ADICIONAR",
            "categoria": "desinfetante",
            "extra": 10.99,
            "bh": 9.95,
            "carrefour": 9.99
        },

        {
            "id": 15,
            "nome": "detergente_limpol",
            "imagem": "IMG/PRODUTOS/LIMPEZA/limpol.jpg",
            "descricao": "Detergente Líquido Limpol Cristal 500ml",
            "botao": "ADICIONAR",
            "categoria": "detergente",
            "extra": 1.90,
            "bh": 1.79,
            "carrefour": 1.89
        },

        {
            "id": 16,
            "nome": "detergente_ype",
            "imagem": "IMG/PRODUTOS/LIMPEZA/ype coco.jpg",
            "descricao": "Detergente Líquido Ypê Coco 500ml",
            "botao": "ADICIONAR",
            "categoria": "detergente",
            "extra": 2.10,
            "bh": 1.89,
            "carrefour": 1.75
        },

        {
            "id": 17,
            "nome": "paoForma_wickbold",
            "imagem": "IMG/PRODUTOS/PADARIA/tradicional.jpg",
            "descricao": "Pão de Forma Tradicional Wickbold 500g",
            "botao": "ADICIONAR",
            "categoria": "paoForma",
            "extra": 4.69,
            "bh": 4.59,
            "carrefour": 4.69
        },

        {
            "id": 18,
            "nome": "paoForma_sevenBoys",
            "imagem": "IMG/PRODUTOS/PADARIA/tradicional2.jpg",
            "descricao": "Pão de Forma Seven Boys 500g",
            "botao": "ADICIONAR",
            "categoria": "paoForma",
            "extra": 4.79,
            "bh": 4.70,
            "carrefour": 4.55
        },

        {
            "id": 19,
            "nome": "paoIntegral_wickbold",
            "imagem": "IMG/PRODUTOS/PADARIA/integral.jpg",
            "descricao": "Pão de Forma Integral Wickbold 500g",
            "botao": "ADICIONAR",
            "categoria": "paoIntegral",
            "extra": 6.89,
            "bh": 6.09,
            "carrefour": 5.69
        },

        {
            "id": 20,
            "nome": "paoIntegral_wickboldGraoSabor",
            "imagem": "IMG/PRODUTOS/PADARIA/integral2.jpg",
            "descricao": "Pão de Forma Wickbold Grão Sabor 400g",
            "botao": "ADICIONAR",
            "categoria": "paoIntegral",
            "extra": 8.19,
            "bh": 8.10,
            "carrefour": 8.25
        },
    ],
};

// CRIAÇÃO DO LOCALSTORAGE DOS PRODUTOS SELECIONADOS PARA O CARRINHO
let produtosCarrinho = [];

function init () {
    // VARIFICA QUAIS OS PRODUTOS TEM NA CATEGORIA SELECIONADA
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const categoria = urlParams.get("categoria");

    let produtosSelecionados;
    if (!categoria) {
        produtosSelecionados = [...lista.produtos];
    } else {
        produtosSelecionados = lista.produtos.filter(
            (p) => p.categoria == categoria
        );
    }

    // MOSTRA OS PRODUTOS FILTRADOS NA TELA
    var elementoProdutos = document.querySelector("div.produtos");
    var textoHTML = "";
    for (i = 0; i < produtosSelecionados.length; i++) {
        var produto = produtosSelecionados[i];
        textoHTML =
            textoHTML +
            `<div class="item col-md-3">
                  <img class="fotoprod" src="${produto.imagem}" alt="${produto.nome}" width="250px" height="250px">

                  <p>${produto.descricao}</p>
                    
                  <button onclick="AddCarrinho('${produto.imagem}','${produto.nome}','${produto.descricao}','${produto.extra}','${produto.bh}','${produto.carrefour}', ${produto.id})" class="adc">${produto.botao}</button>
             </div>`;
    }
    elementoProdutos.innerHTML = textoHTML;

    
};

function retornaCarrinhoNoOnload (){

    // RETORNA O CARRINHO DE COMPRAS AO RECARREGAR Á PÁGINA
    var textoHTMLcarrinho = "";
    var elementoProdutos2 = document.querySelector("div.carrinhoCompras");
    JSON.parse(localStorage.getItem('produtos')).map(produto => {
        textoHTMLcarrinho = textoHTMLcarrinho + `
            <div class="row ">
                <div class=" fotocar col-md-5 ">
                <img src="${produto.imagem}" alt="${produto.nome}" width="150px " height="140px ">
                </div>

                <div class="carrinho2 col-7 ">

                <div class="col-12 ">
                    <p>${produto.descricao}</p>
                </div>

                <div class="col-12 quant">
                    <input class="quantidade" type="number" min="1" max="1000" value="1" >
                </div>

                </div>
                            
                <div class="remove col-12 ">
                <button class="botremove" onclick= removeItem(${produto.id})>REMOVER</button>
                </div>   
            </div>`;
        elementoProdutos2.innerHTML = textoHTMLcarrinho;
    })
}

// ADICIONA PRODUTOS SELECIONADOS NO LOCALSTORAGE
function AddCarrinho(imagem, nome, descricao, extra, bh, carrefour, id) {
    produtosCarrinho.push({ nome, descricao, imagem, extra, bh, carrefour, id });
    localStorage.setItem('produtos', JSON.stringify(produtosCarrinho));

    renderCart();
}

// BUSCA NO LOCALSTORAGE OS PRODUTOS SELECIONADOS PARA O CARRINHO E OS APRESENTA NA TELA
function renderCart() {
    var elementoProdutos = document.querySelector("div.carrinhoCompras");
    var textoHTMLcarrinho = "";

    JSON.parse(localStorage.getItem('produtos')).map(produto => {
    textoHTMLcarrinho += `
    <div class="row ">
        <div class=" fotocar col-md-5 ">
        <img src="${produto.imagem}" alt="${produto.nome}" width="150px " height="140px ">
        </div>

        <div class="carrinho2 col-7 ">
            <div class="col-12 ">
                <p>${produto.descricao}</p>
            </div>

            <div class="col-12 quant">
                <input id="qtdProduto" name="qtdProduto" class="quantidade" type="number" min="1" max="10" value="1" >
            </div>
        </div>
                    
        <div class="remove col-12 ">
        <button class="botremove" onclick= removeItem(${produto.id});>REMOVER</button>
        </div>   
    </div>`;

        elementoProdutos.innerHTML = textoHTMLcarrinho;
    })
}
document.querySelector("main").addEventListener("load", init);

//REMOVE PRODUTO
function removeItem(idProdutoCarr){
    let produtos = JSON.parse(localStorage.getItem('produtos'));
    for(i=0; i<produtos.length; i++){
        if(produtos[i].id==idProdutoCarr){
            produtos.splice(i,1);
        }
    }
    localStorage.setItem("produtos", JSON.stringify(produtos));
    novosItensRemovidos();
    retornaCarrinhoNoOnload();
}

// PRINTA NA TELA LISTA COM PRODUTO REMOVIDO
function novosItensRemovidos() {
    var elementoProdutos = document.querySelector("div.carrinhoCompras");
    var textoHTMLcarrinho = "";
    let teste = JSON.parse(localStorage.getItem('produtos'));
    //SE TIVER APAGADO TODOS OS ITENS PRINTA NADA NA TELA *ANTIBUG*     
    if(teste.length==0){
        textoHTMLcarrinho +=``
        elementoProdutos.innerHTML = textoHTMLcarrinho;
    }
    JSON.parse(localStorage.getItem('produtos')).map(produto => {
    
    textoHTMLcarrinho += `
        <div class="row ">
            <div class=" fotocar col-md-5 ">
            <img src="${produto.imagem}" alt="${produto.nome}" width="150px " height="140px ">
            </div>

            <div class="carrinho2 col-7 ">

            <div class="col-12 ">
                <p>${produto.descricao}</p>
            </div>

            <div class="col-12 quant">
                <input id="qtdProduto" name="qtdProduto" class="quantidade" type="number" min="1" max="10" value="1" >
            </div>

            </div>
                        
            <div class="remove col-12 ">
            <button class="botremove" onclick= removeItem(${produto.id});>REMOVER</button>
            </div>   
        </div>`;

        elementoProdutos.innerHTML = textoHTMLcarrinho;
    })
}

// LIMPAR O CARRINHO DE COMPRAS ESTÁ EM escolha.HTML, linha 150