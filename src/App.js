import { useState, useEffect } from "react";
import {
  FaRegUserCircle,
  FaAddressCard,
  FaMailBulk,
  FaPhoneAlt,
  FaLeaf,
  FaIdBadge,
} from "react-icons/fa";

import logo_ont from "./referido/Objeto-inteligente-vectorial.png";
import celu from "./referido/celular.png";
import refie from "./referido/ConoceNuestrosPremios.png";
import uno from "./referido/1-(combinado).png";
import dos from "./referido/2-(combinado).png";
import tres from "./referido/3-(combinado).png";
import trecientos from "./referido/1-referido-(combinado).png";
import quinientos from "./referido/2referidos.png";
import setecientos from "./referido/3referidos.png";
import "./App.css";

function App() {
  const [data, setData] = useState({
    cliente_nombres: "",
    cliente_celular: "",
    cliente_dni: "",
    cliente_correo: "",
    referido_nombres: "",
    referido_celular: "",
    referido_dni: "",
    referido_correo: "",
    date: new Date().toString(),
    aceptarTerminos: false,
  });
  const [error, setError] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 900);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 900);
    };

    window.addEventListener("resize", handleResize);

    const timer = setTimeout(() => {
      setShowForm(true);
    }, 1000);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !data.cliente_nombres.trim() ||
      !data.cliente_celular.trim() ||
      !data.cliente_dni.trim() ||
      !data.cliente_correo.trim() ||
      !data.referido_nombres.trim() ||
      !data.referido_celular.trim() ||
      !data.referido_dni.trim() ||
      !data.referido_correo.trim() ||
      !data.aceptarTerminos
    ) {
      setError("Por favor, llene todos los campos y acepte los términos.");
      return;
    }
    try {
      const res = await fetch("https://sheetdb.io/api/v1/om94vh0towgqh", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        window.location.replace("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  let iconStyles = {
    color: "#92c021",
    fontSize: "25px",
    margin: "auto auto auto 4",
  };
  let iconStyles1 = {
    color: "white",
    fontSize: "100px",
    margin: "0 auto",
  };
  let iconStyles2 = {
    color: "white",
    fontSize: "100px",
    margin: "0 auto",
  };

  return (
    <>
      <div
        className="py-12 px-8"
        style={{
          background:
            "linear-gradient(90deg, rgba(90,160,16,1) 11%, rgba(173,213,61,1) 65%)",
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 m-auto gap-2">
          <img
            src={celu}
            alt="celu"
            style={{
              width: "35%",
              maxWidth: "50%",
              display: "block",
              margin: "auto",
              paddingBottom: "20px",
              animation: "floatAnimation 3s ease-in-out infinite", // Agregar la animación de flotación
            }}
          />
          <img
            src={refie}
            alt="refie"
            style={{
              width: "600px",
              margin: "auto",
              display: "block",
              marginLeft: isSmallScreen ? "0" : "-30px",
            }}
          />
        </div>
      </div>

      {/* Contenedor de indicaciones */}
      <div className="grid grid-rows-3 grid-flow-col gap-4 pt-12">
        {/* primera fila */}
        <div
          className={
            isSmallScreen
              ? "inset-0 flex flex-col items-center"
              : "row align-items-center justify-content-center"
          }
        >
          <div className="col-3">
            <img
              src={uno}
              alt="uno"
              className="col-span-2 lg:col-span-1 m-auto w-[180px]"
            />
          </div>

          <div className={isSmallScreen ? "col-6" : "col-4"}>
            <p className="col-span-1 text-justify py-3">
              <spam className="text-[#253040] font-bold">
                Registra a tu referido en el formulario
              </spam>
              <br />
              <spam className="text-[#253040] text-[20px]">
                Debes registrar los datos de tu referido en el formulario
                REFIERE AQUÍ que encontraras en nuestra página web.
              </spam>
            </p>
          </div>
        </div>
        {/* segunda fila */}
        <div
          className={
            isSmallScreen
              ? "inset-0 flex flex-col justify-between items-center"
              : "row align-items-center justify-content-center"
          }
        >
          <div className="col-3">
            <img
              src={dos}
              alt="dos"
              className="col-span-2 lg:col-span-1 m-auto w-[180px]"
            />
          </div>

          <div className={isSmallScreen ? "col-6" : "col-4"}>
            <p className="col-span-1 text-justify py-3">
              <spam className="text-[#253040] font-bold">
                Tu referido debe comprar al menos un lote y comprobar que tú lo
                referiste
              </spam>
              <br />
              <spam className="text-[#253040] text-[20px]">
                Tu referido debe figurar como propietario o copropietario al
                momento de la firma de su contrato.
              </spam>
            </p>
          </div>
        </div>
        {/* tercera fila */}
        <div
          className={
            isSmallScreen
              ? "inset-0 flex flex-col items-center"
              : "row align-items-center justify-content-center"
          }
        >
          <div className="col-3">
            <img
              src={tres}
              alt="tres"
              className="col-span-2 lg:col-span-1 m-auto w-[180px]"
            />
          </div>

          <div className={isSmallScreen ? "col-6" : "col-4"}>
            <p className="col-span-1 text-justify py-3">
              <spam className="text-[#253040] font-bold">
                Si tu referido compra, ¡GANAS!
              </spam>
              <br />
              <spam className="text-[#253040] text-[20px]">
                Puedes ganar hasta s/700 en efectivo con tu referencia exitosa
                realizada antes de la fecha límite.
              </spam>
            </p>
          </div>
        </div>
      </div>
      {/* Instrucciones fin */}

      {/* Titulo inicio formularios */}
      <div>
        <p className="text-[#253040] font-black text-6xl py-12">REFIERE AQUÍ</p>
      </div>

      {/* formulario */}
      <form
        onSubmit={handleSubmit}
        className={`form-container ${showForm ? "show" : ""}`}
      >
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2 m-auto">
            <div
              style={{
                padding: "1rem",
                margin: "3rem auto",
                width: "400px",
                borderStyle: "solid",
                borderRadius: "1.5rem",
                backgroundImage: "linear-gradient(to right, #5aa010, #add53d)",
                boxShadow: "0 8px 18px rgba(0, 0, 0, 2)", // Añadir sombra
              }}
            >
              <FaIdBadge style={iconStyles2} />
              <h4 style={{ paddingBottom: "1rem", color: "white" }}>
                ingresa tus datos
              </h4>
              <div className="pb-4">
                <div className="grid grid-cols-10 place-items-start bg-black rounded-3xl">
                  <FaRegUserCircle style={iconStyles} />
                  <input
                    placeholder="Nombres y Apellidos"
                    type="text"
                    className="border-black"
                    name="cliente_nombres"
                    value={data.cliente_nombres}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="pb-4">
                <div className="grid grid-cols-10 place-items-start bg-black rounded-3xl">
                  <FaAddressCard style={iconStyles} />
                  <input
                    type="text"
                    placeholder="N° DNI"
                    className="form-control"
                    name="cliente_dni"
                    value={data.cliente_dni}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="pb-4">
                <div className="grid grid-cols-10 place-items-start bg-black rounded-3xl">
                  <FaMailBulk style={iconStyles} />
                  <input
                    type="text"
                    placeholder="Email"
                    className="form-control"
                    name="cliente_correo"
                    value={data.cliente_correo}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="pb-4">
                <div className="grid grid-cols-10 place-items-start bg-black rounded-3xl">
                  <FaPhoneAlt style={iconStyles} />
                  <input
                    type="text"
                    placeholder="Número de Celular"
                    className="form-control"
                    name="cliente_celular"
                    value={data.cliente_celular}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            {/* salto de form */}
            {/* salto de form */}
            <div className="p-4 mx-auto my-12 w-[400px] border-4 rounded-3xl bg-gradient-to-r from-[#5aa010] to-[#add53d]">
              <FaLeaf style={iconStyles1} />
              <h2 className="text-white font-bold pb-4">Datos del Referido</h2>
              <div className="pb-4">
                <div className="grid grid-cols-10 place-items-start bg-black rounded-3xl">
                  <FaRegUserCircle style={iconStyles} />
                  <input
                    placeholder="Nombres y Apellidos"
                    type="text"
                    className="border-black"
                    name="referido_nombres"
                    value={data.referido_nombres}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="pb-4">
                <div className="grid grid-cols-10 place-items-start bg-black rounded-3xl">
                  <FaAddressCard style={iconStyles} />
                  <input
                    type="text"
                    placeholder="N° DNI"
                    className="form-control"
                    name="referido_dni"
                    value={data.referido_dni}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="pb-4">
                <div className="grid grid-cols-10 place-items-start bg-black rounded-3xl">
                  <FaMailBulk style={iconStyles} />
                  <input
                    type="text"
                    placeholder="Email"
                    className="form-control"
                    name="referido_correo"
                    value={data.referido_correo}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="pb-4">
                <div className="grid grid-cols-10 place-items-start bg-black rounded-3xl">
                  <FaPhoneAlt style={iconStyles} />
                  <input
                    type="text"
                    placeholder="Número de Celular"
                    className="form-control"
                    name="referido_celular"
                    value={data.referido_celular}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <input
            type="checkbox"
            id="aceptarTerminos"
            name="aceptarTerminos"
            className="w-6 h-6 mx-[15px]"
            checked={data.aceptarTerminos}
            onChange={handleChange}
          />
          <label htmlFor="aceptarTerminos">
            Acepto los términos y condiciones
            <br />
            <a
              href="https://inmobiliariaontario.com/terminos-condiciones-campana-afiliados/"
              target="_blank"
              rel="noreferrer"
              className="text-red-500"
            >
              "Abrir terminos y condiciones"
            </a>
          </label>
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <div className="col-span-3 mt-5 ml-4 mr-4 pb-5 items-center text-center">
          <button className="bg-gradient-to-r from-[#5aa010] to-[#add53d] btn btn-primary transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ring-2 ring-black-500 ring-offset-4 ring-offset-slate-50 rounded-lg pl-2 pr-2 text-white">
            Registrar
          </button>
        </div>
      </form>
      <div className="bg-[#253040] p-12">
        <p className="text-[40px] font-black">
          <spam className="text-white">¡COMPARTE LA ALEGRÍA Y</spam>
          <br />{" "}
          <spam className="bg-gradient-to-r from-[#5aa010] to-[#add53d] inline-block text-transparent bg-clip-text">
            GANA CON ONTARIO!
          </spam>
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 m-auto gap-4 p-8">
        <img src={trecientos} alt="trecientos" className="w-[360px] m-auto" />
        <img src={quinientos} alt="quinientos" className="w-[360px] m-auto" />
        <img src={setecientos} alt="setecientos" className="w-[360px] m-auto" />
      </div>
      <footer>
        <div className="grid grid-flow-row auto-rows-max place-items-center ">
          <img
            src={logo_ont}
            alt="logo_ont"
            className="pt-12 w-[150px] md:w-48 lg:w-[250px]"
          />
          <p className="text-white text-center text-[12px] p-12">
            Para más información contactanos mediante nuestra página web <br />
            <a href="https://inmobiliariaontario.com">
              https://inmobiliariaontario.com
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
