import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { seminarInfo } from "@/data/seminar";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/speakers", label: "Speakers" },
  { href: "/programme", label: "Programme" },
  { href: "/call-for-papers", label: "Call for Papers" },
  { href: "/registration", label: "Registration" },
  { href: "/committee", label: "Committee" },
  { href: "/sponsors", label: "Sponsors" },
  { href: "/venue", label: "Venue & Travel" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* About */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 bg-gold rounded-lg flex items-center justify-center">
                <span className="text-navy-dark text-xs font-extrabold">
                  UM
                </span>
              </div>
              <span className="font-bold text-white text-sm">
                UM NextGen 2026
              </span>
            </div>
            <p className="text-blue-200 text-sm leading-relaxed">
              {seminarInfo.shortName} is an international academic gathering
              bringing together scholars, industry leaders, and policymakers to
              advance sustainable digital transformation.
            </p>
            <div className="mt-4 flex items-center gap-2 text-gold text-sm font-medium">
              <span>{seminarInfo.dateRange}</span>
              <span className="text-blue-400">•</span>
              <span>Kuala Lumpur</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-1.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-blue-200 hover:text-gold text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-sm text-blue-200">
                <Mail size={15} className="text-gold shrink-0 mt-0.5" />
                <a
                  href={`mailto:${seminarInfo.email}`}
                  className="hover:text-gold transition-colors"
                >
                  {seminarInfo.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-blue-200">
                <Phone size={15} className="text-gold shrink-0 mt-0.5" />
                <span>{seminarInfo.phone}</span>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-blue-200">
                <MapPin size={15} className="text-gold shrink-0 mt-0.5" />
                <span>{seminarInfo.address}</span>
              </li>
            </ul>
            <div className="mt-5 pt-4 border-t border-navy-light">
              <p className="text-xs text-blue-300 leading-relaxed">
                Organised by{" "}
                <span className="text-white font-medium">
                  {seminarInfo.organiserFaculties[0]}
                </span>{" "}
                &amp;{" "}
                <span className="text-white font-medium">
                  {seminarInfo.organiserFaculties[1]}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-navy-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-blue-300">
          <span>
            © {seminarInfo.year} {seminarInfo.shortName}. All rights reserved.
          </span>
          <span>Organised by Universiti Malaya, Kuala Lumpur, Malaysia</span>
        </div>
      </div>
    </footer>
  );
}
