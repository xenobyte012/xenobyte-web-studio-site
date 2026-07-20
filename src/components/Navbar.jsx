import React, { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = ["Home", "Packages", "About", "Contact"];
const handleQuote = () => {
  fbq("track", "Lead");

  // Your existing code
};
  return (
    <>
      {/* Desktop Navbar */}

      <nav
        className="
        fixed
        top-0
        w-full
        z-50
        hidden
        md:flex
        justify-between
        items-center
        px-10
        py-5

        bg-black/40
        backdrop-blur-xl

        border-b
        border-white/10"
      >
        {/* Logo */}

        <h1
          className="
          text-3xl
          font-bold
          text-white"
        >
          Xenobyte
          <span
            className="
            text-blue-500 pl-2"
          >
            Web Studio
          </span>
        </h1>

        {/* Links */}

        <div
          className="
          flex
          gap-10
          text-white"
        >
          {navLinks.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="
              relative

              hover:text-blue-500

              transition

              after:absolute
              after:left-0
              after:bottom-[-5px]
              after:w-0
              after:h-[2px]
              after:bg-blue-500

              hover:after:w-full
              after:transition-all"
            >
              {item}
            </a>
          ))}
        </div>

        {/* CTA */}

        <a
          href="#contact"
          className="
          px-6
          py-3

          bg-blue-600

          rounded-full

          hover:bg-blue-700

          transition"
          onClick={handleQuote}
        >
          Get Started
        </a>
      </nav>

      {/* Mobile Navbar */}

      <nav
        className="
        fixed
        top-0
        w-full
        z-50

        flex
        md:hidden

        justify-between
        items-center

        px-5
        py-4

        bg-black/50
        backdrop-blur-xl"
      >
        <h1
          className="
          font-bold
          text-lg
          text-white"
        >
          Xenobyte
          <span className="text-blue-500 pl-2">Web Studio</span>
        </h1>

        <button
          onClick={() => setIsOpen(true)}
          className="
          text-white"
        >
          <Menu size={30} />
        </button>
      </nav>

      {/* Overlay */}

      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="
          fixed
          inset-0

          bg-black/60

          z-40"
        />
      )}

      {/* Sidebar */}

      <div
        className={`

        fixed

        top-0
        right-0

        h-screen
        w-72

        bg-[#0F172A]

        backdrop-blur-xl

        border-l
        border-gray-800

        z-50

        p-8

        transition-transform

        duration-500

        ${isOpen ? "translate-x-0" : "translate-x-full"}

        `}
      >
        {/* Close */}

        <button
          onClick={() => setIsOpen(false)}
          className="
          text-white
          mb-12"
        >
          <X size={30} />
        </button>

        {/* Links */}

        <div
          className="
          flex
          flex-col
          gap-8"
        >
          {navLinks.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="
              text-xl

              text-white

              hover:text-blue-500

              transition"
            >
              {item}
            </a>
          ))}

          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="
            bg-blue-600

            px-6
            py-4

            rounded-xl

            text-center

            mt-4"
            onClick={handleQuote}
          >
            Get Started
          </a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
