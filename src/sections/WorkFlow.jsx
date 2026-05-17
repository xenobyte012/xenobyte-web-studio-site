import React from "react";
import ourGoalsImage from "../images/process-img.webp";

import {
  MessageCircle,
  ClipboardList,
  PencilRuler,
  Rocket,
  Headphones,
} from "lucide-react";

function WorkFlow() {
  const steps = [
    {
      title: "Consultation",
      desc: "We discuss your business goals, audience and website requirements.",
      icon: <MessageCircle size={28} />,
    },

    {
      title: "Planning",
      desc: "We create a strategy, structure and roadmap for your project.",
      icon: <ClipboardList size={28} />,
    },

    {
      title: "Design & Development",
      desc: "Your website is designed and built using modern technologies.",
      icon: <PencilRuler size={28} />,
    },

    {
      title: "Testing & Launch",
      desc: "Everything is tested before deployment to ensure quality.",
      icon: <Rocket size={28} />,
    },

    {
      title: "Ongoing Support",
      desc: "We provide updates, improvements and long-term support.",
      icon: <Headphones size={28} />,
    },
  ];

  return (
    <section
      className="
      py-28
      bg-background-1
      text-white"
    >
      <div
        className="
        max-w-7xl
        mx-auto
        px-6"
      >
        {/* Heading */}

        <div className="text-center mb-20">
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
            How We Work
          </div>

          <h1
            className="
            text-5xl
            md:text-6xl
            font-bold
            text-slate-800"

          >
            Our Process
          </h1>

          <p
            className="
            mt-6
            text-gray-500
            max-w-2xl
            mx-auto"
          >
            A simple and proven process that helps us build websites designed
            for growth.
          </p>
        </div>

        <div
          className="
          grid
          lg:grid-cols-2
          gap-16
          items-center"
        >
          {/* Image */}

          <div>
            <img
              src={ourGoalsImage}
              alt="Website process"
              loading="lazy"
              className="
              rounded-3xl
              shadow-2xl
              object-cover
              h-full
              hover:scale-[1.02]
              transition"
            />
          </div>

          {/* Steps */}

          <div
            className="
            grid
            gap-8"
          >
            {steps.map((step, index) => (
              <div
                key={index}
                className="
                  flex
                  gap-5

                  bg-gray-900

                  p-6

                  rounded-2xl

                  hover:-translate-y-2

                  transition

                  relative"
              >
                {/* Number */}

                <div
                  className="


                    text-gray-700

                    text-5xl

                    font-bold"
                >
                  0{index + 1}
                </div>



                {/* Text */}

                <div>
                  <h2
                    className="
                      text-xl
                      font-bold"
                  >
                    {step.title}
                  </h2>

                  <p
                    className="
                      mt-3

                      text-gray-400

                      leading-7"
                  >
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}

        <div
          className="
          text-center
          mt-20"
        >
          <h3
            className="
            text-3xl
            font-bold
            text-gray-700"
            
          >
            Ready to start your project?
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
            Let's Build Your Website
          </a>
        </div>
      </div>
    </section>
  );
}

export default WorkFlow;
