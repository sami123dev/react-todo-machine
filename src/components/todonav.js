import React from "react";

export function TodoNav({ searchValue, setSearchValue }) {
  return (
    <div className="flex mt-2 mb-2">
      <input className="ml-auto mr-auto text-center max-w-sm"
        placeholder="Buscar"
        value={searchValue}
        onChange={(event) => {
          setSearchValue(event.target.value);
        }}
      />
    </div>
  );
}