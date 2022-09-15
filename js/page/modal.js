class BaseModal {
    constructor({text, iconTemplate, buttons}, userCallBack) {
        this.userCallBack = userCallBack;
        this.element = templateEngine(modalTemplate);

        this.title = this.element.querySelector(".modal__title");
        this.title.textContent = text;

        this.icon = this.element.querySelector(".modal__icon");
        this.icon.appendChild(templateEngine(iconTemplate));

        this.buttonsContainer = this.element.querySelector(".modal__buttons");

        for (const button in buttons) {
            const buttonElement = templateEngine(modalButtonTemplate);
            buttonElement.textContent = buttons[button];
            buttonElement.addEventListener("click", () => {
                this.userCallBack({from: "modal", to: button});
            })
            this.buttonsContainer.appendChild(buttonElement);
        }

        this.isShown = false;
    }

    show() {
        document.body.appendChild(this.element);
        this.isShown = true;
    }

    hide() {
        document.body.removeChild(this.element);
        this.isShown = false;
    }
}

class ErrorModal extends BaseModal {
    constructor(userCallBack) {
        super({
            text: "Fatal Error. Try reloading the game later.", 
            iconTemplate: modalErrorIconTemplate,
            buttons: {reload: "Reload page"},
        }, userCallBack);
    }
}

class WinModal extends BaseModal {
    constructor(userCallBack) {
        super({
            text: "Congratulations. You are the Winner!", 
            iconTemplate: modalThumbsUpIconTemplate,
            buttons: {
                lobby: "Back to Lobby",
                play: "Play again",
            },
        }, userCallBack);
    }
}

class LoseModal extends BaseModal {
    constructor(userCallBack) {
        super({
            text: "Condolences. You lose!", 
            iconTemplate: modalThumbsDownIconTemplate,
            buttons: {
                lobby: "Back to Lobby",
                play: "Play again",
            },
        }, userCallBack);
    }
}

class DrawModal extends BaseModal {
    constructor(userCallBack) {
        super({
            text: "Draw", 
            iconTemplate: modalHandshakeIconTemplate,
            buttons: {
                lobby: "Back to Lobby",
                play: "Play again",
            },
        }, userCallBack);
    }
}

class LoginModal extends BaseModal {
    constructor(userCallBack) {
        super({
            text: "Wrong login. Try another.", 
            iconTemplate: modalErrorIconTemplate,
            buttons: {
                login: "login",
            },
        }, userCallBack);
    }
}
