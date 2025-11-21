"use client";

import { LogOut, Menu, X } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { useState } from "react";

// import { useState } from "react";
// import Link from "next/link";
// import { Menu, X } from "lucide-react";
// import { Button } from "@/components/ui/button";

// export default function BlogNavbar() {
//   const [open, setOpen] = useState(false);

//   return (
//     <nav className="w-full bg-white shadow-md sticky top-0 z-50">
//       <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
//         {/* Logo */}
//         <Link href="/" className="text-2xl font-bold text-gray-900">
//           MyBlog
//         </Link>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex items-center gap-6 text-gray-700 font-medium">
//           <Link href="/" className="hover:text-black transition">
//             Home
//           </Link>
//           <Link href="/blogs" className="hover:text-black transition">
//             Blogs
//           </Link>
//           <Link href="/categories" className="hover:text-black transition">
//             Categories
//           </Link>
//           <Link href="/about" className="hover:text-black transition">
//             About
//           </Link>
//         </div>

//         {/* Auth Buttons */}
//         <div className="hidden md:flex items-center gap-3">
//           <Button variant="outline">Login</Button>
//           <Button>Signup</Button>
//         </div>

//         {/* Mobile Menu Button */}
//         <button className="md:hidden p-2" onClick={() => setOpen(!open)}>
//           {open ? <X size={26} /> : <Menu size={26} />}
//         </button>
//       </div>

//       {/* Mobile Dropdown */}
//       {open && (
//         <div className="md:hidden bg-white border-t shadow-sm animate-slideDown">
//           <div className="flex flex-col p-4 space-y-4 text-gray-700">
//             <Link
//               href="/"
//               className="hover:text-black"
//               onClick={() => setOpen(false)}
//             >
//               Home
//             </Link>
//             <Link
//               href="/blogs"
//               className="hover:text-black"
//               onClick={() => setOpen(false)}
//             >
//               Blogs
//             </Link>
//             <Link
//               href="/categories"
//               className="hover:text-black"
//               onClick={() => setOpen(false)}
//             >
//               Categories
//             </Link>
//             <Link
//               href="/about"
//               className="hover:text-black"
//               onClick={() => setOpen(false)}
//             >
//               About
//             </Link>

//             <div className="flex items-center gap-3 pt-2">
//               <Button variant="outline" className="w-full">
//                 Login
//               </Button>
//               <Button className="w-full">Signup</Button>
//             </div>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className="w-full bg-white shadow-md sticky top-0 z-50">
        <div className=" mx-auto px-4 flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold">
            myBlog
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="outline">Login</Button>
            <Button>Signup</Button>
            <Link href="/profile" className="text-gray-700 hover:text-black">
              Profile
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button className="md:hidden" onClick={() => setOpen(!open)}>
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {open && (
          <div className="md:hidden bg-white shadow-inner px-4 py-4 space-y-4 animate-slideDown">
            <Button variant="outline" className="w-full">
              Login
            </Button>
            <Button className="w-full">Signup</Button>
            <Link href="/profile" className="block text-gray-700 font-medium">
              Profile
            </Link>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
