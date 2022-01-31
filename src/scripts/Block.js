import Todo from "./Todo.js"
import resize from "./utility/resize.js"
// import { useState, useEffect} from 'react'

export default function Block({block, data, setData}) {
    // alterar o tamanho da textArea ao abrir a pagina
    // const [scrollHeight, setScrollHeight] = useState(0)
    // useEffect(() => {
    //     setScrollHeight(document.querySelector(`#block${block.id} textArea`).scrollHeight)
    // }, [])

    // controla a opacidade do bloco
    // iria por um useEfect para o data, porem eles esta atualizando sozinha, não entendi como
    let complete = {opacity: 1}
    if (block.todo.length > 0) {
        complete = !block.todo.map(item => (item.check))
                            .includes(false) ? {opacity:0.5} : {opacity: 1}
    }
    else {
        complete = {opacity: 1}
    }

    function updateCheckData(id) {
        // usado no Todo
        // atualiza o check do todo no data
        const newData = data.map(item => {item.todo.map(todo => {
                if (todo.id === id) {
                    todo.check = !todo.check
                }
                return todo})
        return item})

        setData(newData)
    } 

    function updateTextData(id, newText) {
        // usado no todo
        // atualiza o text do todo no data
        const newData = data.map(item => {item.todo.map(todo => {
                if (todo.id === id) {
                    todo.text = newText
                }
                return todo})
        return item})
        
        setData(newData)
    }

    function updateTitleData(newTitle) {
        // atualiza o titulo do bloco no data
        const newData = data.map(item => {
            if (item.id === block.id) {
                item.title = newTitle
            }
        return item})

        setData(newData)
    }

    function newTodo() {
        // cria um novo To Do
        const todo = {text: "", check: false, id: Math.floor(Math.random() * 10000)}
        const newData = data.map(item => {
            if (item.id === block.id) {
                item.todo.push(todo)
            }
        return item})
        setData(newData)
    }

    function deleteTodo(id) {
        // deleta o To Do pelo id
        const newData = data.map(item => {item.todo.map(todo => {
            if (todo.id === id) {
                const index = item.todo.indexOf(todo)
                item.todo.splice(index, 1)
            }
            return todo})
        return item})
        
        setData(newData)
    }

    function deleteBlock(id) {
        // deleta o bloco pelo id
        const newData = data.filter(item => (item.id !== id))
        setData(newData)
    }

    return (
        <div 
            className="block" 
            id={`block${block.id}`}
            style={complete}>
            <header className="block-header">
                <textarea 
                    className="block-title" 
                    spellCheck="false" 
                    defaultValue={block.title}
                    maxLength="100"
                    onChange={event => {updateTitleData(event.target.value)
                                        resize(event, 48)}}
                    // style={{height: `${scrollHeight-12}px`}}
                    >
                </textarea>
                <h2 className="block-delete" onClick={() => (deleteBlock(block.id))}>X</h2>
            </header>
            <div className="block-content">
                {block.todo.map(item => (<Todo todo={item}
                                            updateCheckData={updateCheckData}
                                            updateTextData={updateTextData}
                                            deleteTodo={deleteTodo}
                                            key={item.id}/>))}
                <button className="new-todo" onClick={() => (newTodo())}>Novo To Do</button>
            </div>
        </div>
    )
}