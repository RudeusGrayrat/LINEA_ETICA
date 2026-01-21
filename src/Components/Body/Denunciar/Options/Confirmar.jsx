import { useEffect, useState } from "react";

const ConfirmarFormDenuncia = ({ form, setForm }) => {
    const [missingFields, setMissingFields] = useState(false);
    const optionalFields = ['archivo'];
    useEffect(() => {
        if (form.anonimo) {
            setForm(prevForm => ({
                ...prevForm,
                cargo: "ANONIMO",
                nombres: "ANONIMO",
                apellidos: "ANONIMO",
                telefono: 0,
                correo: "ANONIMO"
            }));
            const requiredFields = ['cargo', 'nombres', 'apellidos', 'telefono', "correo"];
            const missing = requiredFields.some(field => !form[field]);
            setMissingFields(missing);
        }
    }, [form.anonimo]);

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-4 w-full max-w-full p-10 overflow-y-auto h-full">
            {Object.entries(form).map(([key, value]) => (
                /* CAMBIO 1: Cambiamos flex por block o flex-col para permitir el salto de línea */
                <div key={key} className="flex flex-col text-left border-b border-gray-100 pb-2">

                    {/* Etiqueta (Key) */}
                    <span className="font-semibold text-blue-900 capitalize text-sm">
                        {key.replace(/([A-Z])/g, " $1").toLowerCase()}:
                    </span>

                    {/* Valor (Value) con soporte para textos largos */}
                    <div className="mt-1">
                        {key === 'anonimo' ? (
                            <span className="text-gray-700">{form.anonimo ? "SI" : "NO"}</span>
                        ) : form.anonimo && ['cargo', 'nombres', 'apellidos', 'telefono'].includes(key) ? (
                            <span className="text-gray-500 italic">{"ANONIMO"}</span>
                        ) : value || optionalFields.includes(key) ? (
                            <span className={`block break-words whitespace-pre-wrap text-gray-800`}>
                                {value || "No adjuntado"}
                            </span>
                        ) : (
                            <span className="text-red-500 italic">Falta</span>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ConfirmarFormDenuncia;