window.application = {
    login: undefined,
    token: undefined,
    user: undefined,
    enemy: undefined,
    page: new Page(idle, () => { 
        window.application.renderScreen("game");
    }),
    
    dao: {
        ping: pingHandle,
        login: loginHandle,
        playerStatus: playerStatusHandle,
        startGame: startGameHandle,
        gameStatus: gameStatusHandle,
        play: playHandle,
        playerList: playerListHandle,
    },
    
    blocks: {
        "rules-block-one": new RulesBlockOne(idle),
        "rules-block-two": new RulesBlockTwo(idle),
        "login-block-one": new LoginBlockOne(idle),
        "login-block-two": new LoginBlockTwo(idle),
        "lobby-block-one": new LobbyBlockOne(idle),
        "lobby-block-two": new LobbyBlockTwo(idle),
        "game-block-one": new GameBlockOne(idle),
        "game-block-two": new GameBlockTwo(idle),
    },
    screens: {
        rules: function() {
            const page = window.application.page
            const menu = page.menu;
            const token = window.application.token;

            menu.active("rules");

            if (token === undefined) {
                menu.disable("lobby").disable("start");
            } else {
                menu.enable("lobby").enable("start");
            }

            window.application.renderBlock("rules-block-one", page.firstBlock);
            window.application.renderBlock("rules-block-two", page.secondBlock);
        },
        
        login: function() {
            const page = window.application.page
            const menu = page.menu;
            const token = window.application.token;

            menu.active("login");

            if (token === undefined) {
                menu.disable("lobby").disable("start");
            } else {
                menu.enable("lobby").enable("start");
            }

            window.application.renderBlock("login-block-one", page.firstBlock);
            window.application.renderBlock("login-block-two", page.secondBlock);
        },

        lobby: function() {
            const page = window.application.page;
            const menu = page.menu;

            menu.active("lobby");
            menu.enable("lobby").enable("start");

            window.application.renderBlock("lobby-block-one", page.firstBlock);
            window.application.renderBlock("lobby-block-two", page.secondBlock);
        },

        game: function() {
            const page = window.application.page;
            const menu = page.menu;

            menu.active("start");
            menu.enable("lobby").enable("start");

            window.application.renderBlock("game-block-one", page.firstBlock);
            window.application.renderBlock("game-block-two", page.secondBlock);
        }
    },
    renderScreen: function(screenName) {
        this.screens[screenName]();
    },

    renderBlock: function(blockName, container) {
        container.replaceChildren(this.blocks[blockName].block)
    },
}

function idle({from, to, data=undefined}) {
    console.log(`from = ${from}, to = ${to}, data = ${data}`);

    if (to === "rules") {
        window.application.blocks["game-block-one"].activateField();
        window.application.blocks["game-block-one"].showSpinner();
        window.application.blocks["game-block-one"].setTitle("Vasya");
        window.application.blocks["game-block-one"].setScores(5, 15);
        window.application.blocks["game-block-one"].hideWaiter();
    } else {
        window.application.blocks["game-block-one"].selectScissors();
        window.application.blocks["game-block-one"].hideSpinner();
    }
}