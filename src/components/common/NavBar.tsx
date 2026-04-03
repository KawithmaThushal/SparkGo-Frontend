import { useEffect, useState } from "react";
import { FaCompass } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";


function NavBar() {
 

    const [isMounted, setIsMounted] = useState(false);
    const [scrollY, setScrollY] = useState(0);

   const navItems = [
    { label: "Home", to: "/home" },
    { label: "Destinations", to: "/destinations" },
    { label: "EV Charging", to: "/charging-place" },
    { label: "Trip Planner", to: "/trip-plan" },
   ];

    useEffect(() => {
        setIsMounted(true);

        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
         <nav className={`pt-6 px-6 sm:px-8 md:px-12 transition-all duration-300 ${scrollY > 10 ? 'pt-4' : ''}`}>
            <div className={`max-w-7xl mx-auto flex items-center justify-between p-4 backdrop-blur-md rounded-[1.6rem] border transition-all duration-300 ${scrollY > 10 ? 'bg-white/96 border-white/40 shadow-[0_18px_40px_rgba(15,23,42,0.10)]' : 'bg-white/88 border-white/55 shadow-[0_14px_34px_rgba(37,99,235,0.08)]'}`}>
              {/* Logo with animation */}
              <Link to="/home" className="flex items-center gap-3">
                <div className={`p-2 bg-gradient-to-br from-[#2563eb] via-[#0ea5e9] to-[#14b8a6] rounded-xl shadow-lg transition-transform duration-300 hover:scale-110 ${isMounted ? 'opacity-100' : 'opacity-0 translate-y-4'}`}>
                  <FaCompass className="text-white text-xl" />
                </div>
                <span className={`text-2xl font-bold bg-gradient-to-r from-[#2563eb] via-[#14b8a6] to-[#f97316] bg-clip-text text-transparent transition-all duration-500 ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                  SparkGo
                </span>
              </Link>

              {/* Navigation Links - Desktop */}
              <div className="hidden md:flex items-center gap-1">
                {navItems.map((item, index) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    className={({ isActive }) => `px-4 py-2 text-gray-700 hover:text-sky-700 font-medium rounded-xl transition-all duration-300 hover:bg-white/70 ${isActive ? 'text-sky-700 bg-sky-50/80 shadow-sm' : ''} ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                    style={{ transitionDelay: `${index * 100 + 300}ms` }}
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>

              {/* Auth Buttons with animation */}
              <div className={`flex items-center gap-3 transition-all duration-500 ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <Link to="/signin" className="px-4 py-2 text-gray-700 font-medium rounded-full hover:bg-white/80 transition-all hover:shadow-sm">
                  Login
                </Link>
                <Link to="/signup" className="px-5 py-2.5 bg-gradient-to-r from-[#2563eb] via-[#0ea5e9] to-[#14b8a6] text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all hover:opacity-95 hover:scale-105">
                  Sign Up
                </Link>
              </div>
            </div>
          </nav>
    )


}
export default NavBar;
