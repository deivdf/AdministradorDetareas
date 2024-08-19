import FormTarea from "./components/FormTarea"
import TareaList from "./components/TareaList"

function App() {


  return (
    <>
      <div className="container mx-auto mt-20">
        <h1 className='uppercase font-black text-center text-5xl p-10 mb-10 md:w-2/3 md:mx-auto'
        >Administrador {''}
            <span className="text-cyan-600"> de Tareas</span>
        </h1>
        <div className="mt-10 flex  flex-col md:flex-row">
        <FormTarea/>
        <TareaList />
        </div>
      </div>
    </>
  )
}

export default App
