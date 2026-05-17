import React from "react";
import ourGoalsImage from "../images/goals.webp";
import { Rocket, Smartphone, Palette, Zap } from "lucide-react";

function GoalSection() {
  const features = [
    {
      title: "High Performance Websites",

      desc: "Fast loading websites optimized for SEO, user experience and conversions.",

      icon: <Zap size={28} />,
    },

    {
      title: "Custom Business Design",

      desc: "Every website is built around your brand identity and target audience.",

      icon: <Palette size={28} />,
    },

    {
      title: "Responsive On All Devices",

      desc: "Perfect experience across phones, tablets and desktop devices.",

      icon: <Smartphone size={28} />,
    },

    {
      title: "Built To Generate Customers",

      desc: "Designed to turn visitors into customers using strategy and conversion principles.",

      icon: <Rocket size={28} />,
    },
  ];

  return (
    <section
      id="about"
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
          mb-20"
        >
          <div
            className="
            inline-block

            px-5
            py-2

            rounded-full

            bg-blue-500/10

            border

            border-blue-500/20

            text-blue-400

            mb-5"
          >
            About Us
          </div>

          <h1
            className="
            text-5xl
            md:text-6xl

            font-bold"
          >
            Our Mission
          </h1>

          <p
            className="
            mt-6

            max-w-3xl

            mx-auto

            text-gray-400

            text-lg"
          >
            We create modern websites designed to help businesses grow, build
            trust and attract more customers online.
          </p>
        </div>

        <div
          className="
          flex justify-center

          gap-16

          items-center"
        >
          <div
            className="
              grid
  grid-cols-1
  lg:grid-cols-2

            gap-8"
          >
            {features.map((item, index) => (
              <div
                key={index}
                className="
                  flex

                  gap-5

                  bg-gray-100

                  p-6

                  rounded-2xl

                  hover:-translate-y-2

                  transition"
              >
                <div
                  className="
                    text-blue-500"
                >
                  {item.icon}
                </div>

                <div>
                  <h2
                    className="
                      text-xl
                      text-gray-600
                      font-bold"
                  >
                    {item.title}
                  </h2>

                  <p
                    className="
                      text-gray-500

                      mt-3

                      leading-7"
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}

        <div
          className="
          mt-20

          text-center"
        >
          <h3
            className="
            text-3xl

            font-bold"
          >
            Ready to grow your business online?
          </h3>

          <a
            href="#contact"
            className="
            inline-block

            mt-8

            px-8

            py-4

            bg-blue-600

            rounded-full

            hover:bg-blue-700

            transition"
          >
            Start Your Project
          </a>
        </div>
      </div>
    </section>
  );
}

export default GoalSection;
