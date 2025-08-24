import { GameInfo, GameSession, IMessage } from "./model/types/gameTypes";

/**
 * Game in Iframe
 */
export class Game {
    constructor() {}
    dispose() {}

    public getGameInfo(): GameInfo {
        return {id: 'gameId', name: 'gameName'}
    }

    /**
     * Say game is loaded and ready to play
     */
    public ready() {
        send2Parent({
            action: "READY",
            message: {}
        });
    }

    /**
     * Game created and waiting other players
     * @param session 
     */
    public wait(session: GameSession) {
        send2Parent({
            action: "WAIT",
            message: {
                sessionId: session.id
            }
        });
    }

    /**
     * Game started
     */
    public start() {
        send2Parent({
            action: "START",
            message: {}
        });
    }
}

function send2Parent (message: IMessage) {
    window.parent.postMessage(message, '*');
}