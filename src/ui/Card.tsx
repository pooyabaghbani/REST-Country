import { useNavigate } from "react-router";
import type { CountryResponseType } from "../utils/types";

function Card({ country }: { country: CountryResponseType }) {
  const {
    capital,
    flags: { alt, png },
    name,
    population,
    region,
  } = country;

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(name.common);
  };

  return (
    <div
      className="rounded-md bg-white shadow-md dark:shadow-dark-gray dark:shadow-[0px_0px_8px] overflow-hidden dark:bg-dark-blue hover:scale-105 transition-transform cursor-pointer"
      onClick={handleNavigate}
    >
      <div>
        <img
          src={png}
          alt={alt}
          className="w-full h-56 object-cover sm:h-37.5"
        />
      </div>
      <div className="pt-4 px-6 pb-8">
        <h3 className="font-bold text-base">{name.common}</h3>
        <ul className="mt-4">
          <li>
            <b>Population: </b>
            <span className="font-light">{population}</span>
          </li>
          <li>
            <b>Region: </b>
            <span className="font-light">{region}</span>
          </li>
          <li>
            <b>Capital: </b>
            <span className="font-light">{capital}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Card;
