import React from "react";
export function TodoNav( {searchValue, setSearchValue} ) { 
    return (
      <div className="flex justify-center items-center">
        <input
          placeholder="¿Que quieres hacer?"
          value={searchValue} 
          onChange={(event) => {
            setSearchValue(event.target.value)}}
          className="col-start-3 border-2 border-black rounded-md text-center bg-slate-200 rounded-full font-mono">
          </input>
      </div>
    );
  }
  
