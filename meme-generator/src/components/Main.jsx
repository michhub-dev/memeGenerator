import React, { useState, useEffect } from 'react'


export default function Main(){
    const [meme, setMemes] = useState([])

    const [memeInfo, setMemeInfo] = useState({
        topText: "",
        bottomText: "",
        imageData: "https://i.imgflip.com/30b1gx.jpg" 
      })

      //Generate random meme image. Button function  
        function getMeme(){
        const randomData = Math.floor(Math.random() * meme.length)
            const url = meme[randomData].url
            setMemeInfo(prevState => ({
            ...prevState, 
            imageData: url}))
        }
//A Function that listens to the change in input 
        function handleChange(event){
        const {name, value} = event.target
        setMemeInfo(prevData => ({
            ...prevData,
            [name] : value
        }))

}
//Fetch meme data from the api and save to state variable 
  useEffect(() => {
    async function fetchMemes(){
        const res = await fetch("https://api.imgflip.com/get_memes")
        const data = await res.json()
          setMemes(data.data.memes)
   
    }
    fetchMemes()
  
  }, [])
  
    return(
        <>
         <main className="grid grid-cols-[40px 40px / 1fr 1fr] gap-3 items-center w-50 m-10 h-10 md:h-1/5 p-6 md:mx-6 md:w-1/3 " >
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
            <div className="relative ">
            <img 
             src={memeInfo.imageData}
             className="bg-no-repeat h-auto max-w-full rounded-sm"
             />
            <h2 
            className="uppercase tracking-wider md:w-15 md:text-[28px] shadow-black top-0 text-white text-center my-15 mt-10 px-1.3 text-7xl translate-x-[50%] left-8 font-extrabold absolute "
            >
                {memeInfo.topText}
            </h2>
            <h2 
            className="text-center md:w-15 md:text-[28px]  flex justify-center uppercase mb-8 tracking-wide shadow-black text-white text-8 text-7xl font-extrabold translate-x-[50%] left-8 absolute bottom-0"
            >
                {memeInfo.bottomText}
            </h2>
            </div>
            
         </main>
        </>
    )
}