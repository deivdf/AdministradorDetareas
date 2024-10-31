import {toast} from 'react-toastify'
import {Tarea } from "../types/type"
import TareaDetailItem from "./TareaDetailItem"
import { useTareaStore } from "../store"

type TareaDetailsProp = {
  tarea: Tarea
}



export default function TareaDetails({tarea}: TareaDetailsProp) {
  const deleteTarea = useTareaStore((state) => state.deleteTarea)
  const editTarea = useTareaStore((state)=> state.getTareabyId )
  //funcion para eliminar la tarea y mostrar mensaje de eliminado con toastify
  const clickHandle = () => {
    deleteTarea(tarea.id)
    toast.error('Tarea Eliminada')
  }
  return (
    <div className="bg-white rounded-lg m-5">
        <div >
            <p className="flex px-5 py-2 font-bold text-2xl bg-cyan-500 rounded-t-lg text-white">{tarea.name}</p>
            <TareaDetailItem
              label="Categoria" data={tarea.categoria}
            />
            <TareaDetailItem label='Fecha' data={tarea.date.toString()}/>
            <TareaDetailItem
              label="Tarea" data={tarea.tarea}
            />
          </div>
          <div className="p-6 flex flex-col md:flex-row gap-3 justify-around">
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            onClick={clickHandle}
          >Deleted</button>
          <button className="bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded"
            onClick={()=> editTarea(tarea.id)}
          >Edit</button>
        </div>
    </div>
  )
}
