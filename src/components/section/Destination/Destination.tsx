import { useEffect, useRef, useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { FiStar } from "react-icons/fi";
import DestinationType from "../../../Type/DestinationType";
import axios from "axios";
import TravelPeriod from "../../../Type/TravelPeriod";

function Destination() {
  const destinationsCarouselRef = useRef<HTMLDivElement>(null);
  const [destinationTypes, setDestinationTypes] = useState<DestinationType[]>([]);
  const [travelPeriods, setTravelPeriods] = useState<TravelPeriod[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  const scrollDestinations = (scrollDirection: "left" | "right") => {
    if (destinationsCarouselRef.current) {
      const scrollContainer = destinationsCarouselRef.current;
      const scrollDistance = scrollDirection === "left" ? -300 : 300;
      scrollContainer.scrollBy({ left: scrollDistance, behavior: "smooth" });
    }
  };

  const travelDestinations = [
    { id: 1, type: "Beach", name: "Golden Sands", rating: 5 },
    { id: 2, type: "Mountain", name: "Alpine Peaks", rating: 4 },
    { id: 3, type: "Waterfall", name: "Cascade Falls", rating: 5 },
    { id: 4, type: "National Park", name: "Wilderness Reserve", rating: 4 },
    { id: 5, type: "Adventure", name: "Thrill Valley", rating: 5 },
    { id: 6, type: "Beach", name: "Emerald Bay", rating: 4 },
    { id: 7, type: "Mountain", name: "Summit Ridge", rating: 5 },
    { id: 8, type: "Cultural", name: "Heritage Trail", rating: 4 },
    { id: 9, type: "National Park", name: "Canyon Lands", rating: 5 },
  ];

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    loadDestinationType();
    loadTravelPeriods();
  }, []);

  async function loadDestinationType() {
    try {
      const response = await axios.get("http://localhost:8080/api/destination-types/all");
      setDestinationTypes(response.data);
    } catch (error) {
      console.error("Error loading destination types:", error);

      if (axios.isAxiosError(error)) {
        console.error("Axios error details:", error.response);

        if (error.response?.status === 403) {
          console.error("Forbidden! You are not authorized to access this resource.");
        } else if (error.response?.status === 401) {
          console.error("Unauthorized! Check your JWT token.");
        }
      }
    }
  }

  async function loadTravelPeriods() {
    try {
      const response = await axios.get("http://localhost:8080/api/travel-periods/all");
      setTravelPeriods(response.data);
    } catch (error) {
      console.error("Error loading travel periods:", error);

      if (axios.isAxiosError(error)) {
        console.error("Axios error details:", error.response);

        if (error.response?.status === 403) {
          console.error("Forbidden! You are not authorized to access this resource.");
        } else if (error.response?.status === 401) {
          console.error("Unauthorized! Check your JWT token.");
        }
      }
    }
  }

  return (
    <section className={`relative z-20 mt-[-42px] rounded-t-[2rem] bg-gradient-to-br from-[#f8fcff] to-[#e6f4fe] px-4 pt-12 transition-all duration-700 ${isMounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}>
      <div className="mx-auto max-w-7xl">
        <div className={`mb-12 text-center transition-all duration-500 ${isMounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`} style={{ transitionDelay: isMounted ? "200ms" : "0ms" }}>
          <div className="mx-auto mb-8 max-w-4xl rounded-[1.6rem] border border-white/80 bg-white/82 p-4 shadow-[0_18px_44px_rgba(15,23,42,0.08)] backdrop-blur-sm">
            <div className="flex flex-col justify-center gap-4 sm:flex-row sm:gap-6">
              <div className="relative w-full sm:w-auto">
                <select defaultValue="" className="w-full appearance-none rounded-xl border border-slate-200 bg-slate-50 px-5 py-3 text-gray-800 shadow-sm transition-all duration-200 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500 sm:w-[240px]">
                  <option value="" disabled>
                    Destination Type
                  </option>
                  {destinationTypes.map((destinationType) => (
                    <option key={destinationType.id} value={destinationType.id}>
                      {destinationType.destinationType}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-gray-600">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>

              <div className="relative w-full sm:w-auto">
                <select defaultValue="" className="w-full appearance-none rounded-xl border border-slate-200 bg-slate-50 px-5 py-3 text-gray-800 shadow-sm transition-all duration-200 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500 sm:w-[260px]">
                  <option value="" disabled>
                    Best Time to Visit
                  </option>
                  {travelPeriods.map((travelPeriod) => (
                    <option key={travelPeriod.id} value={travelPeriod.id}>
                      {travelPeriod.periodName} : {travelPeriod.months}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-gray-600">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`w-full py-8 transition-all duration-500 ${isMounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`} style={{ transitionDelay: isMounted ? "400ms" : "0ms" }}>
          <h2 className={`mb-10 text-center text-3xl font-bold text-[#1D3557] transition-all duration-500 md:text-4xl ${isMounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`} style={{ transitionDelay: isMounted ? "500ms" : "0ms" }}>
            Explore Our Top Destinations
          </h2>

          <div className="relative mx-auto w-full max-w-7xl">
            <button
              onClick={() => scrollDestinations("left")}
              className={`absolute left-[-22px] top-1/2 z-10 hidden -translate-y-1/2 items-center justify-center rounded-full bg-white p-3 text-orange-500 shadow-lg transition-all duration-200 hover:scale-110 hover:bg-gray-100 sm:flex md:left-[-30px] ${isMounted ? "opacity-100" : "opacity-0"}`}
              style={{ transitionDelay: isMounted ? "700ms" : "0ms" }}
              aria-label="Scroll left"
            >
              <MdChevronLeft className="h-6 w-6" />
            </button>

            <div
              ref={destinationsCarouselRef}
              className={`hide-scrollbar flex h-[420px] w-full snap-x snap-mandatory gap-6 overflow-x-auto px-2 py-4 transition-all duration-300 md:gap-8 md:px-4 ${isMounted ? "opacity-100" : "opacity-0"}`}
              style={{ scrollbarWidth: "none", msOverflowStyle: "none", transitionDelay: isMounted ? "600ms" : "0ms" }}
            >
              {travelDestinations.map((destination, index) => (
                <div
                  key={destination.id}
                  className={`group flex h-[360px] w-[285px] flex-shrink-0 snap-center flex-col overflow-hidden rounded-[1.6rem] border border-white/80 bg-white shadow-[0_16px_34px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_24px_46px_rgba(15,23,42,0.12)] sm:w-[300px] ${isMounted ? "opacity-100" : "translate-y-4 opacity-0"}`}
                  style={{ transitionDelay: isMounted ? `${600 + index * 50}ms` : "0ms" }}
                >
                  <div className="relative flex h-48 w-full items-end overflow-hidden rounded-t-[1.6rem] bg-gradient-to-br from-blue-400 to-purple-600 p-4">
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(15,23,42,0.24))] transition-all duration-300 group-hover:bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(15,23,42,0.34))]" />
                    <span className="z-10 text-xl font-bold text-white">{destination.name}</span>
                  </div>

                  <div className="p-5">
                    <div className="mb-1 flex items-center gap-2">
                      <span className="rounded-full bg-blue-100 px-2 text-xs font-medium text-blue-800">{destination.type}</span>
                    </div>
                    <h3 className="mb-3 text-xl font-bold text-[#1D3557]">{destination.name}</h3>
                    <p className="mb-4 text-sm leading-relaxed text-gray-600">Experience the breathtaking beauty and unique adventures this destination offers.</p>
                    <div className="flex items-center justify-between">
                      <button
                        onClick={() => console.log("View details for", destination.id)}
                        className="rounded px-1 text-sm font-semibold text-orange-500 transition-all hover:underline focus:outline-none focus:ring-2 focus:ring-orange-300"
                        aria-label={`View details for ${destination.name}`}
                      >
                        View Details
                      </button>
                      <div className="flex gap-1 text-yellow-400">
                        {Array.from({ length: destination.rating }).map((_, i) => (
                          <FiStar key={i} className="fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => scrollDestinations("right")}
              className={`absolute right-[-22px] top-1/2 z-10 hidden -translate-y-1/2 items-center justify-center rounded-full bg-white p-3 text-orange-500 shadow-lg transition-all duration-200 hover:scale-110 hover:bg-gray-100 sm:flex md:right-[-30px] ${isMounted ? "opacity-100" : "opacity-0"}`}
              style={{ transitionDelay: isMounted ? "700ms" : "0ms" }}
              aria-label="Scroll right"
            >
              <MdChevronRight className="h-6 w-6" />
            </button>
          </div>

          <div className={`mt-6 flex justify-center transition-all duration-500 sm:hidden ${isMounted ? "opacity-100" : "opacity-0"}`} style={{ transitionDelay: isMounted ? "800ms" : "0ms" }}>
            <p className="flex items-center text-sm text-gray-500">
              <span className="mr-2">&larr;</span>
              Swipe to explore more
              <span className="ml-2">&rarr;</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Destination;
