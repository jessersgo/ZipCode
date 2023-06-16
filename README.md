# ZipCode app

This app is going to be worked on though the live server extention and updates will be made using one persons acc


# Project 1: Zip Code Search app

In this project you will build a simple Zip Code search app. We will need an input field where the user can enter a zip code, like in the following image:

We will use the user input to search zip-api. If the zip code is valid the API will respond with an object. Use that response to display the relevant user information.

Getting started

To get started run the following commands

create-react-app zip-search
cd zip-search
npm start
At this point you should see the React hello world page running on your browser. You should leave it running in the background while you work on this project.

Now open this folder (zip-search) in your text editor. You will see all of the code the create-react-app setup for us. Since this is the stock project we can begin editing the files as we see fit. You can start at App.js and you can also edit public/index.html (to add Bootstrap for example).

Project 2: City Locations

In this project we will allow the user to provide us a zip code and we will display all of the associated cities to the user.

To get started run the following commands

create-react-app city-locations
cd city-locations
npm start
At this point you should see the React hello world page running on your browser. You should leave it running in the background while you work on this project.

Now open this folder (city-locations) in your text editor. You will see all of the code the create-react-app setup for us. Since this is the stock project we can begin editing the files as we see fit. You can start at App.js and you can also edit public/index.html (to add Bootstrap for example).

Using the same API as project 1, we will build a City search app, where given a city name, we will display all returned zip codes.

Primary Tasks

Using the same zip-api we used in project 1:

Implement a City Search field that takes city names
it should allow city names to be entered in upper, lower, or mixed case letters
Display all zip codes received from the API
Stretch Features (Optional, but highly recommended)

Display all states within a given zip code radius
Group received zip codes by state
Display city details for each Zip code
Create a separate search for calculating the distance between 2 zipcodes
Note: these will require additional fetch call to the API. Feel free to use your own CSS styles and to add any additional features you want.