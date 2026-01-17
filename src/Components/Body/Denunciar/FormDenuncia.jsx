import { useRef, useState } from "react";
import InteractiveDemo from "../../Ui/PrimeReact/Steps";
import InformacionDeDenunciante from "./Options/InformacionDenunciante";
import InformacionDenuncia from "./Options/InformacionDenuncia";

const FormDenuncia = ({ setFormDenuncia }) => {
    const ref = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [formDenuncia, setFormDenunciaState] = useState({
        anonimo: true,
        relacionConLaCompañia: "",
        cargo: "",
        nombres: "",
        apellidos: "",
        telefono: "",
        correo: "",
        categoria: "",
        pais: "PERU",
        sede: "",
        area: "",
        involucrados: "",
        lugarDeHechos: "",
        fechaDeHechos: "",
        descripcion: "",
        archivo: ""
    });
    const stepsComponents = {
        0: <InformacionDeDenunciante form={formDenuncia} setForm={setFormDenunciaState} />,
        1: <InformacionDenuncia form={formDenuncia} setForm={setFormDenunciaState} />,
        2: <div className="p-10">
            <h2 className="text-2xl font-bold mb-4">Confirmar Información</h2>
            <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
                {JSON.stringify(formDenuncia, null, 2)}
            </pre>
        </div>

    };
    const items = [
        { label: 'Denunciante' },
        { label: 'Denuncia' },
        { label: "Confirmar" }
    ];
    return (
        <div className="fixed flex top-0 left-0 flex-col items-center justify-center z-50 w-full h-full "
            style={{ backgroundColor: "rgb(100,100,100, 0.4)" }}
        >

            <div className="bg-white w-150 h-[80vh] rounded-4xl
            border-2 shadow-2xl flex flex-col items-center justify-between"
                style={{ borderColor: "rgba(202, 34, 40, 0.6)", boxShadow: "0 5px 8px 6px rgba(202, 34, 40, 0.25)" }}
            >
                <div className="w-full  h-[87%] py-4 mt-3">
                    <div className="w-full h-[10%] ">
                        <InteractiveDemo activeIndex={activeIndex}
                            setActiveIndex={setActiveIndex} items={items} />
                    </div>
                    <div className="w-full h-0.5 mt-4 bg-gray-300" />
                    <div className="w-full h-[89%]">
                        {stepsComponents[activeIndex]}
                    </div>
                </div>
                <div className="h-[13%] flex justify-center items-center">
                    <button
                        className="bg-red-400 min-w-50 text-white px-5 py-2 rounded-xl cursor-pointer"
                        onClick={() => {
                            if (activeIndex === 0) {
                                setFormDenuncia(false);
                            } else {
                                setActiveIndex(activeIndex - 1);
                            }
                        }

                        }
                    >
                        {activeIndex === 0 ? "Cancelar" : "Anterior"}
                    </button>
                    <button
                        className="bg-[#12BF80] min-w-50 text-white px-5 py-2 rounded-xl cursor-pointer ml-4"
                        onClick={() => {
                            if (activeIndex === Object.keys(stepsComponents).length - 1) {
                                // Aquí se podría manejar el envío del formulario
                                setFormDenuncia(false);
                            } else {
                                setActiveIndex(activeIndex + 1);
                            }
                        }}
                    >
                        {activeIndex === Object.keys(stepsComponents).length - 1 ? "Enviar" : "Siguiente"}
                    </button>
                </div>
            </div>

        </div>
    )
}

export default FormDenuncia;