const gameBlockTwoTemplate = {
    tag: "div",
    cls: ["game-block-two", ],
    content: [
        {
            tag: "div",
            cls: ["game-block-two__scores", ],
            content: [
                {
                    tag: "p",
                    cls: ["game-block-two__text", ],
                },
                {
                    tag: "div",
                    cls: ["game-block-two__wins-and-loses", ],
                    content: [
                        {
                            tag: "p",
                            cls: ["game-block-two__wins", ],
                        },
                        {
                            tag: "p",
                            cls: ["game-block-two__loses", ],
                        },
                    ],
                },
            ],
        },
        {
            tag: "div",
            cls: ["game-block-two__field", ],
            content: [
                {
                    tag: "div",
                    cls: ["game-block-two__element", "game-block-two__element_rock", ],
                    content: [
                        {
                            tag: "img",
                            cls: ["game-block-two__image", "game-block-two__image_rock"],
                            attrs: {
                                src: "img/rock.svg",
                                alt: "Rock",
                            },
                        },
                    ],
                },
                {
                    tag: "div",
                    cls: ["game-block-two__element", "game-block-two__element_paper", ],
                    content: [
                        {
                            tag: "img",
                            cls: ["game-block-two__image", "game-block-two__image_paper"],
                            attrs: {
                                src: "img/paper.svg",
                                alt: "Paper",
                            },
                        },
                    ],
                },
                {
                    tag: "div",
                    cls: ["game-block-two__element", "game-block-two__element_center", ],
                    content: [
                        {
                            tag: "a",
                            cls: ["game-block-two__button", "game-block-two__button_go", ],
                            attrs: {
                                href: "#",
                            },
                            content: ["Go!", ],
                        },
                    ],
                },
                {
                    tag: "div",
                    cls: ["game-block-two__element", "game-block-two__element_scissors", ],
                    content: [
                        {
                            tag: "img",
                            cls: ["game-block-two__image", "game-block-two__image_scissors"],
                            attrs: {
                                src: "img/scissors.svg",
                                alt: "Scissors",
                            },
                        },
                    ],
                },
            ],
        },
        {
            tag: "h2",
            cls: ["game-block-two__title", ],
            content: ["Title"],
        },
    ],
};