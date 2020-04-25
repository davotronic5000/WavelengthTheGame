export interface LocalPlayer {
    name: string;
    currentRoomCode: string;
    updateName: (newName: string) => void;
    updateCurrentRoomCode: (newRoomCode: string) => void;
}
