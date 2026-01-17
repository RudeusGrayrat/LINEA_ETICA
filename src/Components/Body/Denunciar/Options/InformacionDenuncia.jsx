import { useState } from "react";
import Input from "../../../Ui/Others/Input";
import InputFile from "../../../Ui/Others/InputFile";
const InformacionDenuncia = ({ form, setForm }) => {
    return (
        <div className="w-full h-full overflow-y-auto text-start gap-2 flex flex-col p-10">
            <Input
                label="Categoría de denuncia"
                name="categoria"
                type="select"
                options={[
                    { label: "SOBORNO", value: "SOBORNO" },
                    { label: "CONFLICTO DE INTERÉS", value: "CONFLICTO DE INTERÉS" },
                    { label: "HOSTIGAMIENTO LABORAL", value: "HOSTIGAMIENTO LABORAL" },
                    { label: "HOSTIGAMIENTO SEXUAL", value: "HOSTIGAMIENTO SEXUAL" },
                    { label: "DISCRIMINACIÓN", value: "DISCRIMINACIÓN" },
                    { label: "OTRO", value: "OTRO" },]}
                value={form.categoria}
                setForm={setForm}
            />
            <Input
                label="Pais"
                name="pais"
                type="select"
                options={[
                    { label: "PERU", value: "PERU" },
                    { label: "CHILE", value: "CHILE" },
                    { label: "COLOMBIA", value: "COLOMBIA" },
                    { label: "MEXICO", value: "MEXICO" },
                    { label: "OTRO", value: "OTRO" },]}
                value={form.pais}
                setForm={setForm}
            />
            <Input
                label="Sede"
                name="sede"
                type="select"
                options={[
                    { label: "SAN ISIDRO", value: "SAN ISIDRO" },
                    { label: "LURIN", value: "LURIN" },
                    { label: "LA VICTORIA", value: "LA VICTORIA" },
                    { label: "CHINCHA", value: "CHINCHA" },
                    { label: "OTRO", value: "OTRO" },]}
                value={form.sede}
                setForm={setForm}
            />
            <Input
                label="Área"
                name="area"
                type="select"
                options={[
                    { label: "RECURSOS HUMANOS", value: "RECURSOS HUMANOS" },
                    { label: "FINANZAS", value: "FINANZAS" },
                    { label: "RECEPCIÓN", value: "RECEPCIÓN" },
                    { label: "LOGÍSTICA", value: "LOGÍSTICA" },
                    { label: "SISTEMAS", value: "SISTEMAS" },
                    { label: "CONTABILIDAD", value: "CONTABILIDAD" },
                    { label: "OTRO", value: "OTRO" },]}
                value={form.area}
                setForm={setForm}
            />
            <Input
                label="Involucrados"
                placeholder="¿Quienes están involucrados?"
                name="involucrados"
                type="text"
                value={form.involucrados}
                setForm={setForm}
            />
            <Input
                label="Lugar de los hechos"
                name="lugarDeHechos"
                placeholder="¿Dónde ocurrieron los hechos?"
                type="text"
                value={form.lugarDeHechos}
                setForm={setForm}
            />
            <Input
                label="Fecha de los hechos"
                name="fechaDeHechos"
                type="date"
                value={form.fechaDeHechos}
                setForm={setForm}
            />
            <div className=" flex flex-col mx-3 w-[95%] ">
                <label className={`text-base font-medium  "text-gray-700" `}>
                    Descripción de los hechos
                </label>
                <textarea
                    label="descripcion"
                    className="mt-1 py-2 border px-3 w-[100%] !text-base rounded-md shadow-sm sm:text-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    name="descripcion"
                    placeholder="¿Que sucedió?"
                    onChange={(e) => setForm({ ...form, descripcion: e.target.value })}
                />
            </div>
            <InputFile
                label="Adjuntar archivo"
                name="archivo"
                setForm={setForm}
            />
        </div>
    )
}

export default InformacionDenuncia;