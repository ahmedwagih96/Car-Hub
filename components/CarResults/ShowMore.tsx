"use client";
import { ShowMoreProps } from "@/types";
import CustomButton from "../CustomButton";

// Redux
import { useAppDispatch } from "@/redux/hooks";
import { setFilter } from "@/redux/features/filtersSlice";

function ShowMore({ pageNumber, isNext }: ShowMoreProps) {
  const dispatch = useAppDispatch();
  const handleNavigation = () => {
    dispatch(setFilter({ title: "limit", value: (pageNumber + 1) * 10 }));
  };
  return (
    <div className="w-full flex-center gap-5 mt-10">
      {!isNext && (
        <CustomButton
          title="Show More"
          btnType="button"
          containerStyles="bg-primary-blue rounded-full text-white"
          handleClick={handleNavigation}
        />
      )}
    </div>
  );
}

export default ShowMore;
