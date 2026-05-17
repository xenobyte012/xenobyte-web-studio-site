import React from "react";

function Packages() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <section id="packages" className="bg-background-1 mx-auto flex flex-col justify-center text-center  py-10 px-4 text-sub-heading-1">
      <div className="justify-center flex flex-col">
        <h1 className="text-heading-1 leading-tight text-center text-4xl font-bold">
          Why Businesses Choose Us
        </h1>
        <p className="text-xl text-center  max-w-2xl mx-auto pt-4">
          We focus on delivering high-quality websites that help businesses
          stand out, attract customers, and grow online.
        </p>
        <p className=" text-slate-900  text-2xl font-bold pt-6">
          Website Design Packages
        </p>
        {/* <p className="text-lg text-center   pt-2">
          Flexible website packages to fit any business size and budget. Choose
          the right plan below and start building your online presence today.
        </p> */}

        <div className="mx-auto flex flex-col md:flex-row justify-center gap-10 pt-8">
          <div>
            <div className="bg-gray-50 md:w-67 w-77 shadow-2xl gap-2 rounded-xl rounded-t-xl">
              <div className="bg-slate-900 text-white text-2xl p-3 font-medium rounded-t-xl py-5">
                Bronze
              </div>
              <div className="py-4 p-4">
                <h1 className=" text-5xl font-medium text-center py-3 ">
                  <span className="text-xl align-top text-heading-1 font-bold">
                    R
                  </span>
                  1000
                </h1>
                <div className="text-left py-1">
                  ✅ Up to 2 pages(Home, About or Contact)
                </div>
                <div className="text-left py-1">
                  ✅ Up to 3 sections per page
                </div>
                <div className="text-left py-1">✅ Clean professional</div>
                <div className="text-left py-1">
                  ✅ Mobile responsive layout
                </div>
                <div className="text-left py-1">
                  ✅ Contact form integration
                </div>
                <div className="text-left py-1">✅ Basic SEO setup </div>
                <div className="text-left py-1">✅ Fast loading website</div>
                <div className="text-left py-1">✅ 1 round of revision</div>

                <div>
                  <button
                    onClick={scrollToContact}
                    className="bg-blue-600 py-2 px-4 shadow-2xl text-lg  rounded-2xl text-white hover:bg-blue-700 my-4"
                  >
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-gray-50 md:w-67 w-77 shadow-2xl gap-2 rounded-xl rounded-t-xl">
              <div className="bg-slate-900 text-white text-2xl p-3 font-medium rounded-t-xl py-5">
                Silver
              </div>
              <div className="py-4 p-4">
                <h1 className=" text-5xl font-medium text-center py-3 ">
                  <span className="text-xl align-top text-heading-1 font-bold">
                    R
                  </span>
                  2000
                </h1>
                <div className="text-left py-1">✅ Up to 3 pages</div>
                <div className="text-left py-1">
                  ✅ Up rto 4-5 section per page
                </div>
                <div className="text-left py-1">
                  ✅ Fully custom website design
                </div>
                <div className="text-left py-1">
                  ✅ Mobile responsive on all devices
                </div>
                <div className="text-left py-1">
                  ✅ Contact form and call-to-action sections
                </div>
                <div className="text-left py-1">
                  ✅ Social media integration
                </div>
                <div className="text-left py-1">✅ Google maps integration</div>
                <div className="text-left py-1">✅ SEO-friendly structure</div>
                <div className="text-left py-1">
                  ✅ Performance optimazation
                </div>
                <div className="text-left py-1">✅ 3 rounds of revision</div>

                <div>
                  <button
                    onClick={scrollToContact}
                    className="bg-blue-600  shadow-2xl py-2 px-4 rounded-2xl hover:bg-blue-700 my-4 text-lg  text-white"
                  >
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-gray-50 md:w-67 w-77 shadow-2xl gap-2 rounded-xl rounded-t-xl">
              <div className="bg-slate-900 text-white text-2xl p-3 font-medium rounded-t-xl py-5">
                Gold
              </div>
              <div className="py-4 p-4">
                <h1 className=" text-5xl font-medium text-center py-3 ">
                  <span className="text-xl align-top text-heading-1 font-bold">
                    R
                  </span>
                  3000
                </h1>
                <div className="text-left py-1">✅ Up to 6 pages</div>
                <div className="text-left py-1">
                  ✅ Up to 5-6 section per page
                </div>
                <div className="text-left py-1">✅ Premium custom design</div>
                <div className="text-left py-1">
                  ✅ Advanced responsive design
                </div>
                <div className="text-left py-1">✅ SEO optimazation setup</div>
                <div className="text-left py-1">✅ Blog or portfolio setup</div>
                <div className="text-left py-1">
                  ✅ Contact forms and integration
                </div>
                <div className="text-left py-1">
                  ✅ Performance optimazation
                </div>
                <div className="text-left py-1">✅ Priority support</div>
                <div className="text-left py-1">✅ 5 rounds of revision</div>

                <div>
                  <button
                    onClick={scrollToContact}
                    className="bg-blue-600 shadow-2xl py-2 px-4 rounded-2xl text-white text-lg hover:bg-blue-700 my-4"
                  >
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-8 ">
          <p className="text-lg">
            Not sure which package fits your needs? Contact us for a custom
            package tailored to your business.
          </p>
        </div>
        <div className="pt-6 underline ">
          <p className="hover:text-blue-700">Terms & Condition Apply</p>
        </div>
      </div>
    </section>
  );
}

export default Packages;
