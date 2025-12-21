import { useQuery } from "@tanstack/react-query";
import { getCountries } from "../../services/apiCountery";

export function useCounterys() {
  const {
    isPending,
    data: counteries,
    error,
  } = useQuery({
    queryKey: ["countriesData"],
    queryFn: getCountries,
  });
  return { isPending, counteries, error };
}
