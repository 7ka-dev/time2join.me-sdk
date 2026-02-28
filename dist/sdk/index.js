"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SDK = void 0;
/**
 * Game in Iframe
 */
class SDK {
    constructor(game) {
        this.user = null;
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
    getUser() {
        return this.user ?? {};
    }
    /**
     * Game started
     */
    gameplayStart() {
        send2Parent({
            type: 'iframeGameEvent',
            action: "START",
            message: {}
        });
    }
    setupMessageListener() {
        window.addEventListener('message', this.handleMessage.bind(this));
    }
    removeMessageListener() {
        window.removeEventListener('message', this.handleMessage.bind(this));
    }
    handleMessage(event) {
        if (event.data) {
            try {
                const message = event.data;
                this.parseMessage(message);
            }
            catch {
                console.error('Wrong message');
            }
        }
    }
    parseMessage(message) {
        switch (message.action) {
            case "USER": {
                const payload = message.message;
                this.user = payload.user ?? null;
                break;
            }
            default: {
                console.log('Cant handle this message!');
            }
        }
    }
}
exports.SDK = SDK;
function send2Parent(message) {
    console.log("send message from iframe", message);
    window.parent.postMessage(message, '*');
}
