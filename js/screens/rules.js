class RulesBlockOne extends BaseScreen{
    constructor(userCallBack) {
        super(rulesBlockOneTemplate, userCallBack, "rules");
        this.addButton(".rules-block-one__button_start", "start");
    }
};


class RulesBlockTwo extends BaseScreen {
    constructor(userCallBack) {
        super(rulesBlockTwoTemplate, userCallBack, "rules");
        this.addButton(".rules-block-two__button_lobby", "lobby");
        this.addButton(".rules-block-two__button_start", "start");
    }
};