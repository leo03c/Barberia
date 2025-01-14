import React from "react";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa"; // Flechas y estrellas de navegación

// Datos de ejemplo de testimonios
const testimonials = [
  {
    name: "Juan Pérez",
    position: "Cliente frecuente",
    image: "https://via.placeholder.com/150", // Reemplaza con la URL de la foto del cliente
    text: "El servicio fue increíble, muy profesionales y me dejaron como nuevo. ¡Volveré pronto!",
    rating: 5, // Calificación con estrellas (de 1 a 5)
  },
  {
    name: "Ana García",
    position: "Cliente feliz",
    image: "https://via.placeholder.com/150", // Reemplaza con la URL de la foto del cliente
    text: "Me encantó el trato y el ambiente. ¡100% recomendado!",
    rating: 4, // Calificación con estrellas
  },
  {
    name: "Carlos López",
    position: "Cliente satisfecho",
    image: "https://via.placeholder.com/150", // Reemplaza con la URL de la foto del cliente
    text: "Un excelente lugar para consentirme, todo fue perfecto.",
    rating: 5, // Calificación con estrellas
  },
  {
    name: "María Rodríguez",
    position: "Cliente de siempre",
    image: "https://via.placeholder.com/150", // Reemplaza con la URL de la foto del cliente
    text: "Me hicieron sentir muy especial y el servicio fue de 10. ¡Gracias!",
    rating: 3, // Calificación con estrellas
  },
];

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section id="testimonios" className="py-16 bg-jetBlack text-lightGray">
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-mustard mb-12 animate-fade-in-up">
          Testimonios de Nuestros Clientes
        </h2>
        <div className="relative">
          {/* Carrusel de Testimonios */}
          <div className="overflow-hidden rounded-xl shadow-2xl bg-jetBlack p-8">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentTestimonial * 100}%)`,
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 flex flex-col items-center text-center px-6"
                >
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-32 h-32 object-cover rounded-full mb-4 mx-auto border-4 border-mustard"
                  />
                  <h3 className="text-2xl font-serif font-semibold text-mustard mb-2">
                    {testimonial.name}
                  </h3>
                  <p className="text-lg text-lightGray mb-4 italic">
                    {testimonial.position}
                  </p>
                  <p className="text-lg text-lightGray italic mb-4">
                    {testimonial.text}
                  </p>
                  {/* Estrellas de satisfacción */}
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={`text-2xl ${i < testimonial.rating ? 'text-mustard' : 'text-gray-400'}`}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Botones de Navegación con React Icons */}
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 px-4">
            <button
              onClick={prevTestimonial}
              className="bg-mustard text-jetBlack p-3 rounded-full shadow-lg hover:bg-bronze transition-all duration-300"
            >
              <FaChevronLeft className="text-2xl" />
            </button>
          </div>
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2 px-4">
            <button
              onClick={nextTestimonial}
              className="bg-mustard text-jetBlack p-3 rounded-full shadow-lg hover:bg-bronze transition-all duration-300"
            >
              <FaChevronRight className="text-2xl" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
