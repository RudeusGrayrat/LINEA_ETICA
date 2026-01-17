
import './App.css'
import NavBar from './Components/NavBar/NavBar'
import Denunciar from './Components/Body/Denunciar/Denunciar'
import Consultar from './Components/Body/Consulta/Consultar'

function App() {

  return (
    <div className='bg-white h-screen flex items-center justify-center relative'>
      <div className="w-full h-full flex flex-col">
        <div className='h-[8%]'>
          <NavBar />
        </div>

        <div className=' h-[92%] bg-white flex flex-col justify-center text-center'>
          <span className='text-black text-4xl font-semibold p-4 mb-16'>
            ¿Qué desea hacer?
          </span>
          <div className=' flex items-center justify-center gap-20 '>
            <Denunciar />
            <Consultar />
          </div>
        </div>
      </div>
    </div >
  )
}

export default App
