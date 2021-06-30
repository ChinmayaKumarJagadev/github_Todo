import React,{useState} from 'react'
import deleteIcon from "../../images/trash.png";
import './TodoList.css'
import { ListGroup } from 'react-bootstrap';

const TodoList = (props) =>{
    const [checked, setChecked] = useState(false);
    return (
        <div>         
            <ListGroup >
                <ListGroup.Item className="d-flex justify-content-between align-items-center"> 
                     <input type="checkbox" 
                            name="checkbox" 
                            checked={checked}
                            onChange={() => setChecked(!checked)}  
                            className="checkBox"
                        /> 
                     <p style={{textDecoration: checked ? "line-through" : "" }} 
                               className="todoItems">{props.allTodos}
                     </p> 

                     <img src={deleteIcon} 
                            onClick= {() =>props.onClick(props.id)} 
                            alt="delete_icon" 
                            className="deleteItems"
                       />
                </ListGroup.Item>
            </ListGroup>  
        </div>
    )
}

export default TodoList
