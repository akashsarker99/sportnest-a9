import React from "react";
import FeaturedCard from "./shared/FeatureCard";

const FeaturedFacilities = async () => {
  const res = await fetch("http://localhost:5000/facility");
  const facilities = await res.json();
  
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0F172A]">
          Featured
          <span className="text-cyan-500"> Facilities</span>
        </h2>

        <p className="text-gray-500 mt-5 leading-8">
          Explore our most popular sports facilities and reserve your favorite
          venue anytime.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
        {facilities.slice(0, 6).map((facility) => (
          <FeaturedCard key={facility._id} facility={facility} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedFacilities;
