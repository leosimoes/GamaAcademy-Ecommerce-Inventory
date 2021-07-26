function carregarDadosLocalStorage(){
    for(produto of produtos){
        const productStore = JSON.stringify(produto);
        localStorage.setItem(`@Produto-${produto.id}`, productStore);
    }
}

function atualizarProduto(id){
    produto = JSON.parse(localStorage.getItem(`@Produto-${id}`));
    produto.price = document.getElementById("precoProduto" + id).value;
    produto.vacancies = document.getElementById("vagasProduto" + id).value;

    const productStore = JSON.stringify(produto);
    localStorage.setItem(`@Produto-${produto.id}`, productStore);
}

function criarDivsProdutos(produtos){  
    for(produto of produtos){
        produtoString = JSON.stringify(produto);
        idInputVagas = "vagasProduto" + produto.id;
        idInputPreco = "precoProduto" + produto.id;

        const div = document.createElement('div');

        div.classList.add("col-sm");
        div.classList.add("col-md");
        div.classList.add("align-items-center");  
        div.classList.add("justify-content-center");
        div.classList.add("text-center");   

        div.innerHTML = `
            <h2>${produto.name}</h2>
            <img src=${produto.photo} alt="Logo" class="img-fluid align-middle" aria-labelledby="description-tal"/>
            <h3>${produto.description}</h3>
            <form>
                <div class="form-group">
                    <label for=${idInputPreco} class="col-form-label">Preço</label>
                    <input type="text" id=${idInputPreco} placeholder=${produto.price}>
                </div>
                <div class="form-group">
                    <label for=${idInputVagas} class="col-form-label">Vagas</label>
                    <input type="number" id=${idInputVagas} placeholder=${produto.vacancies}>
                </div>
            </form>
            <button class="btn btn-primary btn-outline-warning btn-sm" onclick="atualizarProduto(${produto.id})">Atualizar</button>
        `;

        document.getElementById('lista_produtos').appendChild(div);
    }
}


function carregarElementosPagina(){
    carregarDadosLocalStorage()
    criarDivsProdutos(produtos);
}


//carregarElementosPagina();

