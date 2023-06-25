import Link from "next/link";
import { footerLinks } from "@/constants";

function FooterLinks() {
  return (
    <div className="footer__links">
    {footerLinks.map((link) => (
      <div key={link.title} className="footer__link">
        <h3 className="font-bold">{link.title}</h3>
        {link.links.map((item) => (
          <Link
            href={item.url}
            key={item.title}
            className="text-gray-500"
          >
            {item.title}
          </Link>
        ))}
      </div>
    ))}
  </div>
  )
}

export default FooterLinks