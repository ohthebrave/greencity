import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/recycle.png";
import { navItems } from "../constants";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-evenly items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="h-20 w-24 mr-2" src={logo} alt="Logo" />
            <h1 className="text-xl tracking-tight"><span className="text-green-600">Spectrum</span> Urban Solutions</h1>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <a className="hover:text-green-600" href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>

          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-500 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <a className="text-white hover:text-green-900" href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
