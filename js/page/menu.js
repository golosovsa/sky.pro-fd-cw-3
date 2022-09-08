class Menu {
    constructor(userCallBack) {
        this.userCallBack = userCallBack;
        this.element = document.querySelector(".menu");
        this.buttons = {
            rules: this.element.querySelector(".menu__item_rules"),
            login: this.element.querySelector(".menu__item_login"),
            lobby: this.element.querySelector(".menu__item_lobby"),
            start: this.element.querySelector(".menu__item_start"),
        };

        this.onClick = this.onClick.bind(this);

        for (const button in this.buttons) {
            this.buttons[button].addEventListener("click", this.onClick);
        }
    }

    onClick(event) {
        event.preventDefault();

        if (event.target.classList.contains("menu__item_disabled") ||
            event.target.classList.contains("menu__item_active")) return;

        let target = undefined;
        switch (event.target) {
            case this.buttons.rules:
                target = "rules";
                break;
            case this.buttons.login:
                target = "login";
                break;
            case this.buttons.lobby:
                target = "lobby";
                break;
            case this.buttons.start:
                target = "start";
                break;
            default:
                return;
        }
        this.userCallBack({
            from: "menu",
            to: target,
        });
    }

    enable(target) {
        this.buttons[target].classList.remove("menu__item_disabled");
        return this;
    }

    disable(target) {
        this.buttons[target].classList.add("menu__item_disabled");
        return this;
    }

    active(target) {
        for (const button in this.buttons) {
            this.buttons[button].classList.remove("menu__item_active");
        }
        this.buttons[target].classList.add("menu__item_active");
        return this;
    }
}