import memeData from "../memeData"
import { useState } from 'react'

export default function Main(){
    const [meme, setMemes] = useState(memeData)

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

        function handleChange(event){
        const {name, value} = event.target
        setMemeInfo(prevData => ({
            ...prevData,
            [name] : value
        }))
}
    return(
        <>
         <main className="grid grid-cols-[40px 40px / 1fr 1fr] gap-4 w-50 m-10 h-10 p-6 " >
            <input
             type="text"
             name="topText"
             value={memeInfo.topText}
             onChange={handleChange}
             placeholder="Top text" 
             className="border p-4 border-grey-500 shadow-md outline-none text-center rounded-md"
             />
            <input
             type="text" 
             name="bottomText"
             value={memeInfo.bottomText}
             onChange={handleChange}
             placeholder="Bottom text" 
             className="border p-4 border-grey-500 shadow-md outline-none text-center rounded-md"
             /><br/>
            <button
             onClick={getMeme}
             type="submit" 
             className="h-15 w-[100%] grid-cols-[1 /-1]  text-center rounded-md shadow-md text-white text-lg font-medium bg-gradient-to-r from-sky-500 to-indigo-500">
                Get new meme
            </button>
            <div>
            <img src={memeInfo.imageData} />
            <h2>{memeInfo.topText}</h2>
            <h2>{memeInfo.bottomText}</h2>
            </div>
            
         </main>
        </>
    )
}