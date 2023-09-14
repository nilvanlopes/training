const listaPokemons = document.getElementById('pokemons')
const moreButton = document.getElementById('more')
const maxRecords = 151
const limit = 10
let offset = 0

function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map((pokemon) =>
            `
        <div class="pokemon ${pokemon.type}">
        <div class="nomeNumero">
            <label for="">${pokemon.name}</label>
            <label for="">#${pokemon.number}</label>
        </div>
        <div class="typeIMG">
            <div class="types">
                    ${pokemon.types.map((type) => `<div class="type ${type}">
                    <label>${type}</label>
                    </div>`).join('')}
            </div>
            <img src="${pokemon.photo}">
        </div>
    </div>
    `).join('')
        listaPokemons.innerHTML += newHtml
    })
}
loadPokemonItens(offset, limit)

moreButton.addEventListener('click', () => {
    offset += limit
    const qtdRecordNextPage = offset + limit
    if (qtdRecordNextPage >= maxRecords) {
        const newLimit = maxRecords - offset
        loadPokemonItens(offset, newLimit)
        moreButton.parentElement.removeChild(moreButton)
    } else {
        loadPokemonItens(offset, limit)
    }
})