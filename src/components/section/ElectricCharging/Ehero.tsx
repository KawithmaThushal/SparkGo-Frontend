import { FaBolt, FaChargingStation, FaClock, FaLeaf, FaMapMarkerAlt } from "react-icons/fa";
import NavBar from "../../common/NavBar";
import { useEffect, useState } from "react";

function Ehero(){

    
      const [isMounted, setIsMounted] = useState(false);
    
      useEffect(() => {
        setIsMounted(true);
      }, []);

    return(
 <section className="relative h-[400px] overflow-hidden mb-16">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 via-blue-500 to-purple-600" />
                <div className="absolute inset-0 bg-black opacity-20" />
                <div className="absolute inset-0 bg-white opacity-10" />

                <div className="absolute top-20 left-10 opacity-20">
                    <FaBolt className="text-yellow-300 text-6xl animate-pulse" />
                </div>
                <div className="absolute bottom-20 right-10 opacity-20">
                    <FaLeaf className="text-green-300 text-4xl animate-bounce" />
                </div>
                <div className="absolute top-1/2 left-1/4 opacity-15">
                    <FaChargingStation className="text-blue-300 text-5xl" />
                </div>

               <NavBar />

                <div className="relative z-10 flex flex-col items-center justify-center pt-16 text-center px-6 max-w-4xl mx-auto">
                    <h1 className={`text-white text-3xl md:text-5xl font-bold font-serif drop-shadow-lg ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                        Electric Vehicle Charging
                    </h1>

                    <div className={`text-white text-lg md:text-xl font-serif drop-shadow-md mt-4 transition-all duration-500 ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                        Fast • Reliable • Eco-Friendly • 24/7 Available
                    </div>

                    <div className={`flex items-center gap-6 mt-8 text-white transition-all duration-700 ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                        <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                            <FaMapMarkerAlt className="text-emerald-300" />
                            <span>15+ Locations</span>
                        </div>
                        <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                            <FaChargingStation className="text-blue-300" />
                            <span>Fast Charging</span>
                        </div>
                        <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                            <FaClock className="text-yellow-300" />
                            <span>Open 24/7</span>
                        </div>
                    </div>
                </div>
            </section>
    )
}
export default Ehero;
