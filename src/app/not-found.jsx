import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-6">
      <div className="text-center max-w-xl">
        <h1 className="text-8xl md:text-9xl font-extrabold bg-linear-to-r from-[#24B1B1] to-[#007979] bg-clip-text text-transparent">
          404
        </h1>

        <h2 className="text-3xl md:text-4xl font-bold text-slate-700 mt-6">
          Page Not Found
        </h2>

        <p className="text-gray-500 mt-4 leading-7">
          Sorry, the page you are looking for does not exist or has been moved.
        </p>

        <Link href={"/"}>
          <button className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-linear-to-r from-[#24B1B1] to-[#007979] hover:opacity-90 text-white font-semibold transition duration-300 shadow-lg hover:shadow-[0_10px_30px_rgba(36,177,177,0.25)]">
            <FaArrowLeft />
            Back To Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
