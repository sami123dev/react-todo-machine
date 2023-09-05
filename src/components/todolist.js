export function TodoList(props) {
    return (
        <ul className="h-5/6 relative overflow-auto no-scrollbar">
            {props.children}
        </ul>
    )
  }