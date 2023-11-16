import { fetchCars } from "@/utils";
import { useEffect, useState } from "react";
import { setCars } from "@/redux/features/filtersSlice";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
function useFetchCars() {
  const dispatch = useAppDispatch();

  const { fuel, year, limit, manufacturer } = useAppSelector(
    (state) => state.filtersReducer
  );

  const [loading, setLoading] = useState<boolean>(true);

  const getCars = async () => {
    setLoading(true);
    try {
      const allCars = await fetchCars({
        manufacturer: manufacturer || "",
        year: year || 2022,
        fuel: fuel || "",
        limit: limit || 10,
      });
      dispatch(setCars(allCars));
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCars();
  }, [manufacturer, year, fuel, limit]);

  return loading;
}

export default useFetchCars;
