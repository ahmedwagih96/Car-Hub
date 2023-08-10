function Skeleton() {
  return (
    <div className="skeleton-card skeleton-pulse">
      <div className="car-card__content">
        <h2 className="car-card__content-title h-[26px] w-[153px] bg-blue-50 rounded-lg"></h2>
      </div>
      <p className="flex mt-6 text-[32px] font-extrabold w-[75px] h-[45px] bg-blue-50 rounded-lg" ></p>
      <div className="relative w-full h-40 my-3 object-contain">
        <div className="h-[160px] w-[265px] bg-blue-50 rounded-lg"></div>
      </div>
      <div className="relative flex w-full mt-2">
        <div className="flex w-full justify-between text-gray">
          <div className="w-[50px] h-[50px] bg-blue-50 rounded-lg"></div>
          <div className="w-[50px] h-[50px] bg-blue-50 rounded-lg"></div>
          <div className="w-[47px] h-[50px] bg-blue-50 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
}

export default Skeleton;
