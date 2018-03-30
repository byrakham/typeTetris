






export class Tetris {

    Rows: number;
    Columns: number;
}

export class TetrisLogic {


}

export interface IGame {

    Start(): void;
    Pause(): void;
    Resume(): void;
    Stop(): void;
}

export class TetrisGame implements IGame {
    Start(): void {
        var tetris: Tetris = new Tetris();

    }
    Pause(): void {
        throw new Error("Method not implemented.");
    }
    Resume(): void {
        throw new Error("Method not implemented.");
    }
    Stop(): void {
        throw new Error("Method not implemented.");
    }


}