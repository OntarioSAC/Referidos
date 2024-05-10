import { useState, useEffect } from "react";
const Forms = () => {
    // const [data, setData] = useState({
    //     cliente_nombres: "",
    //     cliente_celular: "",
    //     cliente_dni: "",
    //     cliente_correo: "",
    //     referido_nombres: "",
    //     referido_celular: "",
    //     referido_dni: "",
    //     referido_correo: "",
    //     date: new Date().toString(),
    //     aceptarTerminos: false,
    // });

    // const [error, setError] = useState("");
    // const [showForm, setShowForm] = useState(false);


    return (
        <>
            <style>
                {`
                    @import url('https://fonts.googleapis.com/css?family=Montserrat:400,800');

                    .contenedorForm {
                        background: #f6f5f7;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        flex-direction: column;
                        font-family: 'Montserrat', sans-serif;
                        height: 100vh;
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
                        padding-bottom:30px;
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
                        top: 0;
                        height: 100%;
                        transition: all 0.6s ease-in-out;
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

            <div className="container" id="container">
                <div className="form-container sign-in-container">
                    <form action="#">
                        <h1 className="titleForm">INGRESA TUS DATOS</h1>
                        <input type="text" placeholder="Nombres y Apellidos" />
                        <input type="text" placeholder="N° DNI" />
                        <input type="text" placeholder="Correo electrónico" />
                        <input type="text" placeholder="N° de celular" />

                    </form>
                </div>
                <div className="overlay-container">
                    <form className="overlay">
                        <h1 className="titleFormRef">INGRESA LOS DATOS DE TU <h1 style={{ color: "#223346" }}>REFERIDO</h1></h1>
                        <input type="text" placeholder="Nombres y Apellidos" />
                        <input type="text" placeholder="N° DNI" />
                        <input type="text" placeholder="Correo electrónico" />
                        <input type="text" placeholder="N° de celular" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default Forms;