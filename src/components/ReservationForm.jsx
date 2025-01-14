import { useState } from "react";
import { motion } from "framer-motion";

function ReservationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos enviados:", formData);
    alert("Tu cita ha sido reservada con éxito. ¡Te esperamos!");
  };

  return (
    <div className="min-h-screen bg-jetBlack py-16 px-6 flex items-center justify-center">
      <motion.div
        className="max-w-4xl w-full bg-white bg-opacity-10 backdrop-blur-md rounded-3xl shadow-2xl p-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl text-mustard font-serif font-bold text-center mb-10">
          Reserva tu Cita
        </h2>

        {/* FORMULARIO */}
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Campo Nombre */}
          <div>
            <label className="block text-lightGray font-medium mb-2" htmlFor="name">
              Nombre Completo
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-4 rounded-lg bg-transparent border border-bronze text-lightGray placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-mustard transition-all"
              placeholder="Tu Nombre"
              required
            />
          </div>

          {/* Campo Email */}
          <div>
            <label className="block text-lightGray font-medium mb-2" htmlFor="email">
              Correo Electrónico
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-4 rounded-lg bg-transparent border border-bronze text-lightGray placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-mustard transition-all"
              placeholder="tuemail@example.com"
              required
            />
          </div>

          {/* Campo Fecha y Hora */}
          <div>
            <label className="block text-lightGray font-medium mb-2" htmlFor="date">
              Fecha y Hora
            </label>
            <input
              type="datetime-local"
              name="date"
              id="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full p-4 rounded-lg bg-transparent border border-bronze text-lightGray focus:outline-none focus:ring-2 focus:ring-mustard transition-all"
              required
            />
          </div>

          {/* Selección de Servicio */}
          <div>
            <label className="block text-lightGray font-medium mb-2" htmlFor="service">
              Servicio
            </label>
            <select
  name="service"
  id="service"
  value={formData.service}
  onChange={handleChange}
  className="w-full p-4 rounded-lg bg-transparent border border-bronze text-lightGray appearance-none focus:outline-none focus:ring-2 focus:ring-mustard transition-all"
  style={{
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24'%3E%3Cpath fill='%23D4AF37' d='M7 10l5 5 5-5z'/%3E%3C/svg%3E")`, // Flecha personalizada
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right 1rem center",
    backgroundSize: "1rem",
  }}
  required
>
  <option value="">Selecciona un servicio</option>
  <option value="Peluquería">Peluquería</option>
  <option value="Barbería">Barbería</option>
  <option value="Manicura">Manicura</option>
  <option value="Pedicura">Pedicura</option>
</select>

          </div>

          {/* Mensaje */}
          <div className="md:col-span-2">
            <label className="block text-lightGray font-medium mb-2" htmlFor="message">
              Comentarios Adicionales
            </label>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-4 rounded-lg bg-transparent border border-bronze text-lightGray placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-mustard transition-all"
              rows="5"
              placeholder="Escribe tus solicitudes especiales"
            ></textarea>
          </div>

          {/* Botón de Enviar */}
          <div className="md:col-span-2 flex justify-center">
            <button
              type="submit"
              className="bg-mustard text-jetBlack font-bold py-4 px-8 rounded-lg shadow-md hover:bg-bronze hover:text-lightGray transition-all duration-300"
            >
              Reservar Cita
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}

export default ReservationForm;
