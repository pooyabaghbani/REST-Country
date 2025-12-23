import { useNavigate, useParams } from "react-router";
import Button from "../../ui/Button";
import { ArrowLeft } from "lucide-react";
import { useCountry } from "./getCountery";
import Detail from "../../ui/Detail";

function DetailsLayout() {
  const { country } = useParams();
  const navigate = useNavigate();

  const { countery: countryData, error, isPending } = useCountry(country);

  if (isPending) return <p>Loading...</p>;

  if (error) return <p>error: {error.message}</p>;

  return (
    <>
      <Button
        className="h-10 w-32 cursor-pointer bg-white dark:bg-dark-blue dark:hover:bg-white/10 hover:bg-very-dark-blue/10 transition-colors shadow-[0px_0px_6px] shadow-dark-blue/45 dark:shadow-very-dark-blue"
        onClick={() => navigate(-1)}
      >
        <ArrowLeft size={20} />
        Back
      </Button>
      <Detail country={countryData?.at(0)} />
    </>
  );
}

export default DetailsLayout;
