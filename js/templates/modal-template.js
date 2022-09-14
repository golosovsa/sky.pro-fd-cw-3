const modalTemplate = {
    tag: "div",
    cls: ["modal", ],
    content: [
        {
            tag: "h2",
            cls: ["modal__title", ],
            content: ["Title"],
        },
        {
            tag: "div",
            cls: ["modal__icon", ],
        },
        {
            tag: "div",
            cls: ["modal__buttons", ],
        },
    ],
};

const modalButtonTemplate = {
    tag: "a",
    cls: ["modal__button", ],
    attrs: {
        href: "#",
    },
    content: ["Button", ],
};

const modalErrorIconTemplate = {
    tag: "img",
    attrs: {
        src: "img/ui/error.svg",
        alt: "Error",
    },
    cls: ["modal__icon", ],
};

const modalHandshakeIconTemplate = {
    tag: "img",
    attrs: {
        src: "img/ui/handshake.svg",
        alt: "Error",
    },
    cls: ["modal__icon", ],
};

const modalThumbsUpIconTemplate = {
    tag: "img",
    attrs: {
        src: "img/ui/thumbs-up.svg",
        alt: "Error",
    },
    cls: ["modal__icon", ],
};

const modalThumbsDownIconTemplate = {
    tag: "img",
    attrs: {
        src: "img/ui/thumbs-down.svg",
        alt: "Error",
    },
    cls: ["modal__icon", ],
};