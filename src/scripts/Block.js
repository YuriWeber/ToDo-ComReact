import Todo from "./Todo.js"
import resize from "./utility/resize.js"

export default function Block({block, data, setData}) {
    function updateCheckData(id) {
        const newData = data.map(item => {item.todo.map(todo => {
                if (todo.id === id) {
                    todo.check = !todo.check
                }
                return todo})
        return item})

        setData(newData)
    } 

    function updateTextData(id, newText) {
        const newData = data.map(item => {item.todo.map(todo => {
                if (todo.id === id) {
                    todo.text = newText
                }
                return todo})
        return item})
        
        setData(newData)
    }

    function updateTitleData(newTitle) {
        const newData = data.map(item => {
            if (item.id === block.id) {
                item.title = newTitle
            }
        return item})

        setData(newData)
        console.log(data)
    }

    return (
        <div 
            className="block" 
            // funciona e sei como funciona, só não sei como ele consegue atualizar toda vez
            style={!block.todo.map(item => (item.check)).includes(false) ? {opacity:0.5} : {opacity: 1}}>
            <header className="block-header">
                <textarea 
                    className="block-title" 
                    spellCheck="false" 
                    defaultValue={block.title}
                    maxLength="100"
                    onChange={event => {updateTitleData(event.target.value)
                                        resize(event, "48px")}}>
                </textarea>
                <h2 className="block-delete">X</h2>
            </header>
            <div className="block-content">
                {block.todo.map(item => (<Todo todo={item}
                                            updateCheckData={updateCheckData}
                                            updateTextData={updateTextData}
                                            key={item.id}/>))}
                <button className="new-todo">Novo To Do</button>
            </div>
        </div>
    )
}