import React,{useState,useEffect} from 'react'

function HookCounter() {
   const [count,setCount]= useState(0)
   const [name,setName]= useState('')
   useEffect(()=>{
    console.log("updating title ")
    document.title = `you clicked ${count} times`
   },[count])
  return (
    <div>
        <input type='text'value={name} onChange={e=> setName(e.target.value)}/>
        <button onClick={()=>setCount(count+1)}>Count-{count}</button>
    </div>
  )
}

export default HookCounter