import React from "react";
import { BsSearch } from "react-icons/bs";

type PropTypes = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};

function Search({ search, setSearch }: PropTypes) {
  return (
    <div className="bg-white px-4 py-2 flex justify-between items-center gap-4 flex-grow sm:flex-grow-0  rounded-lg shadow dark:bg-gray-700 dark:caret-white">
      <BsSearch className="dark:text-gray-100" />

      <input
        className="outline-none border-none w-full flex-grow sm:flex-grow-0 dark:bg-gray-700 dark:text-gray-100"
        type="search"
        placeholder="Search for a country"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default Search;
