# AutoGrab Code Challenge - Vehicle Selection Form

The original brief for this code challenge can be found [here](#the-task).

You will need node 18 to run this repo locally.

In a terminal

```
$ npm i
$ npm run dev
```

## Tech stack and libraries

- React
- Typescript
- Vite
- Express

## Plan

These are my initial rough plans for building the app. At time of writing, due to time constraints I only managed to complete a basic form that can send stored state data to the server.

- Set up a React, Typescript, Vite app and plug in Express.js into it.

- API: Build `GET` endpoint for cars and `POST` endpoint for posting form data and client-side post to API function. Test endpoints in Insomnia.

- Client: `Select`, `FileUpload` and `Button` reusable components.

- Build form in `App` and get the end-to-end flow of submitting data and receiving the response working. Test in browser.

- Stretch: Add the default prefill dropdown buttons specified in the requirements.

## Wishlist

These are some things I would have liked to be able to do if I had more time:

- Unit tests: Server API endpoint, client-side components and the form behaviour (i.e. various cases for changing make, model etc.).

- Client-side view and route for displaying the data from the `POST` endpoint response in the browser. For now I have left the `console.log` to display the response data in `App.tsx`.

- The requirement to add at least two buttons used to quickly select common vehicles to pre-fill the dropdowns. An unknown is what the common vehicles would be.

- Nice-to-have: Styling the components potentially using a lightweight UI library.

## Challenges & learning

- Familiarising myself with Express.js after a few years and getting a full stack app without a database up and running. Took sometime as I'm used to working with GraphQL and focusing on the front end.

- Initially wrapped the form in an HTML `form` element and the behaviour on submit wasn't exactly what I wanted. When I looked into HMTL `form` it looked like it wouldn't provide the structure I needed to send back to the API. Decided to remove the `form` wrapper and use what's already stored in the local state to send back to the API on submit.

- Reading the content of the uploaded file. I couldn't find a straightforward way of sending the file to the server to have it read the content and pass it to the response. For the purpose of this exercise I then researched how to do this on the client-side instead and implemented passing on the read content as a string as part of the request to the API.

## The Task

Your task is to create a form which can be used to select a vehicle and upload a logbook.

For the purpose of this exercise, consider a vehicle to be composed of three pieces of information- Make, Model and Badge. The user must first select a Make (e.g. Ford, Tesla or BMW), and they will then be presented with a list of Models to choose from (e.g. if they selected Tesla, they are offered Model 3, Model S and Model X).

After selecting the Model, a third dropdown will allow the user to select the Badge. If they selected the Tesla Model 3 at this stage, they would be offered the choice of Standard, Performance and Long Range badge. Once the user has selected a badge, they should be given the option to upload their service logbook as a plain text file.

The form should POST to a Node.JS based server (use Express.js or Koa for this), and the response should include the vehicle selection (make, model and badge), as well as the contents of the log book file that the user uploaded.

On the vehicle selection form, there should also be at least two buttons which can be used to quickly select common vehicles without filling out the Make, Model and Badge separately. Clicking one of these buttons should pre-fill the drop-downs.

If the user changes their Make or Model selection whilst having values set for the Model or Badge respectively, these should be cleared and the correct option list for the given Make or Model should be pre-filled into the corresponding dropdown.

## Vehicle Data

You may use the following map of vehicle data to complete the task:

```
const MODELS = {
    'ford': {
        'Ranger': ['Raptor', 'Raptor x', 'wildtrak'],
        'Falcon': ['XR6', 'XR6 Turbo', 'XR8'],
        'Falcon Ute': ['XR6', 'XR6 Turbo'],
    },
    'bmw': {
        '130d': ['xDrive 26d', 'xDrive 30d'],
        '240i': ['xDrive 30d', 'xDrive 50d'],
        '320e': ['xDrive 75d', 'xDrive 80d', 'xDrive 85d'],
    },
    'tesla': {
        'Model 3': ['Performance', 'Long Range', 'Dual Motor'],
    },
 }
```
