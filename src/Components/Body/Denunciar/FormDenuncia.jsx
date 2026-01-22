import { useState } from "react";
import InteractiveDemo from "../../Ui/PrimeReact/Steps";
import InformacionDeDenunciante from "./Options/InformacionDenunciante";
import InformacionDenuncia from "./Options/InformacionDenuncia";
import ConfirmarFormDenuncia from "./Options/Confirmar";
import PopUp from "../../Ui/Messages/PopUp";
import axios from "../../../api/axios";

const FormDenuncia = ({ setFormDenunciaShow }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [checked, setChecked] = useState(true);
    const [popupContent, setPopupContent] = useState({
        message: "",
        type: ""
    });
    const [deshabilitar, setDeshabilitar] = useState(false);

    const [formDenuncia, setFormDenuncia] = useState({
        anonimo: true,
        relacionCompania: "",
        cargo: "",
        nombres: "",
        apellidos: "",
        telefono: "",
        correo: "",
        categoriaDenuncia: "",
        pais: "PERU",
        sede: "",
        area: "",
        involucrados: "",
        lugarHechos: "",
        fechaHechos: "",
        descripcionHechos: "",
        archivo: ""
    });
    const isFormValid = () => {
        // 1. Campos que SIEMPRE son obligatorios
        const alwaysRequired = [
            'relacionCompania', 'categoriaDenuncia', 'pais', 'sede',
            'area', 'lugarHechos', 'fechaHechos', 'descripcionHechos'
        ];

        // 2. Campos de identidad (Solo obligatorios si NO es anónimo)
        const identityRequired = ['cargo', 'nombres', 'apellidos', 'telefono', 'correo'];

        // Validar campos generales
        const isGeneralValid = alwaysRequired.every(field =>
            formDenuncia[field] && formDenuncia[field].toString().trim() !== ""
        );

        // Validar campos de identidad condicionalmente
        const isIdentityValid = formDenuncia.anonimo
            ? true  // Si es anónimo, esta parte pasa automáticamente
            : identityRequired.every(field =>
                formDenuncia[field] && formDenuncia[field].toString().trim() !== ""
            );

        return isGeneralValid && isIdentityValid;
    };
    const stepsComponents = {
        0: <InformacionDeDenunciante form={formDenuncia} setForm={setFormDenuncia} checked={checked} setChecked={setChecked} />,
        1: <InformacionDenuncia form={formDenuncia} setForm={setFormDenuncia} />,
        2: <ConfirmarFormDenuncia form={formDenuncia} setForm={setFormDenuncia} />

    };
    const items = [
        { label: 'Denunciante' },
        { label: 'Denuncia' },
        { label: "Confirmar" }
    ];

    const enviarDenuncia = async () => {
        setPopupContent({
            message: "Enviando denuncia...",
            type: "Info"
        });
        setDeshabilitar(true);
        try {

            //debe de poder hacer que segaurde en la bd y envie un correo a la persona que hizo la denuncia, así como a la autoridad que le corresponde
            let response = null;
            if (formDenuncia.archivo) {
                const formData = new FormData();
                Object.entries(formDenuncia).forEach(([key, value]) => {
                    if (value !== null && value !== undefined) {
                        formData.append(key, value);
                    }
                });
                response = await axios.post("/postDenuncia", formData, {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                });
            } else {

                response = await axios.post("/postDenuncia", formDenuncia);
            }
            setPopupContent({
                message: response.data.message || "La denuncia enviada correctamente.",
                type: response.data.type || "Correcto"
            });
        } catch (error) {
            setPopupContent({
                message: error.response?.data?.message || "Error al enviar la denuncia.",
                type: "Error"
            });
        } finally {
            setDeshabilitar(false);
        }
    }

    return (
        <div className="fixed flex top-0 left-0 flex-col items-center justify-center z-40 w-full h-full "
            style={{ backgroundColor: "rgb(100,100,100, 0.4)" }}
        >
            <PopUp message={popupContent.message} setShowForm={setFormDenunciaShow} type={popupContent.type} deshabilitar={deshabilitar} />

            <div className="bg-white w-150 max-md:w-[90%] h-[80vh] max-md:h-[90vh] rounded-4xl
             shadow-2xl flex flex-col items-center justify-between"
                style={{ boxShadow: "0 5px 8px 6px rgba(100,100,100, 0.4)" }}
            >
                <div className="w-full  h-[87%] max-md:h-[85%]  py-4 max-md:py-1 mt-3">
                    <div className="w-full h-[10%] max-md:h-[12%] ">
                        <InteractiveDemo activeIndex={activeIndex}
                            setActiveIndex={setActiveIndex} items={items} />
                    </div>
                    <div className="w-full h-0.5 mt-4 bg-gray-300" />
                    <div className="w-full h-[89%] max-md:h-[85%]">
                        {stepsComponents[activeIndex]}
                    </div>
                </div>
                <div className="h-[13%]  flex justify-center items-center border-t border-gray-300 w-full">
                    <button
                        className="border-red-500 max-md:min-w-20! border min-w-50 text-black px-5 py-2 rounded-xl cursor-pointer"
                        onClick={() => {
                            if (activeIndex === 0) {
                                setFormDenunciaShow(false);
                            } else {
                                setActiveIndex(activeIndex - 1);
                            }
                        }}
                    >
                        {activeIndex === 0 ? "Cancelar" : "Anterior"}
                    </button>
                    <button
                        className={`${(isFormValid() || activeIndex < 2) ? "border-[#12BF80] border cursor-pointer" : "bg-gray-300 cursor-not-allowed"
                            } max-md:min-w-20! min-w-50 text-black px-5 py-2 rounded-xl ml-4`}
                        disabled={!isFormValid() && activeIndex === 2 ? true : false} // Bloquea el botón
                        onClick={() => {
                            if (activeIndex === Object.keys(stepsComponents).length - 1) {
                                enviarDenuncia()
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