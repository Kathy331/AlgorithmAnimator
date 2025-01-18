import { GridType, TileType } from "./type";
import { MAX_ROW, MAX_COL } from "./constants";

const createRow = (row: number, startTile: TileType, endTile: TileType) => {
  const currentRow: TileType[] = [];
  //each tile in the row intialized
  for (let col = 0; col < MAX_COL; col++) {
    currentRow.push({
      row,
      col,
      isStart: row === startTile.row && col === startTile.col,
      isEnd: row === endTile.row && col === endTile.col,
      isWall: false,
      distance: Infinity,
      isPath: false,
      parent: null,
      isTraversed: false,
    });
  }
  return currentRow;
}

export const createGrid = (startTile: TileType, endTile: TileType) => {
  const grid: GridType = [];
  for (let row = 0; row < MAX_ROW; row++) {

    grid.push(createRow(row, startTile, endTile));
  }
  return grid;
}