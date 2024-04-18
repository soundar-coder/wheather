import { useState } from "react";
import axios from "axios"

function So(){
const[city,setcity]=useState("")

function s(event){
  setcity(event.target.value)
}

function d(){

  const wheather=axios('https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=707e2a3c1c675e661c334479ae718d73')
   wheather.then(function(success){
    console.log(success)
   }).catch(function(){
    console.log("unsucess")
   })
}
  return(<div>
<input placeholder="city name?" onChange={s}></input>
<button onClick={d}>get report</button>
<p>wheather:</p>
<p>temp:</p>
<p>desc:</p>

  </div>)
}

export default So