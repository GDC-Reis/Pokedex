export default function primeiraEvolucao(url) {
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            const PrimeiraEvolucao = document.querySelector('.formaPrimeiraEvolucao');
            PrimeiraEvolucao.src = data.sprites.other.dream_world.front_default;

            const valorPrimeiraEvolucao = data.name;
            const mostraPrimeiraEvolucao = document.querySelector('.primeiraEvolucao');
            mostraPrimeiraEvolucao.innerText = valorPrimeiraEvolucao;
        })
        .catch((erro) => {
            console.log('Erro: ', erro);
        });
}