class LoginBlockOne extends BaseScreen {
    constructor(userCallBack) {
        super(loginBlockOneTemplate, userCallBack, "login");
    }
}

class LoginBlockTwo extends BaseScreen {
    constructor(userCallBack) {
        super(loginBlockTwoTemplate, userCallBack, "login");
        this.addButton(".login-block-two__form-button_submit", "login");
        this.form = this.element.querySelector(".login-block-two__form");
        this.input = this.form.querySelector(".login-block-two__form-input_login");
        this.spinner = this.form.querySelector(".spinner__container");
    }

    hideGoButton() {
        this.buttons.login.classList.add("login-block-two__form-button_hidden");
        this.spinner.classList.remove("spinner__container_hidden");
        this.input.readOnly = true;
        this.buttons.login.disabled = true;
    }

    showGoButton() {
        this.buttons.login.classList.remove("login-block-two__form-button_hidden");
        this.spinner.classList.add("spinner__container_hidden");
        this.buttons.login.disabled = false;
        this.input.readOnly = false;
    }
}