import { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { Bounded } from "./Bounded";

export const Footer = () => {
  return (
    <footer aria-labelledby="footer-heading" className="bg-[#D3CCC1] py-16">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <Bounded>
        <div className="grid gap-10 md:grid-cols-3">
          <NavGroup title="Shop">
            <NavLink href="#">Apartments</NavLink>
            <NavLink href="#">Studio</NavLink>
            <NavLink href="#">House</NavLink>
          </NavGroup>

          <NavGroup title="About">
            <NavLink href="#">About</NavLink>
            <NavLink href="#">Our announcements</NavLink>
            <NavLink href="#">Real Estate Paris</NavLink>
          </NavGroup>

          <NavGroup title="Social">
            <NavLink href="#">Instagram</NavLink>
            <NavLink href="#">X (Twitter)</NavLink>
            <NavLink href="#">Facebook</NavLink>
          </NavGroup>
        </div>

        {/* Bottom footer */}
        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-[#141414] pt-8 md:flex-row">
          <p className="text-center text-sm text-[#141414]">
            © {new Date().getFullYear()} Real Estate Paris Inc. All rights reserved
          </p>
          <Link
            href="/"
            aria-label="Côte Royale Home"
            className="order-first md:order-none"
          >
            <Image src="/logo.svg" alt="REAL ESTATE PARIS" width={150} height={25} />
          </Link>
          <ul
            aria-label="Legal"
            className="flex flex-wrap justify-center gap-6 text-sm text-[#333333]"
          >
            <li>
              <Link href="#" className="hover:text-[#000000]">
                Terms &amp; conditions
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-[#000000]">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
      </Bounded>
    </footer>
  );
};

type NavGroupProps = {
  title: string;
  children?: ReactNode;
};

const NavGroup = ({ title, children }: NavGroupProps) => (
  <nav aria-labelledby={`${title.toLowerCase()}-heading`}>
    <h3
      id={`${title.toLowerCase()}-heading`}
      className="mb-6 text-xl font-medium text-[#040404]"
    >
      {title}
    </h3>
    <ul className="space-y-4" role="list">
      {children}
    </ul>
  </nav>
);

type NavLinkProps = {
  href: string;
  children: ReactNode;
};

const NavLink = ({ href, children }: NavLinkProps) => {
  return (
    <li>
      <Link href={href} className="text-[#040404] hover:text-[#8C7A6B] transition-colors duration-200">
        {children}
      </Link>
    </li>
  );
};
