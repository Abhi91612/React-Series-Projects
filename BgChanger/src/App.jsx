import React, { useState } from "react"


function App() {
  const [color, setColor]=useState("olive")

  return (
    <>
      <div className="w-full h-screen duration-200"
       style={{backgroundColor:color}}>
        <div className="flex flex-wrap justify-center gap-3
         shadow-lg bg-white px-y py-2 rounded-3xl">
          <button onClick={()=>{setColor("red")}}
          className="outline-none  px-4 py-1
           rounded-full text-white shadow-lg "
          style={{backgroundColor:"red"}}>Red</button>
          
          <button onClick={()=>{setColor("green")}}
           className="outline-none  px-4 py-1
          rounded-full text-white shadow-lg "
          style={{backgroundColor:"green"}}>Green</button>
          
          <button onClick={()=>{setColor("blue")}}
           className="outline-none  px-4 py-1
           rounded-full text-white shadow-lg "
          style={{backgroundColor:"blue"}}>Blue</button>
          
          <button onClick={()=>{setColor("yellow")}}
           className="outline-none  px-4 py-1
           rounded-full text-black shadow-lg "
          style={{backgroundColor:"yellow"}}>Yellow</button>
          
          <button onClick={()=>{setColor("purple")}}
          className="outline-none  px-4 py-1
           rounded-full text-white shadow-lg "
          style={{backgroundColor:"purple"}}>Purple</button>
          
          <button onClick={()=>{setColor("pink")}}
          className="outline-none  px-4 py-1
           rounded-full text-white shadow-lg "
          style={{backgroundColor:"pink"}}>Pink</button>
          
          <button onClick={()=>{setColor("maroon")}}
           className="outline-none  px-4 py-1
           rounded-full text-white shadow-lg "
          style={{backgroundColor:"maroon"}}>Maroon</button>
          
          <button onClick={()=>{setColor("aqua")}}
           className="outline-none  px-4 py-1
           rounded-full text-white shadow-lg "
          style={{backgroundColor:"aqua"}}>Aqua</button>
          
          <button onClick={()=>{setColor("white")}}
           className="outline-none  px-4 py-1
           rounded-full text-black shadow-lg "
          style={{backgroundColor:"white"}}>White</button>
          


         </div>
        
      </div>
    </>
  )
}

export default App
