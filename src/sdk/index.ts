import { Game, IMessage, Payload, User } from "./model/types";

/**
 * Game in Iframe
 */
export class SDK {
    private user: User | null = null;

    constructor(game: Game) {
        this.setupMessageListener();
         send2Parent({
            type: 'iframeGameEvent',
            action: "CREATE",
            message: {
                sessionId: game.sessionId
            }
        });
    }

    dispose() {
        this.removeMessageListener();
    }

    public getUser(): User | {} {
        return this.user ?? {};
    }

    /**
     * Game started
     */
    public start() {
        send2Parent({
            type: 'iframeGameEvent',
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
            case "USER": {
                const payload: Payload = message.message as Payload;
                this.user = payload.user ?? null;
                break;
            }
            default: {
                console.log('Cant handle this message!');
            }
        }
    }
}

function send2Parent (message: IMessage) {
    console.log("send message from iframe", message);
    window.parent.postMessage(message, '*');
}