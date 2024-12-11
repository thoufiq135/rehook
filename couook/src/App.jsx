import './color.css'
import {useState} from 'react'
import usefetch from './fetch'
function App() {

  const[url,seturl]=useState('')
  const[city,setcity]=useState('')
  const{data, loading,error}=usefetch(url)
  const karunga=()=>{
    if(city){
      seturl(`https://wttr.in/${city}?format=3`)
    }else{
      seturl('')
    }
  }
  https://gentle-klepon-ce5748.netlify.app/

 return(
  
  <div id="par">
    <h1 id="head">Live Temperature in Cities</h1>
    <input type='text' placeholder='Enter city name' id="dunga" value={city} onChange={(e)=>setcity(e.target.value)}></input>
    
    <p>temperature:{url && loading?"loading....." :data||error}</p>
    <button onClick={karunga}>Search</button>
    
  </div>
 )
}

export default App
