import events = require('./events');
//import * as events from "./events";
import * as geometry from "./geometry";
import * as figures from "./figures";


export class Tetris {

    constructor(rows: number, cols: number) {
        this.Matrix = new geometry.Matrix(rows, cols);
    }
    get Rows(): number {
        return this.Matrix.Rows;
    };
    get Columns(): number {
        return this.Matrix.Columns;
    };
    //FallenPoints: figures.IFigurePoint[];
    Matrix: geometry.Matrix<boolean>;
}
export class Score {
    Score: number;
    BurntLines: number;
}
export interface ITetrisLogic {

    readonly Tetris: Tetris;
    Level: number;
    readonly Score: Score;
    readonly CurrentFigure: figures.IFigure
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
