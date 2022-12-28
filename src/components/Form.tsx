import React, { useEffect, useState } from "react";
import Search from "./Search";
import Select from "./Select";

type PropTypes = {
  onSearch: (search: string, region: string) => void;
};

function Form({ onSearch }: PropTypes) {
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");

  useEffect(() => {
    onSearch(search, region);
  }, [search, region]);

  return (
    <div className="max-w-6xl w-full my-8 px-3 flex justify-between items-center flex-wrap gap-2">
      <Search search={search} setSearch={setSearch} />

      <Select region={region} setRegion={setRegion} />
    </div>
  );
}

export default Form;
