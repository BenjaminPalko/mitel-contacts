[![Build Status](https://travis-ci.org/BenjaminPalko/mitel-contacts.svg?branch=master)](https://travis-ci.org/BenjaminPalko/mitel-contacts)

# Contacts Web Application
Web application built for Mitel interview process.

## Getting Started
To get the app running you will need NodeJS install on your system. If you are running Windows you can find the download [here](https://nodejs.org/dist/v12.15.0/node-v12.15.0-x64.msi).

If you are running Linux then you can install through your Distro repository.
```bash
sudo apt install nodejs
```

## Running the App
The application needs to be run from command line or through a Javascript IDE (like Webstorm). Some libraries may need to be installed:
```bash
npm install express body-parser pg
```
Then to run the application navigate to the project root directory:
```bash
nodejs server.js
```

## Instructions
Using NodeJS as the server side code, for the client side you can use the language of your choice and any one of the following database(mySQL,Potgres,SQL Server)
 
1. Create a simple webpage that allows a user to create contacts (name,email address, phone number)
2. Add client side validation on the email address field
3. Allow the ability to retrieve X contacts (Get N Contacts) 


## Built With

- [Webstorm](https://www.jetbrains.com/webstorm/) - Javascript IDE
- [PostgreSQL](https://www.postgresql.org/) - Database used for storing model data
- [Node.js](https://nodejs.org/en/) - Backend used for hosting REST API
- [express](https://expressjs.com/) - Web framework used for API
- [body-parser](https://www.npmjs.com/package/body-parser) - Parses data into JSON
- [pg](https://node-postgres.com/) - Postgres client for NodeJS
- [AngularJS](https://angularjs.org/) - Front-end framework
- [Bootstrap4](https://getbootstrap.com/) - CSS framework
- [UI Bootstrap](https://angular-ui.github.io/bootstrap/) - Bootstrap in AngularJS


## Author
- **Benjamin Palko**
