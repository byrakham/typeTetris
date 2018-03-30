import * as events from "./events";
import * as figures from "./figures";
import { IFigure } from "./figures";

export class Tetris {

    Rows: number;
    Columns: number;
    FallenPoints: figures.IFigurePoint[];
    Matrix: boolean[][];
}
export interface ITetrisLogic {

    Tetris: Tetris;
    Score: number;
    //StartGame(): void;
    //PauseGame(): void;
    //ResumeGame(): void;
    //StopGame(): void;
    OnGameOver: events.IEvent<void>;

    
    //BurnRow(index: number);
    NextFigurePreview: figures.IFigure;
    PullNextFigure(): boolean;
    MoveFigureLeft(): boolean;
    MoveFigureRight(): boolean;
    MoveFigureDown(): boolean;
}
export class TetrisLogic {

    private availableFigures: figures.IFigure[];


}

export interface IGame {

    Start(): void;
    Pause(): void;
    Resume(): void;
    Stop(): void;
}

export class TetrisGame implements IGame {
    
    Start(): void {
        this.BuildScene();
    }
    private BuildScene(): void {

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