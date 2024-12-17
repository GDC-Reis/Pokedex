import buscaEvolucao from './buscaEvolucao.js';
import pegaCor from './pegaCor.js';

export default function buscaPokemon(nome) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${nome}`)
        .then((response) => response.json())
        .then((data) => {
            const nomePokemonBase = document.querySelector('.nome');
            const imagemFormaBase = document.querySelector('.formaBase');

            nomePokemonBase.innerText = data.name;
            imagemFormaBase.src = data.sprites.other.dream_world.front_default;

            const urlSpecies = data.species.url

            buscaEvolucao(urlSpecies, data.name);
            pegaCor(urlSpecies);
        });
}