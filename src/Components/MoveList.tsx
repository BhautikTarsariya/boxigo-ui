import React, { useEffect, useState } from "react";
import MoveItem from "./MoveItem";
import { fetchData } from "../API/api";
import { IconLoader } from "@tabler/icons-react";

const MoveList = () => {
  const [moveData, setMoveData] = useState<any>();
  const [loading, setLoading] = useState<Boolean>(false);

  useEffect(() => {
    setLoading(true);
    fetchData().then((response) => {
      setMoveData(response.data.Customer_Estimate_Flow);
      setLoading(false);
    });
  }, []);

  return (
    <div className="top-0 left-0 h-full p-8 sm:ml-64">
      <h1 className="flex items-center text-2xl font-extrabold mb-6">
        My Moves
      </h1>

      {/* Loader while fatching Data */}
      {loading && (
        <div className="flex gap-2 text-center justify-center items-center mt-10">
          <IconLoader stroke={2} className="animate-spin" size={36} />
          <p className="text-[#ef4444] font-bold"> Loading Content ...</p>
        </div>
      )}

      {/* Moves Item Component */}
      <div className="space-y-4">
        {moveData &&
          moveData.map((items: any, index: number) => (
            <MoveItem key={index} moveData={items} />
          ))}
      </div>
    </div>
  );
};

export default MoveList;
