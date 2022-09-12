class Player {
    constructor({login, wins, loses, rocks, papers, scissors, you=false}) {
        this.login = login;
        this.wins = wins;
        this.loses = loses;
        this.rocks = rocks;
        this.papers = papers;
        this.scissors = scissors;

        this.elementPlayer = templateEngine(playerTemplate);
        this.elementDetailedPlayer = templateEngine(playerDetailedTemplate);

        this.playerLetter = this.elementPlayer.querySelector(".player__letter"); 
        this.playerLetter.textContent = login[0];

        this.infoWins = this.elementPlayer.querySelector(".player__info_wins");
        this.infoWins.textContent = wins;

        this.infoLoses = this.elementPlayer.querySelector(".player__info_loses");
        this.infoLoses.textContent = loses;

        this.playerLogin = this.elementPlayer.querySelector(".player__login");
        this.playerLogin.textContent = login;

        this.detailedWins = this.elementDetailedPlayer.querySelector(".player-detailed__wins");
        this.detailedWins.textContent = "Wins: " + wins;

        this.detailedLoses = this.elementDetailedPlayer.querySelector(".player-detailed__loses");
        this.detailedLoses.textContent = "Loses: " + loses;

        this.detailedRocks = this.elementDetailedPlayer.querySelector(".player-detailed__counter_rock");
        this.detailedRocks.textContent = rocks;

        this.detailedPapers = this.elementDetailedPlayer.querySelector(".player-detailed__counter_paper");
        this.detailedPapers.textContent = papers;

        this.detailedScissors = this.elementDetailedPlayer.querySelector(".player-detailed__counter_scissors");
        this.detailedScissors.textContent = scissors;

        this.detailedTitle = this.elementDetailedPlayer.querySelector(".player-detailed__title");
        this.detailedTitle.textContent = login;
    }

    get block() {
        return this.elementPlayer;
    }

    get blockDetailed() {
        return this.elementDetailedPlayer;
    }
}