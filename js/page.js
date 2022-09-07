class Page {
    constructor(){
        this.main = undefined;
        this.footerInfo = undefined;

        this.init = this.init.bind(this);
        this.changeContentOrientation = this.changeContentOrientation.bind(this);

        document.addEventListener("DOMContentLoaded", this.init);
    }

    init() {
        this.main = document.querySelector(".page__main");
        this.footerInfo = new FooterInfo();
        
        window.addEventListener("resize", this.changeContentOrientation, true);
        
        this.changeContentOrientation();
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