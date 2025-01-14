import imgBrab from "../assets/barberia.jpg";
import imgPelu from "../assets/peluqueria.jpg";
import imgMani from "../assets/manicura.jpg";
import imgPedi from "../assets/pedicura.jpg";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion } from "framer-motion";

const Services = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const services = [
    {
      title: "Peluquería",
      description:
        "Corte, estilo y color con técnicas avanzadas para resaltar tu mejor versión.",
      image: imgPelu,
    },
    {
      title: "Barbería",
      description:
        "Afeitado, cortes clásicos y modernos. Todo lo que un hombre necesita para un look impecable.",
      image: imgBrab,
    },
    {
      title: "Manicura",
      description:
        "Tratamientos de uñas, desde diseños clásicos hasta los más modernos para resaltar tu estilo.",
      image: imgMani,
    },
    {
      title: "Pedicura",
      description:
        "Cuida y embellece tus pies con nuestros tratamientos de pedicura profesional.",
      image: imgPedi,
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + services.length) % services.length
    );
  };

  return (
    <section id="servicios" className="py-16 bg-jetBlack text-lightGray">
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-mustard mb-12 animate-fade-in-up">
          Nuestros Servicios
        </h2>
        <div className="relative">
          {/* Carrusel de imágenes con animaciones */}
          <div className="overflow-hidden rounded-lg shadow-lg">
            <motion.div
              className="flex"
              animate={{ x: -currentSlide * 100 + "%" }}
              transition={{ type: "tween", duration: 0.5 }}
            >
              {services.map((service, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0"
                >
                  <motion.img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-96 object-cover rounded-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="p-6">
                    <h3 className="text-2xl font-serif font-semibold text-mustard mb-4">
                      {service.title}
                    </h3>
                    <p className="text-lg text-lightGray mb-4">
                      {service.description}
                    </p>
                    <a
                      href="#"
                      className="text-mustard font-semibold hover:text-jetBlack hover:underline transition-all duration-300"
                    >
                      Ver más
                    </a>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Botones de Navegación */}
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 px-4">
            <button
              onClick={prevSlide}
              className="bg-mustard text-jetBlack p-2 rounded-full shadow-lg hover:bg-bronze transition-all duration-300"
            >
              <FaChevronLeft className="text-xl" />
            </button>
          </div>
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2 px-4">
            <button
              onClick={nextSlide}
              className="bg-mustard text-jetBlack p-2 rounded-full shadow-lg hover:bg-bronze transition-all duration-300"
            >
              <FaChevronRight className="text-xl" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
