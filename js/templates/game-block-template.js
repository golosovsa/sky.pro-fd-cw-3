const gameBlockTemplate = {
    tag: "div",
    cls: ["game-block", ],
    content: [
        {
            tag: "div",
            cls: ["game-block__scores", ],
            content: [
                {
                    tag: "p",
                    cls: ["game-block__wins", ],
                },
                {
                    tag: "p",
                    cls: ["game-block__loses", ],
                },
            ],
        },
        {
            tag: "div",
            cls: ["game-block__field", ],
            content: [
                {
                    tag: "div",
                    cls: ["game-block__element", "game-block__element_rock", ],
                    content: [
                        {
                            tag: "img",
                            cls: ["game-block__image", "game-block__image_rock"],
                            attrs: {
                                src: "img/rock.svg",
                                alt: "Rock",
                            },
                        },
                    ],
                },
                {
                    tag: "div",
                    cls: ["game-block__element", "game-block__element_paper", ],
                    content: [
                        {
                            tag: "img",
                            cls: ["game-block__image", "game-block__image_paper"],
                            attrs: {
                                src: "img/paper.svg",
                                alt: "Paper",
                            },
                        },
                    ],
                },
                {
                    tag: "div",
                    cls: ["game-block__button", ],
                    attrs: {
                        href: "#",
                    },
                    content: [
                        {
                            tag: "img",
                            cls: ["game-block__image", "game-block__image_play", ],
                            attrs: {
                                src: "img/ui/play.svg",
                                alt: "Play",
                            },
                        },
                    ],
                },
                {
                    tag: "div",
                    cls: ["game-block__element", "game-block__element_scissors", ],
                    content: [
                        {
                            tag: "img",
                            cls: ["game-block__image", "game-block__image_scissors"],
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
            cls: ["game-block__title", ],
            content: ["Title"],
        },
    ],
};