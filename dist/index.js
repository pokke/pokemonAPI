"use strict";
var _a;
const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/';
let currentPokemonId = 1;
async function fetchPokemon(identifier) {
    const response = await fetch(`${BASE_URL}${identifier}`);
    if (!response.ok) {
        console.error(`No Pokemon exist with the identifier: ${identifier}`);
        return;
    }
    const data = await response.json();
    const pokemon = {
        name: data.name,
        height: data.height,
        weight: data.weight,
        types: data.types.map((type) => type.type.name).join(', '),
    };
    displayPokemon(pokemon);
    savePokemon(pokemon);
}
function displayPokemon(pokemon) {
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = `
        <h2>${pokemon.name}</h2>
        <p>Height: ${pokemon.height}</p>
        <p>Weight: ${pokemon.weight}</p>
        <p>Types: ${pokemon.types}</p>
        <button id="saveBtn" class="btn">Save</button>
    `;
}
function savePokemon(pokemon) {
    const saveBtn = document.getElementById('saveBtn');
    saveBtn.addEventListener('click', () => {
        if (localStorage.getItem(pokemon.name) === null) {
            localStorage.setItem(pokemon.name, JSON.stringify(pokemon));
            displaySavedPokemon();
        }
        else {
            console.log(`${pokemon.name} is already saved.`);
        }
    });
}
document.getElementById('nextBtn').addEventListener('click', () => {
    currentPokemonId++;
    fetchPokemon(currentPokemonId);
});
document.getElementById('prevBtn').addEventListener('click', () => {
    if (currentPokemonId > 1) {
        currentPokemonId--;
        fetchPokemon(currentPokemonId);
    }
});
(_a = document.getElementById('searchBtn')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
    var _a;
    const pokemonName = (_a = document.getElementById('pokemonName')) === null || _a === void 0 ? void 0 : _a.value;
    if (pokemonName) {
        fetchPokemon(pokemonName.toLowerCase());
    }
});
function displaySavedPokemon() {
    const savedPokemonDiv = document.getElementById('savedPokemon');
    savedPokemonDiv.innerHTML = '';
    for (let i = 0; i < localStorage.length; i++) {
        const pokemonName = localStorage.key(i);
        try {
            const pokemon = JSON.parse(localStorage.getItem(pokemonName));
            const pokemonCard = document.createElement('div');
            pokemonCard.classList.add('pokemon-card');
            pokemonCard.innerHTML = `
            <h2>${pokemon.name}</h2>
            <p>Height: ${pokemon.height}</p>
            <p>Weight: ${pokemon.weight}</p>
            <p>Types: ${pokemon.types}</p>
            <button id="${pokemon.name}" class="btn">Remove</button>
        `;
            savedPokemonDiv.appendChild(pokemonCard);
            const removeBtn = document.getElementById(pokemon.name);
            removeBtn.addEventListener('click', () => {
                localStorage.removeItem(pokemon.name);
                displaySavedPokemon();
            });
        }
        catch (error) {
            console.error(`Could not parse Pokemon data for ${pokemonName}: ${error}`);
        }
    }
}
fetchPokemon(currentPokemonId);
displaySavedPokemon();
