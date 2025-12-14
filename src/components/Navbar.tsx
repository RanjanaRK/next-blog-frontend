"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "./ui/button";

const Navbar = ({ jwt }: { jwt: string | null }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="mx-auto bg-white  sticky top-0 z-50 max-w-7xl">
        <div className=" mx-auto px-4 flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-bold">
            myBlog
          </Link>

          <div className="hidden md:flex items-center gap-4">
            {jwt ? (
              <Link href="/profile" className="text-gray-700 hover:text-black">
                Profile
              </Link>
            ) : (
              <Button variant="outline">
                <Link href="/auth" className="block text-gray-700 font-medium">
                  Login
                </Link>
              </Button>
            )}
          </div>

          <button className="md:hidden" onClick={() => setOpen(!open)}>
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden bg-white shadow-inner px-4 py-4 space-y-4 animate-slideDown">
            {jwt ? (
              <Link href="/profile" className="text-gray-700 hover:text-black">
                Profile
              </Link>
            ) : (
              <Button variant="outline">
                <Link href="/auth" className="block text-gray-700 font-medium">
                  Login
                </Link>
              </Button>
            )}
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
