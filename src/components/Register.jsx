
import { useState } from "react"


export function Register() {

   const [register, setRegister] = useState("")

 return (
  
    <div>
     <input 
      type="text"
      value={register}
      onChange={(e) => {

        setRegister(e.target.value);
      }}

     />
 



    </div>



 )



}