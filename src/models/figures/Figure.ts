import logo from '../../images/black-king.png';
import { Colors } from '../Colors';
import { Cell } from '../Cell';

export enum FigureNames {
    FIGURE = "Фигура";
    KING = "Король";
    KNIGHT = "Конь";
    PAWN = "ПЕШКА";
    QUEEN = "Ферзь";
    ROOK = "Ладья";
    BISHOP = "СЛОН"
}
export class Figure {
    color: Colors;
    logo: typeof logo | null;
    cell: Cell;
    name: FigureNames;
    id: number;

constructor(color:Colors, cell: Cell) {
    this.color = color;
    this.cell = cell
    this.cell.figure = this;
    this.logo = null;
    this.name = FigureNames.FIGURE;
    this.id = Math.random()
}

// the figure can move or not
canMove(target: Cell): boolean {
    return true
}

// moving the figure
moveFigure(target: Cell) 

}