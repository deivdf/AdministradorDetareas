import { Tarea } from "../types/type"
import TareaDetailItem from "./TareaDetailItem"

type TareaDetailsProp = {
  tarea: Tarea
}

export default function TareaDetails({tarea}: TareaDetailsProp) {
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
          <div className="p-6 flex justify-around">
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Deleted</button>
          <button className="bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded">Edit</button>
        </div>
    </div>
  )
}
