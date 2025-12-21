import type { CountryResponseType } from "../utils/types";

function Card({ country }: { country: CountryResponseType }) {
  const {
    capital,
    flags: { alt, png },
    name,
    population,
    region,
  } = country;
  return (
    <div className="rounded-md bg-white shadow-md overflow-hidden">
      <div>
        <img src={png} alt={alt} className="w-full h-36 object-cover sm:h-56" />
      </div>
      <div className="py-4 px-6">
        <h3 className="font-bold text-base">{name.common}</h3>
        <ul className="mt-4">
          <li>
            <span>Population: </span>
            <span>{population}</span>
          </li>
          <li>
            <span>Region: </span>
            <span>{region}</span>
          </li>
          <li>
            <span>Capital: </span>
            <span>{capital}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Card;
