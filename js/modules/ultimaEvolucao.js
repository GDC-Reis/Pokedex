export default function ultimaEvolucao(url) {
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const ultimaEvolucao = document.querySelector('.formaSegundaEvolucao');
            ultimaEvolucao.src = data.sprites.other.dream_world.front_default

            const valorUltimaEvolucao = data.name;
            const mostraUltimaEvolucao = document.querySelector('.ultimaEvolucao');
            mostraUltimaEvolucao.innerText = valorUltimaEvolucao;
        })
        .catch((erro) => {
            console.log('Erro:', erro);
        });
}