window.application = {
    login: undefined,
    token: undefined,
    user: undefined,
    enemy: undefined,
    page: new Page(idle, () => { window.application.renderScreen("login"); }),
    blocks: {
        "rules-block-one": new RulesBlockOne(idle),
        "rules-block-two": new RulesBlockTwo(idle),
        "login-block-one": new LoginBlockOne(idle),
        "login-block-two": new LoginBlockTwo(idle),
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
}