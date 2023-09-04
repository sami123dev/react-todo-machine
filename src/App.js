import React, { Children } from 'react';
import './App.css';
import { TodoNav } from './components/todonav.js';
import { CreateTodoButton } from "./components/createtodo";
import { TodoItem } from './components/todoitem';
import { TodoCounter } from './components/todocounter';
import { TodoList } from './components/todolist';
import { TodoBox } from './components/todobox';

function useLocalStorage (itemName, initialValue, defaultLayout) {
  const localStorageItem = localStorage.getItem(itemName)

  let parsedItem

  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(defaultLayout))
    parsedItem = initialValue
  } else {
    parsedItem = JSON.parse(localStorageItem)
  }

  const [item, setItem] = React.useState(parsedItem)

  const saveItem = (newItem) => {
    localStorage.setItem("TodoList", JSON.stringify(newItem))
    setItem(newItem)
  }
  return [item, saveItem]
} 

const defaultTodos = [ {text: "Crear primer TODO", completed: false},
  {text: "Responsive", completed: false}]

function App() {

  const [todo, saveItem] = useLocalStorage('TodoList', [], defaultTodos);
  const [searchValue, setSearchValue] = React.useState("");
  const completedTodos = todo.filter(todo => todo.completed).length;
  const totalTodos = todo.length; 

  const search = todo.filter(
    (todo) => (
      todo.text.toLocaleLowerCase().includes(searchValue.toLowerCase())
    ) 
  )

  const CompleteTodo = (text) => {
    const newTodos = [...todo]
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text == text)
    console.log(newTodos)
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed
    console.log(newTodos)
    saveItem(newTodos)
  }

  const DeleteTodo = (text) => {
    const newTodos = [...todo];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text == text)
    newTodos.splice(todoIndex, 1);
    saveItem(newTodos)
  }

  const CreateTodo = (text) => {
    if (!text) {
      alert("Campo vacio")
    }
    else { 
    const newTodos = [...todo]
    newTodos.push(
      {text: text,
      completed: false})
    saveItem(newTodos)
  }}

  const EditTodo = (text, newInput) => {
    const newTodos = [...todo]
    const todoIndex = todo.findIndex(
      (todo) => todo.text == text)
    newTodos[todoIndex] = {
      text: newInput, 
      completed: false 
    }
    saveItem(newTodos)
  }

  return (
    <div className="app relative bg-gradient-to-r from-sky-500 to-indigo-500  w-screen h-screen grid">

    <TodoBox>
      <TodoCounter completed={completedTodos} total={totalTodos}/>
      <TodoNav searchValue={searchValue} setSearchValue={setSearchValue}/>
      <TodoList>
        {search.map(todo => (
          <TodoItem
          key={todo.text}
          text={todo.text}
          completed={todo.completed}
          onComplete={() => CompleteTodo(todo.text)}
          onDelete={() => DeleteTodo(todo.text)}
          onEdit={(text, newInput) => EditTodo(todo.text, newInput)}>
          </TodoItem>
        ))}
      </TodoList>
      <CreateTodoButton 
      onCreate={(text) => CreateTodo(text)}/>
    </TodoBox>
    </div>
  );
}


export default App;
