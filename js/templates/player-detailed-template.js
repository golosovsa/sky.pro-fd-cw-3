const playerDetailedTemplate = {
    tag: "div",
    cls: ["player-detailed", ],
    content: [
        {
            tag: "h3",
            cls: ["player-detailed__title", ],
        },
        {
            tag: "div",
            cls: ["player-detailed__wins-and-loses", ],
            content: [
                {
                    tag: "p",
                    cls: ["player-detailed__wins"],
                },
                {
                    tag: "p",
                    cls: ["player-detailed__loses"],
                },
            ],
        },
        {
            tag: "div",
            cls: ["player-detailed__stats"],
            content: [
                {
                    tag: "div",
                    cls: ["player-detailed__element", "player-detailed__element_rock", ],
                    content: [
                        {
                            tag: "img",
                            cls: ["player-detailed__image", "player-detailed__image_rock"],
                            attrs: {
                                src: "img/rock.svg",
                                alt: "Rock",
                            },
                        },
                        {
                            tag: "p",
                            cls: ["player-detailed__counter", "player-detailed__counter_rock"],
                        },
                    ],
                },
                {
                    tag: "div",
                    cls: ["player-detailed__element", "player-detailed__element_paper", ],
                    content: [
                        {
                            tag: "img",
                            cls: ["player-detailed__image", "player-detailed__image_paper"],
                            attrs: {
                                src: "img/paper.svg",
                                alt: "Paper",
                            },
                        },
                        {
                            tag: "p",
                            cls: ["player-detailed__counter", "player-detailed__counter_paper"],
                        },
                    ],
                },
                {
                    tag: "div",
                    cls: ["player-detailed__element", "player-detailed__element_scissors", ],
                    content: [
                        {
                            tag: "img",
                            cls: ["player-detailed__image", "player-detailed__image_scissors"],
                            attrs: {
                                src: "img/scissors.svg",
                                alt: "Scissors",
                            },
                        },
                        {
                            tag: "p",
                            cls: ["player-detailed__counter", "player-detailed__counter_scissors"],
                        },
                    ],
                },
            ],
        },
    ],
};
