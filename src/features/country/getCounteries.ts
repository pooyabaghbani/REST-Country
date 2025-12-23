import { useQuery } from "@tanstack/react-query";
import { getCountries } from "../../services/apiCountery";
import { useSearchParams } from "react-router";

export function useCountries() {
  const [searchParams] = useSearchParams();
  const search = searchParams.get("country");
  const region = searchParams.get("region");
  const {
    isPending,
    data: counteries,
    error,
  } = useQuery({
    queryKey: ["countriesData", search, region],
    queryFn: () => getCountries(search, region),
  });
  return { isPending, counteries, error };
}
