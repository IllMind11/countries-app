import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Form from "../components/Form";
import Card from "../components/Card";
import { countriesDataTypes } from "../types/index";
import LoadingIndicator from "../components/LoadingIndicator";

type PropTypes = {
  countries: countriesDataTypes[];
};

function HomePage({ countries }: PropTypes) {
  const [filteredCountries, setFilteredCountries] =
    useState<countriesDataTypes[]>(countries);

  const navigate = useNavigate();

  function handleSearch(search: string, region: string) {
    let data = [...countries];

    if (search) {
      data = data.filter((country) =>
        country.name.common.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (region) {
      data = data.filter((country) => country.region === region);
    }

    setFilteredCountries(data);
  }

  function handleClick(name: string) {
    navigate(`/country/${name}`);
  }

  if (!countries.length) return <LoadingIndicator />;

  return (
    <>
      <Form onSearch={handleSearch} />

      <div className="max-w-6xl w-full px-3 md:px-0 flex justify-center items-center flex-wrap gap-10 dark:bg-gray-800">
        {countries.length &&
          filteredCountries.map((country, i) => (
            <Card
              key={i}
              capital={country.capital}
              flags={country.flags}
              name={country.name.common}
              population={country.population}
              region={country.region}
              handleClick={handleClick}
            />
          ))}
      </div>
    </>
  );
}

export default HomePage;
