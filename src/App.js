import { useState, useEffect } from "react";

import logo_ont from "./referido/Objeto-inteligente-vectorial.png";
import celu from "./referido/celular.png";
import refie from "./referido/ConoceNuestrosPremios.png";
import uno from "./referido/1-(combinado).png";
import dos from "./referido/2-(combinado).png";
import tres from "./referido/3-(combinado).png";
import trecientos from "./referido/1-referido-(combinado).png";
import quinientos from "./referido/2referidos.png";
import setecientos from "./referido/3referidos.png";
import Forms from "./components/form";
import "./App.css";

function App() {

  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 900);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 900);
    };

    window.addEventListener("resize", handleResize);
  },[]);
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
        <div
          className={
            isSmallScreen
              ? "inset-0 flex flex-col items-center"
              : "row me-0 align-items-center justify-content-center"
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

        <div
          className={
            isSmallScreen
              ? "inset-0 flex flex-col justify-between items-center"
              : "row me-0 align-items-center justify-content-center"
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

        <div
          className={
            isSmallScreen
              ? "inset-0 flex flex-col items-center"
              : "row me-0 align-items-center justify-content-center"
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

        
      <Forms/>
          
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
