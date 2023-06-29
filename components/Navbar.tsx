"use client"

import Link from "next/link";
import Image from "next/image";
import CustomButton from "./CustomButton";

function Navbar() {
  const handleScroll = () => {
    const nextSection = document.getElementById("discover");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <Link href="/" className="flex justify-center items-center">
          <Image
            src="/logo.svg"
            alt="Car Hub Logo"
            width={118}
            height={18}
            className="object-contain"
          />
        </Link>
        <CustomButton
          handleClick={handleScroll}
          title="Explore Cars"
          btnType="button"
          containerStyles="text-white lg:text-primary-blue rounded-full bg-primary-blue xl:bg-white min-w-[-130px]"
        />
      </nav>
    </header>
  );
}

export default Navbar;
