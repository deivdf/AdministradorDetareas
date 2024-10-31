import { create } from "zustand";
import { createJSONStorage, devtools, persist } from 'zustand/middleware'
import { Tarea, DrafTarea } from "./types/type";
import { v4 as uuidv4 } from "uuid";
type TareaStore = {
    tareas: Tarea[]
    activeId: Tarea['id']
    addTarea: (tarea: DrafTarea) => void
    deleteTarea: (id: Tarea['id'])=> void
    getTareabyId: (id: Tarea['id'])=> void
    updateTarea: (id: DrafTarea) => void
}
const createTarea = (tarea: DrafTarea): Tarea => {
    return {...tarea, id: uuidv4()}
}

export const useTareaStore = create<TareaStore>()(
    devtools(
       persist((set)=>({
                tareas: [],
                activeId: '',
                addTarea: (data) => {
                    const newTarea = createTarea(data)
                    set((state) => ({
                        tareas: [...state.tareas, newTarea]
                    }))
                },
                deleteTarea: (id)=>{
                    set((state) => ({
                        tareas: state.tareas.filter( tarea => tarea.id !== id)
                    }))
                },
                getTareabyId: (id)=>{
                    //no requere state por que no se quiere guardar un valor previo
                    set(()=> ({
                        activeId: id
                    }))
                },
                updateTarea: (data) => {
                    set((state) => ({
                        // recoremos el estado de tarea 
                        //con el map accedemos a las proiedades de tareas desde tarea 
                        //conparamos si id es igual al state id  entonces se manda state active 
                        //id y se guara duna copia de los datos guardados '...data'
                        //para no perder la informacion que teniamos retornamos las distintas de tarea
                        tareas: state.tareas.map(tarea => tarea.id === state.activeId
                             ? {id: state.activeId, ... data}: tarea),
                             activeId: ''
                    }))
                }
            }
        ),{
        //irbe para guardar en el local storage
        name: 'tareas-torage',
        //tambien podemo utlizar el local storage normal
        //storage: createJSONStorage(() => sessionStorage)
    }
)))

