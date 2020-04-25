import { Room } from "./types";

const defaultRoom: Room = {
    team1: {
        score: 0,
        isActive: false,
        players: [
            {
                name: "Dave",
                isOwner: true,
                isController: true,
                isClueGiver: false,
                hasBeenClueGiver: false,
                lastAction: "2020-04-25T18:02:32.3003843Z",
                id: "7bdecce3-85be-4b82-89a8-576c2b10bf80",
            },
        ],
        id: "a8ce5f7a-e8f0-4772-9d7d-7d7ab7dab94a",
    },
    team2: {
        score: 0,
        isActive: false,
        players: [],

        id: "2a273a39-d718-4a67-ad09-512654a375e6",
    },
    targetGuess: 0,
    leftRightGuess: "none",
    currentCard: null,
    currentTarget: 0,
    givenClue: null,
    usedCards: [],
    customCards: [],
    createdDate: "2020-04-25T18:02:32.3005853Z",
    isStarted: false,
    gamePhase: "none",
    id: "IJILK",
};

const useRoom = (roomCode: string) => {
    return defaultRoom;
};

export default useRoom;
