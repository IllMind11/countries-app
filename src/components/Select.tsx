import React from "react";

type PropTypes = {
  region: string;
  setRegion: React.Dispatch<React.SetStateAction<string>>;
};

function Select({ region, setRegion }: PropTypes) {
  return (
    <select
      name="Category"
      className="px-4 py-2 outline-none rounded-lg shadow dark:bg-gray-700 dark:text-gray-100"
      value={region}
      onChange={(e) => setRegion(e.target.value)}
    >
      <option value="">All</option>
      <option value="Africa">Africa</option>
      <option value="Americas">America</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  );
}

export default Select;
