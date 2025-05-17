"use client";
import Image from "next/image";
import { useState, useRef } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import SignInModal from "@/components/SignInModal";
import LogInModal from "@/components/LogInModal";
import DestinationDropdown from "@/components/DestinationDropdown";
import TravelogsDropdown from "@/components/TravelogsDropdown";



export default function Home() {
  
  
  const [selectedCategory, setSelectedCategory] = useState("trending");
  const [signInOpen, setSignInOpen] = useState(false);
  const [logInOpen, setLogInOpen] = useState(false);
  
  
  const [openDropdown, setOpenDropdown] = useState<null | "explore" | "destination" | "travelogs" |"search">(null);
  const closeTimeout = useRef<NodeJS.Timeout | null>(null);
  
  const handleDropdownMouseEnter = (dropdown: "explore" | "destination" |"travelogs"| "search") => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setOpenDropdown(dropdown);
  };
  
  const handleDropdownMouseLeave = () => {
    closeTimeout.current = setTimeout(() => setOpenDropdown(null), 200);
  };

  

  

  
  
  const exploreCategories = [
  { key: "trending", label: "Trending" },
  { key: "cities", label: "Cities" },
  { key: "villages", label: "Villages" },
  { key: "places", label: "Places" },
];

const exploreContent = {
  trending: [
    { name: "Pokhara", img: "/pokhara.jpg" },
    { name: "Kathmandu", img: "/kathmandu.jpg" },
  ],
  cities: [
    { name: "Lalitpur", img: "/lalitpur.jpg" },
    { name: "Biratnagar", img: "/biratnagar.jpg" },
  ],
  villages: [
    { name: "Ghandruk", img: "/ghandruk.jpg" },
    { name: "Bandipur", img: "/bandipur.jpg" },
  ],
  places: [
    { name: "Lumbini", img: "/lumbini.jpg" },
    { name: "Chitwan", img: "/chitwan.jpg" },
  ],
};

  
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation Bar */}
      
<nav
  className="fixed top-0 left-0 w-full flex items-center px-8 py-4 shadow-md z-50"
  style={{
    background: "linear-gradient(to bottom, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.5))",
    backdropFilter: "blur(5px)",
  }}
>
  {/* Left: Logo */}
  <div className="flex-1">
    <h1
      className="font-bold"
      style={{
        color: "#111827",
        fontFamily: "Poppins, sans-serif",
        fontSize: "24px",
      }}
    >
      Jumna Ghumna
    </h1>
  </div>
  {/* Center: Links */}
  <div className="flex-1 flex justify-center">
    <div className="flex space-x-8">
      
      
      
      
      
      
      <div
          onMouseEnter={() => handleDropdownMouseEnter("explore")}
          onMouseLeave={handleDropdownMouseLeave}
          className="relative"
        >
          <a
            href="#"
            className="text-gray-700 hover:text-shadow-md transition-all duration-200"
            style={{ color: "#4B5563", fontFamily: "Poppins, sans-serif", fontSize: "16px" }}
            onMouseEnter={e => (e.currentTarget.style.textShadow = "2px 2px 6px rgba(0, 0, 0, 0.7)")}
            onMouseLeave={e => (e.currentTarget.style.textShadow = "none")}
          >
            Explore
          </a>
          <div
            className={`fixed left-1/2 top-24 transform -translate-x-1/2 bg-white rounded-2xl shadow-2xl p-16 z-[2100] transition-all duration-300
              ${openDropdown === "explore" ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"}`}
            style={{
              width: "85vw",
              minWidth: "600px",
              maxWidth: "1400px",
              minHeight: "500px",
            }}
            onMouseEnter={() => handleDropdownMouseEnter("explore")}
            onMouseLeave={handleDropdownMouseLeave}
          >
            <div className="flex justify-between items-center mb-12">
              <span className="block text-4xl font-bold text-[#5D6C8A]">Explore</span>
            </div>
            <div style={{ display: "flex", height: "100%" }}>
              {/* Left: Categories */}
              <div className="bg-gray-100 w-1/4 p-8 flex flex-col gap-4 border-r">
                {exploreCategories.map(cat => (
                  <button
                    key={cat.key}
                    className={`text-left px-4 py-2 rounded-lg font-semibold transition ${
                      selectedCategory === cat.key
                        ? "bg-[#5D6C8A] text-white"
                        : "text-gray-700 hover:bg-gray-200"
                    }`}
                    onClick={() => setSelectedCategory(cat.key)}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
              {/* Right: Content */}
              <div className="flex-1 p-8 grid grid-cols-2 gap-6">
                {exploreContent[selectedCategory].map(place => (
                  <div key={place.name} className="rounded-xl overflow-hidden shadow hover:shadow-lg transition">
                    <img src={place.img} alt={place.name} className="w-full h-40 object-cover" />
                    <div className="p-4 text-lg font-semibold text-center" style={{ color: "#000000"}}>{place.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      
      
      
      
      
      
      
      
      <div
          onMouseEnter={() => handleDropdownMouseEnter("destination")}
          onMouseLeave={handleDropdownMouseLeave}
          className="relative"
        >
          <a
            href="#"
            className="text-gray-700 hover:text-shadow-md transition-all duration-200"
            style={{ color: "#4B5563", fontFamily: "Poppins, sans-serif", fontSize: "16px" }}
            onMouseEnter={e => (e.currentTarget.style.textShadow = "2px 2px 6px rgba(0, 0, 0, 0.7)")}
            onMouseLeave={e => (e.currentTarget.style.textShadow = "none")}
          >
            Destination
          </a>
          <DestinationDropdown
            open={openDropdown === "destination"}
            onMouseEnter={() => handleDropdownMouseEnter("destination")}
            onMouseLeave={handleDropdownMouseLeave}
          />
        </div>
      <div
            onMouseEnter={() => handleDropdownMouseEnter("travelogs")}
            onMouseLeave={handleDropdownMouseLeave}
            className="relative"
            >
          <a
            href="#"
            className="text-gray-700 hover:text-shadow-md transition-all duration-200"
            style={{ color: "#4B5563", fontFamily: "Poppins, sans-serif", fontSize: "16px" }}
            onMouseEnter={e => (e.currentTarget.style.textShadow = "2px 2px 6px rgba(0, 0, 0, 0.7)")}
            onMouseLeave={e => (e.currentTarget.style.textShadow = "none")}
          >
            Travelogs
          </a>
          <TravelogsDropdown
            open={openDropdown === "travelogs"}
            onMouseEnter={() => handleDropdownMouseEnter("travelogs")}
            onMouseLeave={handleDropdownMouseLeave}
          />
        </div>
      <a
        href="#"
        className="text-gray-700 hover:text-shadow-md transition-all duration-200"
        style={{
          color: "#4B5563",
          fontFamily: "Poppins, sans-serif",
          fontSize: "16px",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.textShadow = "2px 2px 6px rgba(0, 0, 0, 0.7)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.textShadow = "none";
        }}
      >
        About
      </a>
      {/* Search Icon */}
            <div
                className="relative flex items-center"
                onMouseEnter={() => handleDropdownMouseEnter("search")}
                onMouseLeave={handleDropdownMouseLeave}
                >
                <MagnifyingGlassIcon className="h-6 w-6 text-[#5D6C8A] cursor-pointer transition-transform duration-200 hover:scale-110" />
                <div
                  className={`fixed left-1/2 top-24 transform -translate-x-1/2 bg-white rounded-2xl shadow-2xl p-12 transition-all duration-300 ${
                    openDropdown === "search" ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
                  }`}
                  style={{
                    width: "70vw",
                    minWidth: "400px",
                    maxWidth: "900px",
                    minHeight: "350px",
                    zIndex: 2000,
                  }}
                  >


              
              <div className="mb-8">
                <span className="block text-3xl font-bold text-[#5D6C8A] mb-6">Quick Search</span>
                <input
                  type="text"
                  placeholder="Search destinations, activities..."
                  className="w-full border border-gray-300 rounded px-6 py-4 focus:outline-none text-gray-800 text-xl"
                  autoFocus={openDropdown === "search"}
                />
              </div>
              <div className="mb-6">
                <span className="block text-lg text-gray-500 mb-3">Suggestions:</span>
                <div className="flex flex-wrap gap-4">
                  <button className="bg-[#5D6C8A] text-white px-6 py-3 rounded-full text-base hover:bg-[#4a5870] transition">Pokhara</button>
                  <button className="bg-[#5D6C8A] text-white px-6 py-3 rounded-full text-base hover:bg-[#4a5870] transition">Kathmandu</button>
                  <button className="bg-[#5D6C8A] text-white px-6 py-3 rounded-full text-base hover:bg-[#4a5870] transition">Trekking</button>
                  <button className="bg-[#5D6C8A] text-white px-6 py-3 rounded-full text-base hover:bg-[#4a5870] transition">Adventure</button>
                </div>
              </div>
              <div>
                <span className="block text-lg text-gray-500 mb-3">Recent Searches:</span>
                <div className="flex flex-wrap gap-4">
                  <button className="bg-gray-200 text-gray-700 px-6 py-3 rounded-full text-base hover:bg-gray-300 transition">Lumbini</button>
                  <button className="bg-gray-200 text-gray-700 px-6 py-3 rounded-full text-base hover:bg-gray-300 transition">Chitwan</button>
                </div>
              </div>
            </div>
            </div>
                    
            </div>
          </div>
      {/* Right: Button */}
      <div className="flex-1 flex justify-end">
        <button
         className="px-4 py-2 text-white rounded-md hover:opacity-90 transition-all duration-200"
         style={{
         backgroundColor: "#5D6C8A",
         fontFamily: "Poppins, sans-serif",
        fontSize: "16px",
        }}
        onClick={() => setSignInOpen(true)}
        >
        Sign In
        </button>
      </div>
    </nav>
        <SignInModal
        open={signInOpen}
        onClose={() => setSignInOpen(false)}
        onSwitchToLogIn={() => {
          setSignInOpen(false);
          setLogInOpen(true);
        }}
        />      
          <LogInModal
            open={logInOpen}
            onClose={() => setLogInOpen(false)}
            onSwitchToSignUp={() => {
              setLogInOpen(false);
              setSignInOpen(true);
            }}
            onForgotPassword={() => {
              // handle forgot password
            }}
          />
        

     



    
      
      <section className="relative h-[100vh] bg-cover bg-center" 
        style={{ backgroundImage: "url('/home-pic.jpg')",
        filter: "saturate(0.5)" }}>
  {/* Overlay to darken the background for better text readability */}

   
  

  {/* Content inside hero */}
  <div className="relative z-10 flex flex-col items-start justify-center h-full text-white px-6">
    <h2 className="text-6xl font-bold mb-4 text-left" 
      style={{ color: "#000000", 
      marginTop: "-300px", 
      fontFamily: "Poppins, sans-serif"}}>Find your unforgettable destination</h2>
    <p className="mb-8 max-w-xl text-left" 
      style={{ color: "#000000", 
      whiteSpace: "nowrap" , 
      fontFamily: "Poppins, sans-serif", 
      fontSize: "18px",
      marginLeft: "2.5px",
    }}>
  Explore hidden gems, plan your trip, and discover the best places to visit -- all in one place
</p>

    
    
  </div>
</section>


      

   

    </main>
  );
  
}
