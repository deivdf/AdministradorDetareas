import { useTareaStore } from "../store"

export default function TareaList() {
  const tareas = useTareaStore(state => state.tareas)
  return (
    <div>TareaList
      {tareas.map((tarea)=> 
      <div key={tarea.id}>
        {tarea.name}
      </div>
      )}
    </div>
  )
}
