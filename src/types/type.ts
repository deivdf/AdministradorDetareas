export type Tarea = {
    id: string
    name: string
    categoria: string
    date: Date
    tarea: string
}
//omite id de tarea y lo que queda es drafTarea la misma de arriba sin id
export type DrafTarea = Omit<Tarea, 'id'>