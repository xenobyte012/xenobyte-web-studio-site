import React from "react";
import Footer from "../components/Footer";
function Barber() {
  return (
    <div className="bg-gray-50 text-gray-800 font-[Poppins]">
      {/* NAVBAR */}
      <nav className="md:hidden bg-black text-white p-5 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">FreshCut</h1>
          {/*
<ul className="flex gap-6 text-sm">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#pricing">Pricing</a>
            </li>
            <li>
              <a href="#booking">Book</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          */}
        </div>
      </nav>
      <nav className="hidden md:block bg-black text-white p-5 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">FreshCut</h1>
          <ul className="flex gap-6 text-sm">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#pricing">Pricing</a>
            </li>
            <li>
              <a href="#booking">Book</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
      {/* HERO */}
      <section
        id="home"
        className="h-[90vh] bg-cover bg-center flex items-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1585747860715-2ba37e788b70')",
        }}
      >
        <div className="bg-black/60 w-full h-full flex items-center">
          <div className="max-w-6xl mx-auto text-white px-6">
            <h1 className="text-5xl font-bold mb-4">
              Premium Barber Experience
            </h1>
            <p className="text-lg mb-6">
              Fresh cuts, clean fades, and professional grooming.
            </p>
            <a
              href="#booking"
              className="bg-yellow-500 text-black px-6 py-3 rounded font-semibold"
            >
              Book Appointment
            </a>
          </div>
        </div>
      </section>
      {/* SERVICES */}
      <section id="services" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Haircut",
                desc: "Professional fade and styling.",
                img: "https://images.unsplash.com/photo-1621605815971-fbc98d665033",
              },
              {
                title: "Beard Trim",
                desc: "Shape and maintain your beard.",
                img: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a",
              },
              {
                title: "Full Grooming",
                desc: "Haircut + beard + styling.",
                img: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-xl p-6 text-center"
              >
                <img
                  src={service.img}
                  className="rounded-lg mb-4 h-40 w-full object-cover"
                  alt={service.title}
                />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* PRICING */}
      <section id="pricing" className="bg-gray-100 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Pricing</h2>
          <div className="bg-white rounded-xl shadow-lg">
            {[
              ["Haircut", "R 100"],
              ["Beard Trim", "R 50"],
              ["Haircut + Beard", "R 140"],
              ["Full Grooming", "R 35"],
            ].map(([name, price], i) => (
              <div
                key={i}
                className={`flex justify-between p-6 ${
                  i !== 3 ? "border-b" : ""
                }`}
              >
                <span>{name}</span>
                <span className="font-semibold">{price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* GALLERY */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Work</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              "https://images.unsplash.com/photo-1622288432450-277d0fef5ed6",
              "https://images.unsplash.com/photo-1605497788044-5a32c7078486",
              "https://images.unsplash.com/photo-1589987607627-1d7f59f8c2c8",
            ].map((img, i) => (
              <img key={i} src={img} className="rounded-lg" alt="gallery" />
            ))}
          </div>
        </div>
      </section>
      {/* BOOKING */}
      <section id="booking" className="bg-gray-100 py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">
            Book Appointment
          </h2>
          <form className="bg-white p-8 rounded-xl shadow-lg space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border p-3 rounded"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full border p-3 rounded"
            />
            <input type="date" className="w-full border p-3 rounded" />
            <select className="w-full border p-3 rounded">
              <option>Select Service</option>
              <option>Haircut</option>
              <option>Beard Trim</option>
              <option>Full Grooming</option>
            </select>
            <textarea
              placeholder="Additional Notes"
              className="w-full border p-3 rounded"
            />
            <button className="bg-black text-white px-6 py-3 rounded w-full">
              Book Now
            </button>
            <p className="text-sm text-gray-500 text-center">
              *Form does not submit (portfolio demo)
            </p>
          </form>
        </div>
      </section>
      {/* CONTACT */}
      <section id="contact" className="py-20">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
          <p className="mb-3">📍 Malateng Street, Pretoria</p>
          <p className="mb-3">📞 071 765 5433</p>
          <p>✉️ freshcut0232@email.com</p>
        </div>
      </section>
      {/* FOOTER */}
      <Footer />
    </div>
  );
}
export default Barber;
