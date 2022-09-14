import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Header from './components/Header'
import Main from './components/Main'
import memeData from './memeData'
import './App.css'

export default function App() {
  const [memes, setMemes] = useState(memeData)

  return (
    <>
    <Header />
    <Main />
    </>
  )
}


