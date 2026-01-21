import React, { useEffect, useRef, useState } from "react";

const InputFile = (props) => {
  const { label, name, errorOnclick, ancho, setForm, type } = props;

  const fileRef = useRef(null);

  const [animation, setAnimation] = useState(false);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [fileName, setFileName] = useState(null);

  const styleError = "border-red-500 animate-shake";
  const styleNormal = "border-gray-300";

  useEffect(() => {
    if (errorOnclick) {
      setAnimation(true);
      setError(true);
    } else {
      setAnimation(false);
      setError(false);
    }
  }, [errorOnclick]);

  const handleChange = async (e) => {
    try {
      const file = e.target.files[0];

      if (!file) {
        setAnimation(true);
        setError(true);
        setErrorMessage("Este campo es obligatorio");
        return;
      }

      setIsLoading(true);

      const validFiles = type
        ? type
        : ["image/jpeg", "image/png", "image/jpg"];

      if (!validFiles.includes(file.type)) {
        setAnimation(true);
        setError(true);
        setErrorMessage("No se permiten otros tipos de archivos");
        setIsLoading(false);
        return;
      }

      // Simulación de procesamiento
      setTimeout(() => {
        setForm((prev) => ({ ...prev, [name]: file }));
        setFileName(file.name);
        setAnimation(false);
        setError(false);
        setErrorMessage("");
        setIsLoading(false);
      }, 1000);
    } catch (err) {
      setIsLoading(false);
      setError(true);
      setErrorMessage("Error al cargar el archivo");
    }
  };

  const handleBlur = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };

  return (
    <div className="flex flex-col mx-3 h-28">
      <label
        className={`mb-2 text-base font-medium ${error ? "text-red-500" : "text-gray-700"
          }`}
      >
        {label}
      </label>

      {/* INPUT REAL (OCULTO) */}
      <input
        ref={fileRef}
        type="file"
        name={name}
        id={name}
        onBlur={handleBlur}
        onChange={handleChange}
        accept={type ? type : ["image/jpeg", "image/png", "image/jpg"]}
        className="hidden"
        disabled={isLoading}
      />

      {/* BOTÓN VISUAL */}
      <button
        type="button"
        onClick={() => fileRef.current?.click()}
        disabled={isLoading}
        className={`
          flex items-center justify-center gap-3
          px-6 py-3 rounded-lg cursor-pointer
          bg-blue-500 text-white text-xs font-bold uppercase
          shadow-md transition-all duration-300
          hover:bg-blue-600 hover:shadow-xl
          disabled:opacity-60 disabled:cursor-not-allowed
          ${animation ? "ring-2 ring-red-400" : ""}
          ${ancho || ""}
        `}
      >
        <svg
          aria-hidden="true"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
          fill="none"
          className="w-5 h-5"
        >
          <path
            strokeLinejoin="round"
            strokeLinecap="round"
            d="M13.5 3H8C6.34 3 5 4.34 5 6V18C5 19.66 6.34 21 8 21H11M13.5 3L19 8.625M13.5 3V7.625C13.5 8.18 13.95 8.625 14.5 8.625H19"
          />
          <path
            strokeLinejoin="round"
            strokeLinecap="round"
            d="M17 15V21M14 18H20"
          />
        </svg>

        {isLoading
          ? "Cargando archivo..."
          : fileName
            ? "Reemplazar archivo"
            : "Agregar archivo"}

      </button>

      {/* MENSAJES */}
      {error && (
        <span className="mt-1 text-xs text-red-500">
          {errorMessage || "Este campo es obligatorio"}
        </span>
      )}
      {fileName && !error && (
        <span className="mt-1 text-xs text-green-600 break-all">
          Archivo cargado: <strong>{fileName}</strong>
        </span>
      )}
    </div>
  );
};

export default InputFile;
