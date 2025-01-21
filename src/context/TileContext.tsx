import { createContext, useState } from "react";
import { TileType } from "../utils/type";
import { END_TILE_CONFIGURATIONS, START_TILE_CONFIGURATIONS } from "../utils/constants";


interface TileContextInterface {
  startTile: TileType;
  setStartTile: (startTile: TileType) => void;
  endTile: TileType;
  setEndTile: (endTile: TileType) => void;
}

export const TileContext = createContext<TileContextInterface | undefined>(undefined);

export const TileProvider = ({ children }: { children: React.ReactNode }) => {
  //const [startTile, setStartTile] = useState<TileType>({ row: 0, col: 0, isStart: true, isEnd: false, isWall: false, distance: Infinity, isPath: false, parent: null, isTraversed: false });
  const [startTile, setStartTile] = useState<TileType>(START_TILE_CONFIGURATIONS);
  const [endTile, setEndTile] = useState<TileType>(END_TILE_CONFIGURATIONS);

  return (
    <TileContext.Provider
      value={{
        startTile,
        setStartTile,
        endTile,
        setEndTile,
      }}
    >
      {children}
    </TileContext.Provider>
  );
}