import React, { useState, useEffect } from "react";

const Header = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrolling(window.scrollY > 50);
    });
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolling
          ? "bg-charcoal bg-opacity-95 shadow-lg"
          : "bg-white bg-opacity-10 backdrop-blur-md"
      }`}
    >
      <div className="flex justify-between items-center px-12 py-4">
        {/* Logo */}
        <h1 className="text-4xl font-serif font-bold text-mustard tracking-wider">
          Beauty Luxe
        </h1>

        {/* Navigation */}
        <nav>
          <ul className="flex space-x-8">
            {["Inicio", "Servicios", "Productos", "Contacto"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-lightGray uppercase tracking-wider hover:text-mustard transition-colors duration-300"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
