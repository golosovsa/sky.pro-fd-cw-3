const rulesBlockTwoTemplate = {
    tag: "div",
    cls: ["rules-block-two", ],
    content: [
        {
            tag: "h2",
            cls: ["rules-block-two__title", ],
            content: [
                {
                    tag: "span",
                    cls: ["rules-block-two__title_rock", ],
                    content: ["rock, ", ],
                },
                {
                    tag: "span",
                    cls: ["rules-block-two__title_paper", ],
                    content: ["paper, ", ],
                },
                {
                    tag: "span",
                    cls: ["rules-block-two__title_scissors", ],
                    content: ["scissors.", ],
                },
            ],
        },
        {
            tag: "ol",
            cls: ["rules-block-two__list", ],
            content: [
                {
                    tag: "li",
                    cls: ["rules-block-two__list-item", ],
                    content: ["Rock breaks scissors", ],
                },
                {
                    tag: "li",
                    cls: ["rules-block-two__list-item", ],
                    content: ["Scissors cuts paper", ],
                },
                {
                    tag: "li",
                    cls: ["rules-block-two__list-item", ],
                    content: ["Paper covers rock", ],
                },
            ],
        },
        {
            tag: "p",
            cls: ["rules-block-two__text-question", ],
            content: [
                "Want to have ",
                {
                    tag: "span",
                    content: ["fun?"],
                },
            ],
        },
        {
            tag: "div",
            cls: ["rules-block-two__buttons", ],
            content: [
                {
                    tag: "a",
                    cls: ["rules-block-two__button", "rules-block-two__button_lobby", ],
                    attrs: {
                        href: "#"
                    },
                    content: ["lobby", ],
                },
                {
                    tag: "a",
                    cls: ["rules-block-two__button", "rules-block-two__button_start", ],
                    attrs: {
                        href: "#"
                    },
                    content: ["start", ],
                },
            ],
        },
    ],
};