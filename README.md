# algorithm-api

## Steps to Create

1. `touch server.js`
2. `npm init -y`
3. `npm install express`
4. Build basic express server.
   a. Require the express package.
   b. Create an instance of express (probably app)
   c. Define a PORT
   d. Listen on the PORT
   e. Add middleware for JSON POST body

## Scope of the Application

Algorithm API is a server api which is designed to take in a user's input and return the requested response using basic algorithmic patterns.

### Endpoint: Filter Words

This endpoint takes in a string and determines if any "bad" words are included. If so, it filters them out and returns the string.

i.e.

`
const badWordsArray = ["banana", "apple", "orange"];`

`
const stringToEvaluate = "I really hope I get an apple";`

`message = "I really hope I get an "`

#### Steps to Use Filter Words

1. Filter Words is available on the endpoint "/api/filter"
2. Filter Words requires a POST body in the following JSON format:

`{
"stringToEvaluate": "Banana rama fo fee fi fo fama"
}`

3. Filter Words returns a response in the following format:

`{
    "error": false,
    "message": " rama fo fee fi fo fama"
}`


## Steps to Deploy
1. Login to Heroku if not already logged in. 
2. Add and Commit changes to local git.