import Image from "next/image";

function Loading() {
  return (
    <div className="loading">
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
