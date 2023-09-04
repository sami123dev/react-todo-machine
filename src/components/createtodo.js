import React from "react";

export function CreateTodoButton(props) {
    const [open, setOpen] = React.useState(false)
    const openForm = () => setOpen(true)
    const closeForm = () => setOpen(false)
    const [newTodo, setNewTodo] = React.useState("")

    if (open)  {
        return (
        <div className="flex justify-center items-center">
            <form className="shadow-md shadow-black">
                <input 
                placeholder="Agregar Nueva Tarea" 
                className="font-mono" 
                onChange={(value) => setNewTodo(value.target.value)}/>
                <button type="submit" className="border-2 border-black bg-slate-400" 
                 onClick={() => {
                    props.onCreate(newTodo)
                 }}>Agregar</button>
            </form>                
        </div> )
        }
    else  {
        return (
        <div className="grid place-content-center">
            <button onClick={openForm} 
                className="bg-lime-500 hover:bg-lime-600 font-mono rounded-xs shadow-md shadow-black px-8">+
            </button>
        </div> )
        }
    }