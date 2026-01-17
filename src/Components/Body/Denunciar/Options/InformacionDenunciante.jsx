import { InputSwitch } from "primereact/inputswitch";
import { useState } from "react";
import Input from "../../../Ui/Others/Input";

const InformacionDeDenunciante = ({ form, setForm, checked, setChecked }) => {
    const changeChecked = (value) => {
        console.log("Anonimo:", value);
        setChecked(value);
        setForm(prevForm => ({
            ...prevForm,
            anonimo: value
        }));
    }
    return (
        <div className="w-full h-full overflow-y-auto text-start gap-2 flex flex-col p-10 max-md:p-4 ">
            <div className="flex items-center justify-end  mr-10">
                <label className="mr-2" htmlFor="inputSwitch">Denuncia Anónima</label>
                <InputSwitch id="inputSwitch" checked={checked} onChange={(e) => changeChecked(e.value)} />
            </div>
            <div className=" text-start mt-4 gap-2 flex flex-col">
                <Input
                    label="Relación con la Compañía"
                    name="relacionConLaCompañia"
                    type="select"
                    options={[
                        { label: "Empleado", value: "Empleado" },
                        { label: "Ex Empleado", value: "Ex Empleado" },
                        { label: "Proveedor", value: "Proveedor" },]}
                    value={form.relacionConLaCompañia}
                    setForm={setForm}
                />
                <Input
                    label="Cargo"
                    name="cargo"
                    type="select"
                    options={[
                        { label: "Gerente", value: "Gerente" },
                        { label: "Supervisor", value: "Supervisor" },
                        { label: "Asistente", value: "Asistente" },
                        { label: "Otro", value: "Otro" },]}
                    value={form.cargo}
                    setForm={setForm}
                    disabled={checked}
                />
                <Input
                    label="Nombres"
                    name="nombres"
                    type="text"
                    value={form.nombres}
                    setForm={setForm}
                    disabled={checked}
                />
                <Input
                    label="Apellidos"
                    name="apellidos"
                    type="text"
                    value={form.apellidos}
                    setForm={setForm}
                    disabled={checked}
                />
                <Input
                    label="Teléfono"
                    name="telefono"
                    type="number"
                    value={form.telefono}
                    setForm={setForm}
                    disabled={checked}
                />
                <Input
                    label="Correo Electrónico"
                    name="correo"
                    type="email"
                    value={form.correo}
                    setForm={setForm}
                />
            </div>
        </div>
    )
}
export default InformacionDeDenunciante;