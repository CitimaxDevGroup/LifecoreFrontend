'use client';

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Footer: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <footer className="w-full border-t bg-background py-6 md:py-8">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <div className="flex justify-center md:justify-start mb-4">
              <Image
                src="/lifecore-nbg.png"
                alt="LifeCore Biointegrative Inc."
                width={250}
                height={250}
                className="rounded-md"
              />
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              Your Trusted Source of Health Solutions.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-semibold text-[#279445] mb-2">Quick Links</h3>
            <div className="grid gap-2">
              <Link href="/" className="text-sm text-muted-foreground hover:text-[#4fb74c]">Home</Link>
              <Link href="/services" className="text-sm text-muted-foreground hover:text-[#4fb74c]">Services</Link>
              <Link href="/products" className="text-sm text-muted-foreground hover:text-[#4fb74c]">Products</Link>
              <button
                onClick={() => setShowModal(true)}
                className="text-sm text-muted-foreground hover:text-[#4fb74c] text-left"
              >
                Privacy Policy
              </button>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-semibold text-[#279445] mb-2">Contact</h3>
            <div className="grid gap-2">
              <p className="text-sm text-muted-foreground">7/F ORE Central, 9th St. cor. 31st Ave., BGC, Taguig</p>
              <p className="text-sm text-muted-foreground">+63 977-817-0723</p>
              <p className="text-sm text-muted-foreground">info.lifecoreph@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t pt-6 flex flex-col items-center text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()}{' '}
            <span className="text-[#279445] font-bold">LifeCore Bio-Integrative Inc.</span> All rights reserved.
          </p>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-4">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="bg-white max-w-2xl w-full rounded-lg shadow-lg p-6 relative flex flex-col max-h-[80vh] overflow-y-auto"
          >
            <h2 className="text-xl font-bold text-[#279445]">Privacy Policy</h2>
            <div className="text-sm text-gray-700 space-y-4">
              <p className="italic text-xs text-muted-foreground">Effective Date: January 2025</p>
              <p>
                At <strong>LIFECORE Bio-Integrative Inc.</strong>, we are committed to respecting and protecting your privacy.
                We want to make it clear that we do not collect, store, or process any personal information through our website
                or services unless you voluntarily provide it. The only instance in which we may receive personal information is
                when you choose to contact us directly, such as by sending an email. Any information you provide—such as your name,
                email address, or the contents of your message—will be used solely to respond to your inquiry and will not be shared,
                sold, or disclosed to third parties.
              </p>
              <p>
                Our website does not use cookies, tracking technologies, or analytics tools that collect identifiable information.
                It is designed purely to provide general information and does not require users to sign up, register, or input any data.
                We uphold a strict no-data-collection policy unless initiated by you through direct communication.
              </p>
              <p>
                If you have any questions or concerns about this Privacy Policy or how your information is handled, you may contact us
                at <i>info.lifecoreph@gmail.com</i>. Any updates to this policy will be posted on this page with a revised
                effective date.
              </p>
            </div>
            <div className="mt-6 flex justify-center">
              <button
                onClick={() => setShowModal(false)}
                className="px-6 py-2 rounded-md bg-[#279445] text-white hover:bg-[#1e6e35] transition"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div >
      )}
    </footer >
  );
};

export default Footer;
