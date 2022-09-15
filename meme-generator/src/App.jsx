import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Header from './components/Header'
import Main from './components/Main'
import memeData from './memeData'
import './App.css'

export default function App() {
  const [meme, setMemes] = useState(memeData)
  const [memeImage, setMemeImage] = useState('')
  const [memeInfo, setMemeInfo] = useState({
    topText: "",
    bottomText: "",
    imageData: "https://i.imgflip.com/30b1gx.jpg" 
  })
 

  //Generate random meme image 
  function getMeme(){
      const arrayData = meme.data.memes
     const randomData = Math.floor(Math.random() * arrayData.length)
      const url = arrayData[randomData].url
      setMemeInfo(prevState => ({
        ...prevState, 
        imageData: url}))
  }
// const mapArray = memeInfo.map(item => <Main getMeme={getMeme} memeInfo={memeInfo.imageData} topText={topText} bottomText={bottomText} />)

  return (
    <>
    <Header />
    <Main getMeme={getMeme} memeInfo={memeInfo.imageData} />
   {/* {mapArray}topText={topText} bottomText={bottomText}*/}
    </>
  )
}


