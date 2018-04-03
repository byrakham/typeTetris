export class Matrix<TData> {
    readonly Rows: number;
    readonly Columns: number;
    Data: TData[][];

    constructor(rows: number, cols: number) {
        //this.Data = new number[rows][cols];
        this.Rows = rows;
        this.Columns = cols;
    }
    
}

export class Vector3D {
    constructor(public x: number, public y: number, public z: number) { }
}

export class Size2D {
    constructor(public width: number, public height: number) { }
}

export class Point2D {
    constructor(public x: number, public y: number) { }
}
export class Point3D {
    constructor(public x: number, public y: number, public z: number) { }
}


