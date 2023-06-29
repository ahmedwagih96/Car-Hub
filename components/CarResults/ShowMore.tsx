"use client"
import { ShowMoreProps } from "@/types"
import CustomButton from "../CustomButton";
import useUpdateParams from "@/hooks/useUpdateParams";

function ShowMore({pageNumber, isNext}: ShowMoreProps) {
  const {updateCustomFilter} = useUpdateParams();
  const handleNavigation = ()=>{
    const newLimit = (pageNumber +1) * 10;
    updateCustomFilter('limit', `${newLimit}`)
  }
  return (
    <div className="w-full flex-center gap-5 mt-10">
      {!isNext && (
        <CustomButton title="Show More" btnType="button" containerStyles="bg-primary-blue rounded-full text-white" handleClick={handleNavigation}/>
      )}
    </div>
  )
}

export default ShowMore