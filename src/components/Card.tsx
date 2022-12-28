import React from "react";

type PropTypes = {
  name: string;
  population: number;
  region: string;
  flags: string[];
  capital: string[];
  handleClick: (name: string) => void;
};

function Card({
  name,
  capital,
  flags,
  population,
  region,
  handleClick,
}: PropTypes) {
  return (
    <div
      onClick={() => handleClick(name)}
      className="w-5/6 sm:w-64 min-h-64 pb-3 bg-white rounded-lg overflow-hidden shadow  sm:grow md:grow-0 cursor-pointer dark:bg-gray-700 dark:text-gray-100"
    >
      <div className="h-32  w-full">
        <img className="h-full w-full object-fit" src={flags[1]} alt="flag picture" />
      </div>

      <div className="px-4">
        <h2 className="font-semibold py-2">{name}</h2>

        <p className="font-semibold">
          Population:{" "}
          <span className="font-normal">{population.toLocaleString()}</span>
        </p>
        <p className="font-semibold">
          Region: <span className="font-normal">{region}</span>
        </p>
        <p className="font-semibold">
          Capital: <span className="font-normal">{capital[0]}</span>
        </p>
      </div>
    </div>
  );
}

export default Card;
