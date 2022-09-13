class GameBlockOne extends BaseScreen {
    constructor(userCallBack) {
        super(gameBlockOneTemplate, userCallBack, "game");
        
        this.text = this.element.querySelector(".game-block-one__text");
        this.text.textContent = "Enemy score";

        this.wins = this.element.querySelector(".game-block-one__wins");
        this.wins.textContent = "??";

        this.loses = this.element.querySelector(".game-block-one__loses");
        this.loses.textContent = "??";

        this.title = this.element.querySelector(".game-block-one__title-text");
        this.title.textContent = "Waiting for";

        this.spinner = this.element.querySelector(".spinner__container");
        this.spinner.classList.remove("spinner__container_hidden");
    }

}

class GameBlockTwo extends BaseScreen {
    constructor(userCallBack) {
        super(gameBlockTwoTemplate, userCallBack, "game");
    }

    
}