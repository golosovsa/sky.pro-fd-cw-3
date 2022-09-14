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

    showWaiter() {
        this.waiter.classList.remove("game-block-one__waiter_hidden");
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

    reset() {
        this.setTitle("Waiting for");
        this.setScores("??", "??");
        this.hideSpinner();
        this.deactivateField();
        this.showWaiter();
    }

    showEnemy(enemyName, enemyWins, enemyLoses) {
        this.setTitle(enemyName);
        this.setScores(enemyWins, enemyLoses);
        this.showSpinner();
        this.activateField();
        this.hideWaiter();
    }

    showEnemyMove(move) {
        switch (move) {
            case "rock":
                this.selectRock();
                break;

            case "paper":
                this.selectPaper();
                break;
        
            case "scissors":
                this.selectScissors();
                break;

            default:
                break;
        }

        this.hideSpinner();
    }
}

class GameBlockTwo extends BaseScreen {
    constructor(userCallBack) {
        super(gameBlockTwoTemplate, userCallBack, "game");

        this.addButton(".game-block-two__button_go", "go");

        this.text = this.element.querySelector(".game-block-two__text");
        this.text.textContent = "You score";

        this.wins = this.element.querySelector(".game-block-two__wins");
        this.loses = this.element.querySelector(".game-block-two__loses");
        this.title = this.element.querySelector(".game-block-two__title");

        this.items = {
            rock: this.element.querySelector(".game-block-two__element_rock"),
            paper: this.element.querySelector(".game-block-two__element_paper"),
            scissors: this.element.querySelector(".game-block-two__element_scissors"),
        };

        this.selectedItem = undefined;

        this.onRockClick = this.onRockClick.bind(this);
        this.onPaperClick = this.onPaperClick.bind(this);
        this.onScissorsClick = this.onScissorsClick.bind(this);

        this.items.rock.addEventListener("click", this.onRockClick);
        this.items.paper.addEventListener("click", this.onPaperClick);
        this.items.scissors.addEventListener("click", this.onScissorsClick);
    }

    setScores(wins, loses) {
        this.wins.textContent = wins;
        this.loses.textContent = loses;
    }

    setTitle(title) {
        this.title.textContent = title;
    }

    onRockClick() {
        this.items.rock.classList.add("game-block-two__element_selected");
        this.items.paper.classList.remove("game-block-two__element_selected");
        this.items.scissors.classList.remove("game-block-two__element_selected");
        this.buttons.go.classList.remove("game-block-two__button_disabled");
        this.selectedItem = "rock";
    }

    onPaperClick() {
        this.items.rock.classList.remove("game-block-two__element_selected");
        this.items.paper.classList.add("game-block-two__element_selected");
        this.items.scissors.classList.remove("game-block-two__element_selected");
        this.buttons.go.classList.remove("game-block-two__button_disabled");
        this.selectedItem = "paper";
    }

    onScissorsClick() {
        this.items.rock.classList.remove("game-block-two__element_selected");
        this.items.paper.classList.remove("game-block-two__element_selected");
        this.items.scissors.classList.add("game-block-two__element_selected");
        this.buttons.go.classList.remove("game-block-two__button_disabled");
        this.selectedItem = "scissors";
    }

    get selected() {
        return this.selectedItem;
    }
}