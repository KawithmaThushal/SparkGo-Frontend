import { useEffect, useState } from 'react';
import { FaChargingStation, FaFacebookF, FaGlobe, FaInstagram, FaSkype, FaTwitter } from 'react-icons/fa';
import { GiTempleGate } from 'react-icons/gi';
import '../components/Home.css';

function Home() {

  interface Slide {
    image: string;
    title: string;
    description: string;
  }
  
  const slides: Slide[] = [
    {
      image: "/src/assets/Ev.jpg",
      title: "EV Charging Finder",
      description: "Locate EV charging stations in real-time.",
    },
    {
      image: "/src/assets/kandy.jpg",
      title: "Cultural Explorer",
      description: "Discover Sri Lanka’s rich cultural heritage.",
    },
    {
      image: "/src/assets/gallefort.jpg",
      title: "Coastal Getaway",
      description: "Relax by the beach and enjoy the ocean breeze.",
    },
  ];

 


  const destinations = [
    {
      title: 'Sigiriya',
      description:
        'Sigiriya, also known as Lion Rock, is a UNESCO World Heritage Site and one of Sri Lanka’s most iconic landmarks. Built by King Kashyapa (477–495 AD), this ancient fortress showcases brilliant urban planning, frescoes, and advanced engineering atop a 200-meter high rock.',
      image: '/src/assets/Sigiriya.jpg',
    },
    {
      title: 'Ella',
      description:
        'Ella is a scenic mountain town surrounded by tea plantations and cloud forests. Known for the Nine Arches Bridge and Little Adam’s Peak, Ella offers stunning views, hiking trails, and a relaxed vibe perfect for nature lovers.',
      image: '/src/assets/Ella.jpg',
    },
    {
      title: 'Galle Fort',
      description:
        'Galle Fort is a historic colonial fortress built by the Portuguese and fortified by the Dutch in the 17th century. With charming cobbled streets, boutique shops, and sea views, it’s a unique blend of European architecture and Sri Lankan culture.',
      image: '/src/assets/gallefort.jpg',
    },
  ];


  const [index, setIndex] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentSlide = slides[currentIndex];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % destinations.length);
    }, 6000); // Change every 6 seconds

    return () => clearInterval(interval); // Cleanup
  }, []);

  const { title, description, image } = destinations[index];

// why choise Sparkgo card view
  useEffect(() => {
    const destinationInterval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % destinations.length);
    }, 6000); // For destination section
  
    const slideInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000); // For card slider, change every 5 seconds
  
    return () => {
      clearInterval(destinationInterval);
      clearInterval(slideInterval);
    };
  }, []);

  

  return (
    <div >
      <div className="relative h-screen w-full overflow-y-hidden">
        {/* Background Image */}
        <div
          className="w-[1520px] h-[740px] bg absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/src/assets/HomeImg.jpg')" }}
        />
        <div className="absolute inset-0 bg-black opacity-0" />
        <div className="absolute inset-0 bg-white opacity-20" />

        <div className="relative z-10 h-full w-full">
          {/* Navigation Bar with Blur and Buttons */}
          <div className="pt-8">
            <div className="w-full h-[80px] flex items-center justify-between max-w-7xl mx-auto px-6  backdrop-blur-sm bg-white/10 rounded-xl">
              {/* Logo and Name */}
              <div className="flex items-center gap-3">
                <img src="/logo.png" alt="SparkGo Logo" className="h-10 w-auto" />
                <span className="text-white text-6xl font-serif font-medium">
                  SparkGo
                </span>
              </div>

              {/* Navigation Links */}
              <div className="flex-1 flex justify-center pt-2 text-lg font-semibold">
                <div className="hidden md:flex gap-8 text-white">
                  <a href="#" className="hover:text-blue-400">Home</a>
                  <a href="#" className="hover:text-blue-400">Destination</a>
                  <a href="#" className="hover:text-blue-400">EV Charging</a>
                  <a href="#" className="hover:text-blue-400">Contact</a>
                </div>
              </div>

              {/* Login/Register Buttons */}
              <div className="flex gap-4">
                <button className="px-4 py-1 text-white border border-white rounded-full hover:bg-white hover:text-blue-700 transition">
                  Login
                </button>
                <button className="px-4 py-1 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
                  Register
                </button>
              </div>
            </div>
          </div>


          {/* Hero Content */}
          <div className="flex flex-col justify-center h-[calc(100%-100px)] max-w-7xl mx-auto px-6">
            <h1 className="text-white text-2xl md:text-3xl lg:text-5xl font-bold font-serif mb-2 drop-shadow-lg pl-2 pt-20">
              Spark Your Journey
            </h1>
            <h2 className="text-white text-2xl md:text-3xl lg:text-5xl font-bold font-serif mb-2 drop-shadow-lg pl-2">
              Travel Smarter.
            </h2>
            <p className="text-white text-xl font-serif mb-1 drop-shadow-md max-w-2xl pl-2">
              Discover, explore, and charge up—travel smarter with
            </p>
            <p className="text-white text-xl font-serif mb-4 drop-shadow-md max-w-2xl  pl-2">
              SparkTravel.
            </p>

            {/* Buttons */}
            <div className="flex gap-4 pl-4">
              <button className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition transform hover:scale-105 shadow-lg">
                Explore Now
              </button>
              <button className="px-5 py-2 border-2 border-white text-white hover:bg-white hover:text-blue-800 font-semibold rounded-full transition transform hover:scale-105">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Our Advantages Section */}
      <section id="advantages" className="bg-[#F9FAFC] pt-10 px-4 pb-16 md:px-20">
      
        <div className="max-w-7xl mx-auto text-center">

          
          <h2 className="text-5xl font-font-semibold font-serif text-gray-800 mb-12">
            Our Advantages
          </h2>

          <div className="w-full mx-auto bg-white rounded-xl shadow-lg p-6 md:p-8">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
            
              {/* Top Destinations */}
              <div className="bg-white rounded-xl shadow-lg p-6 w-60 h-72 border-2 border-black">
                <div className="flex justify-center items-center mb-4">
                  <div className="flex justify-center items-center w-12 h-12 mb-4 border-2 rounded-tr-2xl rounded-bl-2xl border-[#2A8B3C]">
                    <img src='/src/assets/Location.png' alt="Location Icon" className="w-12 h-12 ml-12" />
                  </div>
                </div>
                <h3 className="text-lg pt-12 font-serif font-semibold text-gray-800 mb-2 flex justify-center items-center">
                  Top Destinations
                  <FaGlobe className="ml-2 text-blue-500" />
                </h3>
                <p className="text-gray-600 font-serif text-sm">
                  Discover Sri Lanka’s most breathtaking locations.
                </p>
              </div>

              {/* EV Charging */}
              <div className="bg-white rounded-xl shadow-lg p-6 w-60 h-72 border-2 border-green-400">
                <div className="flex justify-center items-center mb-4">
                  <div className="flex justify-center items-center w-12 h-12 mb-4 border-2 rounded-tr-2xl rounded-bl-2xl border-[#000000]">
                    <img src='/src/assets/Charging.png' alt="Charging Icon" className="w-12 h-12 ml-12" />
                  </div>
                </div>
                <h3 className="text-lg pt-12 font-serif font-semibold text-gray-800 mb-2 flex justify-center items-center">
                  EV Charging
                  <FaChargingStation className="ml-2 text-green-500" />
                </h3>
                <p className="text-gray-600 font-serif text-sm">
                  Locate the nearest EV charging stations while traveling.
                </p>
              </div>

              {/* Culture */}
              <div className="bg-white rounded-xl shadow-lg p-6 w-60 h-72 border-2 border-[#D44D00]">
                <div className="flex justify-center items-center mb-4">
                  <div className="flex justify-center items-center w-12 h-12 mb-4 border-2 rounded-tr-2xl rounded-bl-2xl border-[#000000]">
                    <img src='/src/assets/cultures.png' alt="Culture Icon" className="w-12 h-12 ml-12" />
                  </div>
                </div>
                <h3 className="text-lg pt-12 font-serif font-semibold text-gray-800 mb-2 flex justify-center items-center">
                  Culture
                  <GiTempleGate className="ml-2 text-orange-500" />
                </h3>
                <p className="text-gray-600 font-serif text-sm">
                  Experience authentic Sri Lankan cuisine and traditions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Popular Destinations Section */}
      <section id="popular-destinations" className="bg-[#EAF6FF] pt-16 pb-16 px-4 md:px-20 transition-all duration-1000">
        
        <div className="max-w-7xl mx-auto">
          
          <h2 className="text-5xl font-bold font-serif text-[#001F54] mb-6 text-left">
            Our Popular Destinations
          </h2>
          <p className="text-gray-600 text-lg font-serif mb-12 max-w-2xl ml-5 text-left">
            Explore the best places to visit in Sri Lanka, handpicked for unforgettable experiences.
          </p>

          <div className="flex flex-col lg:flex-row items-center gap-10 transition duration-1000 ease-in-out">
            <img
              src={image}
              alt={title}
              className="w-[400px] h-[400px] object-cover rounded-bl-[150px] rounded-tr-[150px] shadow-lg"
            />
            <div className="flex-1 text-left">
              <div className="text-9xl text-black mb-2">❝</div>
              <p className="text-gray-700 font-serif text-lg mb-3 leading-relaxed">{description}</p>
              <h3 className="text-4xl font-extrabold font-serif text-[#001F54]">{title}</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-[#F8F9FA] pt-20 pb-28 px-4 md:px-20 overflow-hidden">
      {/* Background image on the right side */}
      <div
        className="absolute top-0 right-0 w-[40%] h-full bg-cover bg-no-repeat bg-right rounded-bl-[100px] z-0"
        style={{ backgroundImage: "url('/src/assets/Decore.png')" }} // Replace with your image path
      ></div>



      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        {/* Text Section */}
        <div className="flex-1 text-left">
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-[#1D3557] mb-6">Why Choose SparkGo?</h2>
          <p className="text-gray-700 text-lg mb-8 max-w-xl leading-relaxed font-serif">
            Seamless travel with expert tips, real-time EV charging, and top destinations—all in one place.
            Explore cultures, find EV routes, and book the best stays with SparkGo.
          </p>
          <button className="bg-[#f0f0f0] text-black px-6 py-2 rounded-full font-serif font-bold shadow hover:bg-gray-200 transition">
            Explore SparkGo
          </button>
        </div>

        <div className="relative w-[350px] bg-[#DFF6FF]/20 backdrop-blur-sm py-10 flex justify-center mr-36 rounded-2xl">
        {/* Cards Slider Section */}
        <div className="flex-1 relative flex justify-center items-center">
          {/* Card */}
      <div className="bg-white rounded-xl shadow-xl w-[300px] transition-all duration-300 ease-in-out">
        <img
          src={currentSlide.image}
          alt={currentSlide.title}
          className="w-full h-56 object-cover rounded-t-xl"
        />
        <div className="p-5">
          <h3 className="text-xl font-bold text-[#1D3557] mb-2">{currentSlide.title}</h3>
          <p className="text-gray-600">{currentSlide.description}</p>
        </div>
      </div>

      {/* Slider Dots */}
      <div className="absolute bottom-[-30px] flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentIndex ? "bg-[#445066]" : "bg-[#ccc]"
            }`}
          ></button>
        ))}
      </div>
    </div>
    </div>
      </div>
    </section>

    <div className="relative bg-[#EAF6FF] py-20 px-6 overflow-hidden">

    <div className="absolute  bottom-12 z-10">
    <img src="/src/assets/plane.png" alt="plane" className="w-50 h-50" />
  </div>
      {/* Airplane Icon */}
      <div className="absolute top-10 right-12 pr-52 z-10">
        <img src="src/assets/Icon.png" alt="plane" className="w-[70px] h-[70px]" />
      </div>

      {/* Background Rectangle behind form */}
      <div className="max-w-4xl mx-auto bg-[#D9D9D9]/50 backdrop-blur-sm rounded-tl-[900px] py-10 px-6 sm:px-12 shadow-md z-0 relative h-[250px]">
        <h2 className="text-xl sm:text-1xl font-semibold font-serif text-[#1E3A8A] mb-6 pl-44 text-left">
          Subscribe to get information, latest news and other <br /> interesting offers about{' '}
          <span className="font-bold  font-serif">SparkGo</span>
        </h2>

        {/* Input and Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <div className="relative w-full sm:w-auto">
            <input
              type="email"
              placeholder="Your email"
              className="pl-10 pr-4 py-3 rounded-lg font-serif border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1D3557] w-full sm:w-80"
            />
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">✉️</span>
          </div>
          <button className="bg-[#F47C26] text-white font-serif px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition duration-300">
            Subscribe
          </button>
        </div>
      </div>
    </div>
    <div>
      {/* ... (keep all your existing JSX) */}

      {/* Footer Section */}
      <footer className="w-full h-[400px] bg-[#001F54] text-white py-12 px-6 ">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* SparkGo Info */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-3 mb-6">
              <img src="/logo.png" alt="SparkGo Logo" className="h-10 w-auto" />
              <span className="text-white text-3xl font-serif font-medium">
                SparkGo
              </span>
            </div>
            <p className="text-gray-300 text-center md:text-left mb-4 font-serif">
              Your go-to travel guide for top destinations and near-time EV charging.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-semibold mb-4 font-serif">Quick Links</h3>
            <ul className="space-y-2 text-left font-serif">
              <li><a href="#" className="hover:text-blue-300 transition">Home</a></li>
              <li><a href="#" className="hover:text-blue-300 transition">About Us</a></li>
              <li><a href="#" className="hover:text-blue-300 transition">Destinations</a></li>
              <li><a href="#" className="hover:text-blue-300 transition">EV Charging</a></li>
              <li><a href="#" className="hover:text-blue-300 transition">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-end">
            <h3 className="text-xl font-semibold mb-4 font-serif">Contact Information</h3>
            <address className="not-italic text-gray-300 text-center md:text-right font-serif">
              <p>Colombo, Sri Lanka</p>
              <p className="mt-2">kavithmani.hushal87i@gmail.com</p>
              <p className="mt-2">+94 72 493 3586</p>
            </address>

            {/* Social Media */}
            <div className="mt-6 flex gap-3">
      <button className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition">
        <FaFacebookF className="text-white text-lg" />
      </button>
      <button className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition">
        <FaInstagram className="text-white text-lg" />
      </button>
      <button className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition">
        <FaTwitter className="text-white text-lg" />
      </button>
      <button className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition">
        <FaSkype className="text-white text-lg" />
      </button>
    </div>

          </div>
        </div>

        {/* Copyright */}
        <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-white/20 text-center text-gray-400 font-serif">
          <p>© 2025 SparkGo. All rights reserved.</p>
        </div>
      </footer>
    </div>
    </div>
  );
}

export default Home;
