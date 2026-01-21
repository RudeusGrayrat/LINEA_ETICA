import { InputSwitch } from "primereact/inputswitch";
import { useState } from "react";
import Input from "../../../Ui/Others/Input";

const InformacionDeDenunciante = ({ form, setForm, checked, setChecked }) => {
    const changeChecked = (value) => {
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
                    name="relacionCompania"
                    type="select"
                    options={["TRABAJADOR", "CLIENTE", "PROVEEDOR", "ENTIDAD GUBERNAMENTAL", "EXTRABAJADOR", "OTRO"]}
                    value={form.relacionCompania}
                    setForm={setForm}
                />
                <Input
                    label="Cargo"
                    name="cargo"
                    type="select"
                    options={["ASISTENTE", "COORDINADOR/A", "JEFATURA", "SUPERVISOR", "OTRO"]}
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
                    placeholder={!checked ? "Se usará para notificar el estado de su denuncia" : "Ingrese su correo electrónico"}
                    name="correo"
                    type="email"
                    value={form.correo}
                    setForm={setForm}
                    disabled={checked}
                />
            </div>
        </div>
    )
}
export default InformacionDeDenunciante;