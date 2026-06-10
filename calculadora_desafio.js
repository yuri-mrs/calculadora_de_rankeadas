var Jogadores = [
    //indice = 0
    {usuario:"SilverFang", vitorias:60, derrotas:15, rankTitulo:""},

    //indice = 1
    {usuario:"VoidArcher", vitorias:11, derrotas:0, rankTitulo:""},

    //indice = 2
    {usuario:"PixelHunter", vitorias:100, derrotas:30, rankTitulo:""},

    //indice = 3
    {usuario:"RavenCat", vitorias:200, derrotas:40, rankTitulo:""}
];

// função responsavel por separar os ranks
function Rankcheck(rank) {
    if (rank < 10) {
        return "Ferro"
    }

    if (rank <= 20) {
        return "Bronze"
    }

    if (rank <= 50) {
        return "Prata"
    }

    if (rank <= 80) {
        return "Ouro"
    }

    if (rank <= 90) {
        return "Diamante"
    }

    if (rank <= 100) {
        return "Lendário"
    }

    return "Imortal"
}

function RankCalc(indiceJogador) {
    let nomeJogador = Jogadores[indiceJogador].usuario
    let vitoriasJogador = Jogadores[indiceJogador].vitorias
    let derrotasJogador = Jogadores[indiceJogador].derrotas

    let rank = vitoriasJogador - derrotasJogador

    console.log(
        "O Herói " + nomeJogador + ", tem de saldo de " + rank + " vitorias e está no nível de " + Rankcheck(rank)
    )
}

RankCalc(1)