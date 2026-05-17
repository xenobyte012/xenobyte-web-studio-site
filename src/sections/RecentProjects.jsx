import React, { useState } from "react";
import construction_img from "../images/construction.jpg";
import tutoring_img from "../images/tutoring-img.webp";
import barber_img from "../images/barber-img.webp";
import plumbing_img from "../images/leak-repair.jpg"
import applience_img from "../images/hillcrest-appliance-repairs-jpg.webp";

import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

function RecentProjects() {
  const navigate = useNavigate();

  const [seeMore, setSeeMore] = useState(false);

  const projects = [
    {
      title: "Construction Company",
      image: construction_img,

      link: "https://dezwilengineeringconstruction.co.za",

      desc: "Professional construction business website",
    },

    {
      title: "Tutoring Website",

      image: tutoring_img,

      link: "https://www.teamworktutors.co.za",

      desc: "Education & tutoring platform",
    },

    {
      title: "Appliance Repair",

      image: applience_img,

      link: "https://xenobyte012.github.io/k-k-appliance-repair-site/",

      desc: "Local repair business website",
    },

  ];
  const seemoreProjects = [
    {
      title: "Plumbing Website",

      image: plumbing_img,

      link: "https://xenobyte012.github.io/plumbing-site/",

      desc: "Local Plumbing business website",
    },
  ];
  return (
    <section
      className="
      bg-background-2
      py-28
      px-6"
    >
      <div
        className="
      max-w-7xl
      mx-auto"
      >
        {/* Header */}

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
          text-blue-500
          mb-5"
          >
            Portfolio
          </div>

          <h1
            className="
          text-5xl
          md:text-6xl
          font-bold
          text-heading-2"
          >
            Recent Projects
          </h1>

          <p
            className="
          mt-6
          max-w-2xl
          mx-auto
          text-sub-heading-2
          text-lg"
          >
            Explore websites we've designed for businesses looking to improve
            branding, trust and online growth.
          </p>
        </div>

        {/* Projects */}

        <div
          className="
        grid
        md:grid-cols-2
        lg:grid-cols-3
        gap-10
        mt-20"
        >
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group"
            >
              <div
                className="
                overflow-hidden
                rounded-3xl
                bg-background-1
                shadow-xl
                hover:-translate-y-4
                transition
                duration-500"
              >
                {/* Image */}

                <div
                  className="
                  relative
                  overflow-hidden"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="
                      h-80
                      w-full
                      object-cover
                      group-hover:scale-110
                      transition
                      duration-700"
                  />

                  <div
                    className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/70
                    to-transparent"
                  />
                </div>

                {/* Content */}

                <div
                  className="
                  p-8"
                >
                  <h3
                    className="
                    text-2xl
                    font-bold"
                  >
                    {project.title}
                  </h3>

                  <p
                    className="
                    mt-3
                    text-gray-400"
                  >
                    {project.desc}
                  </p>

                  <div
                    className="
                    mt-6
                    flex
                    items-center
                    gap-2
                    text-blue-500
                    font-semibold"
                  >
                    View Project
                    <ArrowRight size={18} />
                  </div>
                </div>
              </div>
            </a>
          ))}

          {/* Barber */}

          <div
            onClick={() => navigate("/barber")}
            className="
            cursor-pointer
            group"
          >
            <div
              className="
            overflow-hidden
            rounded-3xl
            bg-background-1
            shadow-xl
            hover:-translate-y-4
            transition"
            >
              <img
                src={barber_img}
                alt="Barber"
                className="
                h-80
                w-full
                object-cover
                group-hover:scale-110
                transition"
              />

              <div className="p-8">
                <h3
                  className="
                text-2xl
                font-bold"
                >
                  Fresh Cut Barber
                </h3>

                <p
                  className="
                mt-3
                text-gray-400"
                >
                  Luxury barber website concept.
                </p>

                <div
                  className="
                mt-6
                text-blue-500
                flex
                gap-2"
                >
                  View Project
                  <ArrowRight size={18} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* See More */}

        <div className="text-center mt-16">
          <button
            onClick={() => setSeeMore(!seeMore)}
            className="
            bg-blue-600
            hover:bg-blue-700
            px-8
            py-4
            rounded-full
            text-white
            font-semibold
            transition
            hover:scale-105"
          >
            {seeMore ? "See Less" : "See More"}
          </button>
        </div>

        {seeMore && (
          <div
            className="
        grid
        md:grid-cols-2
        lg:grid-cols-3
        gap-10
        mt-20"
          >
            {seemoreProjects.map((project, index) => (
              <a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="
                group"
              >
                <div
                  className="
                overflow-hidden
                rounded-3xl
                bg-background-1
                shadow-xl
                hover:-translate-y-4
                transition
                duration-500"
                >
                  {/* Image */}

                  <div
                    className="
                  relative
                  overflow-hidden"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="
                      h-80
                      w-full
                      object-cover
                      group-hover:scale-110
                      transition
                      duration-700"
                    />

                    <div
                      className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/70
                    to-transparent"
                    />
                  </div>

                  {/* Content */}

                  <div
                    className="
                  p-8"
                  >
                    <h3
                      className="
                    text-2xl
                    font-bold"
                    >
                      {project.title}
                    </h3>

                    <p
                      className="
                    mt-3
                    text-gray-400"
                    >
                      {project.desc}
                    </p>

                    <div
                      className="
                    mt-6
                    flex
                    items-center
                    gap-2
                    text-blue-500
                    font-semibold"
                    >
                      View Project
                      <ArrowRight size={18} />
                    </div>
                  </div>
                </div>
              </a>
            ))}


          </div>
        )}
      </div>
    </section>
  );
}

export default RecentProjects;
