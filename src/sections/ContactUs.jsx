import React, { useRef } from "react";

import emailjs from "@emailjs/browser";

import ourGoalsImage from "../images/contact-img.webp";

import { Phone, Mail, MessageCircle, Building2, User } from "lucide-react";

function ContactUs() {
  const form = useRef();

  const phoneNumber = "27704419275";

  const message = "Hello, I am interested in your services.";

  const encodedMessage = encodeURIComponent(message);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs

      .sendForm(
        "service_pxbyoei",

        "template_07y8y71",

        form.current,

        "jktgoyUav4uVzsRPr",
      )

      .then(
        () => {
          alert("Message sent ✅");

          form.current.reset();
        },

        () => {
          alert("Failed ❌");
        },
      );
  };

  return (
    <section
      id="contact"
      className="
      py-28

      bg-background-2

      text-white"
    >
      <div
        className="
        max-w-7xl

        mx-auto

        px-6"
      >
        {/* Heading */}

        <div
          className="
          text-center

          mb-16"
        >
          <div
            className="
            inline-block

            px-5

            py-2

            rounded-full

            bg-blue-500/10

            text-blue-400

            mb-5"
          >
            Contact Us
          </div>

          <h1
            className="
            text-5xl

            md:text-6xl

            font-bold"
          >
            Let's Build Your Next Website
          </h1>

          <p
            className="
            text-gray-400

            mt-6

            max-w-2xl

            mx-auto"
          >
            Ready to grow your business online? Send a message and we'll discuss
            your project.
          </p>
        </div>

        <div
          className="
          grid

          lg:grid-cols-2

          gap-16"
        >
          {/* FORM */}

          <form
            ref={form}
            onSubmit={sendEmail}
            className="
              bg-gray-900

              p-8

              rounded-3xl

              shadow-2xl"
          >
            <h2
              className="
                  text-3xl

                  font-bold

                  mb-8"
            >
              Get A Free Quote
            </h2>

            <div
              className="
                  space-y-5"
            >
              <input
                type="text"
                name="user_name"
                placeholder="Full Name"
                required
                className="
                    w-full

                    bg-black

                    p-4

                    rounded-xl

                    border

                    border-gray-700"
              />

              <input
                type="email"
                name="user_email"
                placeholder="Email Address"
                required
                className="
                    w-full

                    bg-black

                    p-4

                    rounded-xl

                    border

                    border-gray-700"
              />

              <input
                type="text"
                name="user_phone"
                placeholder="Phone Number"
                required
                className="
                    w-full

                    bg-black

                    p-4

                    rounded-xl

                    border

                    border-gray-700"
              />

              <input
                type="text"
                name="company_name"
                placeholder="Business Name"
                className="
                    w-full

                    bg-black

                    p-4

                    rounded-xl

                    border

                    border-gray-700"
              />

              <textarea
                name="message"
                required
                placeholder="Tell us about your project..."
                className="
                    w-full

                    min-h-40

                    bg-black

                    p-4

                    rounded-xl

                    border

                    border-gray-700"
              />

              <button
                type="submit"
                className="
                    w-full

                    py-4

                    rounded-xl

                    bg-blue-600

                    hover:bg-blue-700

                    font-semibold

                    transition"
                onClick={() => {
                  fbq("track", "Lead");
                }}
              >
                Send Message
              </button>
            </div>

            <p
              className="
                  text-gray-500

                  mt-5

                  text-sm"
            >
              Usually responds within a few hours.
            </p>
          </form>

          {/* RIGHT SIDE */}

          <div>
            <img
              src={ourGoalsImage}
              alt="Website consultation"
              className="
                rounded-3xl

                shadow-2xl

                h-72

                object-cover

                w-full"
            />

            <div
              className="
                mt-10

                space-y-8"
            >
              <div
                className="
                  flex

                  gap-5"
              >
                <Phone
                  className="
                    text-blue-500"
                />

                <div>
                  <h3 className="font-bold">Call Us</h3>

                  <a
                    href="tel:+27704419275"
                    className="text-blue-600 hover:underline"
                    onClick={() => {
                      fbq("track", "Lead");
                    }}
                  >
                    070 441 9275
                  </a>
                </div>
              </div>

              <div
                className="
                  flex

                  gap-5"
              >
                <Mail
                  className="
                    text-blue-500"
                />

                <div>
                  <h3
                    className="
                      font-bold"
                  >
                    Email
                  </h3>

                  <p>xenobyte012@gmail.com</p>
                </div>
              </div>

              <div
                className="
                  flex

                  gap-5"
              >
                <Building2
                  className="
                    text-blue-500"
                />

                <div>
                  <h3
                    className="
                      font-bold"
                  >
                    Business
                  </h3>

                  <p>Xenobyte Web Studio</p>
                </div>
              </div>

              <a
                href={`https://wa.me/${phoneNumber}?text=${encodedMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex

                  items-center

                  justify-center

                  gap-3

                  mt-8

                  bg-green-600

                  hover:bg-green-700

                  px-8

                  py-4

                  rounded-xl

                  transition"
                onClick={() => {
                  fbq("track", "Whats App");
                }}
              >
                <MessageCircle />
                Chat On WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
