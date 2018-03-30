import * as geometry from "./geometry";

export interface IFigurePoint {
    x: number;
    y: number;
}

export interface IFigure {
    Points: Array<IFigurePoint>;
}

class RGBAColor {
    constructor(public r: number, public g: number, public b: number, public a: number = 255) { }
}

abstract class Geometry {
    Position: geometry.Point3D;
    Vertices: Array<geometry.Point3D>;
    Faces: Array<number>;

}

class Cube extends Geometry {
    
    Stroke: RGBAColor;
    Fill: RGBAColor = null;

}