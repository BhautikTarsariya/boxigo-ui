import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";

const AccordionItem = ({ title, count, isOpen, onToggle, item }: any) => {
  return (
    // collapse and expand toggles
    <div className="mb-3">
      <div
        className="flex justify-between items-center bg-gray-200 p-3 cursor-pointer rounded"
        onClick={onToggle}
      >
        <span className="text-[#ef4444] font-extrabold text-sm mr-3">
          {title}
        </span>
        <span className="text-[#ef4444] font-extrabold bg-white rounded-full px-2 py-1 text-xs">
          {count}
        </span>
        <span className="ml-auto">
          {isOpen ? (
            <IconChevronUp stroke={2} />
          ) : (
            <IconChevronDown stroke={2} />
          )}
        </span>
      </div>

      {/* Items are listing caregory name wise */}
      {isOpen && (
        <div className="flex text-left gap-14 flex-wrap bg-gray-100 p-4">
          {item &&
            item.category &&
            item.category.map((data: any, i: number) => (
              <div className="w-1/5" key={i}>
                <h1 className="text-xl font-extrabold mb-4">
                  {data.displayName}
                </h1>
                {data &&
                  data.items &&
                  data.items.map((el: any, idx: number) => (
                    <ul className="text-sm" key={idx}>
                      <li className="flex justify-between my-4">
                        <p>{el.displayName}</p>
                        <p className="font-bold">{el.order}</p>
                      </li>
                      {el &&
                        el.type &&
                        el.type.map((type: any, ind: number) => (
                          <>
                            {type.selected === true && (
                              <span
                                className="block font-semibold mt-[-15px] text-xs"
                                key={ind}
                              >
                                {type?.option?.split(",")}
                              </span>
                            )}
                          </>
                        ))}
                    </ul>
                  ))}
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default AccordionItem;
