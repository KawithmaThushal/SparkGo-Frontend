import { FaBolt, FaCarAlt, FaCarSide, FaChargingStation, FaClipboardCheck, FaHotel, FaMapMarkerAlt, FaMapPin, FaRoute } from "react-icons/fa";

function PlanTrips(){


    return(
  <section id="trip-planner" className="relative w-full bg-[conic-gradient(at_top_left,#f0f7ff,#e6f0ff)] pt-10 pb-5 px-1 sm:px-6 lg:px-8 overflow-hidden font-sans">
        {/* Enhanced animated gradient background */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-50/70 via-transparent to-transparent"></div>
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-pink-400/10 rounded-full filter blur-[120px] animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-400/10 rounded-full filter blur-[120px] animate-pulse-slow animation-delay-2000"></div>
          <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white/30 to-transparent pointer-events-none"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Professional header section */}
          <div className="text-left mb-12 md:mb-10 px-4"> {/* Changed to text-left and adjusted padding */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight font-heading">
              <span className="text-transparent bg-clip-text bg-[linear-gradient(90deg,#ec4899,#6366f1)]">
                Intelligent
              </span>
              <span className="text-gray-800"> Trip Planning</span>
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl font-medium leading-relaxed"> {/* Removed mx-auto */}
              Craft your <span className="text-pink-600">perfect itinerary</span> in three simple steps with our AI-powered platform
            </p>
          </div>

          {/* Elevated process cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 mb-10 md:mb-20 px-2">
            {/* Step 1 - Enhanced card */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
              <div className="w-16 h-16 md:w-20 md:h-20 mb-6 md:mb-8 mx-auto bg-[conic-gradient(at_top_right,#ec4899,#6366f1)] rounded-xl flex items-center justify-center text-white shadow-xl shadow-pink-400/30">
                <FaMapMarkerAlt className="text-2xl md:text-3xl" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">
                <span className="text-transparent bg-clip-text bg-[linear-gradient(90deg,#ec4899,#6366f1)]">
                  01.
                </span> Select Locations
              </h3>
              <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                {['Colombo', 'Kandy', 'Nuwara Eliya'].map((city, i) => (
                  <li key={i} className="flex items-center gap-3 md:gap-4">
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-pink-50 rounded-lg flex items-center justify-center border border-pink-100 group-hover:bg-pink-100/50 transition-colors">
                      <FaMapPin className="text-pink-500 text-base md:text-lg" />
                    </div>
                    <span className="text-gray-700 font-medium text-sm md:text-base">{city}</span>
                  </li>
                ))}
              </ul>
              <div className="h-px bg-gradient-to-r from-transparent via-pink-400 to-transparent mb-4 md:mb-6 opacity-50"></div>
              <p className="text-xs md:text-sm text-pink-600 font-medium tracking-wide">AI-curated destination suggestions</p>
            </div>

            {/* Step 2 - Enhanced card */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
              <div className="w-16 h-16 md:w-20 md:h-20 mb-6 md:mb-8 mx-auto bg-[conic-gradient(at_top_right,#3b82f6,#8b5cf6)] rounded-xl flex items-center justify-center text-white shadow-xl shadow-blue-400/30">
                <FaCarAlt className="text-2xl md:text-3xl" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">
                <span className="text-transparent bg-clip-text bg-[linear-gradient(90deg,#3b82f6,#8b5cf6)]">
                  02.
                </span> Choose Transport
              </h3>
              <div className="mb-6 md:mb-8 p-4 md:p-5 bg-blue-50/50 rounded-xl border border-blue-100 hover:bg-blue-50 transition-colors">
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-100 rounded-lg flex items-center justify-center border border-blue-200">
                    <FaCarSide className="text-blue-500 text-lg md:text-xl" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-800 text-sm md:text-base">Premium EV</div>
                    <div className="text-xs text-blue-600 font-medium">$59/day • 400km range</div>
                  </div>
                </div>
              </div>
              <div className="h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent mb-4 md:mb-6 opacity-50"></div>
              <p className="text-xs md:text-sm text-blue-600 font-medium tracking-wide">Flexible mobility options</p>
            </div>

            {/* Step 3 - Enhanced card */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
              <div className="w-16 h-16 md:w-20 md:h-20 mb-6 md:mb-8 mx-auto bg-[conic-gradient(at_top_right,#a855f7,#ec4899)] rounded-xl flex items-center justify-center text-white shadow-xl shadow-purple-400/30">
                <FaClipboardCheck className="text-2xl md:text-3xl" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">
                <span className="text-transparent bg-clip-text bg-[linear-gradient(90deg,#a855f7,#ec4899)]">
                  03.
                </span> Receive Itinerary
              </h3>
              <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                {[
                  { icon: <FaRoute className="text-purple-500 text-base md:text-lg" />, text: 'Smart routing' },
                  { icon: <FaChargingStation className="text-purple-500 text-base md:text-lg" />, text: 'Charging stations' },
                  { icon: <FaHotel className="text-purple-500 text-base md:text-lg" />, text: 'Premium accommodations' }
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 md:gap-4">
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-purple-50 rounded-lg flex items-center justify-center border border-purple-100 group-hover:bg-purple-100/50 transition-colors">
                      {item.icon}
                    </div>
                    <span className="text-gray-700 font-medium text-sm md:text-base">{item.text}</span>
                  </li>
                ))}
              </ul>
              <div className="h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent mb-4 md:mb-6 opacity-50"></div>
              <p className="text-xs md:text-sm text-purple-600 font-medium tracking-wide">Personalized travel blueprint</p>
            </div>
          </div>

          {/* Sophisticated CTA */}
          <div className="text-right px-4"> {/* Changed from text-center to text-right */}
            <div className="inline-block relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-30 group-hover:opacity-80 transition-opacity duration-500"></div>
              <a
                href="/trip-planner"
                className="relative inline-flex items-center justify-center bg-white px-10 md:px-12 py-3 md:py-4 rounded-xl border-2 border-gray-200 text-gray-900 font-bold text-base md:text-lg tracking-wide hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white hover:border-transparent transition-all duration-300 group-hover:shadow-lg"
              >
                <span className="mr-2 md:mr-3">Generate Smart Itinerary</span>
                <FaBolt className="text-blue-500 group-hover:text-yellow-300 transition-colors text-lg" />
              </a>
            </div>
          </div>
        </div>

        {/* Animations and fonts */}
        <style  >{`
    @keyframes pulse-slow {
      0%, 100% { opacity: 0.08; transform: scale(1); }
      50% { opacity: 0.15; transform: scale(1.03); }
    }
    .animate-pulse-slow {
      animation: pulse-slow 8s ease-in-out infinite;
    }
    @font-face {
      font-family: 'HeadingFont';
      src: url('https://fonts.googleapis.com/css2?family=Manrope:wght@700;800&display=swap');
      font-display: swap;
    }
    .font-heading {
      font-family: 'Manrope', -apple-system, BlinkMacSystemFont, sans-serif;
      letter-spacing: -0.025em;
      font-weight: 800;
    }
    body {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
      font-size: 16px;
      line-height: 1.6;
    }
  `}</style>
      </section>
    )
}
export default PlanTrips;