import Link from "next/link";

function FooterCopyright() {
  return (
          <div className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 py-10">
        <p>@2023 CarHub. All Rights Reserved</p>
        <div className="footer__copyrights-link">
          <Link href="/" className="text-gray-500">
            Privacy Policy
          </Link>
          <Link href="/" className="text-gray-500">
            Terms of Use
          </Link>
        </div>
      </div>
  )
}

export default FooterCopyright