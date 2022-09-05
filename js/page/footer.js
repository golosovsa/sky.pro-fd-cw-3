class Footer {
    constructor() {
        this.element = document.querySelector(".page__footer");
        this.showLink = this.element.querySelector(".page__footer-link");
        this.info = this.element.querySelector(".page__info");

        this.onShowLinkClick = this.onShowLinkClick.bind(this);

        this.showLink.addEventListener("click", this.onShowLinkClick);
    }

    onShowLinkClick(event) {
        this.info.classList.toggle("page__info_hidden");
    }
}