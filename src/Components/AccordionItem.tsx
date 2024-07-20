import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";

const AccordionItem = ({ title, count, isOpen, onToggle, children }: any) => {
  return (
    <div className="mb-3">
      <div
        className="flex justify-between items-center bg-gray-200 p-3 cursor-pointer rounded"
        onClick={onToggle}
      >
        <span className="text-[#ef4444] font-extrabold text-sm mr-3">
          {title}
        </span>
        <span className="text-[#ef4444] bg-white rounded-full px-2 py-1 text-xs">
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
      {isOpen && <div className="bg-gray-100 p-4">{children}</div>}
    </div>
  );
};

export default AccordionItem;
