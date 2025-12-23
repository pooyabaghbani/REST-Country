import { errors } from "../utils/errors";
import type { CountryDetailsType, CountryResponseType } from "../utils/types";

const BASE_URL = "https://restcountries.com/v3.1/";

export async function getCountries() {
  const res = await fetch(
    `${BASE_URL}all?fields=name,capital,flags,population,region`
  );
  if (res.status !== 200)
    throw new Error(errors[res.status as keyof typeof errors]);
  const data: CountryResponseType[] = await res.json();
  if (!data) throw new Error("");

  return data;
}

export async function getCountry(name: string | undefined) {
  const res = await fetch(`${BASE_URL}name/${name}?fullText=true`);
  if (res.status !== 200)
    throw new Error(errors[res.status as keyof typeof errors]);
  const data: CountryDetailsType[] = await res.json();
  if (!data) throw new Error("");
  return data;
}

export async function getNeighbours(codes: string[] | undefined) {
  if (codes === undefined) throw new Error("No border Countries found !");
  const res = await fetch(
    `${BASE_URL}alpha?codes=${codes?.join(",")}&fields=name`
  );
  if (res.status !== 200)
    throw new Error(errors[res.status as keyof typeof errors]);
  const data: CountryDetailsType[] = await res.json();
  if (!data) throw new Error("");
  return data;
}
