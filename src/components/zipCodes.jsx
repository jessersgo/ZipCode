//{} <- these brackets destructures to acess objs within objs
//is the same as Class className extends React.Component {} and are essentially hooks
import React, {useEffect, useState} from "react"; 
import axios from "axios";
//in order to use this use >npm install axios> in terminal and make sure youre in the right cs
//no render function just return function when using functional component

const ZipCodes = () => {
   const[city, setCity] = useState({}); //{} passes it as an obj
   const[zip, setZip] = useState("");
   //the code above does the same as cityName===this.state.cityState

   //handling the search click
   //an async funtion is needed because dealing with apis
   //async function will occur after user clicks search, the useEffect will call API
   //after each key inputted (5 then 4 then so on)
   async function handleSearch(){
        try {
            const zipList = await axios.get(`https://zip-api.eu/api/v1/info/US-${zip}`); //we use '' quotes and the $ to show that we will be implementing java/ an input
            //setCity
            setCity(zipList.data);
            console.log(zipList.data) //this is here to check that we are calling the api in the console for debugging and confirmation 
            
        } catch (error) {  //since this is a checked exception we use a try and catch block in case the api cant retrive data or there is an invalid zipcode not in the system 
            console.error(error);
            alert("Require a zip code");
        }
   }

   function handleZip(event){ //we pass an event parameter to signify that this funtion is to be run when the onClick funtion starts
        setZip(event.target.value); //this is acessing the specific or 'target' value gotten from the event and setting it to Zip
   }

   //console.log(zip);
   //this is where we will be implementing html
   //the code with city.VARNAME are ones we got from the API itself to acess
   //the onChange var is so that the number is updated and shown when imputted 
    return (
        <>
            <div id = "content"> 
                <h1>Search Your Zip Code!</h1>
                <input
                    type="text"
                    value={zip}
                    onChange = {handleZip}
                    placeholder="Enter a zipcode"
                />
                <button onClick={handleSearch}>Search</button>
          
                    <h2>Zip Code Details:</h2>
                    <h4>Country: {city.country_code}</h4>
                    <h4>Postal code:  {city.postal_code}</h4>
                    <h4>State:  {city.state}</h4>
                    <h4>Place Name:  {city.place_name}</h4>
                    <h4>Latitude: {city.lat}</h4>
                    <h4>Longitude: {city.lng}</h4>
                    <h4>Coordinates: ({city.lat}, {city.lng})</h4>

            </div>
        </>
    )
    
}

export default ZipCodes;