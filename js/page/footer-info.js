class FooterInfo {
    constructor() {
        this.element = document.querySelector(".footer-info");
        this.buttonShow = this.element.querySelector(".footer-info__button_show");
        this.buttonClose = this.element.querySelector(".footer-info__button_close");
        this.content = this.element.querySelector(".footer-info__content");

        this.show = this.show.bind(this);
        this.hide = this.hide.bind(this);

        this.buttonShow.addEventListener("click", this.show);
        this.buttonClose.addEventListener("click", this.hide);
    }

    show(event) {
        event.preventDefault();
        this.buttonShow.classList.add("footer-info__button_hidden");
        this.buttonClose.classList.remove("footer-info__button_hidden");
        this.content.classList.remove("footer-info__content_hidden");
    }

    hide(event) {
        event.preventDefault();
        this.buttonShow.classList.remove("footer-info__button_hidden");
        this.buttonClose.classList.add("footer-info__button_hidden");
        this.content.classList.add("footer-info__content_hidden");
    }
}