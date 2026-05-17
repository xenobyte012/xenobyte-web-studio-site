import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import ourGoalsImage from "../images/contact-img.webp";

function ContactUs() {
const form = useRef();

const phoneNumber = "27704419275";
const message = "Hello, I am interested in your service.";
const encodedMessage = encodeURIComponent(message);

// 🚀 Send email function
const sendEmail = (e) => {
e.preventDefault();


emailjs
  .sendForm(
    "service_pxbyoei",   
    "template_07y8y71",  
    form.current,
    "jktgoyUav4uVzsRPr"    
  )
  .then(
    () => {
      alert("Message sent successfully ✅");
      form.current.reset();
    },
    (error) => {
      console.log(error);
      alert("Failed to send ❌");
    }
  );


};

return ( <section
   id="contact"
   className="bg-background-2 text-normal-text-2 py-10 px-4 text-center"
 > <div> <h1 className="text-4xl font-bold pb-3 text-heading-2">
Contact Us </h1> <p className="text-xl max-w-2xl mx-auto text-sub-heading-2">
Ready to grow your business online? Contact us today. </p> </div>


  <div className="flex flex-col md:flex-row justify-center gap-6 py-10">

    {/* FORM */}
    <form
      ref={form}
      onSubmit={sendEmail}
      className="bg-slate-700 m-4 md:w-100 rounded-xl p-8 flex flex-col shadow-2xl"
    >
      {/* Name */}
      <span className="text-left text-heading-2">Name</span>
      <input
        type="text"
        name="user_name"
        placeholder="Full name"
        className="bg-slate-900 rounded-xl p-2 px-3 mb-4"
        required
      />

      {/* Email */}
      <span className="text-left">Email</span>
      <input
        type="email"
        name="user_email"
        placeholder="youremail@gmail.com"
        className="bg-slate-900 rounded-xl p-2 px-3 mb-4"
        required
      />

      {/* Phone */}
      <span className="text-left">Phone Number</span>
      <input
        type="text"
        name="user_phone"
        placeholder="071 234 5678"
        className="bg-slate-900 rounded-xl p-2 px-3 mb-4"
        required
      />

      {/* Company */}
      <span className="text-left">Business Name</span>
      <input
        type="text"
        name="company_name"
        placeholder="Your business name"
        className="bg-slate-900 rounded-xl p-2 px-3 mb-4"
      />

      {/* Message */}
      <span className="text-left">Message</span>
      <textarea
        name="message"
        placeholder="Your message..."
        className="bg-slate-900 rounded-xl p-2 mb-4 min-h-32"
        required
      ></textarea>

      {/* Submit */}
      <button
        type="submit"
        className="bg-blue-700 p-3 rounded-xl hover:bg-blue-800 text-white"
      >
        Submit
      </button>
    </form>

    {/* CONTACT INFO */}
    <div className="text-left mt-2">
      <div className="pb-4">
        <div className="text-xl font-semibold">📞 Call Us</div>
        <p>070 441 9275</p>
      </div>

      <div className="pb-4">
        <div className="text-xl font-semibold">📧 Email Us</div>
        <p>xenobyte012@gmail.com</p>
      </div>

      <div>
        <div className="text-xl font-semibold">Whatsapp Us</div>
        <p>070 441 9275</p>

        <a
          href={`https://wa.me/${phoneNumber}?text=${encodedMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 px-5 py-3 text-white rounded-xl mt-3 hover:bg-blue-700"
        >
          Let's chat
        </a>
      </div>

      <div className="h-85 mt-6 overflow-hidden">
        <img
          src={ourGoalsImage}
          alt="contact"
          className="object-cover rounded-xl shadow-2xl h-full w-full"
        />
      </div>
    </div>

  </div>
</section>


);
}

export default ContactUs;
