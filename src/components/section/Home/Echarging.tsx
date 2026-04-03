import { Link } from "react-router-dom";
import { FaArrowRight, FaBolt, FaChargingStation, FaClock, FaDirections, FaInfoCircle, FaMapMarkedAlt, FaRoute, FaSearchLocation } from "react-icons/fa";

function Echarging() {
  const features = [
    {
      step: 1,
      icon: <FaSearchLocation className="text-2xl" />,
      title: "Find the right station fast",
      description: "Search charging points by location, route needs, and connector preferences without switching between separate tools.",
      color: "from-[#2563eb] to-[#0ea5e9]",
    },
    {
      step: 2,
      icon: <FaInfoCircle className="text-2xl" />,
      title: "See the details that matter",
      description: "Review charging speed, connector types, pricing, availability, and nearby amenities before you commit to a stop.",
      color: "from-[#14b8a6] to-[#06b6d4]",
    },
    {
      step: 3,
      icon: <FaRoute className="text-2xl" />,
      title: "Plan charging into the route",
      description: "Treat charging as part of the journey so the itinerary stays practical from departure to arrival.",
      color: "from-[#8b5cf6] to-[#d946ef]",
    },
    {
      step: 4,
      icon: <FaBolt className="text-2xl" />,
      title: "Travel with less uncertainty",
      description: "Know where to stop next and how long a break may take before battery anxiety takes over the trip.",
      color: "from-[#10b981] to-[#22c55e]",
    },
  ];

  return (
    <section id="ev-charging" className="relative bg-[linear-gradient(180deg,#eef9ff_0%,#eefbf6_60%,#f8fbff_100%)] py-10 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1607582278038-6bebbd5b11e1?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center opacity-5"></div>
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute text-4xl text-cyan-400/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `pulse ${6 + Math.random() * 6}s ease-in-out infinite`,
              animationDelay: `${i * 0.5}s`,
            }}
          >
            <FaChargingStation />
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-12 relative">
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-16 h-16 bg-cyan-500/10 rounded-full filter blur-lg"></div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 font-heading">
            <span className="bg-gradient-to-r from-[#2563eb] via-[#14b8a6] to-[#f97316] bg-clip-text text-transparent">
              EV Charging
            </span>{" "}
            Made Practical
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-sans">
            SparkGo connects charging discovery with route planning so EV travel feels manageable.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10">
            {features.map((feature) => (
              <div key={feature.step} className="flex items-start gap-6 group">
                <div className={`flex-shrink-0 w-14 h-14 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <div className="absolute -z-10 w-16 h-16 bg-blue-500/10 rounded-xl group-hover:opacity-100 opacity-0 transition-opacity duration-300"></div>
                  {feature.icon}
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-sm font-bold text-[#2563eb] font-sans">STEP {feature.step}</span>
                    <div className="w-8 h-px bg-gray-300"></div>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2 font-heading">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed font-sans">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="relative h-full">
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-teal-400/10 rounded-full filter blur-3xl z-0"></div>
            <div className="relative bg-white rounded-[1.8rem] shadow-[0_24px_60px_rgba(15,23,42,0.12)] overflow-hidden border border-white/80 transition-all duration-500 h-full">
              <div className="bg-gradient-to-r from-[#2563eb] via-[#14b8a6] to-[#06b6d4] p-5 text-white">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold flex items-center gap-2 font-heading">
                    <FaMapMarkedAlt /> Charging Support View
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="text-xs bg-white/20 px-2 py-1 rounded-full font-sans">LIVE</span>
                    <span className="text-xs bg-white/20 px-2 py-1 rounded-full flex items-center font-sans">
                      <span className="w-2 h-2 bg-green-300 rounded-full mr-1"></span>
                      Station view
                    </span>
                  </div>
                </div>
              </div>

              <div className="relative h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2671&q=80"
                  alt="EV Charging Map"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-1/4 left-1/4 w-6 h-6 bg-red-500 rounded-full border-2 border-white shadow-lg flex items-center justify-center">
                  <FaChargingStation className="text-white text-xs" />
                </div>
                <div className="absolute top-1/3 right-1/4 w-6 h-6 bg-green-500 rounded-full border-2 border-white shadow-lg flex items-center justify-center">
                  <FaChargingStation className="text-white text-xs" />
                </div>
                <div className="absolute bottom-1/4 left-1/3 w-6 h-6 bg-green-500 rounded-full border-2 border-white shadow-lg flex items-center justify-center">
                  <FaChargingStation className="text-white text-xs" />
                </div>
                <div className="absolute bottom-1/3 right-1/3 w-6 h-6 bg-yellow-500 rounded-full border-2 border-white shadow-lg flex items-center justify-center">
                  <FaChargingStation className="text-white text-xs" />
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center text-cyan-700">
                    <FaChargingStation className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 font-heading">Colombo City Center</h4>
                    <p className="text-sm text-gray-500 mb-1 font-sans">200m from your route</p>
                    <div className="flex items-center gap-3">
                      <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full flex items-center font-sans">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-1"></span>
                        3 Available
                      </span>
                      <span className="text-xs bg-sky-100 text-sky-800 px-2 py-1 rounded-full font-sans">150kW - CCS</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-gray-600 font-sans">
                    <FaClock className="text-cyan-600" />
                    <span className="text-sm">15 min estimated stop</span>
                  </div>
                  <div className="text-gray-800 font-bold font-sans">$0.32/kWh</div>
                </div>

                <Link to="/charging-place" className="mt-6 w-full bg-gradient-to-r from-[#2563eb] via-[#14b8a6] to-[#06b6d4] text-white py-3 rounded-lg font-semibold hover:shadow-lg shadow-[0_18px_40px_rgba(20,184,166,0.24)] transition-all flex items-center justify-center gap-2 font-sans">
                  <FaDirections />
                  Open Charging Tools
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24 text-center relative">
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-48 h-48 bg-teal-500/10 rounded-full filter blur-3xl"></div>
          <div className="inline-block bg-gradient-to-r from-[#2563eb] via-[#14b8a6] to-[#f97316] rounded-xl p-1 shadow-2xl transition-all">
            <Link to="/charging-place" className="bg-white text-[#2563eb] px-8 py-4 rounded-lg font-bold hover:bg-gray-50 transition-all flex items-center gap-3 mx-auto group font-heading">
              <span className="relative overflow-hidden">
                <span className="block group-hover:-translate-y-full transition-transform duration-300">Explore Charging Support</span>
                <span className="absolute left-0 top-full group-hover:-translate-y-full transition-transform duration-300">Plan With Confidence</span>
              </span>
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Manrope:wght@500;600;700&display=swap');

        :root {
          --font-sans: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          --font-heading: 'Manrope', 'Inter', system-ui, -apple-system, sans-serif;
        }

        .font-sans {
          font-family: var(--font-sans);
        }

        .font-heading {
          font-family: var(--font-heading);
          font-weight: 700;
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.2; }
          50% { transform: scale(1.2); opacity: 0.3; }
        }
      `}</style>
    </section>
  );
}

export default Echarging;
