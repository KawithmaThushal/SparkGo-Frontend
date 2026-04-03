import { type ReactNode, useState } from "react";
import { FaChargingStation, FaMapMarkerAlt } from "react-icons/fa";

function Econtent() {
    const [activeStep, setActiveStep] = useState(1);

    const [location, setLocation] = useState("");
    const [connectorType, setConnectorType] = useState("");
    const [chargingSpeed, setChargingSpeed] = useState("");
    const [radius, setRadius] = useState(10);

    const [startLocation, setStartLocation] = useState("");
    const [destination, setDestination] = useState("");

    const [chargeGoal, setChargeGoal] = useState("80");
    const [isCharging, setIsCharging] = useState(false);

    const mockStation = {
        name: "Colombo City Center",
        location: "Level 4 Parking",
        connectors: ["CCS", "CHAdeMO", "Type 2"],
        speed: "150kW - Fast Charging",
        availability: "3 of 5 available",
        price: "$0.32/kWh",
        status: "Available Now",
        amenities: ["Wi-Fi", "Restroom", "Cafe", "Shopping"],
        reviews: [
            { rating: 4.5, comment: "Clean and fast charging" },
            { rating: 5, comment: "Great location with amenities" }
        ]
    };

    const handleFindStations = () => setActiveStep(2);
    const handlePlanRoute = () => setActiveStep(3);

    const handleStartCharging = () => {
        setIsCharging(true);
        setActiveStep(4);
    };

    const renderStepIndicator = (step: number) => (
        <div className="flex items-center mb-6">
            <div
                className={`rounded-full w-8 h-8 flex items-center justify-center mr-3 ${
                    activeStep >= step ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-600"
                }`}
            >
                {step}
            </div>
            <h2 className="text-2xl font-bold text-gray-800 font-serif">
                {step === 1 && "Find Charging Stations"}
                {step === 2 && "Station Details"}
                {step === 3 && "Plan Your Route"}
                {step === 4 && "Start Charging"}
            </h2>
        </div>
    );

    const handlePlanRoute3 = () => {
        if (!startLocation || !destination) {
            alert("Please enter both start location and destination");
            return;
        }
        setActiveStep(4);
    };

    return (
        <div className="max-w-5xl mx-auto px-6 py-12 -mt-20 relative z-20">
            {activeStep === 1 && (
                <section className="bg-white p-6 rounded-xl shadow-md transition-all font-serif">
                    {renderStepIndicator(1)}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-gray-700 mb-1 tracking-wide">Where would you like to charge?</label>
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    value={location}
                                    onChange={(e) => setLocation(e.target.value)}
                                    placeholder="Enter city, address or ZIP code"
                                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 shadow-sm"
                                />
                                <button className="px-4 py-3 bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-lg flex items-center gap-2 transition-colors duration-200 font-medium">
                                    <span className="text-blue-500"><LocationIcon /></span> Use my location
                                </button>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1 tracking-wide">Connector Type</label>
                            <select
                                value={connectorType}
                                onChange={(e) => setConnectorType(e.target.value)}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 shadow-sm appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiAjdjQgdjUgdiA2IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+PHBvbHlsaW5lIHBvaW50cz0iNiA5IDEyIDE1IDE4IDkiPjwvcG9seWxpbmU+PC9zdmc+')] bg-no-repeat bg-[right_0.75rem_center]"
                            >
                                <option value="">All connector types</option>
                                <option value="CCS">CCS (Combo)</option>
                                <option value="CHAdeMO">CHAdeMO</option>
                                <option value="Type2">Type 2 (Mennekes)</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1 tracking-wide">Charging Speed</label>
                            <select
                                value={chargingSpeed}
                                onChange={(e) => setChargingSpeed(e.target.value)}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 shadow-sm appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiAjdjQgdjUgdiA2IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+PHBvbHlsaW5lIHBvaW50cz0iNiA5IDEyIDE1IDE4IDkiPjwvcG9seWxpbmU+PC9zdmc+')] bg-no-repeat bg-[right_0.75rem_center]"
                            >
                                <option value="">All speeds</option>
                                <option value="fast">Fast (50kW+)</option>
                                <option value="regular">Regular (22kW or less)</option>
                                <option value="ultra">Ultra-fast (150kW+)</option>
                            </select>
                        </div>

                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-gray-700 mb-1 tracking-wide">
                                Search Radius: <span className="text-blue-600 font-semibold">{radius} km</span>
                            </label>
                            <input
                                type="range"
                                min="1"
                                max="50"
                                value={radius}
                                onChange={(e) => setRadius(parseInt(e.target.value, 10))}
                                className="w-full h-2 bg-gray-200 rounded-full appearance-none cursor-pointer accent-blue-600"
                            />
                            <div className="flex justify-between text-xs text-gray-500 mt-1">
                                <span>1 km</span>
                                <span>10 km</span>
                                <span>20 km</span>
                                <span>50 km</span>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 flex justify-center">
                        <button
                            onClick={handleFindStations}
                            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105 font-medium text-lg flex items-center gap-2"
                        >
                            <FaChargingStation className="text-white" />
                            Find Charging Stations
                        </button>
                    </div>
                </section>
            )}

            {activeStep === 2 && (
                <section className="bg-blue-50 p-6 rounded-lg shadow-md transition-all font-serif">
                    {renderStepIndicator(2)}

                    <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                        <div className="p-6">
                            <div className="flex flex-col md:flex-row gap-6">
                                <div className="flex-1">
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-1">{mockStation.name}</h3>
                                            <p className="text-gray-600 text-sm flex items-center gap-1">
                                                <FaMapMarkerAlt className="text-blue-500 text-xs" />
                                                {mockStation.location}
                                            </p>
                                        </div>
                                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                                            {mockStation.status}
                                        </span>
                                    </div>

                                    <div className="mb-4">
                                        <div className="flex flex-wrap gap-2">
                                            {mockStation.connectors.map((connector) => (
                                                <span key={connector} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                                                    {connector}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-3 mb-4">
                                        <div>
                                            <p className="text-gray-500 text-xs">Speed</p>
                                            <p className="font-medium text-sm">{mockStation.speed}</p>
                                        </div>
                                        <div>
                                            <p className="text-gray-500 text-xs">Available</p>
                                            <p className="font-medium text-sm">{mockStation.availability}</p>
                                        </div>
                                        <div>
                                            <p className="text-gray-500 text-xs">Price</p>
                                            <p className="font-medium text-sm">{mockStation.price}</p>
                                        </div>
                                        <div>
                                            <p className="text-gray-500 text-xs">Distance</p>
                                            <p className="font-medium text-sm">1.2 km</p>
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="text-xs font-medium text-gray-500 mb-2">AMENITIES</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {mockStation.amenities.map((amenity) => (
                                                <span key={amenity} className="text-xs text-gray-700 bg-gray-100 px-2 py-1 rounded flex items-center gap-1">
                                                    <AmenityIcon type={amenity} className="text-blue-500 text-xs" />
                                                    {amenity}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex-1 border-l border-gray-200 pl-6">
                                    <h4 className="text-sm font-medium text-gray-900 mb-3">Reviews</h4>
                                    {mockStation.reviews.map((review, i) => (
                                        <div key={i} className="mb-4 pb-4 border-b border-gray-100 last:border-0">
                                            <div className="flex items-center mb-1">
                                                <div className="flex mr-1">
                                                    {[...Array(5)].map((_, star) => (
                                                        <StarIcon key={star} filled={star < review.rating} className="w-4 h-4" />
                                                    ))}
                                                </div>
                                                <span className="text-gray-600 text-xs">{review.rating.toFixed(1)}</span>
                                            </div>
                                            <p className="text-gray-700 text-sm">{review.comment}</p>
                                        </div>
                                    ))}
                                    <button className="text-blue-600 hover:text-blue-800 text-xs mt-2">
                                        View all reviews -&gt;
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-50 px-6 py-4 flex justify-between border-t border-gray-200">
                            <button
                                onClick={() => setActiveStep(1)}
                                className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded text-sm transition-colors"
                            >
                                Back
                            </button>
                            <button
                                onClick={handlePlanRoute}
                                className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded text-sm shadow-sm transition-colors"
                            >
                                Plan Route
                            </button>
                        </div>
                    </div>
                </section>
            )}

            {activeStep === 3 && (
                <section className="bg-white p-6 rounded-xl shadow-md transition-all font-serif">
                    {renderStepIndicator(3)}

                    <div className="mb-6">
                        <h2 className="text-2xl font-bold text-gray-800 mb-2">Plan Your Journey</h2>
                        <p className="text-gray-600">Enter your start and destination locations to find the best route</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <div className="space-y-1">
                            <label className="block text-sm font-medium text-gray-700 mb-1">Start Location</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <input
                                    type="text"
                                    value={startLocation}
                                    onChange={(e) => setStartLocation(e.target.value)}
                                    placeholder="Enter start address"
                                    className="w-full pl-10 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                                />
                            </div>
                        </div>
                        <div className="space-y-1">
                            <label className="block text-sm font-medium text-gray-700 mb-1">Destination</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                                    </svg>
                                </div>
                                <input
                                    type="text"
                                    value={destination}
                                    onChange={(e) => setDestination(e.target.value)}
                                    placeholder="Enter destination"
                                    className="w-full pl-10 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-between items-center">
                        <button
                            onClick={() => setActiveStep(2)}
                            className="px-6 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                            Back
                        </button>
                        <button
                            onClick={handlePlanRoute3}
                            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md hover:shadow-lg transition-all flex items-center gap-2"
                        >
                            Plan Route
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </button>
                    </div>
                </section>
            )}

            {activeStep === 4 && (
                <section className="bg-blue-50 p-4 rounded-lg shadow-sm">
                    {renderStepIndicator(4)}

                    <div className="bg-white rounded-lg overflow-hidden border border-gray-100">
                        <div className="p-4">
                            {isCharging ? (
                                <div className="text-center py-4">
                                    <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <CheckIcon className="text-green-600 w-8 h-8" />
                                    </div>
                                    <h3 className="text-lg font-bold mb-2">Charging Started</h3>
                                    <p className="text-gray-600 text-sm mb-4">Now charging at {mockStation.name}</p>

                                    <div className="grid grid-cols-3 gap-2 max-w-xs mx-auto">
                                        <div className="bg-blue-50 p-2 rounded-lg">
                                            <p className="text-blue-600 text-xs">Target</p>
                                            <p className="font-medium text-sm">{chargeGoal}%</p>
                                        </div>
                                        <div className="bg-blue-50 p-2 rounded-lg">
                                            <p className="text-blue-600 text-xs">Time Left</p>
                                            <p className="font-medium text-sm">~15 min</p>
                                        </div>
                                        <div className="bg-blue-50 p-2 rounded-lg">
                                            <p className="text-blue-600 text-xs">Cost</p>
                                            <p className="font-medium text-sm">$4.80</p>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <>
                                    <div className="mb-4">
                                        <div className="flex justify-between items-start">
                                            <h3 className="text-base font-bold">{mockStation.name}</h3>
                                            <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded-full text-xs">
                                                Available
                                            </span>
                                        </div>
                                        <div className="flex flex-wrap gap-1 mt-2">
                                            {mockStation.connectors.map((connector) => (
                                                <span key={connector} className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full text-xs">
                                                    {connector}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="bg-blue-50 p-3 rounded-lg mb-4">
                                        <div className="flex justify-between mb-1 text-sm">
                                            <span className="text-gray-700">Battery</span>
                                            <span className="font-medium">25%</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                            <div className="bg-blue-600 h-2 rounded-full" style={{ width: "25%" }}></div>
                                        </div>
                                    </div>

                                    <div className="mb-4">
                                        <label className="block text-xs font-medium text-gray-700 mb-1">Charge Goal</label>
                                        <select
                                            value={chargeGoal}
                                            onChange={(e) => setChargeGoal(e.target.value)}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-1 focus:ring-blue-500"
                                        >
                                            <option value="80">80% (Recommended)</option>
                                            <option value="90">90%</option>
                                            <option value="100">100%</option>
                                        </select>
                                    </div>

                                    <div className="grid grid-cols-2 gap-2 mb-4">
                                        <div className="bg-blue-50 p-2 rounded-lg">
                                            <p className="text-blue-600 text-xs">Time</p>
                                            <p className="font-medium text-sm">15 min</p>
                                        </div>
                                        <div className="bg-blue-50 p-2 rounded-lg">
                                            <p className="text-blue-600 text-xs">Cost</p>
                                            <p className="font-medium text-sm">$4.80</p>
                                        </div>
                                    </div>

                                    <div className="border-t border-gray-200 pt-3 text-sm">
                                        <p className="text-gray-500 text-xs mb-1">Payment</p>
                                        <p className="font-medium">.... 1234</p>
                                    </div>
                                </>
                            )}
                        </div>

                        {!isCharging ? (
                            <div className="bg-gray-50 px-4 py-3 flex justify-between border-t border-gray-200">
                                <button
                                    onClick={() => setActiveStep(3)}
                                    className="px-4 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-100"
                                >
                                    Back
                                </button>
                                <button
                                    onClick={handleStartCharging}
                                    className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg text-sm font-medium"
                                >
                                    Start Charging
                                </button>
                            </div>
                        ) : (
                            <div className="bg-gray-50 px-4 py-3 flex justify-center border-t border-gray-200">
                                <button
                                    onClick={() => setIsCharging(false)}
                                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium"
                                >
                                    View Details
                                </button>
                            </div>
                        )}
                    </div>
                </section>
            )}
        </div>
    );
}

export default Econtent;

const LocationIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
    </svg>
);

const AmenityIcon = ({ type, className }: { type: string; className?: string }) => {
    const icons: Record<string, ReactNode> = {
        "Wi-Fi": <WifiIcon className={className} />,
        "Restroom": <RestroomIcon className={className} />,
        "Cafe": <CafeIcon className={className} />,
        "Shopping": <ShoppingIcon className={className} />
    };

    return icons[type] || <div className={className ?? "w-4 h-4"} />;
};

const WifiIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M5 12.55a11 11 0 0 1 14.08 0" />
        <path d="M1.42 9a16 16 0 0 1 21.16 0" />
        <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
        <line x1="12" y1="20" x2="12.01" y2="20" />
    </svg>
);

const RestroomIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M12 22H2a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h20v10a2 2 0 0 1-2 2h-8" />
        <path d="M5 12V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v6" />
        <path d="M5 12v4a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4" />
    </svg>
);

const CafeIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
        <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
        <line x1="6" y1="1" x2="6" y2="4" />
        <line x1="10" y1="1" x2="10" y2="4" />
        <line x1="14" y1="1" x2="14" y2="4" />
    </svg>
);

const ShoppingIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <circle cx="8" cy="21" r="1" />
        <circle cx="19" cy="21" r="1" />
        <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
);

const StarIcon = ({ filled, className }: { filled: boolean; className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`${className ?? "w-4 h-4"} ${filled ? "text-yellow-400" : "text-gray-300"}`}>
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
);

const CheckIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M20 6L9 17l-5-5" />
    </svg>
);
