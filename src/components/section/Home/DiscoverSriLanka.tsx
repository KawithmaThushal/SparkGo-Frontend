import { Link } from "react-router-dom";
import homeVideo from "../../../assets/HomeViedo.mp4";
import videoPoster from "../../../assets/Ella.jpg";

function DiscoverSriLanka() {
  const highlights = [
    {
      title: "Cultural Landmarks",
      description: "Move from temples and forts to heritage cities with a clearer plan for what to see and when.",
      accent: "text-[#1d4ed8]",
    },
    {
      title: "Nature and Scenic Routes",
      description: "Connect mountains, viewpoints, parks, and forests into routes that feel smooth instead of rushed.",
      accent: "text-[#0f766e]",
    },
    {
      title: "Coastal Escapes",
      description: "Combine beach towns and inland stops in a way that works for real travel days, not just inspiration boards.",
      accent: "text-[#ea580c]",
    },
    {
      title: "Practical Context",
      description: "Turn destination interest into better decisions with travel context that supports the full trip.",
      accent: "text-[#7c3aed]",
    },
  ];

  return (
    <section id="discover-sri-lanka" className="relative bg-[linear-gradient(180deg,#f7fbff_0%,#eef8ff_32%,#edf9f3_100%)] pt-14 pb-20 px-4 md:px-20 transition-all duration-1000">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-200/80 to-transparent"></div>
      <div className="max-w-7xl mx-auto">
        <h2 className="max-w-5xl text-[2.7rem] leading-[1.08] md:text-[3.8rem] font-bold font-serif text-[#0b2c6b] mb-8 text-left tracking-[-0.02em]">
          Explore the Country
          <span className="block">SparkGo Was Built For</span>
        </h2>

        <div className="flex flex-col lg:flex-row items-center gap-12 transition duration-1000 ease-in-out">
          <div className="relative group overflow-hidden">
            <video
              className="h-[400px] w-[500px] rounded-bl-[100px] rounded-tr-[100px] object-cover shadow-[0_24px_60px_rgba(15,23,42,0.14)] transition-transform duration-500 group-hover:scale-[1.03]"
              poster={videoPoster}
              preload="metadata"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src={homeVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-bl-[100px] rounded-tr-[100px]"></div>
          </div>

          <div className="flex-1 text-left space-y-6">
            <p className="text-slate-700 font-serif text-lg leading-relaxed mt-4 text-justify max-w-3xl">
              SparkGo starts with place. Sri Lanka offers a rare mix of coast, culture, hill country, and wildlife within one compact island.
              The platform helps travelers turn that variety into a clear journey instead of a scattered set of searches, route checks, and last-minute decisions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
              {highlights.map((item) => (
                <div key={item.title} className="bg-white/74 rounded-[1.4rem] p-5 backdrop-blur-sm shadow-[0_14px_35px_rgba(148,163,184,0.10)] border border-white/70">
                  <h4 className={`font-semibold mb-2 ${item.accent}`}>{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>

            <h3 className="text-[2.2rem] leading-tight font-extrabold font-serif text-[#0b2c6b] mb-4">
              Discover first. Plan with purpose next.
            </h3>

            <div className="bg-gradient-to-r from-[#2563eb] via-[#14b8a6] to-[#f97316] rounded-2xl p-5 text-white shadow-[0_20px_45px_rgba(20,184,166,0.22)]">
              <p className="text-sm mb-3">See where you want to go, then move straight into planning and routing.</p>
              <Link to="/destinations" className="inline-block bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors text-sm">
                Explore Destinations
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DiscoverSriLanka;
