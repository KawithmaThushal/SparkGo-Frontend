import PlaceType from "../../../Type/PlaceType";

interface Section3Props {
  places: PlaceType[]; // FIXED → must be an array
}

function Section3({ places }: Section3Props) {
  
  const place = places[0]; // first record
  
  return (
    <section className="pb-10 mx-auto">
      <div className="flex flex-col lg:flex-row gap-6 ps-20 pe-10 h-[300px]">

        {/* Map Container */}
       <div className="w-full lg:w-[60%] h-full rounded-xl overflow-hidden shadow-lg border border-gray-200">
  <iframe
    src={place?.mapLocation}
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    className="bg-gray-100"
    aria-label="Horton Plains National Park Location Map"
  ></iframe>
</div>


        {/* Key Information Sidebar */}
        <div className="w-full lg:w-1/3 h-full bg-white rounded-xl shadow-lg border border-gray-200 p-7 overflow-y-auto">
          <h3 className="text-xl font-semibold text-gray-800 mb-3 font-serif border-b pb-2">
            Park Information
          </h3>

          <ul className="space-y-3 text-gray-700 font-serif">

            <li className="flex items-start">
              <svg className="w-5 h-5 text-emerald-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0L6.343 16.657A8 8 0 1117.657 16.657z"/>
                <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
              <span>Central Highlands, Nuwara Eliya District</span>
            </li>

            <li className="flex items-start">
              <svg className="w-5 h-5 text-emerald-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <span>Open daily 6:00 AM - 4:00 PM</span>
            </li>

            <li className="flex items-start">
              <svg className="w-5 h-5 text-emerald-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <span>Entry fee: $25 adults / $12 children</span>
            </li>

            <li className="flex items-start">
              <svg className="w-5 h-5 text-emerald-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M9 12l2 2 4-4m5.618-4.016A12 12 0 0112 3a12 12 0 01-8.618 3.984A12 12 0 003 9c0 5.59 3.824 10.29 9 11.622C17.176 19.29 21 14.59 21 9c0-1.042-.133-2.052-.382-3.016z"/>
              </svg>
              <span>UNESCO World Heritage Site</span>
            </li>

            <li className="flex items-start">
              <svg className="w-5 h-5 text-emerald-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498c.445.148.684.577.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              <span>Park Office: +94 52 555 5555</span>
            </li>

          </ul>
        </div>
      </div>
    </section>
  );
}

export default Section3;
