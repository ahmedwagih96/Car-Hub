"use client";
import { SearchManufacturer } from "@/components";
import { useState } from "react";
function SearchBar() {
  const [manufacturer, setManufacturer] = useState<string>("");
  const handleSearch = () => {};
  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
      </div>
    </form>
  );
}

export default SearchBar;
