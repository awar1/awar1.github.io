import { useState } from 'react'
import Header from './components/Header'
import MainPage from './components/MainPage'
import About from './components/About'
import Offer from './components/Offer'
import './App.css'

function App() {
  const [content,setContent] = useState('info')
  const [darkMode,setDarkMode] = useState(false)
  
  function handleDarkMode(){
    setDarkMode(prevMode => !prevMode)
  }
  return (
    <div className='Content'>
      <Header setContent={setContent}
              setDarkMode={handleDarkMode}
              dark={darkMode} />
      {content==='coctails' && <MainPage dark={darkMode} />}
      {content==='info' && <About dark={darkMode} />}
      {content==='offer' && <Offer dark={darkMode} />}
    </div>
  )
}

export default App
