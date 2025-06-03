import { useState } from 'react'
import './App.css'

const colors=['blue', 'green', 'yellow', 'black', 'purple', 'orange']

function App() {
  // const [color,setColor]=useState('olive')
  // return (
  //   <>
  //     <div className='w-full h-screen justify-center items-center' style={{backgroundColor:color}}>
  //       <div className='flex'>
  //           <div onClick={()=>setColor('blue')} className='bg-blue color-white p-2 border border-gray cursor-pointer'>blue</div>
  //           <div onClick={()=>setColor('green')} className='bg-blue color-white p-2 border border-gray cursor-pointer'>green</div>
  //       </div>
  //     </div>
  //   </>
  // )

  // second optimized approach we use 
  const [color, setColor]=useState('');
  return(
    
    <div className='w-full h-screen justify-center items-center' style={{backgroundColor:color}}>
      <div>
        <div className='flex gap-2'>
          {
           colors.map((colorStore)=>(
               <button key={colorStore} onClick={()=>setColor(colorStore)} className='border border-black p-2 text-white '>
                  {colorStore}
                </button>
           ))
          }
          
        </div>
      </div>
    </div>
  )

}

export default App
