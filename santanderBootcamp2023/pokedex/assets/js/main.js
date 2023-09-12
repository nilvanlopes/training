const listaPokemons = document.getElementById('pokemons')

function addPokemonToList(pokemon) {
    return `
        <div class="pokemon">
        <div class="nomeNumero">
            <label for="">${pokemon.name}</label>
            <label for="">#${pokemon.number}</label>
        </div>
        <div class="typeIMG">
            <div class="types">
                <div class="type">
                    ${pokemon.types.map((type) => ` <i class="fa-solid fa-leaf"></i><label>${type}</label>`).join('')}      
                </div>
            </div>
            <img src="${pokemon.photo}">
        </div>
    </div>
    `

}

pokeApi.getPokemons().then((pokemons = []) => {
    const newHtml = pokemons.map(addPokemonToList).join('')
    listaPokemons.innerHTML = newHtml
})