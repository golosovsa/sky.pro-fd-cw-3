class LoginBlockOne extends BaseScreen {
    constructor(userCallBack) {
        super(loginBlockOneTemplate, userCallBack, "login");
    }
}

class LoginBlockTwo extends BaseScreen {
    constructor(userCallBack) {
        super(loginBlockTwoTemplate, userCallBack, "login");
        this.addButton(".login-block-two__form-button_submit", "login");
        
    }
}