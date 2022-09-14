
export default function Main(){
    return(
        <>
         <main className="grid grid-cols-2 gap-4 w-50 m-10 h-10 p-6 " >
            <input type="text" placeholder="Enter text" className="border p-4 border-grey-500 shadow-md outline-none text-center rounded-md"/>
            <input type="text" placeholder="Enter text" className="border p-4 border-grey-500 shadow-md outline-none text-center rounded-md"/><br/>
            <button type="submit" className="h-10 w-2/4  m-10 text-center rounded-md shadow-md text-white text-lg font-medium bg-gradient-to-r from-sky-500 to-indigo-500">Get new meme</button>
         </main>
        </>
    )
}