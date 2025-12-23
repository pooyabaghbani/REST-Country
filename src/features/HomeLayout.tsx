import { Search } from "lucide-react";
import Filter from "../ui/Filter";
import Input from "../ui/Input";
import { useSearchParams } from "react-router";
import DisplayCountries from "../features/DisplayCountries";
import { useEffect } from "react";

function HomeLayout() {
  const [searchParams, setSearchParams] = useSearchParams();

  // handle search and using it as searchParams for a global state
  function handleSearch(search: string) {
    if (search.length === 0) {
      searchParams.delete("country");
      setSearchParams(searchParams);
      return;
    }
    searchParams.set("country", search);
    setSearchParams(searchParams);
  }

  // get initial search params and set it as defaultvalue of input field
  useEffect(() => {
    const search = searchParams.get("country");
    if (search === null) return;
    searchParams.set("country", search);
    setSearchParams(searchParams);
  }, [searchParams, setSearchParams]);

  return (
    <>
      <div className="flex flex-col md:flex-row justify-between mb-10 md:items-center gap-8 md:gap-0">
        <Input
          placeholder="Search for a country..."
          name="country"
          icon={<Search size={20} />}
          defaultValue={searchParams.get("country") || ""}
          onChange={e => {
            handleSearch(e.target.value);
          }}
        />

        <Filter />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 pb-10">
        <DisplayCountries />
      </div>
    </>
  );
}

export default HomeLayout;
