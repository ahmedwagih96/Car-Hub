import { SearchBar, CustomerFilter} from "@/components";

type Props = {};

function SearchFilters({}: Props) {
  return (
    <div className="home__filters">
      <SearchBar />
      <div className="home__filter-container">
        <CustomerFilter title="fuel" />
        <CustomerFilter title="year" />
      </div>
    </div>
  );
}

export default SearchFilters;
