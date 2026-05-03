import { Link, useLocation } from "react-router-dom";
import { motion } from "motion/react";

export default function Navbar() {
  const location = useLocation();

  const navItems = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Services", path: "/services" },
    { title: "Book Now", path: "/book" },
    { title: "Contact", path: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-luxury-cream/80 backdrop-blur-md border-b border-luxury-ink/10">
      <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <span className="luxury-heading text-2xl tracking-widest uppercase">Halo</span>
          <div className="h-8 w-[1px] bg-luxury-ink/30 mx-2" />
          <span className="text-[10px] uppercase tracking-[0.4em] font-light">Salon</span>
        </Link>
        <div className="hidden md:flex space-x-12">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-link ${location.pathname === item.path ? "text-luxury-gold" : "text-luxury-ink"}`}
            >
              {item.title}
            </Link>
          ))}
        </div>
        <div className="md:hidden">
            {/* Mobile menu would go here, simplified for now */}
            <button className="text-luxury-ink font-light tracking-widest uppercase text-[10px]">Menu</button>
        </div>
      </div>
    </nav>
  );
}
