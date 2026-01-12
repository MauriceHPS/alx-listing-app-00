import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-900 text-gray-300 py-6 mt-auto">
        {/* MAIN FOOTER CONTENT */}
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* BRAND AND ABOUT */}
            <div className="col-span-1 md:col-span-1">
              <h2 className="text-2xl font-bold text-white mb-4">
                Luxury Listings
              </h2>
              <p className="text-gray-100  leading-relaxed">
                You wanna forget about the past few days that have been tough?
              </p>
              <p className="text-gray-100  leading-relaxed">
                Are you looking forward to having a good time?
              </p>
              <p className="text-gray-100 font-bold leading-relaxed text-xl">
                Don't worry, We gatchu!
              </p>
            </div>

            {/* PRODUCTS/LINKS */}
            <div>
              <h3 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">
                Services
              </h3>
              <ul className="space-y-2 text-sm ">
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Pricing
                  </a>
                </li>
                {/* <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Integrations
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Changelog
                  </a>
                </li> */}
              </ul>
            </div>

            {/* RESOURCES */}

            <div>
              <h3 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">
                Resources
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    API Reference
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Community
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Help Center
                  </a>
                </li>
              </ul>
            </div>

            {/* NEWSLETTER */}
            <div>
              <h3 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">
                Stay Updated
              </h3>
              <p className="text-sm text-gray-400 mb-4">
                Subscribe to our newsletter for the latest updates.
              </p>
              <form className="flex flex-col gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700"
                />
                <button
                  className="bg-linear-to-r from-indigo-400 to-indigo-600

                   hover:bg-indigo-800 text-white px-4 py-2 
                rounded text-sm font-medium transition-colors "
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* line separator */}
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              {/* Copyright */}
              <p className="text-sm text-gray-400 text-center md:text-left">
                &copy; {new Date().getFullYear()} Luxury Listings Inc. All
                rights reserved.
              </p>

              {/* Social Media and Legal Links */}
              <div className="flex space-x-6 text-sm">
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  Cookies
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
