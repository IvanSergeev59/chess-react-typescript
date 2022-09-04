import { Cell } from "./Cell"
import { Colors } from "./Colors";
import { Figure } from "./figures/Figure";
export class Board {
    cells: Cell[][] = [] // arr cells is two-dimensional


    public initCells() {
        for (let i = 0; i < 8 ; i++) {
            const row: Cell[] = []; // arr "row" is one-dimensional
            for (let j=0; j < 8; j++) {
                if ((i + j) % 2 !==0) {
                    row.push(new Cell(this, j, i, Colors.BLACK, Figure)) // black cells
                } else {
                    row.push(new Cell(this, j, i, Colors.WHITE, Figure)) // white cells
                }
            }
        this.cells.push(row)
        }
    }
}