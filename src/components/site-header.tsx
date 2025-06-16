import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Calendar, Phone } from "lucide-react";
import { UserAccountNav } from "./user-account-nav";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-white">
      <div className="container flex h-20 items-center justify-between">
        <div className="flex items-center">
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

        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/"
            className="text-sm font-medium text-[#246321] hover:text-[#279445]"
          >
            Home
          </Link>
          <Link
            href=""
            className="text-sm font-medium text-[#246321] hover:text-[#279445]"
          >
            About Us
          </Link>
          <Link
            href="/advisory-board"
            className="text-sm font-medium text-[#246321] hover:text-[#279445]"
          >
            Advisory Board
          </Link>
          <Link
            href="/job-board"
            className="text-sm font-medium text-[#246321] hover:text-[#279445]"
          >
            Job Board
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link href={"/Contactus"}>
            <Button
              size="sm"
              className="bg-[#279445] hover:bg-[#14722f] text-white"
            >
              <span className="sr-only">Contact Us</span>
              <Phone className="mr-2 h-4 w-4" /> Contact Us
            </Button>
          </Link>

          {/* Optional Book Appointment button */}
          {/* <Link href="/appointments">
            <Button size="sm" className="hidden sm:flex bg-[#246321] hover:bg-[#14722f] text-white">
              <Calendar className="mr-2 h-4 w-4" /> Book Appointment
            </Button>
          </Link> */}

          <UserAccountNav />
        </div>
      </div>
    </header>
  );
}

// #4fb74c
// #279445
// #14722f
// #246321
// #444848