import './styles/import.css'
import Header from './scripts/Header.js'
import Blocks from './scripts/Blocks.js'
import { useState, useEffect } from 'react'

function App() {
  const [data, setData] = useState([])
  
  useEffect(() => {
    const storage = localStorage.getItem("blocksData")
    if (!storage) {
      return localStorage.setItem("blocksData", "[]")
    }

    const newData = JSON.parse(storage)
    setData(newData)
  }, [])

  useEffect(() => {
    const needSave = document.querySelector(".header h2")
    needSave.style.opacity = 1
  }, [data])

  function localSave() {
    localStorage.setItem("blocksData", JSON.stringify(data))
    const needSave = document.querySelector(".header h2")
    needSave.style.opacity = 0
  }

  return (
    <>
      <Header localSave={localSave}/>
      <Blocks data={data} setData={setData}/>
    </>
  );
}

export default App;
