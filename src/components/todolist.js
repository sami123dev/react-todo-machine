export function TodoList(props) {
    return (
        <ul className="overflow-y-auto h-3/4">
            {props.children}
        </ul>
    )
  }