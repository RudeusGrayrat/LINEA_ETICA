import Input from "../../../Ui/Others/Input";
import InputFile from "../../../Ui/Others/InputFile";
const InformacionDenuncia = ({ form, setForm }) => {
    return (
        <div className="w-full h-full overflow-y-auto overflow-x-hidden text-start gap-3 flex flex-col p-10 max-md:p-4">
            <Input
                label="Categoría de denuncia"
                name="categoriaDenuncia"
                type="select"
                editable={false}
                options={["SOBORNO", "CONFLICTO DE INTERÉS", "HOSTIGAMIENTO LABORAL", "HOSTIGAMIENTO SEXUAL", "DISCRIMINACIÓN", "OTRO"]}
                value={form.categoriaDenuncia}
                setForm={setForm}
            />
            <Input
                label="Pais"
                name="pais"
                type="select"
                editable={false}
                options={["PERU", "CHILE", "COLOMBIA", "MEXICO", "ARGENTINA",]}
                value={form.pais}
                setForm={setForm}
            />
            <Input
                label="Sede"
                name="sede"
                type="select"
                editable={false}
                options={["SAN ISIDRO", "LURIN", "LA VICTORIA", "CHINCHA", "OTRO",]}
                value={form.sede}
                setForm={setForm}
            />
            <Input
                label="Área"
                name="area"
                type="select"
                editable={false}
                options={["RECURSOS HUMANOS", "FINANZAS", "RECEPCIÓN", "LOGÍSTICA", "SISTEMAS", "CONTABILIDAD", "OTRO"]}
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
                name="lugarHechos"
                placeholder="¿Dónde ocurrieron los hechos?"
                type="text"
                value={form.lugarHechos}
                setForm={setForm}
            />
            <Input
                label="Fecha de los hechos"
                name="fechaHechos"
                type="date"
                value={form.fechaHechos}
                setForm={setForm}
            />
            <div className=" flex flex-col mx-3 w-[95%] ">
                <label className={`text-base font-medium  "text-gray-700" `}>
                    Descripción de los hechos
                </label>
                <textarea
                    label="descripcionHechos"
                    className="mt-1 py-2 border border-gray-300 px-3 w-[100%] !text-base rounded-md shadow-sm sm:text-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    name="descripcionHechos"
                    placeholder="¿Que sucedió?"
                    value={form.descripcionHechos}
                    onChange={(e) => setForm({ ...form, descripcionHechos: e.target.value })}
                />
            </div>
            <InputFile
                type={['image/jpeg', 'image/png', 'application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'video/mp4']}
                label="Adjuntar archivo"
                name="archivo"
                setForm={setForm}
            />
        </div>
    )
}

export default InformacionDenuncia;