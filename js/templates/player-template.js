const playerTemplate = {
    tag: "div",
    cls: ["player", ],
    content: [
        {
            tag: "div",
            cls: ["player__logo"],
            content: [
                {
                    tag: "p",
                    cls: "player__letter",
                    content: ["", ],
                },
                {
                    tag: "p",
                    cls: ["player__info", "player__info_wins"],
                    content: [0, ],
                },      
                {
                    tag: "p",
                    cls: ["player__info", "player__info_loses"],
                    content: [0, ]
                },
            ],
        },
        {
            tag: "h3",
            cls: ["player__login", ],
            content: ["", ],
        },
    ],
}