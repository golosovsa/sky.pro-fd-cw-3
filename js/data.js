if (!DEVELOPMENT) {
    // prod settings 
    
} else {
    // dev settings

    const players = new BaseDAO("http://127.0.0.1:5550/", "js/tests/data/player-list.json", Player);
}