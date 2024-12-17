""// import evolucoesPokemon from "./evolucoesPokemon.js";
import primeiraEvolucao from "./primeiraEvolucao.js";
import ultimaEvolucao from "./ultimaEvolucao.js";

export default function buscaEvolucao(url, name) {
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const evolutionChainUrl = data.evolution_chain.url;
            return fetch(evolutionChainUrl);
        })
        .then((response) => response.json())
        .then((data) => {
            const urlPrimeiraEvolucao = data.chain.evolves_to[0].species.name || null;
            const urlUltimaEvolucao = data.chain.evolves_to[0].evolves_to[0].species.name || null;

            const modalImg = document.querySelectorAll('.js-img');

            modalImg.forEach((img) => {
                if (name === urlUltimaEvolucao) {
                    img.src = "none";
                } else {
                    primeiraEvolucao(`https://pokeapi.co/api/v2/pokemon/${urlPrimeiraEvolucao}`);
                    ultimaEvolucao(`https://pokeapi.co/api/v2/pokemon/${urlUltimaEvolucao}`);
                }
            })

        })
        .catch((error) => {
            console.log('Erro: ', error);
        });
}
