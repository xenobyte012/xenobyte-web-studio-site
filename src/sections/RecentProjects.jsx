import React, { useState } from "react";
import construction_img from "../images/construction.jpg";
import tutoring_img from "../images/tutoring-img.webp";
import barber_img from "../images/barber-img.webp";
import plumbing_img from "../images/leak-repair.jpg";
import applience_img from "../images/hillcrest-appliance-repairs-jpg.webp";

import { useNavigate } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";

function RecentProjects() {
  const navigate = useNavigate();
  const [seeMore, setSeeMore] = useState(false);

  const projects = [
    {
      title: "Construction Company",
      image: construction_img,
      link: "https://dezwilengineeringconstruction.co.za",
      desc: "Professional construction business website",
      external: true,
    },
    {
      title: "Tutoring Website",
      image: tutoring_img,
      link: "https://xenobyte012.github.io/dave-academy-site/",
      desc: "Education & tutoring website",
      external: true,
    },
    {
      title: "Appliance Repair",
      image: applience_img,
      link: "https://xenobyte012.github.io/k-k-appliance-repair-site/",
      desc: "Local repair business website",
      external: true,
    },
    {
      title: "Fresh Cut Barber",
      image: barber_img,
      link: "/barber",
      desc: "Luxury barber website concept",
      external: false,
    },
    {
      title: "Plumbing Website",
      image: plumbing_img,
      link: "https://xenobyte012.github.io/plumbing-site/",
      desc: "Local Plumbing business website",
      external: true,
    },
    {
      title: "School website",
      image:
        "https://xenobyte012.github.io/tsholofelo-technical-school-site/assets/logo-CSBDdZRq.jpg",

      link: "https://xenobyte012.github.io/tsholofelo-technical-school-site/",
      desc: "School website",
      external: true,
    },
    {
      title: "DC Solar & Lithium",
      image:
        "https://xenobyte012.github.io/dc-solar-lithium-site/assets/main-img-Bvug_gBN.jpg",

      link: "https://xenobyte012.github.io/dc-solar-lithium-site/",
      desc: "Professional solar panel installations website",
      external: true,
    },
  ];

  

  const trackView = (e) => {
    e.stopPropagation();
    if (window.fbq) {
      window.fbq("track", "View Project");
    }
  };

  const ProjectCard = ({ project }) => {
    const isExternal = project.external;
    const CardWrapper = isExternal ? "a" : "div";
    const wrapperProps = isExternal
      ? {
          href: project.link,
          target: "_blank",
          rel: "noopener noreferrer",
        }
      : {
          onClick: () => navigate(project.link),
          role: "button",
          tabIndex: 0,
          onKeyDown: (e) => e.key === "Enter" && navigate(project.link),
        };

    return (
      <CardWrapper
        {...wrapperProps}
        className="group block cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-background-2 rounded-3xl"
      >
        <div className="overflow-hidden rounded-3xl bg-background-1 shadow-xl hover:-translate-y-3 transition-all duration-500 ease-out h-full flex flex-col">
          {/* Image */}
          <div className="relative overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              className="h-80 w-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

            {/* External link indicator */}
            {isExternal && (
              <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ExternalLink size={16} className="text-white" />
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-8 flex flex-col flex-grow">
            <h3 className="text-2xl font-bold text-heading-1">
              {project.title}
            </h3>
            <p className="mt-3 text-gray-400 flex-grow">{project.desc}</p>

            <div
              className="mt-6 inline-flex items-center gap-2 text-blue-500 font-semibold group/link"
              onClick={trackView}
            >
              <span className="relative">
                View Project
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover/link:w-full" />
              </span>
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover/link:translate-x-1"
              />
            </div>
          </div>
        </div>
      </CardWrapper>
    );
  };

  return (
    <section className="bg-background-2 py-28 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center">
          <div className="inline-block px-5 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 mb-5 text-sm font-medium tracking-wide uppercase">
            Portfolio
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-heading-2 tracking-tight">
            Recent Projects
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-sub-heading-2 text-lg leading-relaxed">
            Explore websites we've designed for businesses looking to improve
            branding, trust and online growth.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

        
      </div>
    </section>
  );
}

export default RecentProjects;
