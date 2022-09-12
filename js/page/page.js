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
}