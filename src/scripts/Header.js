export default function Headers({localSave}) {
    return (
        <header className="header">
            <h1>To Do</h1>
            <h2>*</h2>
            <div className="header-buttons">
                <button className="new-block" >Novo Bloco</button>
                <button className="save-blocks" onClick={() => (localSave())}>Salvar</button>
            </div>
        </header>
    )
}