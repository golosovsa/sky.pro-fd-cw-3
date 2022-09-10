const spinnerTemplate = {
    tag: "div",
    cls: ["spinner__container", "spinner__container_hidden"],
    content: [
        {
            tag: "svg",
            cls: ["spinner", ],
            attrs: {
                width: "50",
                height: "50",
                viewBox: "0 0 50 50",
                xmlns: "http://www.w3.org/2000/svg",
            },
            content: [
                {
                    tag: "circle",
                    cls: ["spinner__path", ],
                    attrs: {
                        cx: 25,
                        cy: 25,
                        r: 20,
                        fill: "none",
                    },
                },
            ],
        },
    ]
};