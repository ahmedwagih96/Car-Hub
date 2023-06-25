import Image from "next/image";

function FooterLogo() {
  return (
    <div className="flex flex-col justify-start items-start gap-6">
      <Image
        src="/logo.svg"
        alt="logo"
        width={118}
        height={18}
        className="object-contain"
      />
      <p className="text-base text-gray-700">
        Carhub 2023 <br /> All Rights Reserved &copy;
      </p>
    </div>
  );
}

export default FooterLogo;
