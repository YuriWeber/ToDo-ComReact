import './styles/import.css'
import Header from './scripts/Header.js'
import Blocks from './scripts/Blocks.js'
import { useState, useEffect, useRef } from 'react'

function App() {
  const [data, setData] = useState([])
  // tentei definir direto mas retorna um erro ao ser usado 
  const unsaved = function() {return document.querySelector(".header .unsaved")}
  // utilizando 2 TEMPORARIAMENTE
  // por algum motivo o useEffect do data ativa duas vezes ao carregar o site
  const firstUpdate = useRef(2)
  
  useEffect(() => {
    // carrega todos dados do localStorage quando o site é carregado
    const storage = localStorage.getItem("blocksData")
    if (!storage) {
      return localStorage.setItem("blocksData", "[]")
    }
    
    unsaved().style.opacity = 0
    
    const newData = JSON.parse(storage)
    setData(newData)
  }, [])
  
  
  useEffect(() => {
    // checagem de salvamento pós mudanças
    if (firstUpdate.current > 0) {
      firstUpdate.current -= 1
      return
    }
    unsaved().style.opacity = 1
  }, [data])
  
  function localSave() {
    // salva no localStorage
    localStorage.setItem("blocksData", JSON.stringify(data))
    unsaved().style.opacity = 0
  }
  
  function createBlock() {
    const id = Math.floor(Math.random() * 10000)

    setData([...data, 
            {title: "Novo Bloco", todo: [], id: id}])
  }

  return (
    <>
      <Header localSave={localSave} createBlock={createBlock}/>
      
      <Blocks data={data} setData={setData}/>
    </>
  );
}

export default App;
