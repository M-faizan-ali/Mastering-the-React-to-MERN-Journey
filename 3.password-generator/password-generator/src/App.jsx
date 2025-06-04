import { useCallback, useEffect, useState, useRef } from 'react'
import './App.css'

function App() {
 const [length, setLength]=useState('8');
 const [numberAllowed, setNumberAllowed]=useState(false);
 const [charAllowed, setCharAllowed]=useState(false);
 const [password, setPassword]=useState('');
 const passwordref=useRef(null);
 const btnref=useRef(null);


 const passwordGenerator=useCallback(()=>{
  let pass="";
  let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  if(numberAllowed) str += "0123456789"
  if(charAllowed) str += "!@#$%&{}"
  for (let i=1; i<=length; i++){
    let char=Math.floor(Math.random()*str.length +1)
    pass += str.charAt(char);
  }
      setPassword(pass);

 },[length, numberAllowed, charAllowed, setPassword])

 const copyTextToClipboard=useCallback(()=>{
  passwordref.current?.select()
  // we can set range of selection according to our need
  passwordref.current?.setSelectionRange(0,100)
  window.navigator.clipboard.writeText(password)

 },[password])

 useEffect(()=>{
    passwordGenerator();
 },[length,numberAllowed,charAllowed,passwordGenerator])
  return (
    <div className='flex flex-col gap-2' >
        <div>
          <input
            type="text"
            value={password}
            placeholder='Enter your password'
            readOnly
            className='w-[500px] p-2 border border-gray-500 outline-none'
            ref={passwordref}
           />
        
          <button
           className='bg-blue-500 text-white text-[18px] p-2 '
           onClick={copyTextToClipboard}
           ref={btnref}
           >copy</button>
        </div >
            
        <div className='flex gap-2 justify-center'>
          <input
             type="range"
             min={6} 
             max={100}
             value={length}
             className='cursor-pointer'
             onChange={(e)=>setLength(e.target.value)}
             />
             <label htmlFor="">Length: {length}</label>

             <input 
              type="checkbox"
              defaultChecked={numberAllowed}
              id='numberInput'
              onChange={()=>{
                setNumberAllowed((prev)=>!prev)
              }}             
             />
             <label htmlFor="">Add Number</label>

             <input 
              type="checkbox"
              defaultChecked={charAllowed}
              id='charInput'
              onChange={()=>{
                setCharAllowed((prev)=>!prev)
              }}
             />
             <label htmlFor="">Character Allowed</label>
        </div>
    </div>
  )
}

export default App
