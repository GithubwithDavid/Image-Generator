import React from "react";

type AccessoriesOptionsProps = {
  accessories: string[];
  activeIndex: number;
  onSelect: (
    e: React.MouseEvent<HTMLButtonElement>,
    index: number,
    label: string
  ) => void;
};

const AccessoriesOptions: React.FC<AccessoriesOptionsProps> = ({
  accessories,
  activeIndex,
  onSelect,
}) => {
  return (
    <div className={`flex flex-row gap-3 flex-wrap mt-4`}>
      {accessories.map((item, index) => (
        <button
          key={index}
          onClick={(e) => {
            onSelect(e, index, item);
          }}
          className={`py-[12px] px-[32px] rounded-full cursor-pointer select-none border-3 text-[#24509d] border-[#24509d] font-bold ${
            activeIndex === index
              ? "bg-[#24509d] text-white border-[#24509d]"
              : ""
          }`}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default AccessoriesOptions;
