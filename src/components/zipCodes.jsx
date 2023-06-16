//{} <- these brackets destructures to acess objs within objs
//is the same as Class className extends React.Component {} 
import React, {useEffect, useState} from "react"; 
import axios from "axios";
//in order to use this use >npm install axios> in terminal and make sure youre in the right cs
//no render function just return function when using functional component

const ZipCodes = () => {
   const[city, setCity] = useState({}); //{} passes it as an obj
   const[zip, setZip] = useState("");
   //the code above does the same as cityName===this.state.cityState

   //handling the search click
   //async because dealing with apis
   //async function will occur after user clicks search, the useEffect will call API
   //after each key inputted (5 then 4 then so on)
   async function handleSearch(){
        try {
            const zipList = await axios.get("https://zip-api.eu/api/v1/info/US-11373");
            //setCity
        } catch (error) {
            
        }
   }

   function handleZip(event){
        setZip(event.target.value);
   }

   console.log(zip);
   //this is where we will be implementing html
    return ( 
        <div> 
            <h1>Search Your Zip Code!</h1>
            <input
                type="text"
                value={zip}
                onChange = {handleZip}
                placeholder="Enter a zipcode"
            />
            <button onclick="">Search</button>
        </div>
    )
    
}

export default ZipCodes;