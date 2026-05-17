import React from "react";
function WhyDifferent() {
// Data for the reasons (this keeps the component clean and scalable)
  const reasons = [
  {
    title: "Custom Design for Your Business",
    text: "Every website is designed specifically for your brand so your business stands out from competitors using generic templates.",
    icon: "🎨",
  },
  {
    title: "Built to Support Business Growth",
    text: "Our websites are structured to help turn visitors into customers through clearcalls-to-action and strategic layouts.",
    icon: "📈",
  },
  {
  title: "Strategic Planning",
  text: "Before development begins, we plan the pages, structure, and user experience to ensure the website achieves your business goals.",
  icon: "🧠",
  },
  {
  title: "Fast Performance",
  text: "We build lightweight and optimized websites that load quickly and provide a smoothexperience for visitors.",
  icon: "⚡",
  },
  {
  title: "Designed to Build Trust",
  text: "Clean layouts and modern design help your business look professional and trustworthy to new customers.",
  icon: "🤝",
  },
  ];
return (
  <section className="bg-background-2 py-20 px-6">
    <div className="max-w-6xl mx-auto text-center">
     
      <h2 className="text-4xl font-bold mb-4 text-normal-text-2 leading-tight">
        What Makes Our Service Different
      </h2>
      
      <p className="text-sub-heading-2 text-xl max-w-2xl mx-auto mb-12">
        We focus on creating websites that not only look great but also help
        businesses attract customers and grow online.
      </p>
      
      <div className="grid md:grid-cols-3 gap-8">
        {reasons.map((reason, index) => (
          <div
            key={index}
            className="bg-sub-heading-1 p-6 rounded-xl shadow-xl hover:shadow-2xl transition"
          >
            {/* Icon */}
            <div className="text-4xl mb-4">{reason.icon}</div>
            {/* Title */}
            <h3 className="text-xl text-sub-heading-2 font-semibold mb-2">{reason.title}</h3>
            {/* Description */}
            <p className="text-normal-text-2">{reason.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
}
export default WhyDifferent;