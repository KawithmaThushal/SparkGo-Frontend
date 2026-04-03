import { useEffect, useState } from "react";

function TipDestination() {
  const travelTips = [
    {
      title: "Best Transport",
      image: "/transport.jpg",
      shortTip: "Trains for scenery, tuk-tuks for short trips",
    },
    {
      title: "Temple Visits",
      image: "/src/assets/gallefort.jpg",
      shortTip: "Cover shoulders and knees, then remove shoes.",
    },
    {
      title: "Beach Seasons",
      image: "/beach.jpg",
      shortTip: "Southwest: Nov-Apr, northeast: May-Sep.",
    },
    {
      title: "Local Cuisine",
      image: "/food.jpg",
      shortTip: "Try hoppers, kottu, and fresh tropical fruit.",
    },
  ];

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="bg-gradient-to-br from-[#f8fcff] to-[#e6f4fe] px-4 py-12">
      <div className="mx-auto max-w-7xl">
        <h2 className={`mb-8 pl-4 text-3xl font-bold transition-all duration-500 md:pl-0 ${isMounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}>
          Essential Sri Lanka Travel Tips
        </h2>
        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {travelTips.map((tip, idx) => (
            <div
              key={idx}
              className={`group relative w-[160px] overflow-hidden rounded-[1.4rem] border border-white/80 shadow-[0_16px_34px_rgba(15,23,42,0.08)] transition-all duration-300 hover:scale-[1.03] sm:w-[180px] md:w-[200px] ${isMounted ? "opacity-100" : "translate-y-4 opacity-0"}`}
              style={{ transitionDelay: isMounted ? `${idx * 100}ms` : "0ms" }}
            >
              <img src={tip.image} alt={tip.title} className="h-64 w-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <div className="absolute bottom-0 w-full px-3 py-3 text-center">
                <h3 className="text-sm font-medium text-white transition-colors group-hover:text-amber-200 md:text-base">{tip.title}</h3>
                <p className="mt-1 text-xs text-white/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100">{tip.shortTip}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TipDestination;
