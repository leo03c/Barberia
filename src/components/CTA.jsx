import { FaArrowRight } from 'react-icons/fa';
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="py-20 bg-jetBlack text-center text-lightGray">
      <div className="max-w-screen-xl mx-auto px-6">
        <h2 className="text-4xl font-serif font-bold text-mustard mb-6 animate-fade-in-up">
          ¡Transforma tu estilo hoy mismo!
        </h2>
        <p className="text-lg md:text-xl mb-8">
          Descubre la experiencia exclusiva de nuestros servicios y lleva tu look al siguiente nivel. 
          ¡Reserva ahora y disfruta de un trato VIP!
        </p>
        <Link to="./reserva/"
          href="#contacto"
          className="inline-flex items-center bg-mustard text-jetBlack px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:bg-bronze hover:text-lightGray"
        >
          Reservar Ahora
          <FaArrowRight className="ml-2" />
        </Link>
      </div>
    </section>
  );
};

export default CTA;
