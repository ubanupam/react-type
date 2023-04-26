import React, { memo } from "react";
import PaginationSelectBox from "./PaginationSelectBox";

type Iprops = {
  data: string[];
  pageNo?: number | undefined;
  setPageNo: React.Dispatch<React.SetStateAction<number>>;
  setitemsPerPages: React.Dispatch<React.SetStateAction<number>>;
  itemsPerPages: number;
};

const Pagination: React.FC<Iprops> = (props) => {
  const { data, setPageNo, itemsPerPages, setitemsPerPages } = props;
  const maxPage = [...Array(data.length / itemsPerPages)];

  const PageChange = (index: number) => {
    setPageNo(index);
  };
  const handlePrev = () => {
    setPageNo((prev): any => {
      if (prev === 1) {
        return prev;
      }
      return prev - 1;
    });
  };
  const handleNext = () => {
    setPageNo((prev): any => {
      if (prev === itemsPerPages) {
        return prev;
      }
      return prev + 1;
    });
  };
  return (
    <div className="flex justify-center items-center ml-4 mr-4 mb-8">
      <span
        onClick={handlePrev}
        className="hover:bg-red-400 p-1 text-white cursor-pointer "
      >
        {"◀️"}
      </span>
      {maxPage.map((i, index): any => {
        return (
          <span
            key={index}
            onClick={() => PageChange(index + 1)}
            className="max-w-full hover:bg-red-500 hover:text-white m-2 p-1 px-2 select-none"
          >
            {index + 1}
          </span>
        );
      })}
      <span
        onClick={handleNext}
        className="hover:bg-red-400 p-1 text-white cursor-pointer"
      >
        {"▶️"}
      </span>
      <PaginationSelectBox setItemsPerPages={setitemsPerPages} />
    </div>
  );
};
export default memo(Pagination);
