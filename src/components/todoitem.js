import React from "react";
import { BsFillCheckCircleFill as Check, BsFillTrashFill as DeleteIcon, BsFillPencilFill as EditIcon, BsSaveFill as SaveIcon } from "react-icons/bs";

export function TodoItem(props) {
  const [newInput, setNewInput] = React.useState(props.text);
  const [editing, setEditing] = React.useState(false);

  function onEditing() {
    if (props.completed) {
      props.onComplete(false);
    }
    if (editing) {
      props.onEdit(props.text, newInput);
    }
    if (newInput == props.text) {
      setEditing(false)
    }
    if (!editing) setEditing(true);
  }

  return (
    <div className="ml-auto mr-auto mt-2 mb-4 w-11/12 shadow-sm shadow-black">
       <li className={`flex items-center justify-between p-2 ${props.completed ? 'completed-animation hover:bg-green-600' : 'decompleted-animation hover:bg-slate-100'}`}>
        <button
          className={props.completed ? "text-black hover:text-red-600" : "text-black hover:text-slate-400"}
          onClick={props.onComplete}
        >
          {props.completed ? <Check /> : <Check />}
        </button>
        <input
          className="flex-grow px-2 rounded-md border-gray-300 disabled:bg-transparent enabled:bg-transparent enabled:border-black enabled:ring-2"
          disabled={!editing}
          onChange={(e) => setNewInput(e.target.value)}
          value={newInput}
        />
        <button
          className="mx-1 end-auto"
          onClick={onEditing}
        >
          {editing ? <SaveIcon /> : <EditIcon />}
        </button>
        <button
          className="mx-1 end-auto hover:text-red-600"
          onClick={props.onDelete}
        >
          <DeleteIcon />
        </button>
      </li>
    </div>
  );
}