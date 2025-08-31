import { GameSession, IMessage, JoinMessage, User } from "./model/types/gameTypes";

/**
 * Game in Iframe
 */
export class GameAPI {
    private isReady: boolean = false;
    private user: User | null = null;
    private joinCallBack: (msg: JoinMessage) => void = () => {};

    constructor(joinCallback: (msg: JoinMessage) => void) {
        this.joinCallBack = joinCallback;
        this.setupMessageListener();
    }

    dispose() {
        this.removeMessageListener();
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
        if (!this.isReady) {
            console.warn('Game not ready!');
            return;
        }
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
        if (!this.isReady) {
            console.warn('Game not ready!');
            return;
        }
        send2Parent({
            action: "START",
            message: {}
        });
    }

    private setupMessageListener(): void {
        window.addEventListener('message', this.handleMessage.bind(this));
    }

    private removeMessageListener(): void {
        window.removeEventListener('message', this.handleMessage.bind(this));
    }

    private handleMessage(event: MessageEvent): void {
        if (event.data) {
            try {
                const message: IMessage = event.data as IMessage;
                this.parseMessage(message);
            } catch {
                console.error('Wrong message');
            }
        }
    }

    private parseMessage(message: IMessage): void {
        switch (message.action) {
            case "JOIN": {
                const payload: JoinMessage = message.message as JoinMessage;
                this.user = payload.user;
                this.isReady = true;
                this.joinCallBack(payload);
                break;
            }
            default: {
                console.log('Cant handle this message!');
            }
        }
    }
}

function send2Parent (message: IMessage) {
    window.parent.postMessage(message, '*');
}