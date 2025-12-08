"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";

const Header = ({ jwt }: { jwt: string | null }) => {
  const pathname = usePathname();

  if (pathname === "/auth") return null;

  return <Navbar jwt={jwt} />;
};

export default Header;
