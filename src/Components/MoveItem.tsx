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

const MoveItem = ({ moveData, isOpen, onToggle }: any) => {
  const [openItem, setOpenItem] = useState<string | null>(null);

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
    <div className="border-b border-red-600">
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
            onClick={() => {
              onToggle();
              setOpenItem(null);
            }}
          >
            {isOpen ? "Hide move details" : "View move details"}
          </button>
          <button className="text-white bg-[#ef4444] rounded px-4 py-2">
            {moveData.custom_status}
          </button>
        </div>
      </div>
      <div className="flex items-center space-x-2 text-sm text-left mb-8">
        <IconAlertTriangleFilled color="#ef4444" stroke={2} size={18} />
        <span className=" text-black font-extrabold">Disclaimer:</span>
        <span> Please update your move date before two days of shifting</span>
      </div>
      {isOpen && (
        <>
          <div className="flex items-center space-x-4 text-sm mb-6">
            <h1 className="font-extrabold text-left">Inventory Details</h1>
            <button className="text-white bg-black rounded px-4 py-2">
              Edit Inventory
            </button>
          </div>
          <div className="mb-6">
            <AccordionItem
              title="Living Room"
              count={15}
              isOpen={openItem === "Living Room"}
              onToggle={() => handleToggle("Living Room")}
            >
              <div className="flex text-left space-x-16">
                <div className="w-1/5">
                  <h1 className="text-xl font-extrabold mb-4">Furnitures</h1>
                  <ul className="text-sm">
                    <li className="flex justify-between">
                      <span className="mb-1">1 Seater Sofa</span>
                      <span className="font-bold">2</span>
                    </li>
                    <span className="block font-semibold mb-5">Wooden</span>
                    <li className="flex justify-between">
                      <span className="mb-1">3 Seater Sofa</span>
                      <span className="font-bold">1</span>
                    </li>
                    <span className="block font-semibold mb-5">Wooden</span>
                    <li className="flex justify-between mb-5">
                      <span>TV Cabinet</span>
                      <span className="font-bold">1</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="mb-1">Study table</span>
                      <span className="font-bold">1</span>
                    </li>
                    <span className="block font-semibold mb-5">medium</span>
                    <li className="flex justify-between">
                      <span className="mb-1">Teapoy</span>
                      <span className="font-bold">1</span>
                    </li>
                    <span className="block font-semibold mb-5">Glass top</span>
                    <li className="flex justify-between">
                      <span className="mb-1">Shoe Rack</span>
                      <span className="font-bold">1</span>
                    </li>
                    <span className="block font-semibold mb-5">small</span>
                    <li className="flex justify-between mb-5">
                      <span className="mb-1">Plastic Chair</span>
                      <span className="font-bold">2</span>
                    </li>
                  </ul>
                </div>
                <div className="w-1/5">
                  <h1 className="text-xl font-extrabold mb-4">Electricals</h1>
                  <ul className="text-sm">
                    <li className="flex justify-between">
                      <span className="mb-1">LCD TV</span>
                      <span className="font-bold">1</span>
                    </li>
                    <span className="block font-semibold mb-5">30-40 inch</span>
                    <li className="flex justify-between">
                      <span className="mb-1">Home Theatre</span>
                      <span className="font-bold">1</span>
                    </li>
                    <span className="block font-semibold mb-5">
                      3+1 Speakers
                    </span>
                    <li className="flex justify-between mb-5">
                      <span className="mb-1">Ceiling Fan</span>
                      <span className="font-bold">1</span>
                    </li>
                  </ul>
                </div>
                <div className="w-1/5">
                  <h1 className="text-xl font-extrabold mb-4">Fragile</h1>
                  <ul className="text-sm">
                    <li className="flex justify-between mb-5">
                      <span className="mb-1">Bulb</span>
                      <span className="font-bold">1</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="mb-1">Picture / Poster / Painting</span>
                      <span className="font-bold">1</span>
                    </li>
                    <span className="block font-semibold mb-5">small</span>
                    <li className="flex justify-between">
                      <span className="mb-1">Clock</span>
                      <span className="font-bold">1</span>
                    </li>
                    <span className="block font-semibold mb-5">small</span>
                  </ul>
                </div>
              </div>
            </AccordionItem>
            <AccordionItem
              title="Bed Room"
              count={6}
              isOpen={openItem === "Bed Room"}
              onToggle={() => handleToggle("Bed Room")}
            >
              <div className="flex text-left space-x-16">
                <div className="w-1/5">
                  <h1 className="text-xl font-extrabold mb-4">Furnitures</h1>
                  <ul className="text-sm">
                    <li className="flex justify-between">
                      <span className="mb-1">1 Seater Sofa</span>
                      <span className="font-bold">2</span>
                    </li>
                    <span className="block font-semibold mb-5">Wooden</span>
                    <li className="flex justify-between">
                      <span className="mb-1">3 Seater Sofa</span>
                      <span className="font-bold">1</span>
                    </li>
                    <span className="block font-semibold mb-5">Wooden</span>
                    <li className="flex justify-between mb-5">
                      <span>TV Cabinet</span>
                      <span className="font-bold">1</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="mb-1">Study table</span>
                      <span className="font-bold">1</span>
                    </li>
                    <span className="block font-semibold mb-5">medium</span>
                    <li className="flex justify-between">
                      <span className="mb-1">Teapoy</span>
                      <span className="font-bold">1</span>
                    </li>
                    <span className="block font-semibold mb-5">Glass top</span>
                    <li className="flex justify-between">
                      <span className="mb-1">Shoe Rack</span>
                      <span className="font-bold">1</span>
                    </li>
                    <span className="block font-semibold mb-5">small</span>
                    <li className="flex justify-between mb-5">
                      <span className="mb-1">Plastic Chair</span>
                      <span className="font-bold">2</span>
                    </li>
                  </ul>
                </div>
                <div className="w-1/5">
                  <h1 className="text-xl font-extrabold mb-4">Electricals</h1>
                  <ul className="text-sm">
                    <li className="flex justify-between">
                      <span className="mb-1">LCD TV</span>
                      <span className="font-bold">1</span>
                    </li>
                    <span className="block font-semibold mb-5">30-40 inch</span>
                    <li className="flex justify-between">
                      <span className="mb-1">Home Theatre</span>
                      <span className="font-bold">1</span>
                    </li>
                    <span className="block font-semibold mb-5">
                      3+1 Speakers
                    </span>
                    <li className="flex justify-between mb-5">
                      <span className="mb-1">Ceiling Fan</span>
                      <span className="font-bold">1</span>
                    </li>
                  </ul>
                </div>
                <div className="w-1/5">
                  <h1 className="text-xl font-extrabold mb-4">Fragile</h1>
                  <ul className="text-sm">
                    <li className="flex justify-between mb-5">
                      <span className="mb-1">Bulb</span>
                      <span className="font-bold">1</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="mb-1">Picture / Poster / Painting</span>
                      <span className="font-bold">1</span>
                    </li>
                    <span className="block font-semibold mb-5">small</span>
                    <li className="flex justify-between">
                      <span className="mb-1">Clock</span>
                      <span className="font-bold">1</span>
                    </li>
                    <span className="block font-semibold mb-5">small</span>
                  </ul>
                </div>
              </div>
            </AccordionItem>
            <AccordionItem
              title="Kitchen"
              count={7}
              isOpen={openItem === "Kitchen"}
              onToggle={() => handleToggle("Kitchen")}
            >
              <div className="flex text-left space-x-16">
                <div className="w-1/5">
                  <h1 className="text-xl font-extrabold mb-4">Furnitures</h1>
                  <ul className="text-sm">
                    <li className="flex justify-between">
                      <span className="mb-1">1 Seater Sofa</span>
                      <span className="font-bold">2</span>
                    </li>
                    <span className="block font-semibold mb-5">Wooden</span>
                    <li className="flex justify-between">
                      <span className="mb-1">3 Seater Sofa</span>
                      <span className="font-bold">1</span>
                    </li>
                    <span className="block font-semibold mb-5">Wooden</span>
                    <li className="flex justify-between mb-5">
                      <span>TV Cabinet</span>
                      <span className="font-bold">1</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="mb-1">Study table</span>
                      <span className="font-bold">1</span>
                    </li>
                    <span className="block font-semibold mb-5">medium</span>
                    <li className="flex justify-between">
                      <span className="mb-1">Teapoy</span>
                      <span className="font-bold">1</span>
                    </li>
                    <span className="block font-semibold mb-5">Glass top</span>
                    <li className="flex justify-between">
                      <span className="mb-1">Shoe Rack</span>
                      <span className="font-bold">1</span>
                    </li>
                    <span className="block font-semibold mb-5">small</span>
                    <li className="flex justify-between mb-5">
                      <span className="mb-1">Plastic Chair</span>
                      <span className="font-bold">2</span>
                    </li>
                  </ul>
                </div>
                <div className="w-1/5">
                  <h1 className="text-xl font-extrabold mb-4">Electricals</h1>
                  <ul className="text-sm">
                    <li className="flex justify-between">
                      <span className="mb-1">LCD TV</span>
                      <span className="font-bold">1</span>
                    </li>
                    <span className="block font-semibold mb-5">30-40 inch</span>
                    <li className="flex justify-between">
                      <span className="mb-1">Home Theatre</span>
                      <span className="font-bold">1</span>
                    </li>
                    <span className="block font-semibold mb-5">
                      3+1 Speakers
                    </span>
                    <li className="flex justify-between mb-5">
                      <span className="mb-1">Ceiling Fan</span>
                      <span className="font-bold">1</span>
                    </li>
                  </ul>
                </div>
                <div className="w-1/5">
                  <h1 className="text-xl font-extrabold mb-4">Fragile</h1>
                  <ul className="text-sm">
                    <li className="flex justify-between mb-5">
                      <span className="mb-1">Bulb</span>
                      <span className="font-bold">1</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="mb-1">Picture / Poster / Painting</span>
                      <span className="font-bold">1</span>
                    </li>
                    <span className="block font-semibold mb-5">small</span>
                    <li className="flex justify-between">
                      <span className="mb-1">Clock</span>
                      <span className="font-bold">1</span>
                    </li>
                    <span className="block font-semibold mb-5">small</span>
                  </ul>
                </div>
              </div>
            </AccordionItem>
            <AccordionItem
              title="Bathroom"
              count={4}
              isOpen={openItem === "Bathroom"}
              onToggle={() => handleToggle("Bathroom")}
            >
              <div className="flex text-left space-x-16">
                <div className="w-1/5">
                  <h1 className="text-xl font-extrabold mb-4">Furnitures</h1>
                  <ul className="text-sm">
                    <li className="flex justify-between">
                      <span className="mb-1">1 Seater Sofa</span>
                      <span className="font-bold">2</span>
                    </li>
                    <span className="block font-semibold mb-5">Wooden</span>
                    <li className="flex justify-between">
                      <span className="mb-1">3 Seater Sofa</span>
                      <span className="font-bold">1</span>
                    </li>
                    <span className="block font-semibold mb-5">Wooden</span>
                    <li className="flex justify-between mb-5">
                      <span>TV Cabinet</span>
                      <span className="font-bold">1</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="mb-1">Study table</span>
                      <span className="font-bold">1</span>
                    </li>
                    <span className="block font-semibold mb-5">medium</span>
                    <li className="flex justify-between">
                      <span className="mb-1">Teapoy</span>
                      <span className="font-bold">1</span>
                    </li>
                    <span className="block font-semibold mb-5">Glass top</span>
                    <li className="flex justify-between">
                      <span className="mb-1">Shoe Rack</span>
                      <span className="font-bold">1</span>
                    </li>
                    <span className="block font-semibold mb-5">small</span>
                    <li className="flex justify-between mb-5">
                      <span className="mb-1">Plastic Chair</span>
                      <span className="font-bold">2</span>
                    </li>
                  </ul>
                </div>
                <div className="w-1/5">
                  <h1 className="text-xl font-extrabold mb-4">Electricals</h1>
                  <ul className="text-sm">
                    <li className="flex justify-between">
                      <span className="mb-1">LCD TV</span>
                      <span className="font-bold">1</span>
                    </li>
                    <span className="block font-semibold mb-5">30-40 inch</span>
                    <li className="flex justify-between">
                      <span className="mb-1">Home Theatre</span>
                      <span className="font-bold">1</span>
                    </li>
                    <span className="block font-semibold mb-5">
                      3+1 Speakers
                    </span>
                    <li className="flex justify-between mb-5">
                      <span className="mb-1">Ceiling Fan</span>
                      <span className="font-bold">1</span>
                    </li>
                  </ul>
                </div>
                <div className="w-1/5">
                  <h1 className="text-xl font-extrabold mb-4">Fragile</h1>
                  <ul className="text-sm">
                    <li className="flex justify-between mb-5">
                      <span className="mb-1">Bulb</span>
                      <span className="font-bold">1</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="mb-1">Picture / Poster / Painting</span>
                      <span className="font-bold">1</span>
                    </li>
                    <span className="block font-semibold mb-5">small</span>
                    <li className="flex justify-between">
                      <span className="mb-1">Clock</span>
                      <span className="font-bold">1</span>
                    </li>
                    <span className="block font-semibold mb-5">small</span>
                  </ul>
                </div>
              </div>
            </AccordionItem>
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
