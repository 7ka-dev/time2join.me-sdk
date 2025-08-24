export interface User {
    id: string;
    name: string;
    icon?: string;
}

export interface GameInfo {
    id: string;
    name: string;
}

export interface GameSession {
    id: string;
}

export type Action = 'READY' | 'WAIT' | 'START' | 'JOIN'; 

export interface Payload {
    nameOfGame?: string;
    sessionId?: string;
}

export interface IMessage {
    action: Action;
    message: Payload
}

export interface JoinMessage extends Payload {
    user: User;
    status: 'CREATOR' | 'PLAYER';
}