window.application = {
    login: undefined,
    token: undefined,
    game: undefined,
    player: {
        wins: 0,
        loses: 0,
    },
    page: new Page(idle, () => {

        // ping server
        window.application.dao.ping.getOne().then(data => {
            if (data.status !== "ok") {
                window.application.page.showModal("error");
            }
        });

        window.application.login = window.localStorage.getItem("login");
        window.application.token = window.localStorage.getItem("token");

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
                        window.application.token = null;
                        window.application.renderScreen("rules");
                    } else {
                        window.application.token = data.data.token;
                        window.application.dao.playerStatus.getOne({token: window.application.token}).then(data => {
                            if (data.data["player-status"].status === "lobby") {
                                window.application.game = undefined;
                                window.application.renderScreen("rules");
                                return;
                            }
                            window.application.game = data.data["player-status"].game.id;
                            window.application.renderScreen("game");
                            return;
                        });
                    }
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

            if (!token) {
                menu.disable("lobby").disable("start").enable("login").enable("rules");
            } else {
                menu.enable("lobby").enable("start").enable("login").enable("rules");
            }

            window.application.renderBlock("rules-block-one", page.firstBlock);
            window.application.renderBlock("rules-block-two", page.secondBlock);
        },
        
        login: function() {
            const page = window.application.page
            const menu = page.menu;
            const token = window.application.token;

            menu.active("login");

            if (!token) {
                menu.disable("lobby").disable("start").enable("rules").enable("login");
            } else {
                menu.enable("lobby").enable("start").enable("rules").enable("login");
            }

            if (window.application.login) {
                window.application.blocks["login-block-two"].value = window.application.login;
            }

            window.application.blocks["login-block-two"].showGoButton();
            window.application.renderBlock("login-block-one", page.firstBlock);
            window.application.renderBlock("login-block-two", page.secondBlock);
        },

        lobby: function() {
            const page = window.application.page;
            const menu = page.menu;

            menu.active("lobby");
            menu.enable("login").enable("start").enable("rules").enable("lobby");

            window.application.renderBlock("lobby-block-one", page.firstBlock);
            window.application.renderBlock("lobby-block-two", page.secondBlock);

            window.application.setTimerIdle(() => {
                idle({from: "timer", to: "lobby"});
            }, 100);
            return;
        },

        game: function() {
            const page = window.application.page;
            const menu = page.menu;

            menu.active("start");
            menu.disable("rules").disable("login").disable("lobby").enable("start");

            window.application.player.wins = "??",
            window.application.player.loses = "??",
            window.application.blocks["game-block-two"].hardReset();

            window.application.renderBlock("game-block-one", page.firstBlock);
            window.application.renderBlock("game-block-two", page.secondBlock);

            window.application.setTimerIdle(() => {
                idle({from: "timer", to: "game", data: "player"});
            }, 100);
            return;
        }
    },
    timers: {},
    renderScreen: function(screenName) {
        this.stopAllTimers()
        this.screens[screenName]();
    },

    renderBlock: function(blockName, container) {
        container.replaceChildren(this.blocks[blockName].block)
    },

    setTimerIdle: function(callback, timeout) {
        const timerID = setTimeout(() => {
            delete application.timers[timerID];
            callback();
        }, timeout);

        this.timers[timerID] = true;
    },

    stopAllTimers: function() {
        for (const timerID in this.timers) {
            clearTimeout(timerID);
        }
        this.timers = {};
    }
}

function idle({from, to, data=undefined}) {
    
    // console.log("from", from, "to", to, "data", data);

    /**
     * modals
     */

    if (from === "modal") {
        window.application.page.hideAllModals();

        if (to === "reload") {
            document.location.reload();
            return;
        }

        if (to === "lobby") {
            window.application.renderScreen("lobby");
            return;
        }

        if (to === "play") {
            window.application.renderScreen("game");
            return;
        }

        if (to === "login") {
            window.application.renderScreen("login");
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

        if (!window.application.token) {
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
     * login
     */

    if (from === "login") {
        
        if (to === "login") {
            window.application.blocks["login-block-two"].hideGoButton();
            window.application.dao.login.getOne({
                login: window.application.blocks["login-block-two"].value, 
            }).then(data => {
                if (data.status !== "ok" || data.data.status !== "ok") {
                    window.application.page.showModal("wrongLogin");
                    window.application.login = undefined;
                    window.application.token = undefined;
                    return;
                }
                window.application.login = window.application.blocks["login-block-two"].value;
                window.application.token = data.data.token;
                window.localStorage.setItem("login", window.application.login);
                window.localStorage.setItem("token", window.application.token);
                window.application.renderScreen("lobby");
            })
        }

        return;
    }

    /**
     * lobby
     */

    if (from === "lobby") {

        if (to === "start") {
            window.application.renderScreen("game");
        }

        if (to === "lobby") {
            if (data) {
                window.application.blocks["lobby-block-two"].showPlayer(data);
            }

            return;
        }

        return;
    }

    /**
     * game
     */

    if (from === "game") {

        if (to === "game") {
            window.application.blocks["game-block-two"].hideGoButton();
            const item = window.application.blocks["game-block-two"].selected;
            application.dao.play.getOne({
                token: application.token,
                id: application.game,
                move: item,
            }).then(data => {
                if (data.status !== "ok" || data.data.status !== "ok") {
                    window.application.page.showModal("error");
                    return;
                }
            });
            return;
        }

        return;
    }

    /**
     * timer
     */

    if (from === "timer") {
        if (to === "lobby") {
            application.dao.playerList.getAll({token: application.token}).then((data) => {
                if (data.status !== "ok") {
                    window.application.page.showModal("error");
                    return;
                }
                window.application.blocks["lobby-block-one"].updatePlayers(data.data);
                window.application.setTimerIdle(() => {
                    idle({from: "timer", to: "lobby"});
                }, 1000);
            });

            return;
        }

        if (to === "game") {
            if (data === "player") {
                window.application.dao.playerList.getAll({token: application.token}).then(data => {
                    if (data.status !== "ok") {
                        window.application.page.showModal("error");
                        return;
                    }

                    for (const player of data.data) {
                        if (player.you) {
                            application.player.wins = player.wins;
                            application.player.loses = player.loses;
                            break;
                        }
                    }

                    window.application.setTimerIdle(() => {
                        idle({from: "timer", to: "game", data: "start"});
                    }, 100);
                });
                
                return;
            }

            if (data === "start") {

                if (window.application.game) {
                    window.application.setTimerIdle(() => {
                        idle({from: "timer", to: "game"});
                    }, 500);
                    return;
                }

                window.application.dao.startGame.getOne({token: application.token}).then(data => {

                    if (data.status !== "ok" || data.data.status !== "ok") {
                        window.application.page.showModal("error");
                        return;
                    }

                    window.application.game = data.data["player-status"].game.id;
                    window.application.setTimerIdle(() => {
                        idle({from: "timer", to: "game"});
                    }, 500);

                    return;
                });

                return;
            }


            window.application.dao.gameStatus.getOne({
                token: window.application.token,
                id: window.application.game,
            }).then(data => {
                if (data.status !== "ok" || data.data.status != "ok") {
                    window.application.page.showModal("error");
                    return;
                }

                const status = data.data["game-status"].status;

                if (status === "waiting-for-start") {
                    window.application.blocks["game-block-one"].reset();
                    window.application.blocks["game-block-two"].reset(application.login, application.player.wins, application.player.loses);
                    window.application.blocks["game-block-two"].disableItems();
                } else if (status === "waiting-for-your-move") {
                    const enemy = data.data["game-status"].enemy;
                    window.application.blocks["game-block-one"].showEnemy(enemy.login, enemy.wins, enemy.loses);
                    window.application.blocks["game-block-two"].setTitle(application.login);
                    window.application.blocks["game-block-two"].setScores(application.player.wins, application.player.loses);
                    window.application.blocks["game-block-two"].enableItems();
                    if (!window.application.blocks["game-block-two"].selected) {
                        window.application.blocks["game-block-two"].hideGoButton();
                    }
                } else if (status === "waiting-for-enemy-move") {
                    const enemy = data.data["game-status"].enemy;
                    window.application.blocks["game-block-one"].showEnemy(enemy.login, enemy.wins, enemy.loses);
                    window.application.blocks["game-block-two"].setTitle(application.login);
                    window.application.blocks["game-block-two"].setScores(application.player.wins, application.player.loses);
                    window.application.blocks["game-block-two"].enableItems();
                    window.application.blocks["game-block-two"].hideGoButton();

                    if (!window.application.blocks["game-block-two"].selected) {
                        const lastMove = window.localStorage.getItem("last-move_" + window.application.game);
                        window.application.blocks["game-block-two"].items[lastMove].dispatchEvent(new Event("click"));
                    }
                    
                } else if (status === "lose") {
                    const itemLoseTable = {
                        rock: "paper",
                        paper: "scissors",
                        scissors: "rock",
                    };
                    const item = window.application.blocks["game-block-two"].selected;
                    const enemyItem = itemLoseTable[item];
                    const enemy = data.data["game-status"].enemy;

                    window.localStorage.removeItem("last-move_" + window.application.game);
                    window.application.game = undefined;
                    
                    window.application.blocks["game-block-one"].showEnemy(enemy.login, enemy.wins, enemy.loses);
                    window.application.blocks["game-block-one"].showEnemyMove(enemyItem);
                    window.application.blocks["game-block-two"].setTitle(application.login);
                    window.application.blocks["game-block-two"].setScores(application.player.wins, application.player.loses);
                    window.application.blocks["game-block-two"].hideGoButton();

                    window.application.page.showModal("lose");
                    return;
                } else if (status === "win") {
                    const itemWinTable = {
                        rock: "scissors",
                        paper: "rock",
                        scissors: "paper",
                    };
                    const item = window.application.blocks["game-block-two"].selected;
                    const enemyItem = itemWinTable[item];
                    const enemy = data.data["game-status"].enemy;

                    window.localStorage.removeItem("last-move_" + window.application.game);
                    window.application.game = undefined;
                    
                    window.application.blocks["game-block-one"].showEnemy(enemy.login, enemy.wins, enemy.loses);
                    window.application.blocks["game-block-one"].showEnemyMove(enemyItem);
                    window.application.blocks["game-block-two"].setTitle(application.login);
                    window.application.blocks["game-block-two"].setScores(application.player.wins, application.player.loses);
                    window.application.blocks["game-block-two"].hideGoButton();

                    window.application.page.showModal("win");
                    return;
                } else {
                    window.application.page.showModal("error");
                    return;
                }

                window.application.setTimerIdle(() => {
                    idle({from: "timer", to: "game"});
                }, 500);

            });
            
            return;
        }

        return;
    }
}
