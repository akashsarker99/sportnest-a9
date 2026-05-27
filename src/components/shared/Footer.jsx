import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaGithub,
  FaXTwitter,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#0F172A] text-white mt-20">
      <div className="max-w-7xl mx-auto px-7 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <h1 className="text-3xl font-extrabold mb-4">
            <span className="text-cyan-600">Sport</span>
            <span className="text-green-500">Nest</span>
          </h1>
          <p className="text-gray-300 leading-7">
            Book your favorite sports facilities easily and manage your bookings
            anytime with SportNest.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-5">Quick Links</h2>

          <ul className="space-y-3 text-gray-300">
            <li>
              <Link href={"/"} className="hover:text-green-400 ">
                Home
              </Link>
            </li>

            <li>
              <Link
                href={"/all-facilities"}
                className="hover:text-green-400 "
              >
                All Facilities
              </Link>
            </li>

            <li>
              <Link
                href={"/mybookings"}
                className="hover:text-green-400 "
              >
                My Bookings
              </Link>
            </li>

            <li>
              <Link
                href={"/add-facility"}
                className="hover:text-green-400"
              >
                Add Facility
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-5">
            Contact Info
          </h2>

          <div className="space-y-3 text-gray-300">
            <p>Dhaka, Bangladesh</p>
            <p>support@sportnest.com</p>
            <p>+880 1234-567890</p>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-5">Follow Us</h2>

          <div className="flex items-center gap-3">

  <div className="w-10 h-10 rounded-full border border-[#334155] flex items-center justify-center hover:border-green-500 hover:text-green-500 transition cursor-pointer">
    <FaFacebookF size={16} />
  </div>

  <div className="w-10 h-10 rounded-full border border-[#334155] flex items-center justify-center hover:border-green-500 hover:text-green-500 transition cursor-pointer">
    <FaInstagram size={16} />
  </div>

  <div className="w-10 h-10 rounded-full border border-[#334155] flex items-center justify-center hover:border-green-500 hover:text-green-500 transition cursor-pointer">
    <FaXTwitter size={16} />
  </div>

  <div className="w-10 h-10 rounded-full border border-[#334155] flex items-center justify-center hover:border-green-500 hover:text-green-500 transition cursor-pointer">
    <FaGithub size={16} />
  </div>

</div>
        </div>
      </div>

      <div className="border-t border-[#1E293B]">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-gray-400 text-sm">
            © 2026 SportNest. All Rights Reserved.
          </p>

          <p className="text-gray-400 text-sm">
            Designed for Sports Facility Booking
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
