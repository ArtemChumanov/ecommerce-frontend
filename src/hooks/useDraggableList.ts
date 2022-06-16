import { useCallback, useState } from "react";
import { arrayMoveImmutable } from "array-move";

export const useDraggableList = (arr: any[]) => {
  const [arrayData, setArrayData] = useState(arr);
  const handleDraggable = (
    sourceIndex: number,
    destinationIndex: number
    //list: any[]
  ) => {
    console.log(sourceIndex);
    // const newArray = arrayMoveImmutable(
    //   // @ts-ignore
    //   [].concat(list),
    //   sourceIndex,
    //   destinationIndex
    // );
    // setArrayData(newArray);
  };

  return { arrayData, handleDraggable };
};
