import { twMerge } from "tailwind-merge";
import { MAX_COL, MAX_ROW } from "../utils/constants";
import { usePathfinding } from "../hooks/usePathfinding";

//using user's screen size to control the grid size
export function Grid(){
  const {grid} = usePathfinding();

  return (
    <div className={twMerge(
      //base classes
      "flex item-center flex-col justify-center border-sky-300",
      //control grid height
      //changing the height base on different screen size
      //above large screen-min height (can play with number for large screen)
      //above medium, above xs, and base smallest screen
      `lg:min-h-[${MAX_ROW * 17}px] md:min-h-[${MAX_ROW * 15}px] 
      xs:min-h-[${MAX_ROW * 8}px] min-h-[${MAX_ROW * 7}px]`,
      //Controlling grid width
      `lg:min-h-[${MAX_COL * 17}px] md:min-h-[${MAX_COL * 15}px] 
      xs:min-h-[${MAX_COL * 8}px] min-h-[${MAX_COL * 7}px]`
    )}>
    {grid.map((row, rowIndex) => (
      <div key={rowIndex} className="flex">
        {row.map((tile, tileIndex) => (
          <div className="bg-white h-2 w-2 border" key={tileIndex}/>
        ))}
      </div>
    ))}

    </div>
  )
}