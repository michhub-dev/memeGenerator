
import '/images/vector.png'

export default function Header(){
    return (
        <>
         <header className="bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center flex-row justify-between p-10 w-100 h-10 mx-auto ">
            <img src="images/vector.png" alt="logo" className='w-10 h-15  '/>
            <h2 className='text-xl font-sans text-white font-semibold flex '>Meme Generator</h2> 
            <div>
                <p className='text-white font-mono text-xs'>React project - memes </p>
            </div>
         </header>
        </>
    )
}