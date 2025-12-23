import { useNavigate } from "react-router";
import { useNeighbours } from "../features/country/getNeighbours";
import type { CountryDetailsType } from "../utils/types";
import Button from "./Button";

function Detail({ country }: { country: CountryDetailsType }) {
  const navigate = useNavigate();
  const handleNavigate = (x: string) => {
    navigate(`/${x}`);
  };

  const {
    name: { common, nativeName },
    population,
    region,
    subregion,
    capital,
    flags: { alt, png },
    tld,
    currencies,
    languages,
    borders,
  } = country;

  const { error, isPending, neighbours } = useNeighbours(borders);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-14 lg:gap-20 mt-10 lg:mt-20 pb-10">
      <span className="h-62.5 w-full sm:h-auto max-h-96">
        <img src={png} alt={alt} className="h-full w-full object-cover" />
      </span>
      <div className="pt-5">
        <h2 className="font-extrabold text-3xl">{common}</h2>
        <div className="flex flex-col lg:flex-row gap-10 mt-6">
          <ul className="flex flex-col gap-2.5">
            <li>
              <b>Native Name: </b>
              <span className="font-light">
                {nativeName[Object.keys(nativeName)[0]].common || "none"}
              </span>
            </li>
            <li>
              <b>Population: </b>
              <span className="font-light">{population}</span>
            </li>
            <li>
              <b>Region: </b>
              <span className="font-light">{region}</span>
            </li>
            <li>
              <b>Sub Region: </b>
              <span className="font-light">{subregion || "none"}</span>
            </li>
            <li>
              <b>Capital: </b>
              <span className="font-light">{capital?.[0] || "none"}</span>
            </li>
          </ul>
          <ul className="flex flex-col gap-2.5">
            <li>
              <b>Top Level Domain: </b>
              <span className="font-light">{tld}</span>
            </li>
            <li>
              <b>Currencies: </b>
              <span className="font-light">
                {Object.keys(currencies)
                  .map(cur => currencies[cur].name)
                  .join(", ")}
              </span>
            </li>
            <li>
              <b>Languages: </b>
              <span className="font-light">
                {Object.values(languages).join(", ")}
              </span>
            </li>
          </ul>
        </div>

        <div className="lg:flex lg:gap-4 mt-14 lg:items-center lg:flex-wrap">
          <b>Border Countries: </b>
          <div className="mt-4 lg:mt-0 flex flex-wrap gap-4">
            {neighbours?.length ? (
              neighbours?.map(neighbour => (
                <Button
                  key={neighbour.name.common}
                  onClick={() => handleNavigate(neighbour.name.common)}
                  className="h-8 w-32 cursor-pointer bg-white hover:bg-very-dark-blue/10 dark:bg-dark-blue dark:hover:bg-white/10 transition-colors shadow-[0px_0px_6px] shadow-dark-blue/25 dark:shadow-very-dark-blue"
                >
                  {neighbour.name.common}
                </Button>
              ))
            ) : (
              <span>{error ? error.message : "No border countries"}</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
