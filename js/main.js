window.application = {
    login: undefined,
    token: undefined,
    game: undefined,
    page: new Page(idle, () => {

        // ping server
        window.application.dao.ping.getOne().then(data => {
            if (data.status !== "ok") {
                window.application.page.showModal("error");
            }
        });

        window.application.login = window.localStorage.getItem("login") || "grm";
        window.application.token = window.localStorage.getItem("token") || "grm";

        if (!window.application.login) {
            window.application.renderScreen("rules");
            return;
        }

        if (!window.application.token) {
            window.application.dao.login.getOne({login: window.application.login}).then(data => {
                if (data.status !== "ok" || data.data.status !== "ok") {
                    window.application.login = null;
                } else {
                    window.application.token = data.data.token;
                }
                window.application.renderScreen("rules");
            });
            return;
        }

        window.application.dao.playerStatus.getOne({token: window.application.token}).then(data => {
            if (data.status !== "ok" || data.data.status !== "ok") {
                window.application.dao.login.getOne({login: window.application.login}).then(data => {
                    if (data.status !== "ok" || data.data.status !== "ok") {
                        window.application.login = null;
                    } else {
                        window.application.token = data.data.token;
                    }
                    window.application.renderScreen("rules");
                });
            } else {
                
                if (data.data["player-status"].status === "lobby") {
                    window.application.renderScreen("rules"); 
                    return;
                }

                if (data.data["player-status"].status === "game") {
                    window.application.game = data.data["player-status"].game.id;
                    window.application.renderScreen("game");
                    return;
                }
            }
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
    
    console.log("from", from, "to", to, "data", data);

    /**
     * modals
     */

    if (from === "modal" && to === "reload") {
        if (to === "reload") {
            document.location.reload();
            return;
        }

        return;
    }

    /**
     * menu 
     */

    if (from === "menu") {
        if (to === "rules") {
            window.application.renderScreen("rules");
            return;
        }

        if (to === "login") {
            window.application.renderScreen("login");
            return;
        }

        if (to === "lobby") {
            window.application.renderScreen("lobby");
            return;
        }

        if (to === "start") {
            window.application.renderScreen("game");
            return;
        }

        return;
    }

    /**
     * rules
     */

    if (from === "rules") {
        if (to === "lobby") {
            window.application.renderScreen("lobby");
            return;
        }

        if (to === "start") {
            window.application.renderScreen("game");
            return;
        }

        return;
    }
}
