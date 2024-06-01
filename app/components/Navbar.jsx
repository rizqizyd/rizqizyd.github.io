import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav className="fixed flex items-center gap-3 bottom-5 left-1/2 -translate-x-1/2 py-1 px-5 rounded-full bg-orange-100 h-12">
      <Link href="/">Home</Link>
      <Link href="/portfolio">Portfolio</Link>
    </nav>
  );
}
