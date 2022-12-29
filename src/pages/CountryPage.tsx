import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { HiArrowNarrowLeft } from "react-icons/hi";

import { getCountryDetails, getCountryByCode } from "../api/client";
import LoadingIndicator from "../components/LoadingIndicator";
import { countryDetailsTypes } from "../types/index";

function CountryPage() {
  const { name } = useParams();
  const navigate = useNavigate();

  const [country, setCountry] = useState<countryDetailsTypes>();
  const [borders, setBorders] = useState<countryDetailsTypes[]>();

  // console.log(borders)

  useEffect(() => {
    getCountry();
  }, [name]);

  useEffect(() => {
    getBorders();
  }, [country]);

  async function getCountry() {
    if (name === undefined) return;

    const countryDetails = await getCountryDetails(name);
    setCountry(countryDetails[0]);
  }

  async function getBorders() {
    if (country && Object.hasOwn(country, "borders")) {
      const countryCodes = country?.borders.join(",");
      const borders = await getCountryByCode(countryCodes);
      setBorders(borders);
    }
  }

  function handleClick(name: string) {
    setCountry(undefined);
    navigate(`/country/${name}`);
  }

  if (!country) return <LoadingIndicator />;

  return (
    <div className="w-full max-w-6xl px-3 my-8 md:my-16 dark:text-gray-100">
      <button
        onClick={() => navigate(-1)}
        className="px-4 py-2 mx-4 flex items-center gap-2 rounded bg-white shadow dark:bg-gray-700"
      >
        <HiArrowNarrowLeft /> Back
      </button>

      <div className="w-full mt-10 md:mt-20 flex justify-evenly items-center gap-4 md:gap-10 flex-wrap lg:flex-nowrap">
        <div className="w-full md:w-1/3 lg:w-1/2">
          <img className="w-full " src={country.flags.svg} alt="" />
        </div>

        <div className="lg:w-1/2">
          <h1 className="font-bold text-3xl mb-6 text-gray-900 dark:text-gray-100">
            {country?.name.official}
          </h1>

          <div className="flex justify-between gap-6 flex-wrap font-bold text-lg text-gray-800 dark:text-gray-100">
            <div>
              <p>
                Native Name:{" "}
                <span className="font-semibold">
                  {Object.values(country.name.nativeName)[0].common}
                </span>
              </p>

              <p>
                Population:{" "}
                <span className="font-semibold">
                  {country.population.toLocaleString()}
                </span>
              </p>

              <p>
                Region: <span className="font-semibold">{country.region}</span>
              </p>

              <p>
                Sub Region:{" "}
                <span className="font-semibold">{country.subregion}</span>
              </p>

              <p>
                Capital:{" "}
                {country.capital.map((cap) => (
                  <span key={cap} className="font-semibold">
                    {cap}
                  </span>
                ))}
              </p>
            </div>

            <div>
              <p>
                Top Level Domain:{" "}
                {country.tld.map((cap) => (
                  <span key={cap} className="font-semibold">
                    {cap}
                  </span>
                ))}
              </p>

              <p>
                Currency:{" "}
                <span>{Object.values(country.currencies)[0].name}</span>
              </p>

              <p>
                Languages:{" "}
                {Object.values(country.languages).map((lan, i) => (
                  <span key={i} className="px-1 font-semibold">
                    {lan}
                  </span>
                ))}
              </p>
            </div>
          </div>

          <div className="w-full mt-8 flex gap-2 items-center flex-wrap">
            <p className="font-semibold text-lg">Border Countries: </p>
            {borders ? (
              borders.map((border, i) => (
                <span
                  onClick={() => handleClick(border.name.common)}
                  key={i}
                  className="mx-1 px-2 py-1 bg-white rounded shadow cursor-pointer dark:bg-gray-700"
                >
                  {border.name.common}
                </span>
              ))
            ) : (
              <p>No border countries</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountryPage;
