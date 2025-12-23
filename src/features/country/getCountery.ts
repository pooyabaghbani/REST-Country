import { useQuery } from "@tanstack/react-query";
import { getCountry } from "../../services/apiCountery";

export function useCountry(name: string | undefined) {
  const {
    isPending,
    data: countery,
    error,
  } = useQuery({
    queryKey: ["countryData", name],
    queryFn: () => getCountry(name),
  });
  return { isPending, countery, error };
}
