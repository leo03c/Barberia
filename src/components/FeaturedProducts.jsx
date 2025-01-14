
import imgProducto1 from "../assets/producto1.jpg";
import imgProducto2 from "../assets/producto2.jpg";
import imgProducto3 from "../assets/producto3.jpg";
import imgProducto4 from "../assets/producto4.jpg";
import { Link } from "react-router-dom";

const FeaturedProducts = () => {
  const products = [
    {
      title: "Aceite Hidratante",
      description: "Aceite premium para un cabello suave e hidratado.",
      price: "$5.99",
      image: imgProducto1,
    },
    {
      title: "Crema Capilar",
      description: "Crema nutritiva que revitaliza tu cabello.",
      price: "$19.99",
      image: imgProducto2,
    },
    {
      title: "Kit Capilar",
      description: "Plancha y otros articulos para acondicionar tu cabello.",
      price: "$45.99",
      image: imgProducto3,
    },
    {
      title: "Kit de barberia ",
      description: "Accesorios para un cuidado adecuado del cabello.",
      price: "$67.99",
      image: imgProducto4,
    },
  ];

  return (
    <section id="productos" className="py-16 bg-jetBlack text-lightGray">
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-mustard mb-12 animate-fade-in-up">
          Productos Destacados
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {products.map((product, index) => (
            <div
              key={index}
              className="relative bg-jetBlack rounded-lg overflow-hidden shadow-xl transform transition-all duration-300 hover:scale-105"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-64 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-black bg-opacity-60">
                <h3 className="text-xl font-semibold text-lightGray mb-2">
                  {product.title}
                </h3>
                <p className="text-md text-lightGray mb-4">{product.description}</p>
                <p className="text-lg font-bold text-mustard">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <Link to="./compra/"
            href="#"
            className="text-mustard font-semibold hover:text-jetBlack hover:underline transition-all duration-300"
          >
            Ver más productos
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
