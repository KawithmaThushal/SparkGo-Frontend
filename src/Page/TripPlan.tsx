import { useEffect, useState } from "react";
import { FaArrowRight, FaCalendarAlt, FaCar, FaCheck, FaChevronRight, FaHotel, FaMapMarkerAlt, FaMountain, FaSearch, FaUmbrellaBeach } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import NavBar from "../components/common/NavBar";
import Footer from "../components/common/Footer";

function TripPlan() {
    const [isMounted, setIsMounted] = useState(false);
    const [destination, setDestination] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [showDestinations, setShowDestinations] = useState(false);
    const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
    const [showPackages, setShowPackages] = useState(false);
    const [activeTab, setActiveTab] = useState<"hotels" | "vehicles">("hotels");
    const [selectedHotel, setSelectedHotel] = useState<string | null>(null);
    const [selectedHotelPackage, setSelectedHotelPackage] = useState<string | null>(null);
    const [selectedVehicle, setSelectedVehicle] = useState<string | null>(null);
    const [tripDuration, setTripDuration] = useState(0);
    const [isBookingComplete, setIsBookingComplete] = useState(false);
    const [showConfirmation, setShowConfirmation] = useState(false);

    const kandyLocations = [
        { id: 1, name: "Temple of the Sacred Tooth Relic", type: "cultural", description: "The most sacred Buddhist temple in Sri Lanka, housing the relic of the tooth of Buddha", image: "/src/assets/kandy-temple.jpg" },
        { id: 2, name: "Royal Botanical Gardens", type: "nature", description: "147-acre botanical garden with 4000+ plant species including orchids and palms", image: "/src/assets/kandy-gardens.jpg" },
        { id: 3, name: "Kandy Lake", type: "scenic", description: "Iconic artificial lake in the heart of Kandy city, perfect for evening walks", image: "/src/assets/kandy-lake.jpg" },
        { id: 4, name: "Kandy View Point", type: "scenic", description: "Panoramic views of Kandy city and the surrounding hills", image: "/src/assets/kandy-viewpoint.jpg" }
    ];

    const hotelPackages = [
        { id: "h1", name: "Grand Kandy Hotel", packages: [{ id: "p1", name: "Deluxe Room", basePrice: 120, amenities: "Breakfast included, Free cancellation" }, { id: "p2", name: "Executive Suite", basePrice: 220, amenities: "All meals included, Spa access" }] },
        { id: "h2", name: "Lake View Resort", packages: [{ id: "p3", name: "Standard Room", basePrice: 80, amenities: "Breakfast included" }, { id: "p4", name: "Lake View Suite", basePrice: 180, amenities: "Private balcony, Dinner included" }] }
    ];

    const vehicleOptions = [
        { id: "v1", company: "Kandy Car Rentals", type: "Premium EV", price: "$59/day", dailyRate: 59, details: "400km range, Free delivery" },
        { id: "v2", company: "Sri Lanka Rides", type: "SUV", price: "$75/day", dailyRate: 75, details: "Unlimited mileage, 24/7 support" },
        { id: "v3", company: "Eco Travel", type: "Compact Car", price: "$45/day", dailyRate: 45, details: "Fuel efficient, GPS included" }
    ];

    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        if (startDate && endDate) {
            const start = new Date(startDate);
            const end = new Date(endDate);
            const diffTime = Math.abs(end.getTime() - start.getTime());
            setTripDuration(Math.max(1, Math.ceil(diffTime / (1000 * 60 * 60 * 24))));
        }
    }, [startDate, endDate]);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (destination.trim().toLowerCase() === "kandy") {
            setShowDestinations(true);
            setShowPackages(false);
            setShowConfirmation(false);
            return;
        }

        alert("This demo currently supports Kandy trip planning.");
    };

    const calculatePackagePrice = (basePrice: number) => basePrice * tripDuration;

    const handleNextStep = () => {
        setShowPackages(true);
        setShowDestinations(false);
    };

    const handleHotelSelect = (hotelId: string) => {
        setSelectedHotel(hotelId === selectedHotel ? null : hotelId);
        setSelectedHotelPackage(null);
    };

    const handleFinalSubmit = () => {
        setIsBookingComplete(true);
        setShowConfirmation(true);
        setShowPackages(false);
    };

    const handleBackToPackages = () => {
        setIsBookingComplete(false);
        setShowConfirmation(false);
        setShowPackages(true);
    };

    const selectedHotelData = hotelPackages.find((h) => h.id === selectedHotel);
    const selectedPackageData = selectedHotelData?.packages.find((p) => p.id === selectedHotelPackage);
    const selectedVehicleData = vehicleOptions.find((v) => v.id === selectedVehicle);
    const totalHotelPrice = selectedPackageData ? calculatePackagePrice(selectedPackageData.basePrice) : 0;
    const totalVehiclePrice = selectedVehicleData ? selectedVehicleData.dailyRate * tripDuration : 0;

    return (
        <div>
            <section className="relative min-h-[600px] overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('/src/assets/travel-hero-bg.jpg')" }} />
                <div className="absolute inset-0 bg-black opacity-40" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <NavBar />

                <div className="relative z-10 flex flex-col items-center justify-center pt-20 px-6 max-w-6xl mx-auto">
                    <div className={`w-full max-w-3xl text-center ${isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
                        <h1 className="text-white text-4xl md:text-5xl font-bold drop-shadow-lg mb-6 leading-tight">
                            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Plan</span> Your Dream Getaway
                        </h1>
                        <p className="text-white/90 text-xl md:text-2xl font-medium drop-shadow-md mb-8">Let us craft your personalized travel experience</p>
                    </div>

                    <form onSubmit={handleSearch} className={`w-full max-w-3xl bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 shadow-xl transition-all duration-500 font-inter ${isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`} style={{ fontFamily: '"Inter", "Segoe UI", "Roboto", "Helvetica Neue", sans-serif' }}>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                            <div className="relative">
                                <label htmlFor="destination" className="block text-white/80 text-sm mb-2 font-medium uppercase tracking-wider">Destination</label>
                                <div className="relative">
                                    <FaMapMarkerAlt className="absolute left-4 top-1/2 transform -translate-y-1/2 text-cyan-400" />
                                    <input id="destination" type="text" value={destination} onChange={(e) => setDestination(e.target.value)} placeholder="Where to?" className="w-full pl-12 pr-4 py-3 bg-white/15 text-white rounded-lg border border-white/25 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-transparent placeholder-white/50 transition-all duration-300" required />
                                </div>
                            </div>
                            <div className="relative">
                                <label htmlFor="startDate" className="block text-white/80 text-sm mb-2 font-medium uppercase tracking-wider">Start Date</label>
                                <div className="relative">
                                    <FaCalendarAlt className="absolute left-4 top-1/2 transform -translate-y-1/2 text-cyan-400" />
                                    <input id="startDate" type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} className="w-full pl-12 pr-4 py-3 bg-white/15 text-white rounded-lg border border-white/25 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-transparent transition-all duration-300" required />
                                </div>
                            </div>
                            <div className="relative">
                                <label htmlFor="endDate" className="block text-white/80 text-sm mb-2 font-medium uppercase tracking-wider">End Date</label>
                                <div className="relative">
                                    <FaCalendarAlt className="absolute left-4 top-1/2 transform -translate-y-1/2 text-cyan-400" />
                                    <input id="endDate" type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} className="w-full pl-12 pr-4 py-3 bg-white/15 text-white rounded-lg border border-white/25 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-transparent transition-all duration-300" required />
                                </div>
                            </div>
                        </div>

                        <button type="submit" className="mt-8 w-full px-8 py-3.5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 group">
                            <FaSearch className="text-lg transition-transform duration-300 group-hover:scale-110" />
                            <span>Discover Your Itinerary</span>
                            <FiArrowRight className="text-lg transition-transform duration-300 group-hover:translate-x-1" />
                        </button>
                    </form>
                </div>
            </section>

            {showDestinations && (
                <section className="py-12 px-6 max-w-6xl mx-auto">
                    <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-200 h-[700px] flex flex-col">
                        <div className="bg-gradient-to-r from-blue-600 to-cyan-500 p-6 text-white">
                            <h2 className="text-2xl font-bold">Explore Kandy</h2>
                            <p className="opacity-90">Select multiple locations for your itinerary</p>
                        </div>

                        {selectedLocations.length > 0 && (
                            <div className="bg-blue-50 border-b border-blue-100 p-4">
                                <p className="text-blue-600 font-medium">Selected: <span className="font-bold">{selectedLocations.join(", ")}</span></p>
                            </div>
                        )}

                        <div className="flex-1 overflow-y-auto">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
                                {kandyLocations.map((location) => {
                                    const isSelected = selectedLocations.includes(location.name);
                                    return (
                                        <div
                                            key={location.id}
                                            onClick={() => setSelectedLocations((prev) => isSelected ? prev.filter((name) => name !== location.name) : [...prev, location.name])}
                                            className={`border rounded-lg overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-md ${isSelected ? "ring-2 ring-blue-500 border-blue-300 bg-blue-50/30" : "border-gray-200"}`}
                                        >
                                            <div className="h-36 bg-gray-100 bg-cover bg-center relative" style={{ backgroundImage: `url(${location.image})` }}>
                                                {isSelected && <div className="absolute top-2 right-2 bg-blue-500 text-white rounded-full p-2"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg></div>}
                                            </div>
                                            <div className="p-2">
                                                <div className="flex items-center gap-2 mb-1">
                                                    {location.type === "cultural" && <FaHotel className="text-amber-500" />}
                                                    {location.type === "nature" && <FaMountain className="text-green-500" />}
                                                    {location.type === "scenic" && <FaUmbrellaBeach className="text-blue-500" />}
                                                    <h3 className="font-bold text-lg">{location.name}</h3>
                                                </div>
                                                <p className="text-gray-600">{location.description}</p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        <div className="border-t border-gray-200 p-4 flex justify-between items-center">
                            <span className="text-sm text-gray-500">{selectedLocations.length} location{selectedLocations.length !== 1 ? "s" : ""} selected</span>
                            <button onClick={handleNextStep} disabled={selectedLocations.length === 0} className={`px-6 py-3 rounded-lg font-medium flex items-center gap-2 ${selectedLocations.length > 0 ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white hover:shadow-md" : "bg-gray-200 text-gray-500 cursor-not-allowed"} transition-all duration-300`}>
                                Continue to Itinerary
                                <FaArrowRight />
                            </button>
                        </div>
                    </div>
                </section>
            )}

            {showPackages && (
                <section className="py-12 px-6 max-w-6xl mx-auto">
                    <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-200 h-[600px] flex flex-col">
                        <div className="bg-gradient-to-r from-blue-600 to-cyan-500 p-6 text-white">
                            <h2 className="text-2xl font-bold">Complete Your Itinerary</h2>
                            <p className="opacity-90">{tripDuration > 0 ? `${tripDuration}-day trip from ${startDate} to ${endDate}` : "Select your accommodation and transportation"}</p>
                            <div className="flex mt-4 border-b border-white/20">
                                <button onClick={() => setActiveTab("hotels")} className={`px-4 py-2 font-medium flex items-center gap-2 ${activeTab === "hotels" ? "text-white border-b-2 border-white" : "text-white/80"}`}><FaHotel /> Hotels</button>
                                <button onClick={() => setActiveTab("vehicles")} className={`px-4 py-2 font-medium flex items-center gap-2 ${activeTab === "vehicles" ? "text-white border-b-2 border-white" : "text-white/80"}`}><FaCar /> Vehicles</button>
                            </div>
                        </div>

                        <div className="bg-gray-50 p-4 border-b">
                            <p className="text-sm text-gray-600"><span className="font-medium">Selected for {destination}:</span> {selectedLocations.join(", ")}</p>
                        </div>

                        <div className="flex-1 overflow-y-auto">
                            {activeTab === "hotels" && (
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-4">Available Hotels</h3>
                                    <div className="space-y-6">
                                        {hotelPackages.map((hotel) => (
                                            <div key={hotel.id} className={`border rounded-lg overflow-hidden transition-all duration-300 ${selectedHotel === hotel.id ? "ring-2 ring-blue-500 border-blue-300" : "border-gray-200"}`}>
                                                <div className="p-4 cursor-pointer hover:bg-gray-50 flex justify-between items-center" onClick={() => handleHotelSelect(hotel.id)}>
                                                    <h4 className="font-bold text-lg">{hotel.name}</h4>
                                                    <div className="flex items-center gap-2">
                                                        {selectedHotel === hotel.id ? <span className="text-blue-600 flex items-center"><FaCheck className="mr-1" /> Selected</span> : <span className="text-gray-500">Select</span>}
                                                        <FaChevronRight className="text-gray-400" />
                                                    </div>
                                                </div>
                                                {selectedHotel === hotel.id && (
                                                    <div className="bg-gray-50 border-t p-4">
                                                        <h5 className="font-medium mb-3">Available Packages ({tripDuration} days)</h5>
                                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                            {hotel.packages.map((pkg) => (
                                                                <div key={pkg.id} onClick={() => setSelectedHotelPackage(pkg.id)} className={`border rounded-lg p-4 transition-all duration-200 ${selectedHotelPackage === pkg.id ? "border-blue-300 bg-blue-50 ring-1 ring-blue-200" : "border-gray-200 hover:bg-white cursor-pointer"}`}>
                                                                    <div className="font-bold">{pkg.name}</div>
                                                                    <div className="text-blue-600 my-1">${pkg.basePrice}/night x {tripDuration} nights =<span className="font-bold ml-1">${calculatePackagePrice(pkg.basePrice)}</span></div>
                                                                    <div className="text-sm text-gray-600">{pkg.amenities}</div>
                                                                    {selectedHotelPackage === pkg.id && <div className="mt-2 text-sm text-green-600 flex items-center"><FaCheck className="mr-1" /> Selected for your stay</div>}
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {activeTab === "vehicles" && (
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-4">Vehicle Rental Options</h3>
                                    <div className="space-y-4">
                                        {vehicleOptions.map((vehicle) => (
                                            <div key={vehicle.id} onClick={() => setSelectedVehicle(vehicle.id)} className={`border rounded-lg p-4 cursor-pointer transition-all duration-300 ${selectedVehicle === vehicle.id ? "ring-2 ring-blue-500 border-blue-300 bg-blue-50" : "border-gray-200 hover:bg-gray-50"}`}>
                                                <div className="flex justify-between">
                                                    <div>
                                                        <h4 className="font-bold">{vehicle.company}</h4>
                                                        <div className="text-gray-600">{vehicle.type}</div>
                                                    </div>
                                                    <div className="text-right">
                                                        <div className="font-bold text-blue-600">{vehicle.price}</div>
                                                        {selectedVehicle === vehicle.id && <div className="text-sm text-green-600 flex items-center justify-end"><FaCheck className="mr-1" /> Selected</div>}
                                                    </div>
                                                </div>
                                                <div className="text-sm text-gray-500 mt-2">{vehicle.details}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="border-t border-gray-200 p-4 flex justify-between items-center">
                            <button onClick={() => { setShowPackages(false); setShowDestinations(true); }} className="px-4 py-2 text-gray-600 hover:text-blue-600">Back to locations</button>
                            <button onClick={handleFinalSubmit} disabled={!selectedHotel || !selectedHotelPackage || !selectedVehicle || isBookingComplete} className={`px-6 py-3 rounded-lg font-medium flex items-center gap-2 ${selectedHotel && selectedHotelPackage && selectedVehicle && !isBookingComplete ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white hover:shadow-md" : "bg-gray-200 text-gray-500 cursor-not-allowed"} transition-all duration-300`}>
                                {isBookingComplete ? "Booking Submitted" : "Complete Booking"}
                                {!isBookingComplete && <FaArrowRight />}
                            </button>
                        </div>
                    </div>
                </section>
            )}

            {showConfirmation && (
                <section className="py-6 px-6 max-w-6xl mx-auto">
                    <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-200 h-[700px] flex flex-col">
                        <div className="bg-gradient-to-r from-blue-600 to-cyan-500 p-6 text-white">
                            <h2 className="text-2xl font-bold">Booking Confirmation</h2>
                            <p className="opacity-90">Review your trip details before finalizing</p>
                        </div>

                        <div className="flex-1 overflow-y-auto p-6">
                            <div className="max-w-3xl mx-auto space-y-6">
                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <h3 className="font-bold text-lg mb-3 flex items-center gap-2"><FaMapMarkerAlt className="text-blue-500" />Trip to {destination}</h3>
                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                                        <div><p className="text-gray-500">Start Date</p><p className="font-medium">{startDate}</p></div>
                                        <div><p className="text-gray-500">End Date</p><p className="font-medium">{endDate}</p></div>
                                        <div><p className="text-gray-500">Duration</p><p className="font-medium">{tripDuration} days</p></div>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="font-bold text-lg mb-3">Selected Locations</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedLocations.map((location) => <span key={location} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">{location}</span>)}
                                    </div>
                                </div>

                                <div className="border rounded-lg overflow-hidden">
                                    <div className="bg-gray-50 p-4 border-b flex items-center gap-2"><FaHotel className="text-blue-500" /><h3 className="font-bold">Your Accommodation</h3></div>
                                    <div className="p-4">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <h4 className="font-bold">{selectedHotelData?.name}</h4>
                                                <p className="text-blue-600">{selectedPackageData?.name}</p>
                                                <p className="text-sm text-gray-600 mt-2">{selectedPackageData?.amenities}</p>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-gray-500 text-sm">Total</p>
                                                <p className="font-bold text-lg">${totalHotelPrice}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="border rounded-lg overflow-hidden">
                                    <div className="bg-gray-50 p-4 border-b flex items-center gap-2"><FaCar className="text-blue-500" /><h3 className="font-bold">Your Transportation</h3></div>
                                    <div className="p-4">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <h4 className="font-bold">{selectedVehicleData?.company}</h4>
                                                <p className="text-gray-600">{selectedVehicleData?.type}</p>
                                                <p className="text-sm text-gray-500 mt-1">{selectedVehicleData?.details}</p>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-gray-500 text-sm">Price</p>
                                                <p className="font-bold">{selectedVehicleData?.price}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="border rounded-lg overflow-hidden">
                                    <div className="bg-gray-50 p-4 border-b"><h3 className="font-bold">Price Summary</h3></div>
                                    <div className="p-4">
                                        <div className="space-y-3">
                                            <div className="flex justify-between"><span className="text-gray-600">Accommodation</span><span className="font-medium">${totalHotelPrice}</span></div>
                                            <div className="flex justify-between"><span className="text-gray-600">Vehicle Rental</span><span className="font-medium">${totalVehiclePrice}</span></div>
                                            <div className="border-t border-gray-200 pt-3 flex justify-between font-bold"><span>Total</span><span className="text-blue-600">${totalHotelPrice + totalVehiclePrice}</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="border-t border-gray-200 p-4 flex justify-between items-center">
                            <button onClick={handleBackToPackages} className="px-4 py-2 text-gray-600 hover:text-blue-600">Back to packages</button>
                            <button onClick={() => alert("Booking confirmed!")} className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-2">
                                Confirm Booking
                                <FaCheck />
                            </button>
                        </div>
                    </div>
                </section>
            )}

            <Footer />
        </div>
    );
}

export default TripPlan;
