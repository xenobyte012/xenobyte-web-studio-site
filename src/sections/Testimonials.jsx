import React from "react";
import image_1 from "../images/image-1.webp";
import image_2 from "../images/image-2.webp";
import profileImage_3 from "../images/profile-img-3.webp";
import googleImage from "../images/google-image.webp";

import { FaStar, FaQuoteLeft } from "react-icons/fa";

function Testimonials() {
  const data = [
    {
      name: "Tshepo Modisa",

      review:
        "Working with Clement was a great experience. The website he built for my business looks professional, loads fast and helped us attract more customers.",

      profilePicture: image_1,

      date: "2 weeks ago",
    },

    {
      name: "Ephraim Mucale",

      review:
        "The whole process was smooth and professional. Our website now looks modern and easy to use.",

      profilePicture: image_2,

      date: "2 months ago",
    },

    {
      name: " Anjali Govender",

      review:
        "The website perfectly represents our brand and strengthened our online presence.",

      profilePicture: profileImage_3,

      date: "4 months ago",
    },
  ];

  return (
    <section
      className="
      py-28
      bg-gradient-to-b
      from-slate-50
      to-white"
    >
      <div
        className="
        max-w-7xl
        mx-auto
        px-6"
      >
        {/* Heading */}

        <div className="text-center">
          <div
            className="
            inline-block
            px-5
            py-2
            rounded-full

            bg-blue-500/10

            text-blue-500

            mb-6"
          >
            Testimonials
          </div>

          <h1
            className="
            text-5xl
            font-bold"
          >
            What Our Clients Say
          </h1>

          <p
            className="
            mt-5
            text-gray-500
            max-w-2xl
            mx-auto"
          >
            Trusted by businesses looking for modern, fast and professional
            websites.
          </p>
        </div>

        {/* Cards */}

        <div
          className="
          grid
          md:grid-cols-2
          lg:grid-cols-3

          gap-10

          mt-20"
        >
          {data.map((testimonial, index) => (
            <div
              key={index}
              className="
                relative

                bg-white

                rounded-3xl

                p-8

                shadow-xl

                hover:-translate-y-3

                transition

                duration-500"
            >
              {/* Quote */}

              <FaQuoteLeft
                className="
                  text-blue-500

                  text-4xl

                  absolute

                  right-8

                  top-8"
              />

              {/* User */}

              <div
                className="
                  flex
                  gap-4
                  items-center"
              >
                <img
                  src={testimonial.profilePicture}
                  alt={testimonial.name}
                  className="
                    w-16
                    h-16

                    rounded-full

                    object-cover"
                />

                <div>
                  <h3
                    className="
                      font-bold"
                  >
                    {testimonial.name}
                  </h3>

                  <p
                    className="
                      text-sm

                      text-gray-500"
                  >
                    {testimonial.date}
                  </p>
                </div>
              </div>

              {/* Stars */}

              <div
                className="
                  flex

                  gap-1

                  mt-6

                  text-yellow-400"
              >
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              {/* Review */}

              <p
                className="
                  mt-6

                  leading-8

                  text-gray-600"
              >
                "{testimonial.review}"
              </p>

              {/* Google badge */}

              <div
                className="
                  mt-8

                  flex

                  items-center

                  gap-3"
              >
                <img
                  src={googleImage}
                  alt="Google"
                  className="
                    w-8
                    h-8"
                />

                <span
                  className="
                    text-sm

                    text-gray-500"
                >
                  Verified Google Review
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
