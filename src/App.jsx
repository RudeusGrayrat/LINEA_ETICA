
import './App.css'
import NavBar from './Components/NavBar/NavBar'
import Denunciar from './Components/Body/Denunciar/Denunciar'
import Consultar from './Components/Body/Consulta/Consultar'

function App() {

  return (
    <div className='bg-white h-screen flex items-center justify-center relative'>
      <div className="w-full h-full flex flex-col">
        <div className='h-[8%] shadow-md z-30'>
          <NavBar />
        </div>

        <div className=' h-[92%] bg-linear-to-br from-[#00ba47] to-[#005c3f]  flex flex-col justify-center text-center'>
          <span className='text-white text-4xl font-semibold p-4 mb-13'>
            ¿Listo para hacer un reporte?
          </span>
          <div className=' flex items-center border-gray-700  justify-center gap-20 max-md:gap-6 '>
            <Denunciar />
            {/* <Consultar /> */}
          </div>
        </div>
      </div>
    </div >
  )
}

export default App
