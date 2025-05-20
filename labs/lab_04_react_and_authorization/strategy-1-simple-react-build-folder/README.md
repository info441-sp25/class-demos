# Instructions for lab 9 : React + Express Deployment

> **Note:** If you're unsure about anything, **just copy all files from the demo repo**, including large folders like `bin` and `node_modules`.

This setup uses React for the frontend and Express for the backend. The React frontend is built and manually copied into the Express server’s `public` folder after every update.

- The React app replaces the static files that used to live in the `public` folder (like `identity.js`, `userInfo.js`, `utils.js`).
- React handles state with `useState`, `useEffect`, etc.
- Handler functions (like `handleSignIn`, `handleSignOut`) in React connect to Express routes. Use consistent naming conventions with a `handle` prefix.

**Note:** DO NOT DELETE THE `bin` folder that the express starter had and also the `"type":"module"` in package.json.

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

Instructions redone by David Pham
