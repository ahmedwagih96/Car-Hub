import { useRouter } from "next/navigation";

function useFilterSearch() {
  const router = useRouter();

  const updateSearchParams = (model: string, manufacturer: string) => {
    if (manufacturer.trim() === "" && model.trim() === "") {
      return alert("Please provide some input");
    }

    const searchParams = new URLSearchParams(window.location.search);

    if (model) {
      searchParams.set("model", model);
    } else {
      searchParams.delete("model");
    }

    if (manufacturer) {
      searchParams.set("manufacturer", manufacturer);
    } else {
      searchParams.delete("manufacturer");
    }

    const newPathname = `${
      window.location.pathname
    }?${searchParams.toString()}`;

    router.push(newPathname);
  };
  return updateSearchParams
  }

export default useFilterSearch;
