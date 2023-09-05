import react from "react";

export function TodoBox(props){
    return (
            <div className="flex flex-col ml-auto mr-auto bg-white justify-self-center w-11/12 h-full md:h-5/6 shadow-lg shadow-black rounded-lg relative">
                {props.children}
            </div>
    )
}