"use client"
import { CarCard, ShowMore } from "@/components";
import { useAppSelector } from "@/redux/hooks";
function CarResults() {
  const { limit, allCars } = useAppSelector((state) => state.filtersReducer);
  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <>
      {!isDataEmpty ? (
        <section>
          <div className="home__cars-wrapper">
            {allCars?.map((car, ind) => (
              <CarCard car={car} key={ind} />
            ))}
          </div>
          <ShowMore
            pageNumber={(limit || 10) / 10}
            isNext={(limit || 10) > allCars.length}
          />
        </section>
      ) : (
        <div className="home__error-container">
          <h2 className="text-black text-xl font-bold">Oops, no results</h2>
        </div>
      )}
    </>
  );
}

export default CarResults;
