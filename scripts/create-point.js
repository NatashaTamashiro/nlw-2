function populateUFs() {                                                        // Função para pegar todos os Estados
    const ufSelect = document.querySelector("select[name=uf]")
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")        // Uma 'promessa' de que irá rodar o link
        .then( res => res.json() )                                                // Função anônima que esta retornando um valor
        .then( states => {
            for (const state of states) {
                ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
            }
        })
}
populateUFs()

function getCities (event) {                                                    // Função para pegar todas as cidades - (pegando o evento dentro da função)
    const citySelect = document.querySelector("select[name=city]")
    const stateInput = document.querySelector("input[name=state]")

        const ufValue = event.target.value

        const indexOfSelectedState = event.target.selectedIndex
        stateInput.value = event.target.options[indexOfSelectedState].text      // Saber qual option está selecionado para pegar o texto dele e colocar no value


    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

    fetch(url)
    .then( res => res.json() )                                                  // Função anônima que esta retornando um valor
    .then( cities => {
        for (const city of cities) {
            citySelect.innerHTML += `<option value="${city.id}">${city.nome}</option>`
        }
        citySelect.disabled = false                                             // Removendo o disabled do select
    })
}


document
    .querySelector("select[name=uf]")               // Procurar um seletor ( Nesse caso, o seletor de ESTADO )
    .addEventListener("change", getCities)          // .Funcionalidade de evento "quando mudar"  ,irá executar a função
                        
