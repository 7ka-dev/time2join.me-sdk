export interface GameInfo {
    id: string;
    name: string;
}

export interface GameSession {
    id: string;
}

export type Action = 'READY' | 'WAIT' | 'START'; 

export interface Msg2Parent {
    sessionId?: string;
}

export interface IMessage {
    action: Action;
    message: Msg2Parent
}