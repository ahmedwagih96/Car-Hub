import Image from "next/image";

function Loading() {
  return (
    <div className="loading">
      <h1>LOADING....</h1>
      <Image
        src="/loader.svg"
        alt="loader"
        width={50}
        height={50}
        className="object-contain"
      />
    </div>
  );
}

export default Loading;
