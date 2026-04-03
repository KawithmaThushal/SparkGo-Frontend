import { FaCalendarAlt, FaCompass, FaPlayCircle, FaSearch } from "react-icons/fa";
import NavBar from "../../common/NavBar";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  const featuredDestination = {
    imageUrl: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-4.0.3&auto=format&fit=crop&w=1368&q=80",
    title: "Sigiriya, Sri Lanka",
    description: "Cultural icon with dramatic views and unforgettable history",
    rating: 4.8,
    distance: "Route-ready stop",
  };

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_left,#fff0cc_0%,#dff8ff_34%,#d7f1ff_65%,#ddf8ec_100%)]">
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(18)].map((_, i) => {
          const size = Math.random() * 92 + 40;
          const delay = Math.random() * 5;
          const duration = Math.random() * 15 + 10;
          const translateY = scrollY * 0.08 * (Math.random() * 0.5 + 0.5);

          return (
            <div
              key={i}
              className="absolute rounded-full bg-white/12 backdrop-blur-sm"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                transform: `translateY(${translateY}px)`,
                animation: `float ${duration}s infinite ease-in-out ${delay}s`,
                opacity: isMounted ? 1 : 0,
                transition: "opacity 1s ease-in-out",
              }}
            />
          );
        })}

        <div className="absolute inset-0 opacity-[0.08] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAwMDAiIG9wYWNpdHk9IjAuMSI+PHBhdGggZD0iTTM2IDM0aDEydjEySDM2em0wLTI0aDEydjEySDM2em0tMjQgMGgxMnYxMkgxMnptMCAyNGgxMnYxMkgxMnoiLz48L2c+PC9nPjwvc3ZnPg==')]"></div>
        <div className="absolute -top-24 left-16 h-64 w-64 rounded-full bg-amber-200/20 blur-3xl"></div>
        <div className="absolute bottom-24 right-12 h-72 w-72 rounded-full bg-cyan-300/20 blur-3xl"></div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-br from-[#ffae5722] via-transparent to-[#14b8a61a]" />
      <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent" />

      <div className="relative z-10 flex min-h-screen w-full flex-col">
        <NavBar />

        <div className="flex flex-1 items-center px-6 pb-12 pt-8 sm:px-8 md:px-12">
          <div className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
            <div className="max-w-[680px] space-y-5">
              <div
                className={`inline-flex items-center gap-3 rounded-full border border-white/70 bg-white/80 px-5 py-3 shadow-[0_12px_35px_rgba(255,255,255,0.38)] backdrop-blur-sm transition-all duration-500 ${isMounted ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"}`}
                style={{ transitionDelay: "150ms" }}
              >
                <span className="h-2.5 w-2.5 rounded-full bg-[#fb923c]"></span>
                <span className="text-sm font-medium tracking-[0.01em] text-slate-600">Smart travel planning for Sri Lanka</span>
              </div>

              <div className="space-y-4">
                <div className={`transition-all duration-700 ${isMounted ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`} style={{ transitionDelay: "260ms" }}>
                  <span className="bg-gradient-to-r from-[#2563eb] via-[#14b8a6] to-[#f97316] bg-clip-text text-5xl font-bold leading-none text-transparent sm:text-[4rem]">
                    SparkGo
                  </span>
                </div>

                <h1 className="max-w-3xl text-[2.9rem] font-bold leading-[0.98] tracking-[-0.04em] text-slate-900 sm:text-[3.8rem]">
                  <div className={`transition-all duration-700 ${isMounted ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`} style={{ transitionDelay: "380ms" }}>
                    Discover, plan,
                  </div>
                  <div className={`transition-all duration-700 ${isMounted ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`} style={{ transitionDelay: "500ms" }}>
                    and drive smarter.
                  </div>
                </h1>
              </div>

              <p
                className={`max-w-3xl text-xl leading-relaxed text-slate-600 transition-opacity duration-500 ${isMounted ? "opacity-100" : "opacity-0"}`}
                style={{ transitionDelay: "620ms" }}
              >
                SparkGo brings destination discovery, EV charging support, and trip planning into one clear travel experience.
              </p>

              <div
                className={`max-w-[720px] rounded-2xl border border-white/80 bg-white/88 p-1.5 shadow-[0_18px_44px_rgba(15,23,42,0.10)] backdrop-blur-sm transition-all duration-500 ${isMounted ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}
                style={{ transitionDelay: "760ms" }}
              >
                <div className="grid gap-2 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)_auto]">
                  <div className="flex min-w-0 flex-1 items-center gap-3 rounded-xl bg-slate-50/80 px-4 py-4">
                    <FaSearch className="text-slate-400" />
                    <input type="text" placeholder="Search destinations" className="min-w-0 w-full border-none bg-transparent text-base text-slate-700 outline-none placeholder:text-slate-400" />
                  </div>
                  <div className="flex min-w-0 items-center gap-3 rounded-xl bg-slate-50/80 px-4 py-4">
                    <FaCalendarAlt className="text-slate-400" />
                    <input type="text" placeholder="Add travel dates" className="min-w-0 w-full border-none bg-transparent text-base text-slate-700 outline-none placeholder:text-slate-400" />
                  </div>
                  <button className="flex shrink-0 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#2563eb] via-[#0ea5e9] to-[#14b8a6] px-7 py-4 text-base font-semibold text-white shadow-[0_14px_34px_rgba(14,165,233,0.24)] transition-all hover:shadow-[0_18px_40px_rgba(20,184,166,0.30)]">
                    <FaSearch />
                    <span>Explore</span>
                  </button>
                </div>
              </div>

              <div
                className={`flex flex-col gap-4 pt-2 sm:flex-row transition-all duration-500 ${isMounted ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}
                style={{ transitionDelay: "900ms" }}
              >
                <Link
                  to="/destinations"
                  className="inline-flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-[#2563eb] via-[#0ea5e9] to-[#14b8a6] px-9 py-4 text-lg font-semibold text-white shadow-[0_18px_40px_rgba(14,165,233,0.24)] transition-all hover:-translate-y-0.5 hover:shadow-[0_22px_46px_rgba(20,184,166,0.30)]"
                >
                  <FaCompass className="text-lg" />
                  Explore Destinations
                </Link>
                <Link
                  to="/trip-plan"
                  className="inline-flex items-center justify-center gap-3 rounded-2xl border border-white/70 bg-white/88 px-9 py-4 text-lg font-semibold text-slate-800 shadow-[0_16px_34px_rgba(15,23,42,0.10)] transition-all hover:-translate-y-0.5 hover:shadow-[0_20px_40px_rgba(15,23,42,0.14)]"
                >
                  <FaPlayCircle className="text-[#f97316]" />
                  Start Planning
                </Link>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="relative mx-auto h-[430px] w-full max-w-[410px]">
                <div className="absolute left-10 top-8 h-[340px] w-[340px] overflow-hidden rounded-[2rem] border-4 border-white/90 bg-white shadow-[0_24px_54px_rgba(15,23,42,0.12)]">
                  <img
                    src={featuredDestination.imageUrl}
                    alt={featuredDestination.title}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/52 via-slate-950/10 to-transparent" />

                  <div className="absolute inset-x-4 bottom-4 rounded-[1.45rem] border border-white/20 bg-black/20 p-4 backdrop-blur-sm shadow-[0_16px_40px_rgba(15,23,42,0.18)]">
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-1.5">
                        <p className="text-[1.15rem] font-semibold leading-tight tracking-[-0.03em] text-white">
                          {featuredDestination.title}
                        </p>
                        <p className="max-w-[200px] text-[0.85rem] leading-relaxed text-white/86">{featuredDestination.description}</p>
                      </div>
                      <span className="shrink-0 rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700">
                        EV Friendly
                      </span>
                    </div>
                    <div className="mt-3 flex items-center justify-between border-t border-white/18 pt-3 text-[0.83rem]">
                      <div className="flex items-center gap-2 font-medium text-amber-300">
                        <span>{featuredDestination.rating}</span>
                        <span>rating</span>
                      </div>
                      <span className="text-white/80">{featuredDestination.distance}</span>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-8 right-4 h-24 w-24 rounded-full bg-[#14b8a6]/14 blur-3xl"></div>
                <div className="absolute right-8 top-4 h-20 w-20 rounded-full bg-[#f59e0b]/14 blur-3xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-14 bg-gradient-to-b from-transparent via-white/15 to-[#f7fbff]" />
    </section>
  );
}

export default Hero;
