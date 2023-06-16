//{} <- these brackets destructures to acess objs within objs
//is the same as Class className extends React.Component {} 
import React, {useState} from "react"; 
import axios from "axios";
//in order to use this use >npm install axios> in terminal and make sure youre in the right cs
//no render function just return function when using functional component

const ZipCodes = () => {
   const[cityName, setCityName] = useState("");
   //the code above does the same as cityName===this.state.cityState


   //this is where we will be implementing html
    return ( 
        <div> 
            <h1>Search Your Zip Code!</h1>
            <input
                type="text"
                value={cityName}
                placeholder="Enter a zipcode"
            />
            <button></button>
        </div>
    )
    
}

export default ZipCodes;