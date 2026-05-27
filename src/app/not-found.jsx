import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-6">
      <div className="text-center max-w-xl">
        <h1 className="text-8xl md:text-9xl font-extrabold text-cyan-500">
          404
        </h1>

        <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mt-6">
          Page Not Found
        </h2>

        <p className="text-gray-500 mt-4 leading-7">
          Sorry, the page you are looking for does not exist or has been moved.
        </p>

        <Link href={"/"}>
          <button className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-600 text-white font-semibold transition">
            <FaArrowLeft />
            Back To Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
