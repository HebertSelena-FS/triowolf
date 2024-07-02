# WDV229-2209-Portfolio-Project-DiFrescoTisha-FS Change Log

#### All notable changes to this project will be documented in this file.

#### The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/) and this project adheres to [Semantic Versioning](https://semver.org/).

## 1.0.0

2022-08-30

* Added dependencies
    * react-player
    * react-router-dom
    * styled-components
    * react-icons
    * react-scroll
<br />
* Added navbar and sidebar<br/><br />

2022-08-31

* Added routes to navbar and sidebar<br/>

* Added hero section with video background<br/>

* Added images<br />

* Added button element<br />

* Added middle sections<br/>

* All routes are connected to the correct section<br/><br />

2022-09-01

* Added Soundcloud Widget and React Player to reusable section<br/>

* Reusable section is originally designed for images, but the widget and the player are not images so I'm having to work around the format types.<br />

* May need to try a different way to add widget and player<br /><br />

2022-09-02

* Corrected layout to make grid items fit right<br/>

* Added footer

* Reusable section broke due to the layout adjustments I had to make for the widget and player<br/>

* Added SignIn form<br/><br />

2022-09-03

* All components have been added  

* May have to redesign my styled components system because I'm getting errors related to how I have things connected in my project. The work-arounds I had in place crashed the program. The yellow warnings are telling me that I'm not coding something correctly with styled components. I know it's from the pages I had to create seperately to accomodate for the widget and player not being an image.<br />

* Spent most of the day researching MongoDB and how to connect it to the frontend.<br /><br />  

2022-09-04

* I spent more time today researching MongoDB and how the front-end and back-end connect. The resource given in 2.0, [MongoDB MERN Stack](https://www.mongodb.com/languages/mern-stack-tutorial), was just what I needed to see. I think I can do it.<br/>

* I rearranged my whole file system today in order to fix issues related to styled-components. I updated the folders and files as follows: Each section folder was updated by changing index.js of the section into the actual name of the file (e.g. Artist.js rather than index.js), I added a Data.js file that contains a data page for each section.The issue now is that the last page is not showing up.<br/>

* Minor updates to buttons<br /><br />

2022-09-06

* Trying to correct issues with styled-component warnings in console.<br />

* Still no answer for how to fix react-player throwing error in console.<br />

2022-09-07

* Added Login/Signup page but it is not working correctly - one import is wrong<br />

* Adjusted button routes<br />

* Looking for API<br /><br />

2022-09-08

* Found API - Tastedive music api<br /><br />

2022-09-10

* Removed Login/Signup page in favor of the contact page because it makes more sense  

* Finished cleaning up and finalizing code for the week<br />

2022-09-13

* TasteDive api wouldn't work because of cors error<br />

* Spent all day searching for another api. Found another music-related api that will work, but I have to be creative to make it fit in. It is a Kanye West quote api, when button is clicked, a new quote is displayed.

* Relating Kanye West api to EPK is challenging. Need more ideas.

* Created a basic input text box with some styling and a button for a starter template for the api. 

2022-09-14

* Got api set up and showing in the console. For whatever reason, I thought I needed an input field when I really need to display the output. I spent some time re-thinking my course of action. I am in the process of updating the form to display the output.<br />

* Decided to go with local-storage after receiving feedback from lecture. I'm still playing around with it to make it work. I'm able to see the input I typed in the input box (the one that I wasn't supposed to have) display in the local-storage area of the console. That was cool. It was nice to see results.<br />

2022-09-15

* Have worked all day to get my api up and displaying on the page. I finally did!!

* Tomorrow I will need to work on my container and how the content is sitting inside of it. Button is not working.<br/>

2022-09-17

* I have been stuck on local storage for about a day and half. I created an additional page for the api and had it all pretty, then the button refused to interact with a click, a hover, a focus, or anything else. Like it was frozen. At this point, the api data was not showing up in the console, and none in the local storage. I stripped all of the styled components and styling out of the Api file where the Api lives. It worked!!! Good and bad. Good because I'm finally getting to see results and know my code is ok. Bad because I had to re-arrange everything again. I took away the page and just created another section at the bottom of the page. I styled a few things with styled-components, and the button quit again as well as api data syncing. I have stripped it down once more, and I have it working, but the data in local storage is not persistent. Tomorrow I hope to tackle the problem, styled or not.

* Fixed button routes to match style of tour thing I created. Instructor recommended placing 2 buttons on each section that I had routed with an external link. One to continue the tour, and one for the external link. That did't work well at all visually, so I changed both original link connected buttons to tour buttons that direct  user down page. The external links to Soundcloud and YouTube are now linked to the correct location in the footer with all the other link related icons. It looks so much better.<br />

2022-09-18

* Built new page for api display, only this time, I used jsx. The api is working as it should. When I click the button, a new quote is generated and displayed. All objects show up in the console, and all quotes can be seen in the local storage.

* Successfully conneted my api to local storage. I'm confused about persistent data and awaiting feedback from instructor. Pushing the button adds 1 quote that can be seen in local storage with the key and value pair. They are not being collected as far as I can tell, because when I refresh or push the button, the old quote is gone and a new one appears. I don't think that's persistent data, but I'm not sure.

* Having issues with navigation to the thoughts page in both the navbar link and the button link from the new release sectio to the thoughts section.

* Routing of thoughts section was corrected, however, when the Kanye Quotes button is clicked from the nav to take you the Kanye Quotes page, it now brings down the sidebar view so you can't even get to that page. That's where the api is displayed. Will repair tomorrow.

2022-09-19

* Problems with getting the api button to generate and display the quotes. However, I can see the data in the console and it local storage, so it updates there. The new quote will only display when I refresh the page. I know it has to with state and effect, but so far I haven't been able to solve the problem. I hope to have enough time to fix it before midnight.

* Everything else is good to go. All routes are working correctly. New page is not exactly like I want it, but that is next week.

2022-09-21

* I did it!!! I figured out how to get my button to refresh the page for the new api quote instead of having to manually refresh the page. My project is now complete.

* I will continue to add my progress here until the end of the week.

* Next I will be working on my video presentation. Today has been a good day.

2022-09-24

* Noticed yesterday when I was attempting to make my video that the bio and thoughts sections are not responsive. The biggest issue is the bio image spilling over into the music section in mobile view. The thoughts section you can't tell anything is wrong, but it, too, is unresponsive. I guess when I re-built my layout I broke the grid somehow. Will try to fix this last min, however, I've been working on it since yesterday with no luck. It not successful, I will have no choice but to put the project back together and exclude the mobile view from the video.

* Not successful fixing grid to make bio section responsive. The thoughts page's unresponsiveness is not visible cosmetically. I just put the project back together and will have to omit the mobile view from the video. 