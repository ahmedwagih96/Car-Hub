"use client";
import { Hero, SearchFilters, CarResults, Skeletons } from "@/components";
// Custom Hook
import useFetchCars from "@/hooks/useFetchCars";
export default function Home() {
  const loading = useFetchCars();
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>
        <SearchFilters />
        {loading ? <Skeletons/> : <CarResults />}
      </div>
    </main>
  );
}
