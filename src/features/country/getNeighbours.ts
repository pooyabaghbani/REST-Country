import { useQuery } from "@tanstack/react-query";
import { getNeighbours } from "../../services/apiCountery";

export function useNeighbours(codes: string[] | undefined) {
  const {
    isPending,
    data: neighbours,
    error,
  } = useQuery({
    queryKey: ["countryData", codes],
    queryFn: () => getNeighbours(codes),
  });
  return { isPending, neighbours, error };
}
