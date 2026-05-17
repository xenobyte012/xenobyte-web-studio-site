import React from "react";
import {
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa6";

import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-14 px-6 border-t border-gray-800">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
        {/* Company info */}
        <div>
          <h2 className="text-3xl font-bold text-white">
            Xenobyte <span className="text-blue-500">Web Studio</span>
          </h2>

          <p className="mt-4 text-sm leading-7">
            Xenobyte Web Studio creates modern websites, web applications,
            responsive business solutions, SEO optimization and digital
            experiences that help brands grow online.
          </p>
        </div>

        {/* Navigation */}
        <nav aria-label="Footer Navigation">
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>

          <ul className="space-y-3">
            <li>
              <Link to="#home" className="hover:text-blue-500 transition">
                Home
              </Link>
            </li>

            <li>
              <a href="#packages" className="hover:text-blue-500 transition">
                Packages
              </a>
            </li>

            <li>
              <a href="#about" className="hover:text-blue-500 transition">
                About Us
              </a>
            </li>

            <li>
              <a href="#contact" className="hover:text-blue-500 transition">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Contact + socials */}
        <div>
          <h3 className="text-white font-semibold mb-4">Connect With Us</h3>

          <div className="flex gap-5">
            <a
              href="https://wa.me/704419275"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="bg-gray-900 p-3 rounded-full hover:bg-green-500 hover:scale-110 transition duration-300"
            >
              <FaWhatsapp size={22} />
            </a>

            <a
              href="https://facebook.com/xenobytewebstudio"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="bg-gray-900 p-3 rounded-full hover:bg-blue-600 hover:scale-110 transition"
            >
              <FaFacebookF size={22} />
            </a>

            <a
              href="https://instagram.com/xenobytewebstudio"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="bg-gray-900 p-3 rounded-full hover:bg-pink-600 hover:scale-110 transition"
            >
              <FaInstagram size={22} />
            </a>

            <a
              href="https://tiktok.com/@xenobyte.web.studio"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Tiktok"
              className="bg-gray-900 p-3 rounded-full hover:bg-white hover:text-black hover:scale-110 transition"
            >
              <FaTiktok size={22} />
            </a>
          </div>

          <address className="not-italic mt-6 text-sm">
            Build your online presence with modern web solutions.
          </address>
        </div>
      </div>

      {/* Bottom */}

      <div className="border-t border-gray-800 mt-10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Xenobyte Web Studio · All Rights Reserved
      </div>
    </footer>
  );
}

export default Footer;
