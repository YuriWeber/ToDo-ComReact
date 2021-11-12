export default function Headers({localSave, createBlock}) {
    return (
        <header className="header">
            <div className="title">
                <h1>To Do</h1>
                <h2 className="unsaved">*</h2>
            </div>
            <div className="header-buttons">
                <button className="new-block" onClick={() => (createBlock())}>Novo Bloco</button>
                <button className="save-blocks" onClick={() => (localSave())}>Salvar</button>
            </div>
            
        </header>
    )
}