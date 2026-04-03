import PlaceType from "../../../Type/PlaceType";
import NavBar from "../../common/NavBar";
import { useEffect, useState } from "react";

interface PheroProps {
  places: PlaceType[];   // ✅ Accept places here
}

function Phero({ places }: PheroProps){

    
      const [isMounted, setIsMounted] = useState(false);
    
      useEffect(() => {
        setIsMounted(true);
      }, []);

          const place = places[0];

          console.log("Phero received place:", place);

    return (
  <section className="relative h-[480px] overflow-hidden">
  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{ backgroundImage: "url('/src/assets/HortanPlace.jpg')" }}
  />
  <div className="absolute inset-0 bg-black opacity-40" />
  <div className="absolute inset-0 bg-white opacity-30" />

  {/* Navigation - Kept intact */}
  <NavBar />

   {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center pt-20 text-center px-6 max-w-4xl mx-auto">
        
        {/* Place Name */}
        <h1
          className={`text-white text-3xl md:text-5xl font-bold font-serif drop-shadow-lg ${
            isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {place?.placeName ?? "Unknown Place"}
        </h1>

        {/* Opening Hours (Static Example – You can map this from backend later) */}
        <div
          className={`text-white text-lg md:text-xl font-serif drop-shadow-md mt-4 transition-all duration-500 ${
            isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Opens: 6:00AM - Closes: 6:00PM
        </div>
      </div>

      {/* Weather Box */}
      <div
        className={`absolute bottom-8 left-0 right-0 mx-auto max-w-md transition-all duration-700 ${
          isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30 shadow-lg mx-4">
          <div className="flex flex-col sm:flex-row gap-6 items-center justify-center">
            
            {/* Temperature */}
            <div className="text-center">
              <p className="text-white/80 text-xs uppercase tracking-wider">TEMPERATURE</p>
              <p className="text-white text-2xl font-bold">
                {place?.weather?.temperature
                  ? `${place.weather.temperature}°C`
                  : "N/A"}
              </p>
            </div>

            <div className="hidden sm:block h-8 w-px bg-white/40"></div>

            {/* Humidity */}
            <div className="text-center">
              <p className="text-white/80 text-xs uppercase tracking-wider">HUMIDITY</p>
              <p className="text-white text-2xl font-bold">
                {place?.weather?.humidity
                  ? `${place.weather.humidity}%`
                  : "N/A"}
              </p>
            </div>

            <div className="hidden sm:block h-8 w-px bg-white/40"></div>

            {/* Wind */}
            <div className="text-center">
              <p className="text-white/80 text-xs uppercase tracking-wider">WIND</p>
              <p className="text-white text-xl font-bold">
                {place?.weather?.windSpeed
                  ? `${place.weather.windSpeed} km/h`
                  : "N/A"}
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
    )
}
export default Phero;
