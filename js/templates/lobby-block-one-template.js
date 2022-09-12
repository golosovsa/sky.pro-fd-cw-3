const lobbyBlockOneTemplate = {
    tag: "div",
    cls: ["lobby-block-one", ],
    content: [
        {
            tag: "h2",
            cls: ["lobby-block-one__title", ],
            content: ["Players On-Line", ],
        },
        {
            tag: "p",
            cls: ["lobby-block-one__sort-by", ],
            content: [
                "Sort by: ",
                {
                    tag: "a",
                    cls: ["lobby-block-one__sort-link", "lobby-block-one__sort-link_name", ],
                    attrs: {
                        href: "#",
                    },
                    content: ["name, "],
                },
                {
                    tag: "a",
                    cls: ["lobby-block-one__sort-link", "lobby-block-one__sort-link_wins", ],
                    attrs: {
                        href: "#",
                    },
                    content: ["wins, "],
                },
                {
                    tag: "a",
                    cls: ["lobby-block-one__sort-link", "lobby-block-one__sort-link_loses", ],
                    attrs: {
                        href: "#",
                    },
                    content: ["loses."],
                },
            ],
        },
        {
            tag: "div",
            cls: ["lobby-block-one__user-list", ],
        },
    ],
};