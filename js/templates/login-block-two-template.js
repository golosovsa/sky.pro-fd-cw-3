const loginBlockTwoTemplate = {
    tag: "div",
    cls: ["login-block-two"],
    content: [
        {
            tag: "form",
            cls: ["login-block-two__form", ],
            attrs: {
                method: "GET",
                action: "#",
                novalidate: true,
            },
            content: [
                {
                    tag: "p",
                    cls: ["login-block-two__form-item", ],
                    content: [
                        {
                            tag: "label",
                            cls: ["login-block-two__form-label", ],
                            content: ["Your nickname:", ],
                        },
                        {
                            tag: "input",
                            cls: ["login-block-two__form-input", "login-block-two__form-input_login", ],
                            attrs: {
                                type: "text",
                                id: "login",
                                name: "login",
                            },
                        },
                    ],
                },
                {
                    tag: "p",
                    cls: ["login-block-two__form-item", "login-block-two__form-item_row", ],
                    content: [
                        {
                            tag: "input",
                            cls: ["login-block-two__form-button", "login-block-two__form-button_submit", ],
                            attrs: {
                                type: "submit",
                                value: "Go!",
                            },
                        },
                        spinnerTemplate,
                    ],
                },
            ],
        },
    ],
}