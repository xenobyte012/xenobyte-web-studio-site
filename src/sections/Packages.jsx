import React from "react";
import { Check, Star } from "lucide-react";

function Packages() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const plans = [
    {
      name: "Bronze",

      price: "1000",

      popular: false,

      features: [
        "Up to 2 pages",

        "3 sections per page",

        "Professional design",

        "Mobile responsive",

        "Contact form",

        "Basic SEO",

        "Fast loading",

        "1 revision",
      ],
    },

    {
      name: "Silver",

      price: "2000",

      popular: true,

      features: [
        "Up to 3 pages",

        "Custom design",

        "Responsive all devices",

        "Social media integration",

        "Google Maps",

        "SEO structure",

        "Performance optimization",

        "3 revisions",
      ],
    },

    {
      name: "Gold",

      price: "3000",

      popular: false,

      features: [
        "Up to 6 pages",

        "Premium design",

        "Blog setup",

        "Advanced SEO",

        "Priority support",

        "Portfolio section",

        "Performance optimization",

        "5 revisions",
      ],
    },
  ];

  return (
    <section
      id="packages"
      className="
      py-28

      bg-background-1"
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

            mb-5"
          >
            Pricing
          </div>

          <h1
            className="
            text-5xl
            font-bold"
          >
            Website Packages
          </h1>

          <p
            className="
            mt-6

            text-gray-500

            max-w-3xl

            mx-auto"
          >
            Flexible website packages designed for businesses at every stage.
          </p>
        </div>

        {/* Cards */}

        <div
          className="
          grid

          lg:grid-cols-3

          gap-10

          mt-20"
        >
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`

                relative

                bg-white

                rounded-3xl

                p-8

                shadow-xl

                hover:-translate-y-3

                transition

                ${plan.popular ? "border-2 border-blue-500 scale-105" : ""}

                `}
            >
              {plan.popular && (
                <div
                  className="
                    absolute

                    top-[-15px]

                    left-1/2

                    -translate-x-1/2

                    bg-blue-600

                    px-4

                    py-2

                    rounded-full

                    text-white

                    text-sm

                    flex

                    gap-2"
                >
                  <Star size={16} />
                  Most Popular
                </div>
              )}

              <h2
                className="
                  text-3xl

                  font-bold"
              >
                {plan.name}
              </h2>

              <div
                className="
                  mt-6"
              >
                <span
                  className="
                    text-lg"
                >
                  R
                </span>

                <span
                  className="
                    text-6xl

                    font-bold"
                >
                  {plan.price}
                </span>
              </div>

              <div
                className="
                  mt-10

                  space-y-5"
              >
                {plan.features.map((feature, i) => (
                  <div
                    key={i}
                    className="
                        flex

                        gap-3"
                  >
                    <Check
                      className="
                          text-green-500"
                      size={20}
                    />

                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={scrollToContact}
                className="
                  w-full

                  mt-10

                  py-4

                  rounded-2xl

                  bg-blue-600

                  text-white

                  font-semibold

                  hover:bg-blue-700

                  transition"
              >
                Get Started
              </button>
            </div>
          ))}
        </div>

        {/* Bottom */}

        <div
          className="
          text-center

          mt-20"
        >
          <p
            className="
            text-gray-500"
          >
            Need something custom?
          </p>

          <button
            onClick={scrollToContact}
            className="
            mt-6

            underline

            text-blue-500"
          >
            Request Custom Quote
          </button>
        </div>
      </div>
    </section>
  );
}

export default Packages;
