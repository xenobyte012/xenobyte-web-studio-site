import React from "react";
import heroImage from "../images/hero-img.webp";
import { FaWhatsapp } from "react-icons/fa";

function HeroSection() {
  const scrollToContact = () => {
    const section = document.getElementById("contact");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const phoneNumber = "27704419275";

  const message =
    "Hello, I am interested in building a website for my business.";

  const encodedMessage = encodeURIComponent(message);

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Background */}

      <img
        src={heroImage}
        alt="Professional website development services"
        loading="eager"
        className="
        absolute
        inset-0
        w-full
        h-full
        object-cover"
      />

      {/* Dark overlay */}

      <div
        className="
      absolute
      inset-0
      bg-gradient-to-r
      from-black/85
      via-black/70
      to-black/40"
      />

      {/* Content */}

      <div
        className="
      relative
      z-10
      flex
      flex-col
      justify-center
      h-full
      px-6
      md:px-20
      max-w-7xl"
      >
        {/* Badge */}

        <div
          className="
        bg-blue-500/20
        border
        border-blue-500
        text-blue-300
        px-4
        py-2
        rounded-full
        w-fit
        text-sm
        mb-6"
        >
          🚀 Modern Websites • SEO • Fast Performance
        </div>

        {/* Heading */}

        <h1
          className="
          text-gray-50
        text-4xl
        md:text-7xl
        font-bold
        leading-tight
        max-w-4xl"
        
        >
          Build a Website That Turns Visitors Into
          <span className="text-blue-500"> Paying Customers</span>
        </h1>

        {/* Description */}

        <p
          className="
        text-lg
        md:text-xl
        mt-6
        text-gray-300
        max-w-2xl
        leading-8"
        >
          Xenobyte Web Studio creates high-performance websites designed for
          businesses that want more customers, stronger branding and better
          online visibility.
        </p>

        {/* Buttons */}

        <div
          className="
        flex
        flex-wrap
        gap-5
        mt-10"
        >
          {/* Whatsapp */}

          <a
            href={`https://wa.me/${phoneNumber}?text=${encodedMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="
            flex
            items-center
            gap-3
            bg-green-500
            hover:bg-green-600
            px-8
            py-4
            rounded-xl
            font-semibold
            transition
            hover:scale-105"
          >
            <FaWhatsapp size={28} />
            WhatsApp Us
          </a>

          {/* Contact */}

          <button
            onClick={scrollToContact}
            className="
            bg-blue-600
            hover:bg-blue-700
            px-8
            py-4
            rounded-xl
            font-semibold
            transition
            hover:scale-105"
          >
            Book Free Consultation
          </button>
        </div>

        {/* Trust indicators */}

        <div
          className="'
          hidden md:block
        flex
        flex-wrap
        gap-8
        mt-14
        text-gray-300"
        >
          <div>
            <h3 className="text-2xl font-bold text-white">Fast</h3>

            <p>Optimized Performance</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white">SEO</h3>

            <p>Search Engine Ready</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white">Mobile</h3>

            <p>Responsive Design</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
