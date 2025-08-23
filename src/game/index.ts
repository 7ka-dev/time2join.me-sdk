import { GameInfo, GameSession } from "./model/types/gameTypes";

export class Game {

    constructor() {}
    dispose() {}

    public getGameInfo(): GameInfo {
        return {id: 'gameId', name: 'gameName'}
    }

    public start(session: GameSession) {
        //todo here send message from iframe into iframe parent
    }
}