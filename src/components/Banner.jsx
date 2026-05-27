import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { FaRegDotCircle } from "react-icons/fa";
const Banner = () => {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/Banner.jpeg')",
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-28">
        <div className="max-w-3xl mx-auto text-center">
          <div className="py-2 inline-flex items-center gap-2 px-4 rounded-full bg-white/10 backdrop-blur-md text-green-400 font-medium mb-5 border border-gray-500">
            <FaRegDotCircle className="text-sm" />

            <span>Book Premium Sports Facilities</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Play Better With
            <span className="block mt-2">
              <span className="text-cyan-400">Sport</span>
              <span className="text-green-400">Nest</span>
            </span>
          </h1>

          <p className="text-gray-300 text-base md:text-lg leading-8 mt-6 max-w-2xl mx-auto">
            Discover and reserve football turfs, badminton courts, swimming
            pools, and more — anytime, anywhere.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-8 justify-center">
            <Link href={"/all-facilities"}>
              <button className="px-6 py-3 rounded-xl bg-[#22C55E] hover:bg-green-600 text-white font-semibold flex items-center gap-2 transition">
                Explore Facilities
                <FaArrowRight />
              </button>
            </Link>

            <button className="px-6 py-3 rounded-xl border border-white text-white hover:bg-white hover:text-[#0F172A] font-semibold transition">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
