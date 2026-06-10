var Players = [
    {user:"SilverFang", victories:60, defeats:15, rankTitle:""},
    {user:"VoidArcher", victories:11, defeats:0, rankTitle:""},
    {user:"PixelHunter", victories:100, defeats:30, rankTitle:""},
    {user:"RavenCat", victories:200, defeats:40, rankTitle:""}
];

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

function RankCalc() {
    for (let player of Players) {
        let rank = player.victories - player.defeats

        console.log("O Herói " + player.user + ", tem de saldo de " + rank + " vitorias e está no nível de " + Rankcheck(rank));
    }
}

RankCalc()