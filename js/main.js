window.application = {
    page: new Page(idle),
    blocks: [],
    screens: [],
    renderScreen: function(screenName) {},
    renderBlock: function(blockName, container) {},
}

function idle({from, to}) {
    console.log(from, to);
}