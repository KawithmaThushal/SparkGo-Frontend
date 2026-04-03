import PlaceType from "../../../Type/PlaceType";


interface Section2Props {
  places: PlaceType[];   // ✅ Accept places here
}
function Section2({ places }: Section2Props){


  const place = places[0];

    return(
<section className="ps-20 pr-10 mx-auto h-[400px] bg-white rounded-xl mb-4">

      <div className="h-full p-5 overflow-y-auto">
      
        <div className="text-gray-700 font-serif text-justify leading-relaxed space-y-6 text-xl">
          <p>
           {place?.description2 ?? "No description available."}
          </p>
          <p>
            {place?.description3 ?? "No description available."}
          </p>
        </div>
      </div>
    </section>
    )
}
export default Section2;