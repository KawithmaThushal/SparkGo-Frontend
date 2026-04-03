
import Phero from "../../components/section/Place/Phero";
import Section1 from "../../components/section/Place/Section1";
import Section2 from "../../components/section/Place/Section2";
import Section3 from "../../components/section/Place/Section3";
import ChargingStations from "../../components/section/Place/ChargingStations";
import Footer from "../../components/common/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import  PlaceType from "../../Type/PlaceType";



function PlacePage (){

   const [places, setPlaces] = useState<PlaceType[]>([]);
  const [loading, setLoading] = useState(true);



  useEffect(() => {
    async function fetchPlaces() {
      try {
        const response = await axios.get("http://localhost:8080/api/places/1");
        
        console.log("Backend data for place id 1:", response.data);
        setPlaces([response.data]); 
      } catch (error) {
        console.error("Error loading places:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchPlaces();
  }, []);

  if (loading) {
    return (
      <div className="w-full text-center py-20 text-xl font-semibold">
        Loading Places...
      </div>
    );
  }


  return (
    <div className="relative w-full bg-white">
      <Phero places={places} />
      <Section1  places={places} />
      <Section2  places={places} />
      <Section3 places={places} />
      <ChargingStations />
      <Footer />
    </div>
  );
}
export default PlacePage;
