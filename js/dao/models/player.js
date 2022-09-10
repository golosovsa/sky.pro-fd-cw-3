class Player {
    constructor({login, wins, loses, rocks, papers, scissors, you=false}) {
        this.login = login;
        this.wins = wins;
        this.loses = loses;
        this.rocks = rocks;
        this.papers = papers;
        this.scissors = scissors;
    }
}