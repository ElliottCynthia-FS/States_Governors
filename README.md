# States and Governors   

*(This code is used for training purposes only.  This was created to practice using Mongoose and MongoDB to perform CRUD operations using Node.js and Express.)*



---

## Installation

To install dependencies, run the following:  

```
npm install

// initialize npm 
npm init

// install dependencies
npm i express dotenv morgan mongoose mongodb

// install dev dependencies
npm i -D nodemon jest
```

- Install nodemon for auto-restarting the server on file changes during development.
- install jest for testing API endpoints
- install express to create the web server and API routes.
- install dotenv to store and load environment variables from .env file.
- install morgan for logging HTTP requests
- install mongoose as ORM for MongoDB and to define schemas/models
- install mongodb as the MongoDB driver and connect to the database

---

Make sure package.json has the following scripts

```json
"scripts": {
    "test":"jest --coverage",
    "start": "node server.js",
    "dev": "nodemon server.js"
    }
```

- Use `jest --coverage` to run tests with coverage report
  - `npm run test` or `npm test`
- Change "test" to `jest --watchAll` for auto-retesting on file changes  
- To run in dev mode: `npm run dev`
  - This will use nodemon to auto restart server on file changes
- If you want to restart the server every time it stops on errors, run `npm start`

---

### **DO NOT FORGET TO CREATE A .GITIGNORE FILE!!**

#### Add

- node_modules (for obvious reasons)
- .env (you may want to add this to avoid committing private info if you store mongodb uri here)
- packagelock.json
- coverage file if you use `jest --coverage` for testing

---  

The goal of this API is to perform basic CRUD operations for states and governors data stored in a MongoDB database.

Other services used

- MongoDB Atlas for cloud hosted MongoDB database
- MongoDB Compass for GUI to view database
- Postman for testing API endpoints and CRUD operations
- [Cody](https://docs.sourcegraph.com/cody/overview) by [Sourcegraph](https://sourcegraph.com/search) because he's my companion now and his smile makes me weak.
