import resize from "./utility/resize.js"
import { FaTrash } from "react-icons/fa";
// import { useState, useEffect } from 'react'

export default function Todo({todo, updateCheckData, updateTextData, deleteTodo}) {
    // alterar o tamanho da textArea ao carregar a pagina
    // const [scrollHeight, setScrollHeight] = useState(0)
    // useEffect(() => {
    //     setScrollHeight(document.querySelector(`#todo${todo.id} textarea`).scrollHeight)
    // },[])

    function checkBox(event) {
        // altera a opacidade do elemento referente ao estado da checkbox
        const parent = event.parentElement
        if (event.checked) {
            parent.style.opacity = 0.5
        } else {
            parent.style.opacity = 1
        }
        updateCheckData(todo.id)
    }

    return (
        <div className="todo-content" style={todo.check ? {opacity:0.5} : {opacity:1}}
            id={`todo${todo.id}`}>
            <input 
                type="checkbox" 
                className="todo-check" 
                defaultChecked={todo.check}
                onChange={event => (checkBox(event.target))}>
            </input>
            <textarea 
                className="todo-text" 
                rows="1"
                maxLength="300"
                defaultValue={todo.text}
                spellCheck="false"
                onChange={event => {resize(event, 1*6);
                                    updateTextData(todo.id, event.target.value)}}
                // style={{height: `${scrollHeight-4}px`}}
                >
            </textarea>
            <h2 className="todo-delete" onClick={() => deleteTodo(todo.id)}><FaTrash /></h2>
        </div>
    )
}