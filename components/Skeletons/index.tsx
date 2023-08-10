import {Skeleton} from '@/components'

function index() {
  const array = Array(8).fill(1);
  return (
    <div className="home__cars-wrapper">
      {array.map((arr) => (
        <Skeleton key={arr} />
      ))}
    </div>
  );
}

export default index;
