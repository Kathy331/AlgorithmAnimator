export const MAX_ROW = 39;
export const MAX_COL = 49;

export const START_TILE_CONFIGURATIONS = {
  row: 1,
  col: 1,
  isStart: false,
  isEnd: false,
  isWall: false,
  distance: 0,
  isPath: false,
  isTraversed: false,
  parent: null,

};


export const END_TILE_CONFIGURATIONS = {
  row: MAX_ROW - 2,
  col: MAX_COL - 2,
  isStart: false,
  isEnd: false,
  isWall: false,
  distance: 0,
  isPath: false,
  isTraversed: false,
  parent: null,

};