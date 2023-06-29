import { useRouter } from "next/navigation";

function useFilterSearch() {
  const router = useRouter();

  // UPDATE SEARCH BAR
  const updateSearchBar = (model: string, manufacturer: string) => {
    let searchParams = new URLSearchParams(window.location.search);
    // If the user did not provide a model and a manufacturer
    if (manufacturer.trim() === "" && model.trim() === "") {
      return alert("Please provide some input");
    }

    // Set the search parameter
    searchParams = setSearchParam("model", model, searchParams)
    searchParams = setSearchParam("manufacturer", manufacturer, searchParams)
    
    // Update the Search
    updateSearch(searchParams)
  };

  // UPDATE CUSTOM FILTER
  const updateCustomFilter = (title: string, value: string) => {
    let searchParams = new URLSearchParams(window.location.search);
    // Set the search parameter
    searchParams = setSearchParam(title, value, searchParams)
    // Update the Search
    updateSearch(searchParams)
  };

  const setSearchParam = (title:string, value:string, searchParams:URLSearchParams)=>{
    if (value) {
      searchParams.set(title, value);
    } else {
      searchParams.delete(title);
    }
    return searchParams
  }
  const updateSearch = (searchParams: URLSearchParams) => {
    const newPathname = `${
      window.location.pathname
    }?${searchParams.toString()}`;

    router.push(newPathname);
  };

  return { updateSearchBar, updateCustomFilter };
}

export default useFilterSearch;
