import { FaBrain, FaChargingStation, FaUserShield, FaExternalLinkAlt, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function WhyChooseSparkGo() {
  return (
    <section id="why-choose-sparkgo" className="relative bg-[linear-gradient(180deg,#eef8ff_0%,#f7fbff_40%,#eef9f3_100%)] pt-8 pb-12 sm:pt-10 sm:pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            <span className="relative">
              <span className="relative z-10">Why</span>
            </span>
            <span className="block md:inline-block md:ml-3 mt-1 md:mt-0">
              SparkGo Works Better
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            SparkGo combines destination discovery, EV support, and itinerary planning in one connected travel flow.
          </p>
        </div>

        <div className="relative mb-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="md:mt-20 space-y-8">
              <div className="bg-white/94 p-8 rounded-[1.8rem] shadow-[0_18px_40px_rgba(15,23,42,0.08)] border border-white/80 hover:shadow-[0_22px_46px_rgba(15,23,42,0.10)] transition-all duration-300 group">
                <div className="w-16 h-16 mb-6 bg-sky-50 rounded-2xl flex items-center justify-center">
                  <FaBrain className="text-3xl text-sky-600 group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Smarter Planning Logic</h3>
                <p className="text-gray-600 mb-4">
                  The experience is designed to help travelers move from inspiration to decisions with less friction.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Destination-first", "Route-aware", "Practical"].map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-sky-50 text-sky-600 text-xs font-medium rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="relative bg-gradient-to-br from-[#2563eb] via-[#14b8a6] to-[#22c55e] p-8 rounded-[1.8rem] shadow-[0_22px_48px_rgba(20,184,166,0.18)] overflow-hidden">
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 mb-6 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                    <FaChargingStation className="text-3xl text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">EV Travel Layer</h3>
                  <p className="text-white/90 mb-4">
                    SparkGo does not just suggest places to visit. It helps EV travelers understand how to complete the journey.
                  </p>
                  <Link to="/charging-place" className="inline-flex items-center px-4 py-2 bg-white text-blue-600 font-medium rounded-lg shadow-sm hover:shadow-md transition-all">
                    Explore Charging
                    <FaArrowRight className="ml-2" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="md:mt-20 space-y-8">
              <div className="bg-white/94 p-8 rounded-[1.8rem] shadow-[0_18px_40px_rgba(15,23,42,0.08)] border border-white/80 hover:shadow-[0_22px_46px_rgba(15,23,42,0.10)] transition-all duration-300 group">
                <div className="w-16 h-16 mb-6 bg-fuchsia-50 rounded-2xl flex items-center justify-center">
                  <FaUserShield className="text-3xl text-fuchsia-600 group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Clearer Travel Decisions</h3>
                <p className="text-gray-600 mb-4">
                  Bring destinations, transport choices, and trip structure together in one interface instead of scattered research.
                </p>
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-fuchsia-100 border-2 border-white"></div>
                  ))}
                  <div className="w-8 h-8 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center text-xs font-medium">
                    +1
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white/94 rounded-[2rem] shadow-[0_22px_50px_rgba(15,23,42,0.09)] border border-white/80 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-10 bg-gradient-to-br from-[#fff9ef] to-white">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">What the Platform Covers</h3>
              <p className="text-gray-600 mb-6">
                A polished home page should explain the whole product. These are the core areas SparkGo brings together.
              </p>
              <Link to="/trip-plan" className="inline-flex items-center px-5 py-2.5 bg-white text-gray-900 font-medium rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all">
                Start Planning
                <FaExternalLinkAlt className="ml-2 text-sm" />
              </Link>
            </div>
            <div className="p-10 grid grid-cols-2 gap-6">
              {[
                { value: "01", label: "Destination Discovery", color: "text-blue-600" },
                { value: "02", label: "Trip Planning", color: "text-green-600" },
                { value: "03", label: "Charging Support", color: "text-amber-600" },
                { value: "04", label: "Travel Flow", color: "text-purple-600" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className={`text-4xl font-bold mb-2 ${stat.color}`}>{stat.value}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseSparkGo;
