class Page {
    constructor(userCallBack, onLoadCallBack){
        this.userCallBack = userCallBack;
        this.onLoadCallBack = onLoadCallBack;
        this.main = undefined;
        this.blockOne = undefined;
        this.blockTwo = undefined;
        this.menu = undefined;
        this.footerInfo = undefined;
        this.init = this.init.bind(this);
        this.changeContentOrientation = this.changeContentOrientation.bind(this);
        document.addEventListener("DOMContentLoaded", this.init);

        this.modals = {
            error: new ErrorModal(userCallBack),
            win: new WinModal(userCallBack),
            lose: new LoseModal(userCallBack),
            draw: new DrawModal(userCallBack),
        };
    }

    get firstBlock() {
        return this.blockOne;
    }

    get secondBlock() {
        return this.blockTwo;
    }

    init() {
        this.main = document.querySelector(".page__main");
        this.blockOne = this.main.querySelector(".page__block-main_one");
        this.blockTwo = this.main.querySelector(".page__block-main_two");
        this.footerInfo = new FooterInfo();
        this.menu = new Menu(this.userCallBack);
        
        window.addEventListener("resize", this.changeContentOrientation, true);
        
        this.changeContentOrientation();
        this.onLoadCallBack();
    }

    changeContentOrientation() {
        const width = window.innerWidth;
        const height = window.innerHeight;

        if (width >= height) {
            this.main.classList.add("page__main_two-columns-one-row");
            this.main.classList.remove("page__main_one-column-two-rows");
        } else {
            this.main.classList.remove("page__main_two-columns-one-row");
            this.main.classList.add("page__main_one-column-two-rows");
        }
    }

    disable() {
        this.main.classList.add("page_disable");
        this.menu.element.classList.add("page_disable");
        this.footerInfo.element.classList.add("page_disable");
    }

    enable() {
        this.main.classList.remove("page_disable");
        this.menu.classList.remove("page_disable");
        this.footerInfo.classList.remove("page_disable");
    }

    showModal(modal) {
        this.modals[modal].show();
        this.disable();
    }

    hideModal(modal) {
        this.modals[modal].hide();
        this.enable();
    }
}