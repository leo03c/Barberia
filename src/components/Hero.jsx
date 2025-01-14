import imgHero from "../assets/hero.jpg"
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url("${imgHero}")`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-jetBlack to-forestGreen opacity-70"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-6">
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-mustard mb-6 animate-fade-in-down">
          Tu Estilo, Nuestra Pasión
        </h1>
        <p className="text-xl md:text-2xl text-dfdfdf mb-8 max-w-2xl animate-fade-in-up text-lightGray">
          Servicios exclusivos de peluquería, barbería, manicura y pedicura en
          un ambiente de lujo. Explora también nuestros productos premium de
          belleza.
        </p>
        <div className="flex space-x-6">
          <Link to= "./reserva" className="bg-mustard text-jetBlack px-8 py-3 rounded-full font-semibold shadow-md hover:bg-bronze transition-all duration-300">
           
            Reserva una Cita
          </Link>
          <a
            href="#productos"
            className="border-2 border-mustard text-mustard px-8 py-3 rounded-full font-semibold hover:bg-mustard hover:text-jetBlack transition-all duration-300"
          >
            Explora Productos
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
