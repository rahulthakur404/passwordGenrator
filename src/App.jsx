import { useState,useCallback, useEffect } from 'react'
 
 

function App() {
  // const [color, setColor] = useState("olive")
  const [length, setLength]=useState(8);
  const [numberAllowed,setNumberAllowed]=useState(false);
  const [charAllowed,setCharAllowed]=useState(false);
  const[password,setPassword]=useState("helo");
//
  const[lenght1,setlength1]=useState(10);
//
const[increment,setIncrement]=useState(0)

  const passwordGenerator=useCallback(()=>{
   let pass="";
   let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
   if(numberAllowed) str+="0987654321";
  if(charAllowed) str+="!@#$%^&**{}[]+-~"; 
   for(let i=1;i<=length;i++){
    let char= Math.floor(Math.random()*str.length+1)
    pass+=str.charAt(char);
    }
    setPassword(pass)
  },[length,numberAllowed,charAllowed,setPassword]);

  useEffect(()=>{
    passwordGenerator();
  },[length,numberAllowed,charAllowed,passwordGenerator])


  return (
   
    // <div className='w-full h-screen 'style={{backgroundColor:color}} >
    //    {/* <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind Test</h1> */}
    //  <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
    //   <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-3 rounded-2xl'>
    //     <button onClick={()=>{setColor("Red")}} className='outline-none px-4 py-2 rounded-2xl text-white shadow-lg'style={{backgroundColor:"red"}}>Red</button>
    //     <button onClick={()=>{setColor("Green")}} className='outline-none px-4 py-2 rounded-2xl text-white shadow-lg'style={{backgroundColor:"Green"}}>Green</button>
    //     <button onClick={()=>{setColor("Blue")}} className='outline-none px-4 py-2 rounded-2xl text-white shadow-lg'style={{backgroundColor:"Blue"}}>Blue</button>
    //   </div>
    //  </div>
    // </div>



    //Password Generator 
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800'>
      <h1 className='text-center text-white '>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4 my-3'>
        <input className='outline-none w-full py-1 px-3' type="text" value={password}  placeholder='password'readOnly/>
        <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range"
             min={8}
             max={100}
             value={length}
           className='cursor-pointer' onChange={(event)=>{setLength(event.target.value)}} />
           <label htmlFor="">length:{length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" defaultChecked={numberAllowed} onChange={()=>{setNumberAllowed((prev)=>!prev)}} />
            <label htmlFor="">Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" defaultChecked={charAllowed} onChange={()=>{setCharAllowed((prev)=>!prev)}} />
            <label htmlFor="">Charcter</label>
          </div>
        </div>
      
    </div>
     
     
  
  )
}

export default App
