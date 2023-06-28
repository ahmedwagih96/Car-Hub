import { CarCard } from "@/components";
import { CarProps } from "@/types";

async function CarResults({allCars}: {allCars: CarProps}) {
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
