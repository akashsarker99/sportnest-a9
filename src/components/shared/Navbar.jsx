import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="bg-white shadow-md sticky top-0 z-50">
      <div className="navbar max-w-7xl mx-auto px-4">
        <div className="navbar-start">
          <Link href={"/"} className="flex items-center gap-2">
            <Image
              src={"/logoo.png"}
              height={45}
              width={45}
              alt="SportNest Logo"
            />

            <h1 className="text-2xl font-extrabold">
              <span className="text-cyan-600">Sport</span>
              <span className="text-green-500">Nest</span>
            </h1>
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-4 text-[16px] font-medium">
            <li>
              <Link
                href={"/"}
                className=" bg-transparent hover:text-green-500"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                href={"/all-facilities"}
                className=" bg-transparent hover:text-green-500"
              >
                All Facilities
              </Link>
            </li>

            <li>
              <Link
                href={"/mybookings"}
                className=" bg-transparent hover:text-green-500"
              >
                My Bookings
              </Link>
            </li>

            <li>
              <Link
                href={"/add-facility"}
                className=" bg-transparent hover:text-green-500 "
              >
                Add Facility
              </Link>
            </li>

            <li>
              <Link
                href={"/manage-facilities"}
                className=" bg-transparent hover:text-green-500"
              >
                Manage My Facilities
              </Link>
            </li>
          </ul>
        </div>

        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full border-2 border-green-500 overflow-hidden">
                <Image src={"/user.png"} alt="user" width={40} height={40} />
              </div>
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow bg-white rounded-box w-56 text-[#0F172A] space-y-2"
            >
              <li><Link href={"/mybookings"}>My Bookings</Link></li>
              <li><Link href={"/add-facility"}>Add Facility</Link></li>
              <li><Link href={"/manage-facilities"}>Manage My Facilities</Link></li>
              <li className="pt-2">
                <button className="btn bg-[#22C55E] hover:bg-green-600 border-none text-white">
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
