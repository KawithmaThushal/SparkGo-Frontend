import { useEffect, useState } from "react";
import PlaceType from "../../../Type/PlaceType";


interface Section1Props {
  places: PlaceType[];   // ✅ Accept places here
}


function Section1({ places }: Section1Props){

      const carouselImages = [
        "src/assets/horton-1.jpg", // add real paths in /public
        "src/assets/horton-2.jpg",
        "src/assets/horton-4.jpg",
      ];
      const [currentIdx, setCurrentIdx] = useState(0);
      const place = places[0];
    
      useEffect(() => {
        const id = setInterval(() => {
          setCurrentIdx((prev) => (prev + 1) % carouselImages.length);
        }, 5000);
        return () => clearInterval(id);
      }, []);

    return( 
    
    <section className=" py-10 mx-auto relative font-sans">
  {/* Decorative top border */}
  <div className="absolute left-0 right-0 top-0 border-t border-amber-400"></div>

  <div className="flex flex-col lg:flex-row gap-6 items-stretch">
    {/* Left Content - Location Overview */}
    {/* p-6 */}
    <div className="w-full lg:w-[50%] h-[400px] ps-24 bg-white rounded-2xl  ">
      {/* <div className="w-full lg:w-[60%] h-[400px] p-6 bg-white rounded-2xl"></div> */}
      <h3 className="text-2xl font-semibold text-gray-800 mb-12 font-serif ">Location Overview</h3>
        <div className="overflow-y-auto h-[calc(100%-3rem)]">
            <p className="text-gray-600 text-justify font-serif text-xl leading-snug max-w-none">
            {place.description1 ?? "No description available."}
            </p>
          </div>
    </div>

    {/* Right Content - Image Carousel */}
    <div className="w-full lg:w-[50%] h-[400px] ps-12 pe-12">
      <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl">
        {carouselImages.map((img, idx) => (
          <img
            key={img}
            src={img}
            alt={`Horton Plains ${idx + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
              idx === currentIdx ? "opacity-100" : "opacity-0"
            }`}
            loading="lazy"
          />
        ))}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
          {carouselImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIdx(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                idx === currentIdx ? 'bg-white scale-125' : 'bg-white/50'
              }`}
              aria-label={`View image ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  
 
  </div>
</section>)

}
export default Section1;