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
        this.field = this.element.querySelector(".game-block-one__field");
        this.waiter = this.element.querySelector(".game-block-one__waiter");
        this.rock = this.element.querySelector(".game-block-one__element_rock");
        this.paper = this.element.querySelector(".game-block-one__element_paper");
        this.scissors = this.element.querySelector(".game-block-one__element_scissors");
    }

    hideSpinner() {
        this.spinner.classList.add("spinner__container_hidden");
    }

    showSpinner() {
        this.spinner.classList.remove("spinner__container_hidden");
    }

    activateField() {
        this.field.classList.add("game-block-one__field_active");
    }

    deactivateField() {
        this.field.classList.remove("game-block-one__field_active");
    }

    setTitle(title) {
        this.title.textContent = title;
    }

    setScores(wins, loses) {
        this.wins.textContent = wins;
        this.loses.textContent = loses;
    }

    hideWaiter() {
        this.waiter.classList.add("game-block-one__waiter_hidden");
    }

    selectRock() {
        this.rock.classList.add("game-block-one__element_selected");
    }

    selectPaper() {
        this.paper.classList.add("game-block-one__element_selected");
    }

    selectScissors() {
        this.scissors.classList.add("game-block-one__element_selected");
    }
}

class GameBlockTwo extends BaseScreen {
    constructor(userCallBack) {
        super(gameBlockTwoTemplate, userCallBack, "game");
    }

    
}