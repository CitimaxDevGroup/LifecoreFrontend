"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur-sm">
      <div className="container flex h-20 items-center justify-between">
        <div className="flex-shrink-0">
          <Link href="/">
            <Image
              src="/lifecore-nbg.png"
              alt="LifeCore Biointegrative Inc."
              width={250}
              height={250}
              className="rounded-md"
            />
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6 justify-center flex-1">
          <Link href="/" className="text-sm font-medium text-[#246321] hover:text-[#279445]">
            Home
          </Link>
          <Link href="#" className="text-sm font-medium text-[#246321] hover:text-[#279445]">
            About Us
          </Link>
          <Link href="/services" className="text-sm font-medium text-[#246321] hover:text-[#279445]">
            Services
          </Link>
          <Link href="/products" className="text-sm font-medium text-[#246321] hover:text-[#279445]">
            Products
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <Link href="/Contactus" className="hidden md:inline-block">
            <Button size="sm" className="bg-[#279445] hover:bg-[#14722f] text-white">
              <Phone className="mr-2 h-4 w-4" />
              Contact Us
            </Button>
          </Link>

          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="h-6 w-6 text-[#246321]" /> : <Menu className="h-6 w-6 text-[#246321]" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t px-4 py-3 shadow space-y-3 text-center">
          <Link href="/" className="block text-[#246321] hover:text-[#279445]">
            Home
          </Link>
          <Link href="#" className="block text-[#246321] hover:text-[#279445]">
            About Us
          </Link>
          <Link href="/services" className="block text-[#246321] hover:text-[#279445]">
            Services
          </Link>
          <Link href="/products" className="block text-[#246321] hover:text-[#279445]">
            Products
          </Link>
          <Link href="/Contactus">
            <Button size="sm" className="w-full bg-[#279445] hover:bg-[#14722f] text-white mt-2">
              <Phone className="mr-2 h-4 w-4" />
              Contact Us
            </Button>
          </Link>
        </div>
      )}
    </header>
  );
}
