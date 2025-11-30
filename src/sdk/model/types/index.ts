export interface User {
    id: string;
    name: string;
    icon?: string;
}

export interface GameInfo {
    id: string;
    name: string;
}

export interface Game {
    sessionId: string;
}

export type Action = 'CREATE' | 'START' | 'USER'; 

export interface Payload {
    nameOfGame?: string;
    sessionId?: string;
}

export interface IMessage {
    type: 'iframeGameEvent';
    action: Action;
    message: Payload;
}

export interface JoinMessage extends Payload {
    user: User;
    status: 'CREATOR' | 'PLAYER';
}