import { type ReactNode, useEffect, useState } from "react";
import { FaMonument, FaMountain, FaUmbrellaBeach, FaWater } from "react-icons/fa";
import { FiCalendar, FiChevronRight, FiMapPin, FiStar, FiSun } from "react-icons/fi";
import { GiElephant, GiVillage } from "react-icons/gi";

type DestinationKind = "beach" | "mountain" | "cultural" | "wildlife" | "village" | "waterfall";

function TopDestination() {
  const destinations: Array<{
    id: number;
    title: string;
    type: DestinationKind;
    description: string;
    image: string;
    season: string;
    weather: string;
    highlights: string[];
    rating: number;
  }> = [
    {
      id: 1,
      title: "Golden Beaches of the South",
      type: "beach",
      description: "Pristine stretches of golden sand with turquoise waters, perfect for surfing and relaxation.",
      image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a",
      season: "Best: Nov-Apr",
      weather: "28-32°C, Sunny",
      highlights: ["Whale watching", "Coral reefs", "Sunset views"],
      rating: 4.8,
    },
    {
      id: 2,
      title: "Misty Hill Country",
      type: "mountain",
      description: "Lush tea plantations and cool climates in Sri Lanka's picturesque highlands.",
      image: "https://images.unsplash.com/photo-1564420228450-d4f5d4e6720e",
      season: "Best: Mar-Aug",
      weather: "16-24°C, Cool",
      highlights: ["Tea trails", "Waterfalls", "Scenic trains"],
      rating: 4.7,
    },
    {
      id: 3,
      title: "Ancient Cultural Wonders",
      type: "cultural",
      description: "UNESCO World Heritage sites showcasing 2,000+ years of history.",
      image: "https://images.unsplash.com/photo-1582813616349-5a9a5a1b5a1d",
      season: "Year-round",
      weather: "26-30°C, Dry",
      highlights: ["Sigiriya Rock", "Sacred temples", "Ancient cities"],
      rating: 4.9,
    },
    {
      id: 4,
      title: "Wildlife Safaris",
      type: "wildlife",
      description: "Home to leopards, elephants and hundreds of bird species in natural habitats.",
      image: "https://images.unsplash.com/photo-1582139329536-e7284fece509",
      season: "Best: Feb-Jul",
      weather: "27-34°C, Humid",
      highlights: ["Leopard sightings", "Bird watching", "Jungle camping"],
      rating: 4.6,
    },
  ];

  const getTypeIcon = (type: DestinationKind) => {
    const icons: Record<DestinationKind, ReactNode> = {
      beach: <FaUmbrellaBeach className="text-blue-500" />,
      mountain: <FaMountain className="text-emerald-500" />,
      cultural: <FaMonument className="text-amber-500" />,
      wildlife: <GiElephant className="text-green-600" />,
      village: <GiVillage className="text-purple-500" />,
      waterfall: <FaWater className="text-cyan-500" />,
    };
    return icons[type] || <FiMapPin className="text-gray-500" />;
  };

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className={`relative overflow-hidden bg-gradient-to-br from-[#f8fcff] to-[#e6f4fe] py-10 transition-all duration-700 ${isMounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}>
      <div className="absolute left-0 top-0 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-100 opacity-20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-80 w-80 translate-x-1/2 translate-y-1/2 rounded-full bg-amber-100 opacity-20 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className={`mb-10 text-center transition-all duration-500 ${isMounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`} style={{ transitionDelay: isMounted ? "200ms" : "0ms" }}>
          <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
            Discover <span className="bg-gradient-to-r from-blue-600 to-amber-500 bg-clip-text text-transparent">Sri Lanka</span>
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-600 md:text-xl">From golden beaches to ancient wonders, experience the island&apos;s diverse beauty</p>
        </div>

        <div className={`mb-10 flex flex-wrap justify-center gap-3 transition-all duration-500 ${isMounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`} style={{ transitionDelay: isMounted ? "300ms" : "0ms" }}>
          {["All", "Beaches", "Mountains", "Culture", "Wildlife", "Adventure"].map((tab) => (
            <button key={tab} className={`rounded-full px-5 py-2 font-medium transition-all ${tab === "All" ? "bg-blue-600 text-white shadow-md" : "bg-white text-gray-700 shadow-sm hover:bg-gray-100"}`}>
              {tab}
            </button>
          ))}
        </div>

        <div className={`grid grid-cols-1 gap-6 transition-all duration-300 md:grid-cols-2 lg:grid-cols-4 ${isMounted ? "opacity-100" : "opacity-0"}`}>
          {destinations.map((destination, index) => (
            <div
              key={destination.id}
              className={`flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-white/80 bg-white shadow-[0_16px_34px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_44px_rgba(15,23,42,0.10)] ${isMounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
              style={{ transitionDelay: isMounted ? `${400 + index * 50}ms` : "0ms" }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={destination.image} alt={destination.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute right-3 top-3 flex items-center rounded-full bg-white/90 px-2 py-1 shadow-sm">
                  <FiStar className="mr-1 text-amber-400" />
                  <span className="text-sm font-medium text-gray-800">{destination.rating}</span>
                </div>
              </div>

              <div className="flex flex-grow flex-col p-5">
                <div className="mb-2 flex items-center">
                  <span className="mr-2 text-blue-500">{getTypeIcon(destination.type)}</span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">{destination.type}</span>
                </div>

                <h3 className="mb-2 line-clamp-2 text-lg font-bold text-gray-900">{destination.title}</h3>
                <p className="mb-4 line-clamp-3 text-sm text-gray-600">{destination.description}</p>

                <div className="mb-4 mt-auto flex items-center text-xs text-gray-500">
                  <div className="mr-3 flex items-center">
                    <FiSun className="mr-1 text-amber-500" />
                    <span>{destination.weather.split(",")[0]}</span>
                  </div>
                  <div className="flex items-center">
                    <FiCalendar className="mr-1 text-blue-500" />
                    <span>{destination.season.replace("Best: ", "")}</span>
                  </div>
                </div>

                <button
                  className={`w-full rounded-lg px-4 py-2.5 font-medium text-white transition-colors ${
                    destination.type === "beach"
                      ? "bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
                      : destination.type === "mountain"
                        ? "bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700"
                        : destination.type === "cultural"
                          ? "bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700"
                          : "bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900"
                  }`}
                >
                  Discover {destination.type}
                  <FiChevronRight className="ml-1.5 inline" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className={`relative mt-16 overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white transition-all duration-500 md:p-12 ${isMounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`} style={{ transitionDelay: isMounted ? "800ms" : "0ms" }}>
          <div className="absolute right-0 top-0 h-64 w-64 -translate-y-1/2 translate-x-1/2 rounded-full bg-white/10 blur-3xl" />

          <div className="relative z-10 grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
            <div>
              <h3 className="mb-4 text-2xl font-bold md:text-3xl">Sri Lanka&apos;s Tropical Climate Paradise</h3>
              <p className="mb-6 max-w-2xl text-justify leading-relaxed text-blue-100">
                Sri Lanka&apos;s tropical climate offers warm temperatures (26-32°C) year-round, with coastal breezes and altitude variations creating diverse microclimates. The southwest is best from November to April, while the northeast shines from May to September. The central highlands stay cooler, so there is always a great region to explore.
              </p>
              <button className="rounded-lg bg-white px-6 py-3 font-medium text-blue-800 shadow-md transition-colors hover:bg-gray-100 hover:shadow-lg">View Seasonal Guide</button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl border border-white/20 bg-white/10 p-4 backdrop-blur-sm transition-all hover:border-white/30">
                <div className="mb-2 flex items-center">
                  <FiSun className="mr-2 text-xl text-amber-300" />
                  <span className="font-medium">Coastal Areas</span>
                </div>
                <div className="text-2xl font-bold">28-32°C</div>
                <div className="mt-1 text-sm text-blue-100">Nov-Apr: Ideal beach weather</div>
              </div>
              <div className="rounded-xl border border-white/20 bg-white/10 p-4 backdrop-blur-sm transition-all hover:border-white/30">
                <div className="mb-2 flex items-center">
                  <FaMountain className="mr-2 text-xl text-emerald-300" />
                  <span className="font-medium">Hill Country</span>
                </div>
                <div className="text-2xl font-bold">16-24°C</div>
                <div className="mt-1 text-sm text-blue-100">Cool mountain retreats</div>
              </div>
              <div className="rounded-xl border border-white/20 bg-white/10 p-4 backdrop-blur-sm transition-all hover:border-white/30">
                <div className="mb-2 flex items-center">
                  <GiElephant className="mr-2 text-xl text-green-300" />
                  <span className="font-medium">Wildlife Zones</span>
                </div>
                <div className="text-2xl font-bold">27-34°C</div>
                <div className="mt-1 text-sm text-blue-100">Best safari months: Feb-Jul</div>
              </div>
              <div className="rounded-xl border border-white/20 bg-white/10 p-4 backdrop-blur-sm transition-all hover:border-white/30">
                <div className="mb-2 flex items-center">
                  <FaMonument className="mr-2 text-xl text-amber-300" />
                  <span className="font-medium">Cultural Sites</span>
                </div>
                <div className="text-2xl font-bold">26-30°C</div>
                <div className="mt-1 text-sm text-blue-100">Ancient cities always accessible</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TopDestination;
