import { useContext, useState } from 'react'
import './App.css'
import { ThemeContext } from './context/ThemeProvider'

function App() {
  let {theme, setTheme} = useContext(ThemeContext)

  let local = JSON.parse(localStorage.getItem("myTheme"));
  setTheme(local)

  let localColor = JSON.parse(localStorage.getItem("color"))
  let btnText = JSON.parse(localStorage.getItem("text"))

  let [color, setColor] = useState(localColor)
  let [text, setText] = useState(btnText)

  if (theme == "light") {
    document.body.style = `background: #e1e1e1`

  } else {
    document.body.style = `background: #121212`
  }

  const handleClick = () => {
    if (theme == "light") {
      setTheme("dark")
      setColor("#e1e1e1");
      setText("light")
      document.body.style = `background: #121212`; 

      localStorage.setItem('myTheme', JSON.stringify("dark"));
      localStorage.setItem('color', JSON.stringify("#e1e1e1"));
      localStorage.setItem('text', JSON.stringify("light"));
    }else {
      setTheme("light")
      setColor("#121212")
      setText("dark")
      document.body.style = `background: #e1e1e1`;

      localStorage.setItem('myTheme', JSON.stringify("light"));
      localStorage.setItem('color', JSON.stringify("#121212"));
      localStorage.setItem('text', JSON.stringify("dark"));
    }
  }

  return (
    <>
      <h1 style={{color: color}}>Dark Light Theme</h1>
      <button onClick={() => handleClick()}>Change {text} theme</button>
    </>
  )
}

export default App
