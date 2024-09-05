import { useForm } from "react-hook-form";
import Errors from "./Errors";
import type { DrafTarea } from "../types/type";
import { useTareaStore } from "../store";

export default function FormTarea() {
    //el type de DraftTarea se utiliza para pasar los tipos generando un generic en el useForm
    const {register, handleSubmit, formState: {errors}} = useForm<DrafTarea>()
    const {addTarea} = useTareaStore()
    
    const Onchange = (data: DrafTarea)=>{
        addTarea(data)
    }


    return (
      <div className="md:w-1/2 lg:w-2/5 mx-5">
          <h2 className="font-black text-3xl text-center">Seguimiento De Tarea</h2>
  
          <p className="text-lg mt-5 text-center mb-10">
              Añade Una tarea y {''}
              <span className="text-cyan-600 font-bold">Administralas</span>
          </p>
  
          <form 
              className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
              noValidate
              onSubmit={handleSubmit(Onchange)}
          >
                <div className="mb-5">
                        <label htmlFor="name" className="text-sm uppercase font-bold">
                            Nombre de la Tarea 
                        </label>
                        <input  
                            id="name"
                            className="w-full p-3  border border-gray-200 rounded-lg shadow-sm"  
                            type="text" 
                            placeholder="Nombre de la tarea"
                            {...register('name', {
                                required: 'Este campo es obligatorio tarea'
                            })}
                        />
                        {errors.name &&(
                            <Errors> {errors.name?.message?.toString()}</Errors>
                        )}
                   
                </div>
  
                <div className="mb-5">
                    <label htmlFor="categoria" className="text-sm uppercase font-bold">
                        categoria 
                    </label>
                    <input  
                        id="categoria"
                        className="w-full p-3  border border-gray-200 rounded-lg shadow-sm"  
                        type="text" 
                        placeholder="Nombre de la categoria" 
                        {...register('categoria', {
                            required: 'Este campo es obligatorio categoria'
                        })}
                    />
                    {errors.categoria &&(
                        <Errors> {errors.categoria?.message?.toString()}</Errors>
                    )}
               
                    </div>
  
              <div className="mb-5">
                    <label htmlFor="date" className="text-sm uppercase font-bold">
                        Fecha De Terminar
                    </label>
                    <input  
                        id="date"
                        className="w-full p-3  border border-gray-200 rounded-lg shadow-sm"  
                        type="date" 
                        {...register('date', {
                            required: 'Este campo es obligatorio fecha'
                        })}
                    />
                    {errors.date &&(
                        <Errors> {errors.date?.message?.toString()}</Errors>
                    )}
              </div>
              
              <div className="mb-5">
                    <label htmlFor="tarea" className="text-sm uppercase font-bold">
                        Descripción 
                    </label>
                    <textarea  
                        id="tarea"
                        className="w-full p-3  border border-gray-200 rounded-lg shadow-sm"  
                        placeholder="Tarea" 
                        {...register('tarea', {
                            required: 'Este campo es obligatorio'
                        })}
                    />
                    {errors.tarea &&(
                            <Errors> {errors.tarea?.message?.toString()}</Errors>
                        )}
              </div>
  
              <input
                  type="submit"
                  className="bg-cyan-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors rounded-lg"
                  value='Guardar Tarea'
              />
          </form> 
      </div>
    )
  }