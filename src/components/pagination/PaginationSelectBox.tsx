import React from "react";
type Iprops = {
  setItemsPerPages: React.Dispatch<React.SetStateAction<number>>;
};

const PaginationSelectBox: React.FC<Iprops> = (Iprops) => {
  const { setItemsPerPages } = Iprops;
  const handlePageSelect = (e: any) => {
    setItemsPerPages(e.target.value);
  };
  return (
    <select onChange={handlePageSelect} className="w-15 px-2  text-center">
      <option value="100">Select</option>
      <option value="5">5</option>
      <option value="10">10</option>
    </select>
  );
};
export default PaginationSelectBox;
