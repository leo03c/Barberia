import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Importa Router, Route y Routes
import Header from "./components/Header"; // Componente del encabezado
import Main from "./components/main"; // Asegúrate de que el nombre del archivo y del componente sea correcto
import Footer from "./components/Footer"; // Componente del pie de página
import Compra from "./components/Compra";
import ReservationPage from "./components/ReservationPage"; // Componente de 

function App() {
  return (
    <Router> {/* Configura el Router para navegación */}
      <Header /> {/* Componente del encabezado */}
      
      <Routes> {/* Define las rutas aquí */}
        <Route path="archivo/" element={<Main />} /> {/* Ruta principal que renderiza el componente Main */}
        <Route path="archivo/reserva" element={< ReservationPage/>} /> {/* Ruta para los servicios */}
        <Route path="archivo/compra" element={< Compra/>} /> {/* Ruta para los servicios */}
        {/* Agrega más rutas según sea necesario */}
      </Routes>

      <Footer /> {/* Componente del pie de página */}
    </Router>
  );
}

export default App;
