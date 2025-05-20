# Instructions for lab 9 Strategy 1 setup:

**NOTE: If you are unsure JUST COPY THE FILES IN THIS DEMO!!!** This includes big folders like `bin` and `node_modules`

Essentially this strategy is just copying the front-end react code to the backend serverside code every single time you change something in the front end react. In other words, this is everything you would write in the `public` folder of websharer. e.g. when a handler, endpoint, or some utils function gets changed or added in terms of front end.

### Frontend (react):

handles all the state changes using `useState` and `useEffect` to replace everything that websharer's public folder handled previously. (this demo's react components replace specifically `indentity.js`, `userInfo.js`, `utils.js` in the public folder)

**NOTE:** the handleEvents function are usually the ones that would link to the routes you wrote in express. I suggest keeping those naming conventions consistent, like having all those handler function start with the word `handle`, like `handleEventName`. In this demo, they linked to the `signin` and `signout` or the `users` routes that were in `app.js`

### Backend (express):

still have all the folder and files other than `public`.

**NOTE:** DO NOT DELETE THE `bin` folder that the express starter had and also the `"type":"module"` in package.json.

### Instructions:

1. create backend and frontend folder for better organization
2. navigate to backend folder and do the normal server-side, express set up (import the express starter code, or npm init, npm install express, etc.)
3. navigate to the frontend folder and paste react/frontend code into it
4. `npm run build` to build the frontend/react code (write all your frontend changes here)
5. copy over all the react frontend `/build` folder/code (static code, not responsive ones) into the server side public folder
6. write the server side code like we did in class, but using the react front end code now
7. Repeat steps everytime you want to change front-end code

Version 1 of this demo is written by: Anthony Wen

Orginal Repo: https://github.com/info441-winter2025/class-demos/tree/main/lab/lab_09_react_and_authorization
