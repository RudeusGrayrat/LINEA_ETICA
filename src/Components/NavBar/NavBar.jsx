const NavBar = () => {
    return (
        <div className="bg-white border-b max-sm:justify-center border-gray-200 h-full w-full flex items-center">
            <div className="ml-10 max-sm:ml-0 h-[70%]">
                <img src="/LOGO.svg" alt="LOGO" className="h-full!" />
            </div>
            <div className="w-1 mx-10 h-[60%] bg-gray-500 rounded-2xl">
            </div>
            <div>
                <span>
                    <h1 className="text-gray-500 max-md:text-2xl text-4xl font-semibold">Línea Ética</h1>
                </span>
            </div>
        </div>
    )
}

export default NavBar