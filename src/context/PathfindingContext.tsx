import { AlgorithmType, GridType, MazeType } from "../utils/type";
import { createContext, useState } from "react"; 
import {createGrid} from "../utils/helpers";
import { START_TILE_CONFIGURATIONS } from "../utils/constants";


interface PathfindingContextInterface {
  algorithm: AlgorithmType;
  maze: MazeType;
  setAlgorithm: (algorithm: AlgorithmType) => void;
  setMaze: (maze: MazeType) => void;
  grid: GridType;
  setGrid: (grid: GridType) => void;
  isGraphCreated: boolean;
  setIsGraphCreated: (isGraphCreated: boolean) => void;

}

export const PathfindingContext = createContext<PathfindingContextInterface | undefined>(undefined);

export const PathfindingProvider = ({ children }: { children: React.ReactNode }) => {
  const [algorithm, setAlgorithm] = useState<AlgorithmType>("DIJKSTRA");
  const [maze, setMaze] = useState<MazeType>("NONE");
  const [grid, setGrid] = useState<GridType>(createGrid(START_TILE_CONFIGURATIONS, START_TILE_CONFIGURATIONS));
  const [isGraphCreated, setIsGraphCreated] = useState<boolean>(false);

  return (
    <PathfindingContext.Provider
      value={{
        algorithm,
        maze,
        setAlgorithm,
        setMaze,
        grid,
        setGrid,
        isGraphCreated,
        setIsGraphCreated,
      }}
    >
      {children}
    </PathfindingContext.Provider>
  );
}