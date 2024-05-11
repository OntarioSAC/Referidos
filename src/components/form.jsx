import { useState, useEffect } from "react";
const Forms = () => {
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

    return (
        <>
            <style>
                {`
                    @import url('https://fonts.googleapis.com/css?family=Montserrat:400,800');

                    .contenedorForm {
                        background: #fff;
                        justify-content: center;
                        align-items: center;
                        flex-direction: column;
                        // font-family: 'Montserrat', sans-serif;
                        height: 70vh;
                    }

                    .titleForm {
                        font-weight: bold;
                        margin: 0;
                        font-size: 17px;
                        padding-bottom:30px;
                        color: #223346
                    }

                    .titleFormRef {
                        font-weight: bold;
                        margin: 0;
                        font-size: 17px;
                        color: #FFFFFF;
                      
                    }
                  

                    button {
                        border-radius: 20px;
                        border: 1px solid #9a66cd;
                        background-color: #9a66cd;
                        color: #FFFFFF;
                        font-size: 12px;
                        font-weight: bold;
                        padding: 12px 45px;
                        letter-spacing: 1px;
                        text-transform: uppercase;
                        transition: transform 80ms ease-in;
                    }


                    button.ghost {
                        background-color: transparent;
                        border-color: #FFFFFF;
                    }

                    form {
                        background-color: #FFFFFF;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        flex-direction: column;
                        padding: 0 50px;
                        height: 100%;
                        text-align: center;
                    }

                    input {
                        background-color: rgba(238, 238, 238, 0.8); /* Color de fondo con opacidad */
                        border: none;
                        padding: 12px 15px;
                        margin: 8px 0;
                        width: 100%;
                        border-radius: 50px;
                        transition: all 0.3s; /* Agrega una transición suave */
                        backdrop-filter: blur(5px);
                        outline: none;
                    }

                    input:focus {
                        transform: scale(1.05);
                    }

                    .container {
                        background-color: #fff;
                        border-radius: 10px;
                        box-shadow: 0 14px 28px rgba(0,0,0,0.25),
                            0 10px 10px rgba(0,0,0,0.22);
                        position: relative;
                        overflow: hidden;
                        width: 768px;
                        max-width: 100%;
                        min-height: 480px;
                    }

                    .form-container {
                        position: absolute;
                       
                        height: 100%;
                    }

                    .sign-in-container {
                        left: 0;
                        width: 50%;
                        z-index: 2;
                    }

                    .overlay-container {
                        position: absolute;
                        top: 0;
                        left: 50%;
                        width: 50%;
                        height: 100%;
                        overflow: hidden;
                        z-index: 100;
                    }

                    .overlay {
                        background: linear-gradient(180deg, rgba(90,160,16,1) 11%, rgba(173,213,61,1) 65%); /* Invierte el degradado de arriba hacia abajo */
                        background-repeat: no-repeat;
                        background-size: cover;
                        background-position: 0 0;
                        position: relative;
                        height: 100%;
                        width: 100%;
                        transition: transform 0.6s ease-in-out;
                    }
                `}
            </style>

            <div className="contenedorForm">
                <div className="container" id="container">
                    <div className="form-container sign-in-container">
                        <form onSubmit={handleSubmit}>
                            <h1 className="titleForm">INGRESA TUS DATOS</h1>
                            <input
                                type="text"
                                placeholder="Nombres y Apellidos"
                                name="cliente_nombres"
                                value={data.cliente_nombres}
                                onChange={handleChange}
                            />
                            <input
                                type="text"
                                placeholder="N° DNI"
                                name="cliente_dni"
                                value={data.cliente_dni}
                                onChange={handleChange}
                            />

                            <input
                                type="text"
                                placeholder="Correo electrónico"
                                name="cliente_correo"
                                value={data.cliente_correo}
                                onChange={handleChange}
                            />
                            <input
                                type="text"
                                placeholder="N° de celular"
                                name="cliente_celular"
                                value={data.cliente_celular}
                                onChange={handleChange}
                            />

                        </form>
                    </div>
                    <div className="overlay-container">
                        <form className="overlay" onSubmit={handleSubmit}>
                            <h1 className="titleFormRef">INGRESA LOS DATOS DE TU <h1 style={{ color: "#223346", fontSize:"17px", fontWeight:"bold" }}>REFERIDO</h1></h1>
                            <input
                                type="text"
                                placeholder="Nombres y Apellidos"
                                name="referido_nombres"
                                value={data.referido_nombres}
                                onChange={handleChange}
                            />
                            <input
                                type="text"
                                placeholder="N° DNI"
                                name="referido_dni"
                                value={data.referido_dni}
                                onChange={handleChange}
                            />
                            <input
                                type="text"
                                placeholder="Correo electrónico"
                                name="referido_correo"
                                value={data.referido_correo}
                                onChange={handleChange}
                            />
                            <input
                                type="text"
                                placeholder="N° de celular"
                                name="referido_celular"
                                value={data.referido_celular}
                                onChange={handleChange}
                            />
                        </form>
                    </div>

                    <div className="container">
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
                    <div>
                        <button className="bg-gradient-to-r from-[#5aa010] to-[#add53d] btn btn-primary transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ring-2 ring-black-500 ring-offset-4 ring-offset-slate-50 rounded-lg pl-2 pr-2 text-white">
                            Registrar
                        </button>
                    </div>
                </div>

            </div>
            
        </>
    );
};

export default Forms;