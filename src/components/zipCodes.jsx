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
            const zipList = await axios.get(`https://zip-api.eu/api/v1/info/US-${zip}`);
            //setCity
            setCity(zipList.data);
            console.log(zipList.data)
            
        } catch (error) {
            console.error(error);
            alert("Require a zip code");
        }
   }

   function handleZip(event){
        setZip(event.target.value);
   }

   //console.log(zip);
   //this is where we will be implementing html
    return (
        <>
            <div> 
                <h1>Search Your Zip Code!</h1>
                <input
                    type="text"
                    value={zip}
                    onChange = {handleZip}
                    placeholder="Enter a zipcode"
                />
                <button onClick={handleSearch}>Search</button>
            </div>
            <div>
                    <h2>Zip Code Details:</h2>
                    <h4>Country code: {city.country_code}</h4>
                    <h4>Postal code:  {city.postal_code}</h4>
                    <h4>State:  {city.state}</h4>
                    <h4>Place Name:  {city.place_name}</h4>
                    <h4>Latitude: {city.lat}</h4>
                    <h4>Longitude: {city.lng}</h4>
            </div>
        </>
    )
    
}

export default ZipCodes;