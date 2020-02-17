# About

This is a Login/Auth app with the MERN stack.

## TO DO:

- [ ] The links in my client home don't work.
- [ ] The Part 3 of the tutorial;

## Learning From:

- [Build a Login/Auth App with the MERN Stack — Part 1 (Backend)](https://blog.bitsrc.io/build-a-login-auth-app-with-mern-stack-part-1-c405048e3669)
- [Build a Login/Auth App with the MERN Stack — Part 2 (Frontend & Redux Setup)](https://blog.bitsrc.io/build-a-login-auth-app-with-mern-stack-part-2-frontend-6eac4e38ee82)
- [Build a Login/Auth App with the MERN Stack — Part 3 (Linking Redux with React Components)](https://blog.bitsrc.io/build-a-login-auth-app-with-the-mern-stack-part-3-react-components-88190f8db718)

## The Server

A brief description for each package and function it will serve:

- <code>[bcryptjs](https://www.npmjs.com/package/bcryptjs)</code>: used to hash passwords before we store them in our database;
- <code>[body-parser](https://www.npmjs.com/package/body-parser)</code>: used to parse imcoming request bodies in middleware;
- <code>[concurrently](https://www.npmjs.com/package/concurrently)</code>: allows us to run our backend and frontend concurrently and on different ports;
- <code>[express](https://www.npmjs.com/package/express)</code>: sits on top of <code>Node</code> to make the routing, request handling, and responding easier to write;
- <code>[is-emplty](https://www.npmjs.com/package/is-empty)</code>: global function that will come in handy when we use <code>validator</code>;
- <code>[jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)</code>: used for authorization;
- <code>[mongoose](https://www.npmjs.com/package/mongoose)</code>: used to interact with MongoDB;
- <code>[passport](https://www.npmjs.com/package/passport)</code>: used to authenticate requests, which it does through an extensible set of plugins knowns as <code>strategies</code>;
- <code>[passport-jwt](https://www.npmjs.com/package/passport-jwt)</code>: <code>passport</code> strategy for authenticating with a JSON Web Token (JWT); lets you authenticate endpoints using a JWT;
- <code>[validator](https://www.npmjs.com/package/validator)</code>: used to validate inputs (e.g. check for valid email format, confirming passwords match).

We use [mLab](https://mlab.com) for MongoDB in this example.

## The Client

A brief description of each package and function it will serve:

- <code>[axios](https://www.npmjs.com/package/axios)</code>: promise based HTTP client for making requests to our backend;
- <code>[classnames](https://www.npmjs.com/package/classnames)</code>: used fro conditional classes in our <code>JSX</code>;
- <code>[jwt-decode](https://www.npmjs.com/package/jwt-decode)</code>: used to decode our <code>jwt</code> so we can get user data from it;
- <code>[react-redux](https://www.npmjs.com/package/react-redux)</code>: allows us to use <code>Redux</code> with <code>React</code>;
- <code>[react-router-dom](https://www.npmjs.com/package/react-router-dom)</code>: used for routing purposes;
- <code>[redux](https://www.npmjs.com/package/redux)</code>: used to manage state between components (can be used with <code>React</code> or any other view library);
- <code>[redux-thunk](https://www.npmjs.com/package/redux-thunk)</code>: middleware for <code>Redux</code> that allow us to directly access the dispatch method to make asynchronous calls from our actions.