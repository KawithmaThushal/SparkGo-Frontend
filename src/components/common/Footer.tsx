import { FaFacebookF, FaInstagram, FaSkype, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer(){
    return(


        <footer className="w-full h-auto min-h-[300px] sm:h-[400px] bg-[linear-gradient(135deg,#082a63_0%,#0b3f7f_48%,#0a6b78_100%)] text-white py-8 sm:py-12 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* SparkGo Info */}
            <div className="flex flex-col items-center md:items-start">
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <img src="/logo.png" alt="SparkGo Logo" className="h-8 sm:h-10 w-auto" />
                <span className="text-white text-2xl sm:text-3xl font-serif font-medium">
                  SparkGo
                </span>
              </div>
              <p className="text-gray-300 text-center md:text-left mb-4 font-serif text-sm sm:text-base">
                Your go-to travel guide for top destinations and near-time EV charging.
              </p>
            </div>

            {/* Quick Links */}
            <div className="flex flex-col items-center">
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 font-serif">Quick Links</h3>
              <ul className="space-y-1 sm:space-y-2 text-center font-serif text-sm sm:text-base">
                <li><Link to="/home" className="hover:text-cyan-200 transition">Home</Link></li>
                <li><Link to="/destinations" className="hover:text-cyan-200 transition">Destinations</Link></li>
                <li><Link to="/charging-place" className="hover:text-cyan-200 transition">EV Charging</Link></li>
                <li><Link to="/trip-plan" className="hover:text-cyan-200 transition">Trip Planner</Link></li>
                <li><Link to="/signin" className="hover:text-cyan-200 transition">Sign In</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col items-center md:items-end">
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 font-serif">Contact Information</h3>
              <address className="not-italic text-gray-300 text-center md:text-right font-serif text-sm sm:text-base">
                <p>Colombo, Sri Lanka</p>
                <p className="mt-2">kavithmani.hushal87i@gmail.com</p>
                <p className="mt-2">+94 72 493 3586</p>
              </address>

              {/* Social Media */}
              <div className="mt-4 sm:mt-6 flex gap-2 sm:gap-3">
                <button className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-cyan-400/30 transition">
                  <FaFacebookF className="text-white text-sm sm:text-lg" />
                </button>
                <button className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-cyan-400/30 transition">
                  <FaInstagram className="text-white text-sm sm:text-lg" />
                </button>
                <button className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-cyan-400/30 transition">
                  <FaTwitter className="text-white text-sm sm:text-lg" />
                </button>
                <button className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-cyan-400/30 transition">
                  <FaSkype className="text-white text-sm sm:text-lg" />
                </button>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="max-w-7xl mx-auto mt-8 sm:mt-12 pt-4 sm:pt-6 border-t border-white/20 text-center text-gray-400 font-serif text-sm sm:text-base">
            <p>© 2025 SparkGo. All rights reserved.</p>
          </div>
        </footer>
    )
}
export default Footer;
