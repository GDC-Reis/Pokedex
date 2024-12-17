export default function evolucoesPokemon(url) {
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const PrimeiraEvolucao = document.querySelector('.formaPrimeiraEvolucao');
            const ultimaEvolucao = document.querySelector('.formaSegundaEvolucao');

            PrimeiraEvolucao.src = data.sprites.other.dream_world.front_default;
            ultimaEvolucao.src = data.sprites.other.dream_world.front_default

            const valorPrimeiraEvolucao = data.name;
            const valorUltimaEvolucao = data.name;
            
            const mostraPrimeiraEvolucao = document.querySelector('.primeiraEvolucao');
            const mostraUltimaEvolucao = document.querySelector('.ultimaEvolucao');
            
            mostraPrimeiraEvolucao.innerText = valorPrimeiraEvolucao;
            mostraUltimaEvolucao.innerText = valorUltimaEvolucao;
        })
        .catch((erro) => {
            console.log('Erro: ', erro);
        });
}