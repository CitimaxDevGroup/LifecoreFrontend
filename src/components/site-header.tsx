import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Calendar, Phone } from "lucide-react";
import { UserAccountNav } from "./user-account-nav";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between">
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/lifecore.jpg"
              alt="LifeCore Biointegrative Inc."
              width={250}
              height={250}
              className="rounded-md"
            />
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium hover:text-primary">
            Home

            
          </Link>
          <Link
            href="/advisory-board"
            className="text-sm font-medium hover:text-primary"
          >
            Advisory Board

          </Link>
          <Link
            href="/job-board"
            className="text-sm font-medium hover:text-primary"
          >
            Job Board
          </Link>
          <Link
            href="/appointments"
            className="text-sm font-medium hover:text-primary"
          >
            Appointments
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          {/* Contact Us button as a phone link */}
          <Link href="+63 977-817-0723" passHref>
            <Button variant="outline" size="sm" className="hidden md:flex">
              <Phone className="mr-2 h-4 w-4" /> Contact Us
            </Button>
          </Link>

          <Link href="/appointments">
            <Button size="sm" className="hidden sm:flex">
              <Calendar className="mr-2 h-4 w-4" /> Book Appointment
            </Button>
          </Link>
          <UserAccountNav />
        </div>
      </div>
    </header>
  );
}
