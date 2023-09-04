import react from "react";

export function TodoBox(props){
    return (
        <div className="h-3/4 w-4/6 relative place-self-center bg-gradient-to-r from-blue-900 to-indigo-950 shadow-xl shadow-black">
            {props.children}
        </div>
    )
}