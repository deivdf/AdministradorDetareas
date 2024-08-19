import { create } from "zustand";
import { Tarea } from "./types/type";

type TareaStore = {
    tareas: Tarea[]
}

export const useTareaStore = create<TareaStore>((()=>({
    tareas: []
})))