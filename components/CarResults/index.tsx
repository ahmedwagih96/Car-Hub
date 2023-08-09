import { CarCard, ShowMore } from "@/components";
import { CarResultsProps } from "@/types";

function CarResults({ allCars, searchParams }: CarResultsProps) {
  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <>
      {!isDataEmpty ? (
        <section>
          <div className="home__cars-wrapper">
            {allCars?.map((car) => (
              <CarCard car={car} />
            ))}
          </div>
          <ShowMore
            pageNumber={(searchParams.limit || 10) / 10}
            isNext={(searchParams.limit || 10) > allCars.length}
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
