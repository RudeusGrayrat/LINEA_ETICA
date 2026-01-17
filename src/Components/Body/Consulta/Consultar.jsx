const Consultar = () => {
    const consultar = async () => {
        // Lógica para manejar la acción de consultar
        console.log("Consultar clicked");
    }

    return (
        <div
            className="border-2 rounded-4xl shadow-2xl p-4 w-[24%] h-[31vh] flex flex-col items-center justify-center cursor-pointer hover:scale-105 transition-all duration-300"
            style={{ borderColor: "rgba(8, 86, 58, 0.45)", boxShadow: "0 5px 8px 6px rgba(8, 86, 58, 0.25)" }}
            onClick={consultar}
        >
            <img src="/SEARCH.svg" alt="SEARCH" className="h-[70%]" />
            <span className="mt-5 text-3xl font-medium text-black">Consultar denuncia</span>
        </div>
    )
}
export default Consultar