# react-axios-app


> ### Axios react project (CRUD). In this this project you can GET a post or a list of posts, DELETE a post and POST a new post. It uses axios to perform all these. It also handle expected and unxpected errors using axios interceptor and if their is any error dispay it using toast. Love axios 🤩.

## Getting started


To get this project running locally:

- Clone this repo `https://github.com/Terahpatrick/react-axios-app.git`
- `npm install` or `yarn add` to install all req'd dependencies
- `npm start` or `yarn start` to start the local server (this project uses create-react-app)

Local web server will use port 300. You can configure port in scripts section of `package.json`: we use [cross-env](https://github.com/kentcdodds/cross-env) to set environment variable PORT for React scripts, this is Windows-compatible way of setting environment variables.
 
Alternatively, you can add `.env` file in the root folder of project to set environment variables (use PORT to change webserver's port). This file will be ignored by git, so it is suitable for API keys and other sensitive stuff. Refer to [dotenv](https://github.com/motdotla/dotenv) and [React](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-development-environment-variables-in-env) documentation for more details. Also, please remove setting variable via script section of `package.json` - `dotenv` never override variables if they are already set.  

### Making requests to the backend API

For convenience, I am going to use JSON Placeholder at https://jsonplaceholder.typicode.com/posts for the application to make requests against. You can view [the API spec here](https://jsonplaceholder.typicode.com/posts) which contains all routes & responses for the server.


## Functionality overview

The example application is a social blogging site. It uses a custom API for all requests.

**General functionality:**

- CRUD Posts
- GET and  lists of posts or a single post.

**The general page breakdown looks like this:**

- Home page (URL: /#/ )
    - List of posts
    - create new post button
    - update button
    - delete button
