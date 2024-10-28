import { useTareaStore } from "../store"
import TareaDetails from "./TareaDetails"

export default function TareaList() {
  const tareas = useTareaStore(state => state.tareas)

  return (
    <div className="md:w-1/2 lg:w-3/5 md: h-screen overflow-y-scroll">
      {
        tareas.length ? (
          <div className="text-center">
            <h2 className="text-center font-bold text-4xl">HAY TAREAS</h2>
            {
              tareas.length === 1 ?(
                <p>Administra tu tarea {''} <span className="text-cyan-600 font-bold"> tienes  {tareas.length} tarea</span></p>
              ) :
              (
                <p>Administra tus tareas {''} <span className="text-cyan-600 font-bold"> tienes  {tareas.length} tareas</span></p>
              )
            }
            {
              tareas.map((tarea)=>
                <TareaDetails 
                  key={tarea.id}
                  tarea={tarea}
                />
                )
            }
          </div>
        ): 
        (
          <>
             <h2 className="text-center font-bold text-3xl">
              NO HAY TAREAS 
             </h2>
             <p className="text-center text-1xl">
              Agrega una tarea para comenzar {''}
              <span className="text-cyan-600 font-bold">Y apareceran en este lugar</span>
             </p>
          </>
        )
      }
    </div>
  )
}
