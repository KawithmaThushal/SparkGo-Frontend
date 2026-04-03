import { FaApple, FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { MdEmail, MdLockOutline } from "react-icons/md";
import { Link } from "react-router-dom";
function Login(){


    return(
        <div>
         <div className="min-h-screen flex items-center justify-center bg-[#fffffff]">
      <div
        className="bg-[#E9EDF2] w-[600px] h-[571px] rounded-3xl shadow-lg p-10 max-w-xl relative">
          <img
          src="src/assets/login2.png"
          alt="plane"
          className="absolute top-[20px] right-[10px] w-50 h-50"
        />

      <img src="src/assets/login1.png" alt="plane" className="absolute top-[60px] right-[60px] w-5s0 h-50"/>


      <h1 className="text-5xl font-bold text-center font-serif text-black mb-2">Wellcome</h1>
      <h2 className="text-3xl font-semibold text-right text-[#1D3557] mb-1 font-serif pr-16">
          SparkGo
        </h2>

        <p className="text-center text-gray-600 mb-1 font-serif" >Login into your account</p>

        <form className="flex flex-col gap-2">
          <div>
          <label htmlFor="email" className="font-serif pl-20 text-sm text-gray-500  ">
              Email 
            </label>
            <div className="flex justify-center w-full mt-1">
            <div className="flex items-center border-2 border-[#00B4D8] rounded-md px-2 py-1 w-fit">
              <MdEmail className="w-5 h-5 text-[#00B4D8] mr-2" />
              <input
                id="email"
                type="email"
                placeholder="your@email.com"
                className="w-[300px] px-1 py-1 font-serif outline-none bg-transparent text-sm"
              />
            </div>
            </div>
          </div>

          <div>
            <label htmlFor="password" className=" pl-20 text-sm text-gray-500 font-bold font-serif">
              Password
            </label>
            <div className="flex justify-center w-full mt-1">
            <div className="flex items-center border-2 border-[#00B4D8] rounded-md px-2 py-1 w-fit">
            <MdLockOutline className="w-5 h-5 text-[#00B4D8] mr-2" />              <input
                id="password"
                type="password"
                placeholder="********"
                className=" w-[300px] px-1 py-1 outline-none bg-transparent text-sm font-serif "
              />
            </div>
            </div>

            <div className="flex items-center justify-around px-5 pt-1  text-sm text-gray-600">
            <label className="flex items-center gap-2">
              <input type="checkbox" className=" accent-blue-500 font-serif" />
              Remember me
            </label>
            <a href="#" className="text-[#1D3557] hover:underline font-medium font-serif">
              Forgot password?
            </a>
          </div>
          <div className="flex justify-center pt-5">
          <button
            type="submit"
            className="bg-[#009EE2] w-[260px] text-white  py-2  font-serif  rounded-md font-semibold hover:bg-[#0096c7] transition-all mx-auto"
          >
            LOGIN
          </button>
          </div>
          </div>
        </form>

        <div className="flex items-center my-3">
          <hr className="flex-1 border-gray-300" />
          <span className="px-2 text-gray-500 font-serif">OR</span>
          <hr className="flex-1 border-gray-300" />
        </div>

        
        <div className="flex justify-center gap-4 mt-4">
      <button className="bg-white p-3 rounded-full shadow-md">
        <FcGoogle className="w-6 h-6" />
      </button>
      <button className="bg-white p-3 rounded-full shadow-md">
        <FaFacebookF className="w-6 h-6 text-[#1877F2]" />
      </button>
      <button className="bg-white p-3 rounded-full shadow-md">
        <FaApple className="w-6 h-6 text-black" />
      </button>
    </div>


        <p className="text-center text-sm text-gray-600 mt-6 font-serif">
          Don't have an account?{" "}
          <Link to="/signup" className="text-[#1D3557] font-semibold hover:underline font-serif">
            Register Now
          </Link>
        </p>

        
      </div>
    </div>
        </div>
    )
}
export default Login;
