const getinfo = async () => {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon`)
        const data = await response.json();
        const allPokemon = data.results;

        // document.querySelector(`ul`).innerHTML = `<li>${pokemonTotal}</li>`;
        // const pokemonArr = pokemonTotal.map((pokemon) => {
        //     return `<li>${pokemon.name}</li>`;
        // document.querySelector(`ul`).innerHTML = pokemonArr.join(``)

        render(allPokemon)
    } catch (error) {
        const message = `Error`
        render(message)
    }
}
const render = (pokemonArr) => {
    const ul = document.querySelector(`ul`)
    for (let i in pokemonArr) {
        const urlArr = pokemonArr[i].url.split(`/`)
        const urlIndex = urlArr[6]

        ul.innerHTML += `<a href = '' data-pokemon-number'=${urlIndex}'>
        <li> ${pokemonArr[i].name}</li ></a>`
    }

    const linkArr = document.querySelectorAll(`a`);
    for (let i = 0; i < linkArr.length; i++) {
        linkArr[i].addEventListener(`click`, async (event) => {
            event.preventDefault()
            const num = linkArr[i].dataset.pokemonNumber
            const response = await fetch(`https://pokeapi.com/api/v2/pokemon`)
            const data = await response.json();
            renderDetails(data)
        })
    }
}

const renderDetails = (pokemonData) => {
    const renderedData = JSON.stringify(pokemonData, null, 2)
    const section = document.querySelector(`section`)
    section.innerText = renderedData
}