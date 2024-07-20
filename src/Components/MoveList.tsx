import React, { useEffect, useState } from "react";
import MoveItem from "./MoveItem";
import { fetchData } from "../API/api";

const MoveList = () => {
  const [moveData, setMoveData] = useState<any>();
  const [openMoveIndex, setOpenMoveIndex] = useState<any>(null);

  const handleToggle = (index: number) => {
    if (openMoveIndex === index) {
      setOpenMoveIndex(null);
    } else {
      setOpenMoveIndex(index);
    }
  };

  useEffect(() => {
    fetchData()
      .then((response) => {
        console.log(response.data.Customer_Estimate_Flow);
        setMoveData(response.data.Customer_Estimate_Flow);
      })
      .catch((err) => {
        console.error("err", err);
      });
  }, []);

  return (
    <div className="top-0 left-0 h-full p-8 sm:ml-64">
      <h1 className="flex items-center text-2xl font-extrabold mb-6">
        My Moves
      </h1>
      <div className="space-y-4">
        {moveData &&
          moveData.map((items: any, index: number) => (
            <MoveItem
              key={items.estimate_id}
              moveData={items}
              isOpen={openMoveIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
      </div>
    </div>
  );
};

export default MoveList;
