import NavBar from "../../common/NavBar";
import { useEffect, useState } from "react";
import { MdSearch } from "react-icons/md";

function DHero() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="relative min-h-[560px] overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/src/assets/Des3.jpg')" }} />
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(15,23,42,0.72),rgba(15,23,42,0.38),rgba(8,145,178,0.28))]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,214,102,0.22),transparent_30%)]" />

      <NavBar />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 py-28 text-center">
        <div className="mx-auto max-w-3xl">
          <div
            className={`mb-5 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-medium text-white/90 backdrop-blur-sm transition-all duration-500 ${isMounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
            style={{ transitionDelay: isMounted ? "40ms" : "0ms" }}
          >
            <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
            Curated places across Sri Lanka
          </div>

          <h1
            className={`text-4xl font-bold tracking-[-0.04em] text-white drop-shadow-lg transition-all duration-500 md:text-5xl lg:text-6xl ${isMounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
            style={{ transitionDelay: isMounted ? "100ms" : "0ms" }}
          >
            Destinations
          </h1>

          <p
            className={`mx-auto mt-5 max-w-2xl text-base font-medium leading-relaxed text-white/90 drop-shadow-md transition-all duration-500 md:text-xl ${isMounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
            style={{ transitionDelay: isMounted ? "300ms" : "0ms" }}
          >
            Find the right place for your route, your season, and the kind of journey you want to build.
          </p>

          <div
            className={`relative mx-auto mt-8 max-w-xl transition-all duration-500 ${isMounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
            style={{ transitionDelay: isMounted ? "500ms" : "0ms" }}
          >
            <div className="flex items-center rounded-full border border-white/25 bg-white/12 px-6 py-3.5 shadow-[0_18px_40px_rgba(15,23,42,0.16)] backdrop-blur-md">
              <MdSearch className="mr-3 h-6 w-6 text-cyan-200" />
              <input
                type="search"
                placeholder="Search destinations..."
                className="w-full bg-transparent text-white placeholder:text-white/70 focus:outline-none font-medium"
              />
            </div>
          </div>
        </div>
      </div>

      <img src="/src/assets/birds1.png" alt="Birds" className="absolute left-16 top-36 z-10 hidden h-[70px] w-[150px] opacity-80 lg:block" />
    </section>
  );
}

export default DHero;
