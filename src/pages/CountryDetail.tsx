import { useParams } from "react-router";

function CountryDetail() {
  const { country } = useParams();
  return <div>{country}</div>;
}

export default CountryDetail;
