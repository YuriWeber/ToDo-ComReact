import resize from "./utility/resize.js"

export default function Todo({todo, updateCheckData, updateTextData}) {
    function checkBox(event) {
        const parent = event.parentElement
        if (event.checked) {
            parent.style.opacity = 0.5
        } else {
            parent.style.opacity = 1
        }
        updateCheckData(todo.id)
    }

    return (
        <div className="todo-content" style={todo.check ? {opacity:0.5} : {opacity:1}}>
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
                onChange={event => {resize(event, '16px'); 
                                    updateTextData(todo.id, event.target.value)}}>
            </textarea>
            <h2 className="todo-delete">X</h2>
        </div>
    )
}