export type Tarea = {
    id: string
    name: string
    categoria: string
    date: Date
    tarea: string
}

export type DrafTarea = Omit<Tarea, 'id'>