export type AlgorithmType = "DIJKSTRA"| "A_STAR" | "BFS" | "DFS";

export type MazeType = "NONE" | "RECURSIVE_DIVISION" | "BINARY_TREE";

export type TileType = {
  row: number;
  col: number;
  isStart: boolean;
  isEnd: boolean;
  isWall: boolean;
  distance: number;
  isPath: boolean;
  isTraversed: boolean;
  //isShortestPath: boolean;
  parent: TileType | null;
};



export type GridType = TileType[][];