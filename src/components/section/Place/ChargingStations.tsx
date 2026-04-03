function ChargingStations(){
    return (
  <section className="px-4 py-8 max-w-7xl mx-auto">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 font-serif text-center">
        Nearby Amenities & Destinations
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* EV Charging Stations Column */}
        <div className="bg-white rounded-xl shadow-md border border-gray-200 p-5 h-[300px] flex flex-col">
          <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
            <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            EV Charging Stations
          </h3>
          
          <div className="overflow-y-auto space-y-4 flex-1">
            {[
              {
                name: "Nuwara Eliya Town Charging Hub",
                distance: "15km from Horton Plains",
                rating: 4.5,
                reviews: 24,
                type: "CCS/Type 2",
                details: "Open 24/7 • 50kW Fast Charging",
                icon: "⚡"
              },
              {
                name: "Ambewela Farms Charging Point",
                distance: "22km from Horton Plains",
                rating: 4.2,
                reviews: 18,
                type: "Type 2/GB-T",
                details: "7AM-10PM • 22kW Charging",
                icon: "🔋"
              },
              {
                name: "Grand Hotel Charging Station",
                distance: "18km from Horton Plains",
                rating: 4.3,
                reviews: 32,
                type: "CCS/Type 2",
                details: "6AM-11PM • 100kW Ultra-Fast",
                icon: "🏨"
              },
              {
                name: "Moon Plains Eco Charging",
                distance: "12km from Horton Plains",
                rating: 4.7,
                reviews: 15,
                type: "Type 2/CHAdeMO",
                details: "6AM-10PM • 43kW Charging",
                icon: "🌿"
              }
            ].map((station, index) => (
              <div key={index} className="p-3 bg-gray-50 rounded-lg border border-gray-100">
                <div className="flex items-start">
                  <span className="text-xl mr-2">{station.icon}</span>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <h4 className="font-medium text-gray-800">{station.name}</h4>
                      <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">{station.type}</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">{station.distance}</p>
                    <div className="flex items-center mt-2 text-sm">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-4 h-4 ${i < Math.floor(station.rating) ? 'text-yellow-500' : 'text-gray-300'}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                      <span className="text-gray-700 ml-1">{station.rating} ({station.reviews})</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">{station.details}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Nearby Destinations Column */}
        <div className="bg-white rounded-xl shadow-md border border-gray-200 p-5 h-[300px] flex flex-col">
          <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
            <svg className="w-6 h-6 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Nearby Destinations
          </h3>

          <div className="overflow-y-auto space-y-4 flex-1">
            {[
              {
                name: "World's End Viewpoint",
                distance: "4km away",
                description: "Breathtaking 880m sheer cliff drop",
                rating: 4.8,
                reviews: 142,
                details: "Best visited 6-10AM before clouds roll in",
                icon: "🌄"
              },
              {
                name: "Baker's Falls",
                distance: "3km away",
                description: "20m waterfall in lush forest setting",
                rating: 4.6,
                reviews: 89,
                details: "Moderate 30min hike from main trail",
                icon: "🌊"
              },
              {
                name: "Chimney Pool",
                distance: "5km away",
                description: "Natural rock pool with crystal waters",
                rating: 4.4,
                reviews: 67,
                details: "Great for a refreshing swim",
                icon: "💧"
              },
              {
                name: "Mini World's End",
                distance: "2km away",
                description: "Smaller but equally stunning viewpoint",
                rating: 4.5,
                reviews: 53,
                details: "Less crowded alternative",
                icon: "⛰️"
              }
            ].map((destination, index) => (
              <div key={index} className="p-3 bg-gray-50 rounded-lg border border-gray-100">
                <div className="flex items-start">
                  <span className="text-xl mr-2">{destination.icon}</span>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <h4 className="font-medium text-gray-800">{destination.name}</h4>
                      <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">{destination.distance}</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">{destination.description}</p>
                    <div className="flex items-center mt-2 text-sm">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-4 h-4 ${i < Math.floor(destination.rating) ? 'text-yellow-500' : 'text-gray-300'}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                      <span className="text-gray-700 ml-1">{destination.rating} ({destination.reviews})</span>
                    </div>
                    <p className="text-xs text-blue-500 mt-1 flex items-center">
                      <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {destination.details}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    )
}
export default ChargingStations;