import React from "react";
import {Cell} from "../models/Cell"

interface cellProps {
    cell: Cell
}

const CellComponent: React.FC<cellProps>= ({cell}) => {
    return (
        <div className={["cell", cell.color].join(' ')}></div>
    )
}

export default CellComponent