import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t bg-background py-6 md:py-8">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/lifecore-nbg.png"
                alt="LifeCore Biointegrative Inc."
                width={250}
                height={250}
                className="rounded-md"
              />
            </div>
            <p className="text-sm text-muted-foreground ml-5">
              Advanced healthcare solutions combining laboratory services with
              holistic approaches.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-[#279445] mb-2">Quick Links</h3>
            <div className="grid gap-2">
              <Link href="/" className="text-sm text-muted-foreground hover:text-[#4fb74c]">Home</Link>
              <Link href="/services" className="text-sm text-muted-foreground hover:text-[#4fb74c]">Services</Link>
              <Link href="/products" className="text-sm text-muted-foreground hover:text-[#4fb74c]">Products</Link>
              <Link href="/privacy" className="text-sm text-muted-foreground hover:text-[#4fb74c]">Privacy Policy</Link>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-[#279445] mb-2">Contact</h3>
            <div className="grid gap-2">
              <p className="text-sm text-muted-foreground">7/F ORE Central, 9th St. cor. 31st Ave., BGC, Taguig</p>
              <p className="text-sm text-muted-foreground">+63 977-817-0723</p>
              <p className="text-sm text-muted-foreground">info.lifecoreph@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-6 flex flex-col items-center justify-center text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()}{' '}
            <span className="text-[#279445] font-bold">LifeCore Bio-Integrative Inc.</span> All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
