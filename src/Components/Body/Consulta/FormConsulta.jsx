import { useState } from "react";
import Input from "../../Ui/Others/Input";

const FormConsulta = ({ setFormConsultaShow }) => {
    const [formConsulta, setFormConsulta] = useState({
        codigoDenuncia: "",
        correoElectronico: ""
    })
    return (
        <div className="fixed flex top-0 left-0 flex-col items-center justify-center z-50 w-full h-full "
            style={{ backgroundColor: "rgb(100,100,100, 0.4)" }}
        >
            <div className="bg-white w-150 max-md:w-[90%] h-[45vh] rounded-4xl max-md:h-[60%]
             shadow-2xl flex flex-col items-center justify-between"
                style={{ boxShadow: "0 5px 8px 6px rgba(36, 55, 112, 0.25)" }}
            >
                <div className="py-5 border-b border-gray-300 w-full">
                    <span className="font-medium text-xl">Consultar estado de una denuncia</span>
                </div>
                <div className="flex flex-col text-start px-10 gap-4 justify-center overflow-y-auto w-full">
                    <Input
                        label="Codigo de denuncia"
                        name="codigoDenuncia"
                        type="text"
                        value={formConsulta.codigoDenuncia}
                        setForm={setFormConsulta}
                    />
                    <Input
                        label="Correo electrónico"
                        name="correoElectronico"
                        type="email"
                        value={formConsulta.correoElectronico}
                        setForm={setFormConsulta}
                    />
                </div>
                <div className="h-[20%] flex justify-center items-center border-t border-gray-300 w-full gap-4">
                    <button
                        className="max-md:min-w-20! border-red-500 border min-w-50 text-black px-5 py-2 rounded-xl cursor-pointer  "
                        onClick={() => {
                            setFormConsultaShow(false);
                        }}
                    >Cancelar
                    </button>
                    <button
                        className="border-[#12BF80] border max-md:min-w-20! min-w-50 text-black px-5 py-2 rounded-xl cursor-pointer"
                        onClick={() => {
                            // Lógica para enviar la consulta
                            console.log("Consulta enviada:", formConsulta);
                            setFormConsultaShow(false);
                        }}
                    >Consultar
                    </button>
                </div>
            </div>
        </div >
    )
}

export default FormConsulta;