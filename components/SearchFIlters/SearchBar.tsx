"use client";
import { SearchManufacturer, SearchButton } from "@/components";
import React, { useState } from "react";
import Image from "next/image";
import useFilterSearch from "@/hooks/useFilterSearch";


function SearchBar() {
  const [manufacturer, setManufacturer] = useState<string>("");
  const [model, setModel] = useState<string>("");
  const updateSearchParams = useFilterSearch();
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateSearchParams(model.toLowerCase(), manufacturer.toLowerCase());
  };

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <div className="searchbar__item">
        <Image
          src="/model-icon.png"
          width={25}
          height={25}
          className="absolute w-[20px] h-[20px] ml-4"
          alt="car model"
        />
        <input
          type="text"
          name="model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder="Model"
          className="searchbar__input"
        />
        <SearchButton otherClasses="sm:hidden" />
        <SearchButton otherClasses="max-sm:hidden" />
      </div>
    </form>
  );
}

export default SearchBar;
