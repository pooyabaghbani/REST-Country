import type { CountryDetailsType, CountryResponseType } from "../utils/types";

const BASE_URL = "https://restcountries.com/v3.1/";

export async function getCountries() {
  const res = await fetch(
    `${BASE_URL}all?fields=name,capital,flags,population,region`
  );
  const data: CountryResponseType[] = await res.json();
  return data;
}

export async function getCountry(name: string | undefined) {
  const res = await fetch(`${BASE_URL}name/${name}?fullText=true`);
  const data: CountryDetailsType[] = await res.json();
  return data;
}

export async function getNeighbours(codes: string[] | undefined) {
  const res = await fetch(
    `${BASE_URL}alpha?codes=${codes?.join(",")}&fields=name`
  );
  const data: CountryDetailsType[] = await res.json();
  return data;
}
