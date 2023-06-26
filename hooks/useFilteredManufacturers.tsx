import { manufacturers } from "@/constants";
import { useState } from "react";

function useFilteredManufacturers() {
  const [query, setQuery] = useState<string>("");
  const filteredManufacturers =
    query === ""
      ? manufacturers
      : manufacturers.filter((item) =>
          item
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );
  return {query, setQuery, filteredManufacturers};
}

export default useFilteredManufacturers;
