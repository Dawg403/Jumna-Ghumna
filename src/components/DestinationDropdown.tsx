import React from "react";

interface DestinationDropdownProps {
  open: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const destinationPlaces = [
  "Pokhara",
  "Kathmandu",
  "Lalitpur",
  "Biratnagar",
  "Ghandruk",
  "Bandipur",
  "Lumbini",
  "Chitwan",
  "Dharan",
  "Butwal",
  "Janakpur",
  "Hetauda",
  "Bhaktapur",
  "Nepalgunj",
  "Ilam",
  "Tansen",
  "Damak",
  "Dhangadhi",
  "Itahari",
  "Birgunj",
  "Bharatpur",
  "Tikapur",
  "Rajbiraj",
  "Kirtipur",
  "Siddharthanagar",
  "Bhadrapur",
  "Gorkha",
  "Palpa",
  "Jomsom",
  "Syangja",
  "Baglung"
];


const numCols = 5;
const colSize = Math.ceil(destinationPlaces.length / numCols);
const columns = Array.from({ length: numCols }, (_, i) =>
  destinationPlaces.slice(i * colSize, (i + 1) * colSize)
);

const DestinationDropdown: React.FC<DestinationDropdownProps> = ({
  open,
  onMouseEnter,
  onMouseLeave,
}) => (
  <div
    className={`fixed left-1/2 top-24 transform -translate-x-1/2 bg-white rounded-2xl shadow-2xl p-12 z-[2100] transition-all duration-300 ${
      open ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"
    }`}
    style={{
      width: "80vw",
      minWidth: "600px",
      maxWidth: "1400px",
      minHeight: "200px",
      display: "flex",
      alignItems: "stretch",
    }}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    {/* Left: Title */}
    <div className="w-1/5 flex items-center justify-center border-r pr-8">
      <span className="block text-2xl font-bold text-[#5D6C8A]">Destination</span>
    </div>
    {/* Right: Dynamic columns of places */}
    <div className="w-4/5 pl-8 flex flex-row justify-center gap-6">
      {columns.map((col, idx) => (
        <div className="flex flex-col" key={idx}>
          {col.map(place => (
            <a
              key={place}
              href="#"
              className="block py-2 px-4 rounded hover:bg-[#f1f5f9] text-lg font-medium text-gray-700 hover:text-[#5D6C8A] transition"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              {place}
            </a>
          ))}
        </div>
      ))}
    </div>
  </div>
);

export default DestinationDropdown;