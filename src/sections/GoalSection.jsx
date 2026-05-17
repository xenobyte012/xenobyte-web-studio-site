import React from 'react'
import ourGoalsImage from '../images/goals.webp'

function GoalSection() {
  
  return (
    <section
      id="about"
      className="bg-background-2 text-normal-text-2 py-10  px-4 flex  justify-center text-center"
    >
      <div className="text-left">
        <h1 className="text-4xl font-bold text-center pb-8 pt-6 text-gray-50 leading-tight">
          Our Mission & What We Focus On
        </h1>
        <p className="text-3xl font-bold text-sub-heading-2 ">Our Mission</p>

        <p className="text-lg pt-2 ">
          Our goal is to build high-quality websites that help businesses grow,
          attract customers, and create a strong online presence.
        </p>
        <div className="grid md:grid-cols-2 gap-6 pt-6">
          <div className="flex flex-col gap-6 text-left ">
            <div>
              <h1 className="text-xl font-semibold pb-2 text-subheading-2">
                ⚡High-Performance Websites
              </h1>
              <p className="pl-4 text-gray-300">
                We build fast and optimized websites that load quickly and run
                smoothly. A high-performance website keeps visitors engaged and
                helps improve search engine rankings.
              </p>
            </div>
            <div>
              <h1 className="text-xl font-semibold pb-2 text-subheading-2">
                🎨Custom Design for Your Business
              </h1>
              <p className="pl-4 text-gray-300">
                Every business is unique, and your website should reflect that.
                We create custom designs tailored to your brand, industry, and
                target audience.
              </p>
            </div>
            <div>
              <h1 className="text-xl font-semibold pb-2 text-subheading-2">
                📱Responsive on All Devices
              </h1>
              <p className="pl-4 text-300">
                Your website will look and work perfectly on desktops, tablets,
                and smartphones, ensuring every visitor has a great experience
                no matter the device.
              </p>
            </div>
            <div className="pt-2">
              <h1 className="text-xl font-semibold pb-2 text-subheading-2">
                🚀Built to Attract Customers
              </h1>
              <p className="pl-4 text-300">
                Our websites are designed with strategy in mind, helping turn
                visitors into potential customers through clear structure and
                strong calls to action.
              </p>
            </div>
          </div>
          <div className="hidden md:block  pt-2 ">
            <img
              loading="lazy"
              src={ourGoalsImage}
              alt="our goal images"
              className="rounded-xl object-cover shadow-2xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default GoalSection