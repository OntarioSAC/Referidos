import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [data, setData] = useState({
    cliente_nombres: "",
    cliente_apellido: "",
    cliente_celular: "",
    cliente_dni: "",
    cliente_correo: "",
    referido_nombre: "",
    referido_apellido: "",
    referido_parentesco: "",
    date: new Date().toString(),
  });

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
        // history.replace("/");
        // location.reload();
        console.log("revisar el forms de google sheets");
      }
    } catch (error) {
      console.log(error);
    }
  };
  //<form style={{ maxWidth: 500, margin: "auto" }} onSubmit={handleSubmit}>
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <form onSubmit={handleSubmit}>
          <div className="p-4">
            <div className="rounded-bl-lg rounded-lg border-2 border-blue-900 p-2">
              <h1>Refiere y Gana</h1>
              <div className="grid grid-rows-3 grid-flow-col gap-2 h-[55rem] rounded-lg rounded-tl-lg border-2 border-blue-300">
                <div className="row-span-2 p-4 border-4 rounded-lg border-blue-300">
                  <h2>Datos personales</h2>
                  <label className="block p-2">
                    <span className="block text-sm font-medium text-slate-700">
                      Nombres
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      name="cliente_nombres"
                      value={data.cliente_nombres}
                      onChange={handleChange}
                    />
                    <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
                      Introduce una correo valido. Gracias
                    </p>
                  </label>
                  <label className="block p-2">
                    <span className="block text-sm font-medium text-slate-700">
                      Apellido
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      name="cliente_apellido"
                      value={data.cliente_apellido}
                      onChange={handleChange}
                    />
                    <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
                      Introduce una correo valido. Gracias
                    </p>
                  </label>
                  <label className="block p-2">
                    <span className="block text-sm font-medium text-slate-700">
                      N° DNI
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      name="cliente_dni"
                      value={data.cliente_dni}
                      onChange={handleChange}
                    />
                    <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
                      Introduce una correo valido. Gracias
                    </p>
                  </label>
                  <label className="block p-2">
                    <span className="block text-sm font-medium text-slate-700">
                      Correo Electronico
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      name="cliente_correo"
                      value={data.cliente_correo}
                      onChange={handleChange}
                    />
                    <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
                      Introduce una correo valido. Gracias
                    </p>
                  </label>
                  <label className="block p-2">
                    <span className="block text-sm font-medium text-slate-700">
                      Numero de Celular
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      name="cliente_celular"
                      value={data.cliente_celular}
                      onChange={handleChange}
                    />
                    <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
                      Introduce una correo valido. Gracias
                    </p>
                  </label>
                </div>
                {/*  */}
                <div className="col-span-3">
                  <div className="mt-5 ml-4 mr-4 text-center">
                    <button className="btn btn-primary transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ring-2 ring-green-500 ring-offset-4 ring-offset-slate-50 rounded-lg">
                      Registrar
                    </button>
                  </div>
                </div>
                {/*  */}
                <div className="row-span-1 bg-yellow-400 p-4 border-4 rounded-lg">
                  <h2>Datos de tu referido</h2>
                  <label className="block p-2">
                    <span className="block text-sm font-medium text-slate-700">
                      Nombres de referido
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      name="referido_nombre"
                      value={data.referido_nombre}
                      onChange={handleChange}
                    />
                    <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
                      Introduce una correo valido. Gracias
                    </p>
                  </label>
                  <label className="block p-2">
                    <span className="block text-sm font-medium text-slate-700">
                      Apellido de referido
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      name="referido_apellido"
                      value={data.referido_apellido}
                      onChange={handleChange}
                    />
                    <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
                      Introduce una correo valido. Gracias
                    </p>
                  </label>
                </div>
                <div className="bg-green-400 pt-2 border-4 rounded-lg">
                  <label className="block p-2">
                    <span className="block text-sm font-medium text-slate-700">
                      Parentesco con el referido
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      name="referido_parentesco"
                      value={data.referido_parentesco}
                      onChange={handleChange}
                    />
                    <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
                      Introduce una correo valido. Gracias
                    </p>
                  </label>
                  <label className="block pb-4">
                    <h2>Opinión</h2>
                    <span className="block text-sm font-medium text-slate-700">
                      2.0
                    </span>
                    <textarea
                      type="textbox"
                      className="form-control color:red"
                      name="name"
                      value={data.name}
                      onChange={handleChange}
                    />
                    <p className="mb-2 invisible peer-invalid:visible text-pink-600 text-sm">
                      Introduce una correo valido. Gracias
                    </p>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </form>
      </header>
    </div>
  );
}

export default App;
