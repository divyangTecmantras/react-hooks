import React,{useState,useEffect} from 'react'

function HookMouse() {
    const[x,setX]=useState(0)
    const[y,setY]=useState(0)
    const  longMousePosition = e =>{
        console.log('mouse event')
        setX(e.clientX)
        setY(e.clientX)
    }
    useEffect(()=>{
        console.log('useEffect called')
        window.addEventListener('mousemove',longMousePosition)

        return ()  => {
            console.log("unmounting")
        window.removeEventListener('mousemove',longMousePosition)
        }
    },[])
  return (
    <div>Hooks X-{x} Y-{y}</div>
  )
}

export default HookMouse