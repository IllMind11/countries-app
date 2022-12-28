const URL =
  "https://restcountries.com/v3/all?fields=name,capital,flags,population,region";

async function getAllCountries() {
  try {
    const promise = await fetch(URL);
    const data = await promise.json();

    return data;
  } catch (error) {
    console.error("Error fetching all countries data", error);
  }
}

async function getCountryDetails(name: string) {
  try {
    const url = `https://restcountries.com/v3.1/name/${name}?fullText=true`;

    const promise = await fetch(url);
    const data = await promise.json();

    return data;
  } catch (error) {
    console.error("Error fetching country detail", error);
    return error;
  }
}

async function getCountryByCode(code: string) {
  try {
    const url = `https://restcountries.com/v3.1/alpha/${code}`;

    const promise = await fetch(url);
    const data = await promise.json();

    return data;
  } catch (error) {
    console.error("Error fetching the country by code", error);
  }
}

export { getAllCountries, getCountryDetails };
