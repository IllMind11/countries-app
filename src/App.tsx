import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import CountryPage from "./pages/CountryPage";
import HomePage from "./pages/HomePage";
import { countriesDataTypes } from "./types/index";

function App() {
  const [countries, setCountries] = useState<countriesDataTypes[]>([]);

  return (
    <div className="bg-gray-50 min-h-screen w-full flex flex-col items-center dark:bg-gray-800">
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <HomePage countries={countries} setCountries={setCountries} />
          }
        />
        <Route path="country/:name" element={<CountryPage />} />
      </Routes>
    </div>
  );
}

export default App;
