import { GameInfo, GameSession } from "./model/types/gameTypes";

export class Game {
    static getGameInfo(): GameInfo {
        return {id: 'gameId', name: 'fameName'}
    }

    static start(session: GameSession) {
        //todo here send message from iframe into iframe parent
    }
}