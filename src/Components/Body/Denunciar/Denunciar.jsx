import { useState } from "react";
import FormDenuncia from "./FormDenuncia";

const Denunciar = () => {
    const [formDenuncia, setFormDenuncia] = useState(false);

    return (
        <>
            <div
                className="border-2 rounded-4xl shadow-2xl p-4 w-[24%] h-[31vh] flex flex-col items-center justify-center cursor-pointer hover:scale-105 transition-all duration-300"
                style={{ borderColor: "rgba(250, 240, 55, 0.28)", boxShadow: "0 5px 8px 6px rgba(103, 98, 0, 0.25)" }}
                onClick={() => setFormDenuncia(true)}
            >
                <img src="/SUBIR.svg" alt="SUBIR" className="h-[70%]" />
                <span className="mt-5 text-3xl font-medium text-black">
                    Subir denuncia
                </span>
            </div>

            {formDenuncia && (
                <FormDenuncia setFormDenuncia={setFormDenuncia} />
            )}
        </>
    );
};

export default Denunciar;