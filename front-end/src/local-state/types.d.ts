export interface Player {
    name: string;
    currentRoomCode: string;
    updateName: (newName: string) => void;
    updateCurrentRoomCode: (newRoomCode: string) => void;
}
