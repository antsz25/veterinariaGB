
const LandingPage = () =>{
    return (
        <>
            <div className = "flex flex-row justify-center h-screen items-start bg-alabaster">
                <div className = "min-w-[50%] h-[100%] ">
                    <div className = "flex flex-col justify-center items-center h-[100%] w-[50%] m-auto">
                        <img src = "./../../../src/assets/GB_logo.png" className="w-50 h-50 m-1" />
                        <h2 className = "text-3xl font-bold text-center p-5">Bienvenido a</h2>
                        <h1 className = "text-4xl font-bold text-center">Cl&iacute;nica Veterinaria GB</h1>
                        <form className="p-5 w-full">
                            <input
                                type="text"
                                className="mt-4 w-[100%] p-3 border-2 border-gray-300 rounded-md"
                                placeholder="&#9993;Correo Electr&oacute;nico"
                            /> 
                            <input
                                type="text"
                                className="mt-4 w-[100%] p-3 border-2 border-gray-300 rounded-md"
                                placeholder="&#x1f511;Contrase&ntilde;a"
                            /> 
                            <button className = "mt-4 bg-jacksons-purple text-white font-bold py-2 px-4 rounded-md w-[100%]">Iniciar Sesi&oacute;n</button>
                        </form>
                    </div>
                </div>
                <div className = "min-w-[50%] h-[100%]">
                    <img src = "./../../../src/assets/landing_image.png" className="max-h-[100%]" loading="eager" />
                </div>
            </div>
        </>
    )
};
export default LandingPage;