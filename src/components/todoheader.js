import React from "react"

export function TodoHeader(props) {
    return (
        <div className="bg-gradient-to-r from-cyan-600 to-cyan-900 rounded-sm">
            {props.children}
        </div>
    )
}