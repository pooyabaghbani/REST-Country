import { useCountries } from "../features/country/getCounteries";
import Card from "../ui/Card";

function Home() {
  const { counteries, error, isPending } = useCountries();

  if (isPending) return <div>Loading...</div>;

  if (error) return <div>An error eccured({error.message})</div>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {counteries.map((country, i) => (
        <Card key={i} country={country} />
      ))}
    </div>
  );
}

export default Home;
