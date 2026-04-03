import axios, { AxiosError } from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

function Newsletter() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: React.ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value);
  }

  async function CreateSubcribe() {
    if (!email.includes("@")) {
      alert("Please enter a valid email");
      return;
    }

    const data = { email };
    setLoading(true);

    try {
      await axios.post("http://localhost:8080/email", data);
      alert("Subscribed successfully!");
      setEmail("");
    } catch (error) {
      console.error("Error subscribing:", error);

      if (axios.isAxiosError(error)) {
        const axiosErr = error as AxiosError;

        if (axiosErr.response?.status === 403) {
          alert("Forbidden: You are not authorized!");
        } else if (axiosErr.response?.status === 401) {
          alert("Unauthorized: Invalid or missing token!");
        } else {
          alert("Subscription failed!");
        }

        console.error("Axios error response:", axiosErr.response);
      }
    }

    setLoading(false);
  }

  return (
    <div className="relative bg-[linear-gradient(180deg,#eef8ff_0%,#f3fbff_50%,#eefaf4_100%)] py-6 sm:py-20 px-2 sm:px-6 overflow-hidden">
      <div className="absolute bottom-12 z-10 animate-[float_6s_ease-in-out_infinite]">
        <img
          src="/src/assets/plane.png"
          alt="plane"
          className="w-50 h-50 transform transition-transform duration-1000 hover:scale-110"
          style={{
            animation: "float 6s ease-in-out infinite",
            transformOrigin: "center center",
          }}
        />
      </div>

      <div className="absolute top-6 sm:top-10 right-6 sm:right-12 pr-8 sm:pr-52 z-10">
        <img
          src="src/assets/Icon.png"
          alt="sparkle icon"
          className="w-[50px] h-[50px] sm:w-[70px] sm:h-[70px] animate-[pulse_2s_ease-in-out_infinite]"
        />
      </div>

      <div className="max-w-xs sm:max-w-4xl mx-auto bg-white/45 backdrop-blur-md rounded-tl-[100px] sm:rounded-tl-[900px] py-6 sm:py-10 px-4 sm:px-6 md:px-12 shadow-[0_20px_50px_rgba(37,99,235,0.12)] z-0 relative h-auto sm:h-[250px] border border-white/60">
        <h2 className="text-sm sm:text-xl font-semibold font-serif text-[#173a7a] mb-4 sm:mb-6 pl-4 sm:pl-44 text-center sm:text-left">
          Stay updated with destination ideas, trip-planning improvements, and new EV travel support from{" "}
          <span className="font-bold font-serif">SparkGo</span>
        </h2>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <div className="relative w-full sm:w-auto">
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={handleSubmit}
              className="pl-10 pr-4 py-3 rounded-lg font-serif border border-sky-100 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0ea5e9] w-full sm:w-80"
            />
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">@</span>
          </div>
          <button
            onClick={CreateSubcribe}
            disabled={loading}
            type="button"
            className="bg-gradient-to-r from-[#f97316] to-[#fb7185] text-white font-serif px-6 py-3 rounded-xl font-semibold hover:opacity-95 transition duration-300 w-full sm:w-auto shadow-[0_14px_30px_rgba(249,115,22,0.28)]"
          >
            Subscribe
          </button>
        </div>

        <div className="mt-5 text-center sm:text-left sm:pl-44">
          <Link to="/trip-plan" className="text-sm font-semibold text-[#173a7a] hover:underline">
            Or skip ahead and start planning your trip
          </Link>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0% { transform: translateY(0px) rotate(-2deg); }
          50% { transform: translateY(-15px) rotate(2deg); }
          100% { transform: translateY(0px) rotate(-2deg); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.1); opacity: 0.8; }
        }
      `}</style>
    </div>
  );
}

export default Newsletter;
