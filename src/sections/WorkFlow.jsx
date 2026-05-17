import React from 'react'
import ourGoalsImage from '../images/process-img.webp'

function WorkFlow() {
  return (
    <section className="bg-background-1 text-normal-text-1 py-12  px-4 text-center">
      <div>
        <h1 className="text-4xl font-bold text-center pb-3 text-heading-1">
          Our Process
        </h1>
        <div className="text-left">
          <div className=" text-heading-1 leading-tight  text-2xl font-bold pt-6">
            Our Process
          </div>
          <div className="text-lg">
            Our simple and structured process ensures every website we build is
            high quality, professional, and tailored to your business.
          </div>
          <div className="grid md:grid-cols-2 gap-6 pt-6">
            <div className="pt-4  hidden md:block h-122 overflow-hidden ">
              <img
                loading="lazy"
                src={ourGoalsImage}
                alt="our goal images"
                className="hidden md:block   object-cover rounded-xl shadow-2xl h-full w-full"
              />
            </div>
            <div>
              <div className="pt-4">
                <h1 className="text-xl font-semibold pb-2 text-sub-heading-1">
                  {" "}
                  1️⃣ Consultation
                </h1>
                <p className="pl-4 text-sub-heading-1">
                  We start with a discussion to understand your business, goals,
                  and what you want your website to achieve.
                </p>
              </div>
              <div className="pt-4">
                <h1 className="text-xl font-semibold pb-2 text-sub-heading-1">
                  2️⃣Planning
                </h1>
                <p className="pl-4">
                  Every business is unique, and your website should reflect
                  that. We create custom designs tailored to your brand,
                  industry, and target audience.
                </p>
              </div>
              <div className="pt-4">
                <h1 className="text-xl font-semibold pb-2 text-sub-heading-1">
                  3️⃣Design & Development
                </h1>
                <p className="pl-4">
                  Your website is designed and developed using modern
                  technologies to create a fast, professional, and responsive
                  website.
                </p>
              </div>
              <div className="pt-2">
                <h1 className="text-xl font-semibold pb-2 text-sub-heading-1">
                  4️⃣Testing & Launch
                </h1>
                <p className="pl-4">
                  Before launching, we test the website across different devices
                  and browsers to make sure everything works perfectly.
                </p>
              </div>
              <div className="pt-4">
                <h1 className="text-xl font-semibold pb-2 text-sub-heading-1">
                  5️⃣Ongoing Support
                </h1>
                <p className="pl-4">
                  After launch, we remain available to help with updates,
                  improvements, and support if needed
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorkFlow