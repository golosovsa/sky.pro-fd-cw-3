const rulesBlockOneTemplate = {
    tag: "div",
    cls: ["rules-block-one", ],
    content: [
        {
            tag: "div",
            cls: ["rules-block-one__element", "rules-block-one__element_rock", ],
            content: [
                {
                    tag: "img",
                    cls: ["rules-block-one__image", "rules-block-one__image_rock"],
                    attrs: {
                        src: "img/rock.svg",
                        alt: "Rock",
                    },
                },
            ],
        },
        {
            tag: "div",
            cls: ["rules-block-one__element", "rules-block-one__element_paper", ],
            content: [
                {
                    tag: "img",
                    cls: ["rules-block-one__image", "rules-block-one__image_paper"],
                    attrs: {
                        src: "img/paper.svg",
                        alt: "Paper",
                    },
                },
            ],
        },
        {
            tag: "a",
            cls: ["rules-block-one__button", "rules-block-one__button_start", ],
            attrs: {
                href: "#",
            },
            content: [
                {
                    tag: "img",
                    cls: ["rules-block-one__image", "rules-block-one__image_play", ],
                    attrs: {
                        src: "img/ui/play.svg",
                        alt: "Play",
                    },
                },
            ],
        },
        {
            tag: "div",
            cls: ["rules-block-one__element", "rules-block-one__element_scissors", ],
            content: [
                {
                    tag: "img",
                    cls: ["rules-block-one__image", "rules-block-one__image_scissors"],
                    attrs: {
                        src: "img/scissors.svg",
                        alt: "Scissors",
                    },
                },
            ],
        },
    ],
};