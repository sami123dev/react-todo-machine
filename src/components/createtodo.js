import React from "react";
import { BsPlusCircle as NewCircle } from "react-icons/bs"
export function CreateTodoButton(props) {
    const [open, setOpen] = React.useState(false)
    const openForm = () => setOpen(true)
    const closeForm = () => setOpen(false)
    const [newTodo, setNewTodo] = React.useState("")

    if (open)  {
        return (
            <div className="bg-transparent">
                <form className="flex mb-1">
                    <input 
                        className="ml-auto round-sm ring-2 p-1"
                        placeholder="Agregar Nueva Tarea" 
                        onChange={
                            (value) => setNewTodo(value.target.value)
                        }
                    />
                    <button
                        className="mr-auto bg-cyan-700"
                        type="submit" 
                        onClick={() => {
                            props.onCreate(newTodo)
                        }}
                    >
                        Agregar
                    </button>
                </form>                
            </div>
        )
    }
    else  {
        return (
            <div className="text-3xl ml-auto mr-auto">
                <button className="text-blue-500" onClick={openForm}><NewCircle/></button>
            </div>
        )
    }
}