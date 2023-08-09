import { useRouter } from "next/navigation";

function useUpdateParams() {
  const router = useRouter();
  const updateCustomFilter = (title: string, value: string) => {
      let searchParams = new URLSearchParams(window.location.search);
      // Set the search parameter
      searchParams = setSearchParam(title, value, searchParams);
      // Update the Search
      updateSearch(searchParams);

  };

  const setSearchParam = (
    title: string,
    value: string,
    searchParams: URLSearchParams
  ) => {
    if (value) {
      searchParams.set(title, value);
    } else {
      searchParams.delete(title);
    }
    return searchParams;
  };
  const updateSearch = (searchParams: URLSearchParams) => {
    const newPathname = `${
      window.location.pathname
    }?${searchParams.toString()}`;

    router.push(newPathname);
  };

  return { updateCustomFilter };
}

export default useUpdateParams;
