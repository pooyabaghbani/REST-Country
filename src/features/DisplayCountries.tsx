import Card from "../ui/Card";
import { useCountries } from "./country/getCounteries";

function DisplayCountries() {
  const { counteries, error, isPending } = useCountries();
  if (isPending) return <div>Loading...</div>;

  if (error) return <div>An error eccured({error.message})</div>;
  return counteries.map((country, i) => <Card key={i} country={country} />);
}

export default DisplayCountries;
