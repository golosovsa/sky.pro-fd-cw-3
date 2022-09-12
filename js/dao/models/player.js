class Player {
    constructor({login, wins, loses, rocks, papers, scissors, you=false}) {
        this.login = login;
        this.wins = wins;
        this.loses = loses;
        this.rocks = rocks;
        this.papers = papers;
        this.scissors = scissors;

        this.elementPlayer = templateEngine(playerTemplate);

        this.playerLetter = this.elementPlayer.querySelector(".player__letter"); 
        this.playerLetter.textContent = login[0];

        this.infoWins = this.elementPlayer.querySelector(".player__info_wins");
        this.infoWins.textContent = wins;

        this.infoLoses = this.elementPlayer.querySelector(".player__info_loses");
        this.infoLoses.textContent = loses;

        this.playerLogin = this.elementPlayer.querySelector(".player__login");
        this.playerLogin.textContent = login;
    }

    get block() {
        return this.elementPlayer;
    }
}