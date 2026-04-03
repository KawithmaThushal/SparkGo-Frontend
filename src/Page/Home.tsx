import { FaChargingStation, FaRoute, FaMapMarkerAlt, FaBolt, FaCarAlt, FaMapPin, FaCarSide, FaClipboardCheck, FaHotel } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Footer from '../components/common/Footer';
import Hero from '../components/section/Home/Hero';
import DiscoverSriLanka from '../components/section/Home/DiscoverSriLanka';
import WhyChooseSparkGo from '../components/section/Home/WhyChooseSparkGo';
import Newsletter from '../components/section/Home/Newsletter';
import Echarging from '../components/section/Home/Echarging';

function Home() {
  return (
    <div>
      <Hero />
      <DiscoverSriLanka />
      <Echarging />

      <section id="trip-planner" className="relative w-full overflow-hidden bg-[radial-gradient(circle_at_top_left,#fff8e6_0%,#eef8ff_35%,#e8f7f0_100%)] px-4 pb-12 pt-14 sm:px-6 lg:px-8">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.6),transparent_65%)]"></div>
          <div className="absolute left-0 top-10 h-72 w-72 rounded-full bg-orange-200/10 blur-[110px]"></div>
          <div className="absolute bottom-10 right-0 h-72 w-72 rounded-full bg-cyan-200/10 blur-[110px]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="mb-10 px-2 text-left md:mb-12">
            <h2 className="mb-4 text-3xl font-bold leading-tight text-gray-900 md:text-4xl">
              <span className="bg-[linear-gradient(90deg,#f97316,#ec4899,#6366f1)] bg-clip-text text-transparent">
                Intelligent
              </span>
              <span className="text-gray-800"> Trip Planning</span>
            </h2>
            <p className="max-w-2xl text-base leading-relaxed text-gray-600 md:text-lg">
              Move from destination ideas to a practical itinerary with charging-aware planning and a clearer trip structure.
            </p>
          </div>

          <div className="mb-12 grid grid-cols-1 gap-6 px-2 lg:grid-cols-3">
            <div className="rounded-[1.6rem] border border-white/80 bg-white/90 p-6 shadow-[0_16px_34px_rgba(15,23,42,0.07)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(15,23,42,0.09)]">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-50 text-orange-500 shadow-[0_12px_24px_rgba(249,115,22,0.12)]">
                <FaMapMarkerAlt className="text-xl" />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-gray-900">
                <span className="bg-[linear-gradient(90deg,#f97316,#8b5cf6)] bg-clip-text text-transparent">01.</span> Choose Places
              </h3>
              <ul className="mb-6 space-y-3">
                {['Colombo', 'Kandy', 'Nuwara Eliya'].map((city, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-orange-100 bg-orange-50">
                      <FaMapPin className="text-sm text-orange-500" />
                    </div>
                    <span className="text-base font-medium text-gray-700">{city}</span>
                  </li>
                ))}
              </ul>
              <p className="border-t border-orange-100 pt-4 text-sm font-medium text-orange-600">Start with the places that define your trip.</p>
            </div>

            <div className="rounded-[1.6rem] border border-white/80 bg-white/90 p-6 shadow-[0_16px_34px_rgba(15,23,42,0.07)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(15,23,42,0.09)]">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-600 shadow-[0_12px_24px_rgba(6,182,212,0.12)]">
                <FaCarAlt className="text-xl" />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-gray-900">
                <span className="bg-[linear-gradient(90deg,#2563eb,#14b8a6)] bg-clip-text text-transparent">02.</span> Match the Journey
              </h3>
              <div className="mb-6 rounded-2xl border border-cyan-100 bg-cyan-50/70 p-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-200 bg-white">
                    <FaCarSide className="text-lg text-cyan-600" />
                  </div>
                  <div>
                    <div className="text-base font-bold text-gray-800">Premium EV</div>
                    <div className="text-sm font-medium text-cyan-700">$59/day - 400km range</div>
                  </div>
                </div>
              </div>
              <p className="border-t border-cyan-100 pt-4 text-sm font-medium text-cyan-700">Align transport and charging with your route.</p>
            </div>

            <div className="rounded-[1.6rem] border border-white/80 bg-white/90 p-6 shadow-[0_16px_34px_rgba(15,23,42,0.07)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(15,23,42,0.09)]">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-fuchsia-50 text-fuchsia-500 shadow-[0_12px_24px_rgba(236,72,153,0.12)]">
                <FaClipboardCheck className="text-xl" />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-gray-900">
                <span className="bg-[linear-gradient(90deg,#8b5cf6,#ec4899)] bg-clip-text text-transparent">03.</span> Build the Plan
              </h3>
              <ul className="mb-6 space-y-3">
                {[
                  { icon: <FaRoute className="text-sm text-purple-500" />, text: 'Route structure' },
                  { icon: <FaChargingStation className="text-sm text-purple-500" />, text: 'Charging support' },
                  { icon: <FaHotel className="text-sm text-purple-500" />, text: 'Stay options' }
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-fuchsia-100 bg-fuchsia-50">
                      {item.icon}
                    </div>
                    <span className="text-base font-medium text-gray-700">{item.text}</span>
                  </li>
                ))}
              </ul>
              <p className="border-t border-fuchsia-100 pt-4 text-sm font-medium text-fuchsia-600">Turn ideas into one connected itinerary.</p>
            </div>
          </div>

          <div className="px-2 text-right">
            <div className="group relative inline-block">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#2563eb] via-[#14b8a6] to-[#f97316] opacity-25 blur transition-opacity duration-300 group-hover:opacity-55"></div>
              <Link
                to="/trip-plan"
                className="relative inline-flex items-center justify-center rounded-xl border border-white bg-white px-8 py-3 text-base font-semibold text-gray-900 transition-all duration-300 hover:border-transparent hover:bg-gradient-to-r hover:from-[#2563eb] hover:via-[#14b8a6] hover:to-[#f97316] hover:text-white"
              >
                <span className="mr-3">Start Building Your Trip</span>
                <FaBolt className="text-lg text-blue-500 transition-colors group-hover:text-yellow-300" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <WhyChooseSparkGo />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default Home;
