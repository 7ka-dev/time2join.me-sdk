import { Game, User } from "./model/types";
/**
 * Game in Iframe
 */
export declare class SDK {
    private user;
    constructor(game: Game);
    dispose(): void;
    getUser(): User | {};
    /**
     * Game started
     */
    gameplayStart(): void;
    private setupMessageListener;
    private removeMessageListener;
    private handleMessage;
    private parseMessage;
}
