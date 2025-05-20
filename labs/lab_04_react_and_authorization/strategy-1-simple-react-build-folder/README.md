# Instructions for lab 9 : React + Express Deployment

**NOTE: If you are unsure JUST COPY THE FILES IN THIS DEMO!!!** This includes big folders like `bin` and `node_modules`

Essentially this strategy is just copying the front-end react code to the backend serverside code every single time you change something in the front end react. In other words, this is everything you would write in the `public` folder of websharer. e.g. when a handler, endpoint, or some utils function gets changed or added in terms of front end.

### Frontend (react):

handles all the state changes using `useState` and `useEffect` to replace everything that websharer's public folder handled previously. (this demo's react components replace specifically `indentity.js`, `userInfo.js`, `utils.js` in the public folder)

**NOTE:** the handleEvents function are usually the ones that would link to the routes you wrote in express. I suggest keeping those naming conventions consistent, like having all those handler function start with the word `handle`, like `handleEventName`. In this demo, they linked to the `signin` and `signout` or the `users` routes that were in `app.js`

### Backend (express):

still have all the folder and files other than `public`.

**NOTE:** DO NOT DELETE THE `bin` folder that the express starter had and also the `"type":"module"` in package.json.

### Instructions:

1. **Create Folder Structure**

   - Create `frontend/` for React, and `backend/` for Express.

2. **Set Up Backend (Express)**

   - In `backend/`, either:
     - Copy the Express starter code from the class repo, or
     - Run `npm init`, then `npm install express`
   - Make sure to keep the `bin/` folder and `"type": "module"` in your `package.json`.

3. **Set Up Frontend (React)**

   - In `frontend/`, paste your React code.
   - Make any frontend changes here (do **not** edit directly in `public`).
   - Run `npm run build` to generate production-ready files in the `build/` folder.

4. **Copy Build to Backend**

   - Copy the contents of `frontend/build/` into `backend/public/`.

5. **Write Server Code**

   - In the `backend/`, write your Express routes and logic as usual.
   - The Express app will serve your React build via the `public` folder.

6. **Repeat as Needed**
   - Every time you make a change to the React frontend:
     1. Run `npm run build` in `frontend/`
     2. Copy the updated `build/` into `backend/public/`

Version 1 of this demo is written by: Anthony Wen
Cleanup by david pham
