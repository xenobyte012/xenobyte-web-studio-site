import React from "react";

import { Palette, TrendingUp, Brain, Zap, ShieldCheck } from "lucide-react";

function WhyDifferent() {
  const reasons = [
    {
      title: "Custom Design For Your Business",

      text: "Every website is designed specifically around your brand so your business stands out.",

      icon: <Palette size={30} />,
    },

    {
      title: "Built To Support Growth",

      text: "Our websites help turn visitors into customers through strategic layouts.",

      icon: <TrendingUp size={30} />,
    },

    {
      title: "Strategic Planning",

      text: "We carefully plan structure, pages and user experience before development begins.",

      icon: <Brain size={30} />,
    },

    {
      title: "Fast Performance",

      text: "Optimized websites that load quickly and keep visitors engaged.",

      icon: <Zap size={30} />,
    },

    {
      title: "Designed To Build Trust",

      text: "Professional designs that make businesses appear credible and trustworthy.",

      icon: <ShieldCheck size={30} />,
    },
  ];

  return (
    <section
      className="
      py-28

      bg-background-2

      text-slate-700"
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

            border

            border-blue-500/20

            text-blue-400

            mb-5"
          >
            Why Choose Us
          </div>

          <h2
            className="
            text-5xl
            md:text-6xl

            font-bold

            leading-tight"
          >
            What Makes Us Different
          </h2>

          <p
            className="
            mt-6

            text-gray-300

            text-lg

            max-w-3xl

            mx-auto"
          >
            We create websites designed to grow businesses, attract customers
            and build trust.
          </p>
        </div>

        {/* Cards */}

        <div
          className="
          grid

          md:grid-cols-2

          lg:grid-cols-3

          gap-8

          mt-20"
        >
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="
                bg-background-1

                p-6

                rounded-3xl

                shadow-lg

                hover:-translate-y-3

                hover:shadow-2xl

                transition

                duration-500"
            >
              {/* Icon */}
              <div className="flex flex-row gap-4 items-center">
                <div
                  className="
                  w-16
                  h-16

                  flex

                  items-center

                  justify-center

                  rounded-2xl

                  bg-blue-500/10

                  text-blue-500

                  mb-6"
                >
                  {reason.icon}
                </div>

                {/* Title */}

                <h3
                  className="
                  text-2xl

                  font-bold

                  mb-4"
                >
                  {reason.title}
                </h3>
              </div>

              {/* Text */}

              <p
                className="
                  text-gray-500

                  leading-8"
              >
                {reason.text}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}

        <div
          className="
          text-center

          mt-20"
        >
          <a
            href="#contact"
            className="
            inline-block

            px-8
            py-4
            text-gray-100

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

export default WhyDifferent;
