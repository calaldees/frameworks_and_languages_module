Technical Report
================

(intro)


Server Framework Features
-------------------------

### (Express route example)

Web applications use a routing technique which is a mechanism that the HTTP methods and URLs are routed to a specific function within the code to handle it. For example we can bind the `route /`hello to the `helloWorld()` function in the flask application as bellow and the output of that function will be shown in your browser which is "Hello World!". Similarly you can add parameters to the url path (route):

``` python
from flask import Flask

app = Flask(__name__)

@app.route("/hello")
def hello_world():
    return "<p>Hello, World!</p>"
```

This is especially useful to give a meaningful url to the web application and to the pages within the web app and what the app should do/display when a user visit a certain page.
### References:
- Flask Tutorial: Routes [Online]. Python Tutorial . Available at: pythonbasics.org/flask-tutorial-routes/ (Accessed: 9 October 2022).
- Web Development with Node and Express by Ethan Brown [Online]. Web Development with Node and Express [Book]. Available at: www.oreilly.com/library/view/web-development-with/9781491902288/ch14.html (Accessed: 9 October 2022).


### (Middleware)

In Express framework Middleware are functions that are called to process a specific task after the server receives a request from the client and before the response is sent back. for example we use the built-in middleware in Express to json the data that is received from the requests as shown in the snippet code bellow
``` JavaScript
app.post('/item', (req,res)=>{
  
    items.push(req.body)
    return res.status(201).json(items)
})
```
The route above with url ```/item```  in the application accepts an item data in JSON format, So we use the built-in middleware ```express.json``` for parsing the incoming JSON payload and attach it to the router object.

### References:

- T. Hombergs, (2022). Complete Guide to Express Middleware [Online]. Available at: reflectoring.io/express-middleware/ (Accessed: 15 October 2022).
 - Using Express middleware [Online]. Available at: expressjs.com/en/guide/using-middleware.html (Accessed: 15 October 2022).

### (name of Feature 3)

(Technical description of the feature - 40ish words - 1 mark)
(A code block snippet example demonstrating the feature - 1 mark)
(Explain the problem-this-is-solving/why/benefits/problems - 40ish words - 1 mark)
(Provide reference urls to your sources of information about the feature - required)


Server Language Features
-----------------------

### (The `Let` Keyword)

The keyword `let` in JavaScript was introduced in ECMAScript 2015 to provide the variables with the following features:
* Cannot be accidentally redeclared
* Have Block Scope.
* cannot be  hoisted (variable must be Declared before use)
``` JavaScript
app.get('/items' ,(req,res)=>{
  res.status(200)
  let ITEMS= Object.values(items)
  res.json(ITEMS)
```

JavaScript before ECMAScript 2015 had only global scope which means variables defined with `var` can be accessed from out side its block. In the code snip above I didn;t want to access the variable `ITEM` outside that block so I defined it with the keyword `let`
### References
- https://www.w3schools.com/JS/js_let.asp
- https://data-flair.training/blogs/features-of-javascript/


### (name of Feature 2)

(Technical description of the feature - 40ish words - 1 mark)
(A code block snippet example demonstrating the feature - 1 mark)
(Explain the problem-this-is-solving/why/benefits/problems - 40ish words - 1 mark)
(Provide reference urls to your sources of information about the feature - required)


Client Framework Features
-------------------------

### (Event Handling)

Vue event handling is a necessary aspect of every Vue project, using the v-on directive or @ for short, it allow us to listen to DOM events and run either an event handler method or run JavaScript code when triggered. Vue handler could be: 
* Inline handlers: to be executed when the event is triggered. 
* Method handlers: A path that points to a method defined on the component.

Inline handler:
``` JavaScript
<form @:submit.prevent="addItem">
```
Method handlers:

```JavaScript
  methods: {
    clearItem(){
      this.item ={...this.item, ...{
        item:{
        id: Math.random(),
        user_id:'',
        lat:'',
        lon:'',
        image:'',
        keywords:'',
        description:'',
        date: Date.now(),
      }}
```
This allow us to handle user input, or add dynamic functionality to the app 

### References:
- https://vuejs.org/guide/essentials/event-handling.html#calling-methods-in-inline-handlers
(Provide reference urls to your sources of information about the feature - required)
- https://v2.vuejs.org/v2/guide/events.html


### (name of Feature 2)

(Technical description of the feature - 40ish words - 1 mark)
(A code block snippet example demonstrating the feature - 1 mark)
(Explain the problem-this-is-solving/why/benefits/problems - 40ish words - 1 mark)
(Provide reference urls to your sources of information about the feature - required)


### (name of Feature 3)

(Technical description of the feature - 40ish words - 1 mark)
(A code block snippet example demonstrating the feature - 1 mark)
(Explain the problem-this-is-solving/why/benefits/problems - 40ish words - 1 mark)
(Provide reference urls to your sources of information about the feature - required)


Client Language Features
------------------------

### (name of Feature 1)

(Technical description of the feature - 40ish words - 1 mark)
(A code block snippet example demonstrating the feature - 1 mark)
(Explain the problem-this-is-solving/why/benefits/problems - 40ish words - 1 mark)
(Provide reference urls to your sources of information about the feature - required)

### (name of Feature 2)

(Technical description of the feature - 40ish words - 1 mark)
(A code block snippet example demonstrating the feature - 1 mark)
(Explain the problem-this-is-solving/why/benefits/problems - 40ish words - 1 mark)
(Provide reference urls to your sources of information about the feature - required)


Critique of Server/Client prototype
---------------------

### (name of Issue 1)

(A code snippet example demonstrating the feature - 1 mark)
(Explain why this pattern is problematic - 40ish words 1 mark)

### (name of Issue 2)

(A code snippet example demonstrating the feature - 1 mark)
(Explain why this pattern is problematic - 40ish words 1 mark)


Future Technology Suggestions
-----------------------------

### (name of technology/feature 1)

(Description of a feature or tool - 40ish words - 1 mark)
(Why/benefits/problems with using this - 40ish words - 1 mark)
(Provide reference urls to your source of information about this technology - required)


### (name of technology/feature 2)

(Description of a feature or tool - 40ish words - 1 mark)
(Why/benefits/problems with using this - 40ish words - 1 mark)
(Provide reference urls to your source of information about this technology - required)


### (name of technology/feature 3)

(Description of a feature or tool - 40ish words - 1 mark)
(Why/benefits/problems with using this - 40ish words - 1 mark)
(Provide reference urls to your source of information about this technology - required)
