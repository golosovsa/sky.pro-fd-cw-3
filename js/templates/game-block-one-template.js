const gameBlockOneTemplate = {
    tag: "div",
    cls: ["game-block-one", ],
    content: [
        {
            tag: "div",
            cls: ["game-block-one__scores", ],
            content: [
                {
                    tag: "p",
                    cls: ["game-block-one__text", ],
                },
                {
                    tag: "div",
                    cls: ["game-block-one__wins-and-loses", ],
                    content: [
                        {
                            tag: "p",
                            cls: ["game-block-one__wins", ],
                        },
                        {
                            tag: "p",
                            cls: ["game-block-one__loses", ],
                        },
                    ],
                },
            ],
        },
        {
            tag: "div",
            cls: ["game-block-one__field", ],
            content: [
                {
                    tag: "div",
                    cls: ["game-block-one__element", "game-block-one__element_rock", ],
                    content: [
                        {
                            tag: "img",
                            cls: ["game-block-one__image", "game-block-one__image_rock"],
                            attrs: {
                                src: "img/rock.svg",
                                alt: "Rock",
                            },
                        },
                    ],
                },
                {
                    tag: "div",
                    cls: ["game-block-one__element", "game-block-one__element_paper", ],
                    content: [
                        {
                            tag: "img",
                            cls: ["game-block-one__image", "game-block-one__image_paper"],
                            attrs: {
                                src: "img/paper.svg",
                                alt: "Paper",
                            },
                        },
                    ],
                },
                {
                    tag: "div",
                    cls: ["game-block-one__element", "game-block-one__element_center", ],
                    content: [spinnerTemplate, ],
                },
                {
                    tag: "div",
                    cls: ["game-block-one__element", "game-block-one__element_scissors", ],
                    content: [
                        {
                            tag: "img",
                            cls: ["game-block-one__image", "game-block-one__image_scissors"],
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
            tag: "div",
            cls: ["game-block-one__title", ],
            content: [
                {
                    tag: "h2",
                    cls: ["game-block-one__title-text", ],
                    content: ["Title"],
                },
                {
                    tag: "div",
                    cls: ["game-block-one__waiter", ],
                    content: [
                        {
                            tag: "div",
                            cls: ["game-block-one__waiter-item", "game-block-one__waiter-item_first"],
                        },
                        {
                            tag: "div",
                            cls: ["game-block-one__waiter-item", "game-block-one__waiter-item_second"],
                        },
                        {
                            tag: "div",
                            cls: ["game-block-one__waiter-item", "game-block-one__waiter-item_third"],
                        },
                    ],
                },
            ],
        },
    ],
};