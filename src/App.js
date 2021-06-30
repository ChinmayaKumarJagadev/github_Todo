import React,{useState,useEffect} from 'react'
import TodoList from './component/TodoList/TodoList';
import './App.css';
import {InputGroup,Button,FormControl} from 'react-bootstrap'

const App = () =>{

  const[input, setInput] = useState();
  const [todos,setTodos] = useState([])
  const handleChange = (event) =>{
    setInput(event.target.value)
  }

  const handleClick = () =>{
    console.log(input)
    setTodos((previousState) =>{
      return([...previousState, input])
    })
    setInput("")
  }

 const handleDeleteTodo  = (id) =>{
  console.log(id)
  if(window.confirm('Are You sure to delete selected Todo')){
    setTodos((prevState) =>{
      // console.log(prevState)
      return prevState.filter((todoList, index) =>{
        console.log(index)
        console.log(todoList)
        return index !== id
      })
  })
  } 
}

useEffect (() =>{
  const data = localStorage.getItem("todoList") 
  if(data){
    setTodos(JSON.parse(data))
  }
},[])

useEffect(() => {
  localStorage.setItem( 'todoList' ,JSON.stringify(todos))
}, [todos])


  return (
    <div>
    
          <InputGroup className="mb-2" >
                 <FormControl
                  name="todo" 
                  value={input || ""} 
                  onChange={handleChange} placeholder= "Add Tasks" className="inputBox"
                  placeholder="Add Task"
                  aria-label="Add Task" />
      
           <Button disabled={!input} variant="outline-secondary" onClick={handleClick} className= "buttonDesign">ADD</Button>
        </InputGroup>
  
     

      {todos.map((todo,index)=>{
         return(
           <TodoList
               key={index}
               id={index}
               allTodos={todo}
               onClick={handleDeleteTodo}
           />
         )
      })}
  
    </div>
  );
}

export default App;
