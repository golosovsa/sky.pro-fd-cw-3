class LobbyBlockOne extends BaseScreen {
    constructor(userCallBack) {
        super(lobbyBlockOneTemplate, userCallBack, "lobby");
        
        this.sortLinks = {
            "sort-by-name": this.element.querySelector(".lobby-block-one__sort-link_name"),
            "sort-by-wins": this.element.querySelector(".lobby-block-one__sort-link_wins"),
            "sort-by-loses": this.element.querySelector(".lobby-block-one__sort-link_loses"),
        }   

        this.userList = this.element.querySelector(".lobby-block-one__user-list");
        this.players = undefined;
        this.sorting = "sort-by-name";

        this.sortByName = this.sortByName.bind(this);
        this.sortByWins = this.sortByWins.bind(this);
        this.sortByLoses = this.sortByLoses.bind(this);
        this.onPlayerClick = this.onPlayerClick.bind(this);

        this.sortLinks["sort-by-name"].addEventListener("click", this.sortByName);
        this.sortLinks["sort-by-wins"].addEventListener("click", this.sortByWins);
        this.sortLinks["sort-by-loses"].addEventListener("click", this.sortByLoses);
    }

    get userListBlock() {
        return this.userListBlock;
    }

    sortByName() {
        this.sorting = "sort-by-name";
        this.setActiveLink();
        if (this.players === undefined) return;
        this.userList.replaceChildren(
            ...[...this.players].sort((player1, player2) => {
                const name1 = player1.login.toLowerCase();
                const name2 = player2.login.toLowerCase();
                if (name1 < name2) return -1;
                return (name1 > name2);
            }
            ).map(player => player.block),
        );
    }

    sortByWins() {
        this.sorting = "sort-by-wins";
        this.setActiveLink();
        if (this.players === undefined) return;
        this.userList.replaceChildren(
            ...[...this.players].sort((player1, player2) => {
                const wins1 = Number(player1.wins);
                const wins2 = Number(player2.wins);
                return wins2 - wins1;
            }
            ).map(player => player.block),
        );
    }

    sortByLoses() {
        this.sorting = "sort-by-loses";
        this.setActiveLink();
        if (this.players === undefined) return;
        this.userList.replaceChildren(
            ...[...this.players].sort((player1, player2) => {
                const loses1 = Number(player1.loses);
                const loses2 = Number(player2.loses);
                return loses2 - loses1;
            }
            ).map(player => player.block),
        );
    }

    setActiveLink() {
        for (const link in this.sortLinks) {
            this.sortLinks[link].classList.remove("lobby-block-one__sort-link_active");
        }
        this.sortLinks[this.sorting].classList.add("lobby-block-one__sort-link_active");
    }

    updatePlayers(players) {
        this.players = players;
        
        this.players.forEach((item, index) => {
            item.block.dataset.id = index;
            item.block.addEventListener("click", this.onPlayerClick, true);
        });

        const clickEvent = new Event("click");
        this.sortLinks[this.sorting].dispatchEvent(clickEvent);
    }

    onPlayerClick(event) {
        let target = event.target;

        console.dir(target);

        while (target) {
            if (target.classList.contains("player")) break;
            target = target.parentElement; 
        }

        if (!("id" in target.dataset)) return;
        event.preventDefault();
        const id = target.dataset.id;
        const player = this.players[id];
        if (this.userCallBack !== undefined) {
            this.userCallBack({
                from: this.screenName,
                to: this.screenName,
                data: player,
            });
        }
    }
}

class LobbyBlockTwo extends BaseScreen {
    constructor(userCallBack) {
        super(lobbyBlockTwoTemplate, userCallBack, "lobby");

        this.addButton(".lobby-block-two__button_start", "start");

        this.playerDetailed = this.element.querySelector(".lobby-block-two__player-detailed");
    }

    showPlayer(player) {
        console.log(player);
        this.playerDetailed.replaceChildren(player.blockDetailed);
    }
}