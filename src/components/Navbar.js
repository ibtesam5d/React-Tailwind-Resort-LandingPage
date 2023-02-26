import { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  if (nav) {
    document.body.style.overflowY = "hidden";
  } else {
    document.body.style.overflowY = "scroll";
  }

  return (
    <nav className="absolute w-full flex justify-between p-4 items-center">
      <h1 className="text-white font-bold text-2xl z-20">Experiences</h1>
      <HiMenuAlt3
        size={25}
        className="z-20 text-white cursor-pointer"
        onClick={handleNav}
      />
      <div
        className={
          nav
            ? "fixed ease-in duration-300 text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex-col z-10"
            : "absolute top-0 h-screen left-[-100%] ease-in duration-300 z-10"
        }
      >
        <ul className="flex flex-col fixed w-full h-full items-center justify-center">
          <li className="font-bold text-3xl p-8 cursor-pointer">Home</li>
          <li className="font-bold text-3xl p-8 cursor-pointer">
            Destinations
          </li>
          <li className="font-bold text-3xl p-8 cursor-pointer">
            Reservations
          </li>
          <li className="font-bold text-3xl p-8 cursor-pointer">Amenities</li>
          <li className="font-bold text-3xl p-8 cursor-pointer">Rooms</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
