# Names 'n Stuff - server side

## Description

This is the server side of the contacts organizer web app I am building called, "Names 'n Stuff". It is a restful API. Users can create contacts in the database through the frontend(in progress) or through Postman. The app uses JWT user authentication for registration and login of users, as well as for authenticating users for all API routes.

## Technologies Used

- Node.js
- Express
- MongoDB
- PassportJS (passport-jwt)
- Mongoose
- Crypto
- JsonWebToken

## Getting started / Installation Instructions
Prerequisities: Node.js and npm.

Fork and clone this repository.
`npm i`
`node generateKeypair.js`
Set up a local or cloud based instance of a MongoDB database. Then update config/default.js with the correct Mongo credentials. You can create a .env file to save the username and password locally and protect sensitive data from being saved to Github.

After following these instructions, you should be ready to run the server.
`npm run app`
If you see 'Server running on port 8082. Database connected' in the console, the server has been set up successfully!

## Contribution Guidelines

To propose changes and improvements or report a bug, please open an issue in this repository.
