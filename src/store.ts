import { create } from "zustand";
import { Tarea, DrafTarea } from "./types/type";
import { v4 as uuidv4 } from "uuid";
type TareaStore = {
    tareas: Tarea[]
    addTarea: (tarea: DrafTarea) => void
}
const createTarea = (tarea: DrafTarea): Tarea => {
    return {...tarea, id: uuidv4()}
}

export const useTareaStore = create<TareaStore>(((set)=>({
    tareas: [],
    addTarea: (data) => {
        const newTarea = createTarea(data)
        set((state) => ({
            tareas: [...state.tareas, newTarea]
        }))
    }
})))