import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { useSearchParams } from "react-router";

function Filter({ title, options }: { title: string; options: string[] }) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  function handleClick(region: string) {
    searchParams.set("region", region);
    if (searchParams.get("country")) searchParams.delete("country");
    setSearchParams(searchParams);
    setIsOpen(() => false);
  }

  return (
    <div className="relative">
      <div
        onClick={() => setIsOpen(is => !is)}
        className="w-46 rounded-md p-4 gap-6 shadow-[0_0_6px_#0000003d] flex justify-between items-center cursor-pointer hover:bg-[#00000013] dark:bg-dark-blue dark:hover:bg-dark-blue/70"
      >
        {title}
        <ChevronDown size={20} />
      </div>
      <ul
        className={`w-46 opacity-0 h-0 rounded-md p-4 shadow-[0_0_6px_#0000003d] dark:bg-dark-blue absolute z-10 bg-white transition-all duration-300 space-y-6 mt-2 ${
          isOpen && "h-57 opacity-100"
        }`}
      >
        {options.map(option => (
          <li
            className="cursor-pointer"
            key={option}
            onClick={() => handleClick(option)}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Filter;
