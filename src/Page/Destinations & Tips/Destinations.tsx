
import Footer from "../../components/common/Footer";
import DHero from "../../components/section/Destination/DHero";
import Destination from "../../components/section/Destination/Destination";
import TopDestination from "../../components/section/Destination/TopDestination";
import TipDestination from "../../components/section/Destination/TipDestination";

function Destinations() {






  return (
    <div className="relative w-full bg-white bg-gradient-to-br from-[#f8fcff] to-[#e6f4fe]">

     <DHero />

      {/* Destination Section */}
     <Destination />

      {/* Top Destiantion */}

      <TopDestination />

      {/* tip for  Destiantion */}
      <TipDestination />

      <Footer />

    </div>
  );
};

export default Destinations;
