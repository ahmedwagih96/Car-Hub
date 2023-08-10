import { CustomerFilter } from "@/components";
import { fuels, yearsOfProduction, manufacturers } from "@/constants";
function SearchFilters() {
  return (
    <div className="home__filters">
      <div className="home__filter-container">
        <CustomerFilter
          title="manufacturer"
          options={manufacturers}
        />
        <CustomerFilter 
          title="fuel" 
          options={fuels} 
        />
          
        <CustomerFilter
          title="year"
          options={yearsOfProduction}
        />
      </div>
    </div>
  );
}

export default SearchFilters;
