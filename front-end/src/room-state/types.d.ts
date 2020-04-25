export interface Player {
    name: string;
    isOwner: boolean;
    isController: boolean;
    isClueGiver: boolean;
    hasBeenClueGiver: boolean;
    lastAction: string;
    id: string;
}

export interface Team {
    score: number;
    isActive: boolean;
    players: Player[];
    id: string;
}

export interface Card {}

export interface Room {
    team1: Team;
    team2: Team;
    targetGuess: number;
    leftRightGuess: number;
    currentCard: Card | null;
    currentTarget: number;
    usedCards: Card[];
    customCards: Card[];
    createdDate: string;
    isStarted: boolean;
    gamePhase: number;
    givenClue: string | null;
    id: string;
}
