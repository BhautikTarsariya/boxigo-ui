import React, { useState } from "react";
import {
  IconArrowRight,
  IconHomeFilled,
  IconPackages,
  IconRoute2,
  IconCalendarStats,
  IconPencil,
  IconSquareCheckFilled,
  IconAlertTriangleFilled,
} from "@tabler/icons-react";
import AccordionItem from "./AccordionItem";

const MoveItem = ({ moveData }: any) => {
  const [openItem, setOpenItem] = useState<string | null>(null);
  const [showDetails, setShowDetails] = useState(false);

  const handleToggle = (title: string) => {
    setOpenItem(openItem === title ? null : title);
  };

  const formatDate = (dateString: any) => {
    const date = new Date(dateString);

    const options: any = { month: "short", day: "numeric", year: "numeric" };
    const datePart = date.toLocaleDateString("en-US", options);

    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? "pm" : "am";
    const formattedHours = hours % 12 || 12;
    const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;

    const timePart = `${formattedHours}:${formattedMinutes} ${ampm}`;

    return `${datePart} at ${timePart}`;
  };

  return (
    <div className="border-b border-[#ef4444] cursor-pointer transition-all duration-150 hover:border hover:border-[#ef4444] py-5 px-3 hover:rounded-lg animate-[slideup_0.5s]">
      <div className="flex justify-between text-sm mb-8 text-left">
        <div className="w-1/4">
          <p className="text-black font-extrabold">From</p>
          <span className="font-light">{moveData.moving_from}</span>
        </div>
        <div className="w-1/4 flex justify-center items-center">
          <div className="bg-white p-3 rounded-full shadow-xl flex items-center justify-center">
            <IconArrowRight color="#ef4444" stroke={2} size={24} />
          </div>
        </div>
        <div className="w-1/4">
          <p className="text-black font-extrabold">To</p>
          <span className="font-light">{moveData.moving_to}</span>
        </div>
        <div className="w-1/4 text-center">
          <p className="text-black font-extrabold">Request#</p>
          <span className="text-red-500 font-extrabold">
            {moveData.estimate_id}
          </span>
        </div>
      </div>
      <div className="flex justify-between items-center text-sm mb-8">
        <div className="flex items-center space-x-2">
          <IconHomeFilled color="#ef4444" stroke={2} />
          <span>{moveData.property_size}</span>
        </div>
        <div className="flex items-center space-x-2">
          <IconPackages color="#ef4444" stroke={2} />
          <span>{moveData.total_items}</span>
        </div>
        <div className="flex items-center space-x-2">
          <IconRoute2 color="#ef4444" stroke={2} />
          <span>{moveData.distance}</span>
        </div>
        <div className="flex items-center space-x-2">
          <IconCalendarStats color="#ef4444" stroke={2} />
          <span>{formatDate(moveData.moving_on)}</span>
          <IconPencil stroke={1} size={20} />
        </div>
        <div className="flex items-center space-x-2">
          <IconSquareCheckFilled color="#ef4444" stroke={2} />
          <label>Is flexible</label>
        </div>
        <div className="flex items-center space-x-2">
          <button
            className="text-[#ef4444] border border-[#ef4444] rounded px-4 py-2"
            onClick={() => setShowDetails(!showDetails)}
          >
            {showDetails ? "Hide move details" : "View move details"}
          </button>
          <button className="text-white bg-[#ef4444] rounded px-4 py-2">
            {moveData.custom_status}
          </button>
        </div>
      </div>
      <div className="flex items-center space-x-2 text-sm text-left">
        <IconAlertTriangleFilled color="#ef4444" stroke={2} size={18} />
        <span className=" text-black font-extrabold">Disclaimer:</span>
        <span> Please update your move date before two days of shifting</span>
      </div>

      {/* View Move Details  */}
      {showDetails && (
        <>
          <div className="flex items-center space-x-4 text-sm mt-8 mb-6">
            <h1 className="font-extrabold text-left">Inventory Details</h1>
            <button className="text-white bg-black rounded px-4 py-2">
              Edit Inventory
            </button>
          </div>
          <div className="mb-6">
            {moveData.items &&
              moveData.items.inventory &&
              moveData.items.inventory.map((item: any, index: number) => (
                <AccordionItem
                  title={item.displayName}
                  count={item?.category?.length}
                  isOpen={openItem === item.displayName}
                  onToggle={() => handleToggle(item.displayName)}
                  key={index}
                  item={item}
                />
              ))}
          </div>
          <div className="flex items-center space-x-4 text-sm mb-8">
            <h1 className="font-extrabold text-left">House Details</h1>
            <button className="text-white bg-black rounded px-4 py-2">
              Edit House Details
            </button>
          </div>
          <div className="mb-4 border-b">
            <h1 className="flex items-center text-[#ef4444] font-extrabold mb-4">
              Existing House Details
            </h1>
            <div className="flex justify-between text-sm text-left mb-4">
              <div className="w-1/4">
                <p className="text-black font-extrabold">Floor No.</p>
                <span className="font-light">{moveData.old_floor_no}</span>
              </div>
              <div className="w-1/4">
                <p className="text-black font-extrabold">Elevator Available</p>
                <span className="font-light">
                  {moveData.old_elevator_availability}
                </span>
              </div>
              <div className="w-1/4">
                <p className="text-black font-extrabold">Packing Required</p>
                <span className="font-light">Yes</span>
              </div>
              <div className="w-1/4">
                <p className="text-black font-extrabold">
                  Distance from truck to door
                </p>
                <span className="font-light">
                  {moveData.old_parking_distance}
                </span>
              </div>
            </div>
            <div className="text-sm mb-5">
              <p className="flex items-center font-extrabold mb-1">
                Additional Information
              </p>
              <span className="flex items-center font-light">
                {moveData.old_house_additional_info &&
                moveData.old_house_additional_info.length > 0
                  ? moveData.old_house_additional_info
                  : "No additional info"}
              </span>
            </div>
          </div>
          <div className="mb-4">
            <h1 className="flex items-center text-[#ef4444] font-extrabold mb-4">
              New House Details
            </h1>
            <div className="flex justify-between text-sm text-left mb-4">
              <div className="w-1/4">
                <p className="text-black font-extrabold">Floor No.</p>
                <span className="font-light">{moveData.new_floor_no}</span>
              </div>
              <div className="w-1/4">
                <p className="text-black font-extrabold">Elevator Available</p>
                <span className="font-light">
                  {moveData.new_elevator_availability}
                </span>
              </div>
              <div className="w-1/4">
                <p className="text-black font-extrabold">Packing Required</p>
                <span className="font-light">Yes</span>
              </div>
              <div className="w-1/4">
                <p className="text-black font-extrabold">
                  Distance from truck to door
                </p>
                <span className="font-light">
                  {moveData.new_parking_distance}
                </span>
              </div>
            </div>
            <div className="text-sm mb-4">
              <p className="flex items-center font-extrabold mb-1">
                Additional Information
              </p>
              <span className="flex items-center font-light">
                {moveData.new_house_additional_info &&
                moveData.new_house_additional_info.length > 0
                  ? moveData.new_house_additional_info
                  : "No additional info"}
              </span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MoveItem;
