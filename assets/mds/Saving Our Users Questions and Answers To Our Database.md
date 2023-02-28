# Saving Our Users Questions and Answers To Our Database

## ***Save To Database:***

In this example, we use MongoDB as our database implementation. 

![backend-database-function](https://github.com/djtoler/ChatBot--ChatGPT-AWS.Polly/blob/main/assets/backend-database-function.PNG)

The photo above is our database schema.   

**At line 4 and 5**, we see that our schema consists of a simple object that contains a

- `question & answer object`
- `time-stamp object`

![backend-database-schema](https://github.com/djtoler/ChatBot--ChatGPT-AWS.Polly/blob/main/assets/backend-database-schema.PNG)

In the photo above, starting at line 3, we make a function called `saveToMongoDB`. 

This function takes a question and answer as parameters. We use [MongoDB’s create function](https://www.mongodb.com/docs/manual/reference/command/create/) to create a new document that will save our users question and answer and we call this function at line 10.

![backend-database-snapshot](https://github.com/djtoler/ChatBot--ChatGPT-AWS.Polly/blob/main/assets/backend-database-snapshot.PNG)