import React from "react";

interface TravelogsDropdownProps {
  open: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const travelogs = [
  {
    name: "Aarava",
    place: "Pokhara",
    photo: "/travelogs/aarava.jpg",
    memory: "The sunrise at Sarangkot was magical!"
  },
  {
    name: "Sita",
    place: "Bandipur",
    photo: "/travelogs/sita.jpg",
    memory: "Loved the peaceful streets and mountain views."
  },
  {
    name: "Ramesh",
    place: "Lumbini",
    photo: "/travelogs/ramesh.jpeg",
    memory: "A spiritual journey I’ll never forget."
  },
  {
    name: "Maya",
    place: "Chitwan",
    photo: "/travelogs/maya.jpg",
    memory: "Elephant safari and jungle walks—amazing!"
  }
  // Add more as needed
];

const TravelogsDropdown: React.FC<TravelogsDropdownProps> = ({
  open,
  onMouseEnter,
  onMouseLeave,
}) => (
  <div
    className={`fixed left-1/2 top-24 transform -translate-x-1/2 bg-white rounded-2xl shadow-2xl p-10 z-[2100] transition-all duration-300 ${
      open ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"
    }`}
    style={{
      width: "60vw",
      minWidth: "400px",
      maxWidth: "900px",
      minHeight: "250px",
      display: "flex",
      flexDirection: "column",
      alignItems: "stretch",
    }}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    <span className="block text-3xl font-bold text-[#5D6C8A] mb-6">Travelogs</span>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {travelogs.map((log, idx) => (
        <div key={idx} className="flex flex-col items-center">
          <img
            src={log.photo}
            alt={log.name}
            className="w-40 h-40 rounded-full object-cover border-4 border-[#5D6C8A] mb-3"
          />
          <div className="text-base font-semibold text-gray-800">{log.name} <span className="text-xs text-gray-500">in {log.place}</span></div>
          <div className="text-sm text-gray-600 italic text-center mt-1">"{log.memory}"</div>
        </div>
      ))}
    </div>
    <div className="text-center mt-6">
      <span className="text-[#5D6C8A] font-semibold hover:underline cursor-pointer">
        See all travelogs &rarr;
      </span>
    </div>
  </div>
);

export default TravelogsDropdown;