Technical Report
================

(intro)


Server Framework Features
-------------------------

### 1- Express routing

Routing is a mechanism that determine how HTTPs requests. Express ```app``` will allow you to map/register the request method and path to a specific function to produce a response. For example, ```app.get()``` to handle GET request and ```app.post()``` to handle post request. In the code snipped below in an example of a ```get``` callback function to handle a GET request and respond back with HTML page.

``` JavaScript
app.get('/', (req, res) => {
  return res.status(200).send('<html><body>Your HTML text</body></html>')
})
```
This is particularly useful to to manage the application urls structure and how the app should behave when a user visit a certain page.
### References:
- https://expressjs.com/en/guide/routing.html
- https://expressjs.com/en/starter/basic-routing.html
- https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes


### 2- Middleware

Middleware are functions that are called to process/perform a specific task after the server receives a request from the client and before the response is sent back. For example we use the built-in middleware in Express to json the data that is received from the requests as shown in the snippet code bellow
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

### 2- Templating

Express uses template engine such as EJS, Pug, and Mustache that allow you to generate HTML dynamically and remove cluttering from the server side with the HTML. in the code snipped below we set the view engine to ```pug``` then a get call and render the view:
``` javascript
app.set('view engine', 'pug');
app.get('/home', (req, res) => {
  res.render('home');
});
```
in ```views``` directory we can add the template where it will be created with ```h2``` tag and ```p``` tag with it corresponding text as bellow, 
```
h2 Hello World
p This is my first view
```
The benefits of using templating engines is reduces page load time and client side processing as well as design complexity.

### References:
- https://rachelanderse.medium.com/express-js-features-fundamental-concepts-1cc446b21ccb
- https://www.geeksforgeeks.org/how-to-do-templating-using-expressjs-in-node-js/
- https://www.digitalocean.com/community/tutorials/nodejs-express-template-engines

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

### (infinity loop)

``` python
        while True:
            s.listen()
            try:
                conn, addr = s.accept()
            except KeyboardInterrupt as ex:
                break
            with conn:
                #log.debug(f'Connected by ')
                #while True:
                    data = conn.recv(65535)  # If the request does not come though in a single recv/packet then this server will fail and will not composit multiple TCP packets. Sometimes the head and the body are sent in sequential packets. This happens when the system switches task under load.
                    #if not data: break
                    try:
                        request = parse_request(data)
                    except InvalidHTTPRequest as ex:
                        log.exception("InvalidHTTPRequest")
                        continue
```
Noticing here ```while True:```  it initiates an infinite loop that will theoretically run forever, it will keep the server active and listening for a response from the client  
(Explain why this pattern is problematic - 40ish words 1 mark)

### (render items)

``` python
function renderItems(data) {
		const $item_list = document.querySelector(`[data-page="items"] ul`);
		const new_item_element = () => document.querySelector(`[data-page="items"] li`).cloneNode(true);
```
looking at the code in example_client we notice that the rendering is happening all over the place
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
