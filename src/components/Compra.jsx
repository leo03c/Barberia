import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaShoppingCart, FaTimes } from "react-icons/fa";

const products = [
  { id: 1, name: "Corte de Cabello", price: 25, image: "https://via.placeholder.com/150" },
  { id: 2, name: "Coloración Premium", price: 50, image: "https://via.placeholder.com/150" },
  { id: 3, name: "Manicura de Lujo", price: 30, image: "https://via.placeholder.com/150" },
  { id: 4, name: "Pedicura Spa", price: 40, image: "https://via.placeholder.com/150" },
  { id: 5, name: "Tratamiento Capilar", price: 60, image: "https://via.placeholder.com/150" },
  { id: 6, name: "Maquillaje Profesional", price: 80, image: "https://via.placeholder.com/150" },
];

const Compra = () => {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [notification, setNotification] = useState(""); // Notificación flotante
  const [formData, setFormData] = useState({ cardNumber: "", pin: "" });

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    setNotification(`"${product.name}" añadido al carrito`); // Mostrar notificación
    setTimeout(() => setNotification(""), 3000); // Ocultar después de 3 segundos
  };

  const removeFromCart = (index) => {
    setCart((prevCart) => prevCart.filter((_, i) => i !== index));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePayment = (e) => {
    e.preventDefault();
    if (formData.cardNumber && formData.pin) {
      alert("Pago realizado con éxito. ¡Gracias por tu compra!");
      setCart([]); // Vaciar carrito
      setShowCart(false);
      setFormData({ cardNumber: "", pin: "" });
    } else {
      alert("Por favor, completa todos los campos del formulario.");
    }
  };

  const total = cart.reduce((sum, product) => sum + product.price, 0);

  return (
    <div className="bg-jetBlack text-lightGray min-h-screen py-12  pt-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h1
          className="text-5xl font-bold text-center text-mustard mb-12 font-serif"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Nuestros Productos
        </motion.h1>

        {/* Lista de Productos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <motion.div
              key={product.id}
              className="bg-lightGray rounded-lg shadow-lg hover:shadow-xl transition-all"
              whileHover={{ scale: 1.03 }}
            >
              <img src={product.image} alt={product.name} className="w-full h-52 object-cover" />
              <div className="p-5 text-center">
                <h3 className="text-2xl font-semibold text-bronze font-serif mb-2">
                  {product.name}
                </h3>
                <p className="text-lg text-jetBlack font-medium mb-4">${product.price}</p>
                <button
                  onClick={() => addToCart(product)}
                  className="bg-mustard text-jetBlack font-semibold py-2 px-4 rounded-lg hover:bg-bronze transition-all"
                >
                  Añadir al Carrito
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Icono del Carrito */}
        <motion.div
          className="fixed bottom-6 right-6 bg-mustard text-jetBlack rounded-full p-4 cursor-pointer hover:bg-bronze transition-all"
          onClick={() => setShowCart(true)}
          whileHover={{ scale: 1.1 }}
        >
          <FaShoppingCart size={24} />
        </motion.div>

        {/* Notificación */}
        <AnimatePresence>
          {notification && (
            <motion.div
              className="fixed top-6 right-6 bg-bronze text-lightGray p-4 mt-20 rounded-lg shadow-lg"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
            >
              {notification}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Carrito */}
        <AnimatePresence>
          {showCart && (
            <motion.div
              className="fixed top-0 right-0 w-96 h-full bg-jetBlack text-lightGray shadow-2xl p-6 overflow-auto pt-24"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-mustard">Carrito</h2>
                <FaTimes
                  size={24}
                  className="cursor-pointer hover:text-bronze transition-all"
                  onClick={() => setShowCart(false)}
                />
              </div>

              {/* Productos en el carrito */}
              {cart.length === 0 ? (
                <p>Tu carrito está vacío.</p>
              ) : (
                <>
                  <ul className="space-y-4 mb-6">
                    {cart.map((item, index) => (
                      <li key={index} className="flex justify-between items-center">
                        <span>{item.name}</span>
                        <div className="flex items-center space-x-2">
                          <span>${item.price}</span>
                          <FaTimes
                            size={16}
                            className="cursor-pointer hover:text-bronze transition-all"
                            onClick={() => removeFromCart(index)}
                          />
                        </div>
                      </li>
                    ))}
                  </ul>

                  {/* Total */}
                  <h3 className="text-lg font-bold text-mustard mb-4">Total: ${total}</h3>

                  {/* Formulario de Pago */}
                  <form onSubmit={handlePayment} className="space-y-4">
                    <input
                      type="text"
                      name="cardNumber"
                      placeholder="Número de Tarjeta"
                      className="w-full p-2 rounded-md text-jetBlack"
                      value={formData.cardNumber}
                      onChange={handleInputChange}
                    />
                    <input
                      type="password"
                      name="pin"
                      placeholder="PIN"
                      className="w-full p-2 rounded-md text-jetBlack"
                      value={formData.pin}
                      onChange={handleInputChange}
                    />
                    <button
                      type="submit"
                      className="w-full bg-mustard text-jetBlack py-2 rounded-lg font-semibold hover:bg-bronze transition-all"
                    >
                      Pagar
                    </button>
                  </form>
                </>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Compra;
