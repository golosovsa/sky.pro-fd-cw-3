window.application = {
    login: undefined,
    token: undefined,
    user: undefined,
    enemy: undefined,
    page: new Page(idle, () => { 
        window.application.renderScreen("lobby");

        window.application.dao.playerList.getAll().then((players) => {
            window.application.blocks["lobby-block-one"].updatePlayers(players.data);
        });
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
            const page = window.application.page
            const menu = page.menu;

            menu.active("lobby");
            menu.enable("lobby").enable("start");

            window.application.renderBlock("lobby-block-one", page.firstBlock);
            window.application.renderBlock("lobby-block-two", page.secondBlock);
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
    switch (from) {
        case "lobby":
            
            switch (to) {
                case "lobby":
                    
                    window.application.blocks["lobby-block-two"].showPlayer(data);

                    break;
            
                default:
                    break;
            }

            break;
    
        default:
            break;
    }
}