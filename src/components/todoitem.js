import React from "react";
import {BsFillCheckCircleFill as Check, BsFillTrashFill as DeleteIcon, BsFillPencilFill as EditIcon } from "react-icons/bs";

export function TodoItem(props){
  const [newInput, setNewInput] = React.useState(props.text)
  const [editing, setEditing] = React.useState(false)

function onEditing(text, newInput) {
  if (props.completed) {
  props.onComplete(false)
  }
  if (editing) {
    props.onEdit(text, newInput)
    setEditing(false)
  }
  if (!editing)
  setEditing(true)
  console.log(editing)
}

return (
  <div className="flex justify-center items-center h-10">
    <div className="md:w-10/12">
      <li className={`grid grid-cols-9 ${props.completed ? 'bg-lime-500 hover:bg-lime-600' : 'bg-slate-200 hover:bg-slate-300'} rounded-lg shadow-lg shadow-neutral-600 my-1 md:my-2 ${editing ? "border-2 border-lime-500 bg-slate-50" : ""}`}>
        <button 
        onClick={(props.onComplete)} 
        className={`col-start-c1 rounded-full row-start-1 ${props.completed ? '' : ''}`}>
        {props.completed ? <Check className="text-xl ml-1" /> : <Check className="text-slate-400 hover:text-slate-600 text-xl ml-1 overflow-visible"/>}</button>
        <input 
        className={`truncate row-start-1 col-span-7 font-mono ${props.completed ? 'line-through' : ''} mt-1 md:mt-0 md:col-start-2 md:col-span-7`} 
        disabled={!editing}
        onChange={(e) => (setNewInput(e.target.value))}
        Value={props.text}/>
        <button onClick={() => onEditing(props.text, newInput)} className="col-start-9 row-start-1 justify-self-center mr-1 hover:text-slate-500"><EditIcon/></button>
        <button onClick={(props.onDelete)} className="col-start-9 row-start-1 hidden md:block justify-self-end mr-1 hover:text-slate-500"><DeleteIcon/></button>
      </li>
    </div>
  </div>
  );
}