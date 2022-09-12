let pingHandle = undefined;
let loginHandle = undefined;
let playerStatusHandle = undefined;
let startGameHandle = undefined;
let gameStatusHandle = undefined;
let playHandle = undefined;
let playerListHandle = undefined;

if (!DEVELOPMENT) {
    // prod settings 
    const backendURL = "https://skypro-rock-scissors-paper.herokuapp.com/";
    
    pingHandle = new BaseDAO(backendURL, "ping");
    loginHandle = new BaseDAO(backendURL, "login");
    playerStatusHandle = new BaseDAO(backendURL, "player-status");
    startGameHandle = new BaseDAO(backendURL, "start");
    gameStatusHandle = new BaseDAO(backendURL, "game-status");
    playHandle = new BaseDAO(backendURL, "play");
    playerListHandle = new BaseDAO(backendURL, "player-list", Player);

    
} else {
    // dev settings
    const devURL = "http://127.0.0.1:5500/js/tests/data/"; 

    pingHandle = new BaseDAO(devURL, "ping.json");
    loginHandle = new BaseDAO(devURL, "login.json");
    playerStatusHandle = new BaseDAO(devURL, "player-status.json");
    startGameHandle = new BaseDAO(devURL, "start.json");
    gameStatusHandle = new BaseDAO(devURL, "game-status.json");
    playHandle = new BaseDAO(devURL, "play.json");
    playerListHandle = new BaseDAO(devURL, "player-list.json", Player);
}