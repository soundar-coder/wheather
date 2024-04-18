import { useState } from "react";
import axios from "axios"

function So(){
const[city,setcity]=useState("")
const[weather,setwheater]=useState("")
const[temp,settemp]=useState("")
const[desc,setdesc]=useState("")

function s(event){
  setcity(event.target.value)
}

function d(){

  const wheather=axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=707e2a3c1c675e661c334479ae718d73`)
   wheather.then(function(success){
    console.log(success)
    setwheater(success.data.weather[0].main
      )
      settemp(success.data.main.temp)
      setdesc(success.data.weather[0].description)
   }).catch(function(){
    console.log("unsucess")
   })
}
  return(<div>
<input placeholder="city name?" onChange={s}></input>
<button onClick={d}>get report</button>
<p>wheather:{weather}</p>
<p>temp:{temp}</p>
<p>desc:{desc}</p>

  </div>)
}

export default So