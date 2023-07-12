import { useEffect, useState } from 'react'
import './App.css'

function App() {
  let[hour,setHour]=useState(0);
  let[min,setMin]=useState(0);
  let[sec,setSec]=useState(0);
  let[start,setStart]=useState(false);
 
  function handleClick(){
    setStart(!start);    
  }
  useEffect(()=>{
    let beat=new Audio('public/FM9B3TC-alarm.mp3')
    let id;
    if(start)
    {
        if(sec==0 && min==0 && hour==0)
        {
          beat.play();          
        }
        if(sec!=0)
        {
          id=setInterval(()=>{
            setSec(sec-1);
          },1000)          
        }
        if(sec==0 && min!=0)
        {
          setMin(min-1);
          setSec(59);
        }
        if(sec==0 && min==0 && hour!=0)
        {
          setHour(hour-1)
          setMin(59);
          setSec(59);          
        }
        if(min==0 && hour!=0)
        {
          setHour(hour-1);
          setMin(59);
       
      }
    } 
    return ()=> clearInterval(id);
  },[start,hour,min,sec])
  return (
    <>
      <h1>Timer</h1>
      <input type="number" value={hour} name='hour' placeholder='0' max={60} min={0}
      onChange={(e)=>{
        setHour(e.target.value)
    }} />
      <input type="number" value={min} name='min' placeholder='0' max={60} min={0} 
      onChange={(e)=>{
        setMin(e.target.value)
    }} />
      <input type="number" name='sec' value={sec} placeholder='0' max={60} min={0} 
      onChange={(e)=>{
          setSec(e.target.value)
      }} />
      <br />
      <br />
      <button onClick={handleClick}> {start? "Stop" :"Start"}</button>

      
    </>
  )
}

export default App
