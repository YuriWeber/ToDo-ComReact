export default function Block() {
    return (
        <div className="block">
            <header className="block-header">
                <textarea 
                    className="block-title" 
                    spellCheck="false" 
                    defaultValue="Novo Bloco"
                    maxlength="50">
                </textarea>
                <h2 className="block-delete">X</h2>
            </header>
            <div className="block-content">
                <div className="todo-content">
                    <input type="checkbox" className="todo-check"></input>
                    <textarea 
                        className="todo-text" 
                        defaultValue="" 
                        spellCheck="false">
                    </textarea>
                    <h2 className="todo-delete">X</h2>
                </div>
                <div className="todo-content">
                    <input type="checkbox" className="todo-check"></input>
                    <textarea 
                        className="todo-text" 
                        defaultValue="" 
                        spellCheck="false">
                    </textarea>
                    <h2 className="todo-delete">X</h2>
                </div>
                <div className="todo-content">
                    <input type="checkbox" className="todo-check"></input>
                    <textarea 
                        className="todo-text" 
                        defaultValue="" 
                        spellCheck="false">
                    </textarea>
                    <h2 className="todo-delete">X</h2>
                </div>
            </div>
        </div>
    )
}