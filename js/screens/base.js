class BaseScreen {
    constructor(template, userCallBack, screenName) {
        this.element = templateEngine(template);
        this.userCallBack = userCallBack;
        this.screenName = screenName;
        this.buttons = {};
        this.onClick = this.onClick.bind(this);
    }

    get block() {
        return this.element;
    }

    addButton(selector, name) {
        this.buttons[name] = this.element.querySelector(selector);
        this.buttons[name].addEventListener("click", this.onClick);
    }

    onClick(event) {
        event.preventDefault();
        event.stopPropagation();
        
        for (const button in this.buttons) {

            const buttonElement = event.path.find(element => element === this.buttons[button]);

            if (buttonElement !== undefined) {
                this.userCallBack({from: this.screenName, to: button});
                return;
            }
        }
        this.userCallBack({from: this.screenName, to: undefined});
    }
}