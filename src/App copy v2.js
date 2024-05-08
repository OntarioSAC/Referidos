import { useState, useEffect } from "react";
import {
  FaRegUserCircle,
  FaAddressCard,
  FaMailBulk,
  FaPhoneAlt,
  FaUserFriends,
  FaRegComments,
  FaLeaf,
  FaIdBadge,
} from "react-icons/fa";
import p2022 from "./img/2022.png";
import p2023 from "./img/2023.png";
import empresa from "./img/empresa.png";
import logo_ont from "./img/logo-ont.png";
import "./App.css";

function App() {
  const [data, setData] = useState({
    cliente_nombres: "",
    cliente_celular: "",
    cliente_dni: "",
    cliente_correo: "",
    referido_nombre: "",
    referido_apellido: "",
    referido_parentesco: "",
    date: new Date().toString(),
  });

  let iconStyles = {
    color: "#92c021",
    fontSize: "25px",
    margin: "6px 3px 5px 6px",
  };
  let iconStyles1 = {
    color: "white",
    fontSize: "100px",
    margin: "6px 3px 5px 125px",
  };
  let iconStyles2 = {
    color: "white",
    fontSize: "100px",
    margin: "6px 3px 5px 136px",
  };

  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    // Simula un retraso para el efecto de carga
    const timer = setTimeout(() => {
      setShowForm(true);
    }, 1000); // Puedes ajustar el tiempo según sea necesario

    return () => clearTimeout(timer); // Limpiar el temporizador en caso de que el componente se desmonte antes de que se complete el tiempo de espera
  }, []);

  const handleChange = (e) =>
    setData({ ...data, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
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
  //<form style={{ maxWidth: 500, margin: "auto" }} onSubmit={handleSubmit}>
  return (
    <div className="flex justify-center ">
      <div className="">
        <div className="App-header">
          <div className="grid grid-row-3 grid-flow-col gap-2 items-center">
            <div className="">
              <img src={logo_ont} className="App-logo" alt="logo" />
            </div>
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className={`form-container ${showForm ? "show" : ""}`}
        >
          <div className="md: px-[4rem] py-8">
            <h1 className="pb-8">Refiere y Gana</h1>
            <div className="sm:gap-x-16 gap-y-2 md:grid grid-rows-1 grid-flow-col gap-x-16 gap-y-2 lg:flex flex-row gap-x-16 gap-y-2">
              <div className="p-4 border-4 rounded-3xl bg-[#94BB15] h-[450px] ">
                <FaLeaf style={iconStyles1} />
                <h2 className="pb-4">Datos Referidos</h2>
                <div className="pb-4">
                  <div className="block flex flex-col-2 bg-black rounded-3xl">
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
                  <div className="block flex flex-col-2 bg-black rounded-3xl">
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
                  <div className="block flex flex-col-2 bg-black rounded-3xl">
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
                  <div className="block flex flex-col-2 bg-black rounded-3xl">
                    <FaPhoneAlt style={iconStyles} />
                    <input
                      type="text"
                      placeholder="Numero de Celular"
                      className="form-control"
                      name="cliente_celular"
                      value={data.cliente_celular}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              <br></br>
              <div className="p-4 border-4 rounded-3xl bg-[#94BB15] gap-4">
                <FaIdBadge style={iconStyles2} />
                <h2 className="pb-4">sus datos</h2>
                <div className="pb-4">
                  <div className="block flex flex-col-2 bg-black rounded-3xl">
                    <FaRegUserCircle style={iconStyles} />
                    <input
                      type="text"
                      placeholder="Nombres y Apellidos"
                      className="form-control"
                      name="referido_nombre"
                      value={data.referido_nombre}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="pb-4">
                  <div className="block flex flex-col-2 bg-black rounded-3xl">
                    <FaUserFriends style={iconStyles} />
                    <input
                      type="text"
                      placeholder="Parentesco con el referido"
                      className="form-control"
                      name="referido_parentesco"
                      value={data.referido_parentesco}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="pb-4">
                  <div className="block flex flex-col-2 bg-black rounded-3xl">
                    <FaRegComments style={iconStyles} />
                    <textarea
                      type="textbox"
                      placeholder="Opinión"
                      className="form-control"
                      name="name"
                      // rows={2.5}
                      cols={25}
                      value={data.opinion}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-3 mt-5 ml-4 mr-4 pb-5 items-center text-center">
            <button className="btn btn-primary transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ring-2 ring-black-500 ring-offset-4 ring-offset-slate-50 rounded-lg pl-2 pr-2">
              Registrar
            </button>
          </div>
        </form>
        {/* <footer></footer> */}
      </div>
      <div className="">
        <img src={empresa} className="App-logo1" alt="logo" />
        <img src={p2022} className="App-logo1" alt="logo" />
        <img src={p2023} className="App-logo1" alt="logo" />
      </div>
    </div>
  );
}

export default App;
