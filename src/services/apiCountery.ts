import type { CountryResponseType } from "../utils/types";

const BASE_URL = "https://restcountries.com/v3.1/";

const ALL_COUNTRIES = `${BASE_URL}all?fields=name,capital,flags,population,region`;

export async function getCountries() {
  const res = await fetch(ALL_COUNTRIES);
  const data: CountryResponseType[] = await res.json();
  return data;
}

// async getCountryDetails(name: string) {
// 		const res = await axios.get<CountryDetailsType[]>(`${BASE_URL}name/${name}?fullText=true`);
// 		return res.data;
// 	},
// 	async getNeighbours(codes: string[]) {
// 		const res = await axios.get<CountryDetailsType[]>(`${BASE_URL}alpha?codes=${codes.join(',')}`);
// 		return res.data;
// 	}
// }

// export const errorHandler = (error: any) => {
// 	// It is necessary to use the type 'any' for the argument as 'unknown' type is used in the catch block.
// 	if (axios.isAxiosError(error)) {
// 		const axiosError = error as AxiosError;
// 		if (axiosError.response) {
// 			return `HTTP Error: ${axiosError.response.status}`;
// 		} else {
// 			return `Network Error: ${axiosError.message}`;
// 		}
// 	} else {
// 		return `Error: ${error.message}`;
// 	}
// }
