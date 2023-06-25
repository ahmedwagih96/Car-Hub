import { FooterCopyright, FooterLinks, FooterLogo } from "@/components";

function Footer() {
  return (
    <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-100">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <FooterLogo />
        <FooterLinks />
      </div>
      <FooterCopyright />
    </footer>
  );
}

export default Footer;
