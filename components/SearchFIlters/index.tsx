import { SearchBar, CustomerFilter } from "@/components";
import { fuels, yearsOfProduction } from "@/constants";

type Props = {};

function SearchFilters({}: Props) {
  return (
    <div className="home__filters">
      <SearchBar />
      <div className="home__filter-container">
        <CustomerFilter title="fuel" options={fuels} />
        <CustomerFilter title="year" options={yearsOfProduction} />
      </div>
    </div>
  );
}

export default SearchFilters;
