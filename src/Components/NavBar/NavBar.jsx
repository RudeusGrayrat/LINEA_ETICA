const NavBar = () => {
    return (
        <div className="bg-[#243770] h-full w-full flex items-center">
            <div className="ml-10 h-[70%]">
                <img src="/LOGO.svg" alt="LOGO" className="h-full!" />
            </div>
            <div className="w-1 mx-10 h-[60%] bg-white rounded-2xl">
            </div>
            <div>
                <span>
                    <h1 className="text-white max-md:text-2xl text-4xl font-semibold">Línea Ética</h1>
                </span>
            </div>
        </div>
    )
}

export default NavBar