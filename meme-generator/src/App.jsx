import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Header from './components/Header'
import Main from './components/Main'
import memeData from './memeData'
import './App.css'

export default function App() {
  const [meme, setMemes] = useState(memeData)

  function getMeme(){
      const data = meme.data.memes
     const randomData = Math.floor(Math.random() * data.length)
      const url = data[randomData].url
      setMemes(url)
  }
  const mapArray = meme.map(item => <Main getMeme={getMeme}/>)

  return (
    <>
    <Header />
    {mapArray}
    </>
  )
}


