Technical Report
================

This report contains technical documentation and justification for the effectiveness of the frameworks that have been chosen to develop the FreeCycle software. In addition, it contains Critique of Server/Client prototype and few possible technology suggestions.


Server Framework Features
-------------------------

### 1- Express routing

Routing is a mechanism that determine how HTTPs requests. Express ```app``` will allow you to map/register the request method and path to a specific function to produce a response. For example, ```app.get()``` to handle GET request and ```app.post()``` to handle post request. In the code snippet below in an example of a ```get``` callback function to handle a GET request and respond back with HTML page.

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

### 3- Templating

Express uses template engine such as EJS, Pug, and Mustache that allow you to generate HTML dynamically and remove cluttering from the server side with the HTML. in the code snippet below we set the view engine to ```pug``` then a get call and render the view:
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

### 1- The `Let` Keyword

The keyword `let` in JavaScript was introduced in ECMAScript 2015 to provide the variables with the following features:
* Cannot be accidentally redeclared
* Have Block Scope.
* cannot be  hoisted (variable must be Declared before use)
``` JavaScript
app.get('/items' ,(req,res)=>{
  res.status(200)
  let ITEMS= Object.values(items)
  res.json(ITEMS)
})
```

JavaScript before ECMAScript 2015 had only global scope which means variables defined with `var` can be accessed from out side its block. In the code snippet above I didn't want to access the variable `ITEM` outside that block so I defined it with the keyword `let`
### References
- https://www.w3schools.com/JS/js_let.asp
- https://data-flair.training/blogs/features-of-javascript/


### 2- Mutability
Objects and arrays can be changed when using build-in functions such as `sort()` without creating an entirely new value while using `filter()` will create a copy of the array
```javascript
    res.status(200).json(Object.values(items).filter(i  => i.user_id == req.query.user_id))
```
this can be problematic as you cannot predict the outcome of the program because the execution of one part of the code will modify the object and may effect it use later.

### References
- https://developer.mozilla.org/en-US/docs/Glossary/Mutable#:~:text=Mutable%20A%20mutable%20value%20is%20one%20that%20can,the%20variable%20that%20holds%20it%20may%20be%20reassigned.
Client Framework Features
- https://medium.com/swlh/javascript-array-mutability-immutability-93d366c90751

Client Framework Features
-------------------------

### 1- Event Handling

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


### 2- Binding data with existing html



### 3- Declarative Rendering
it allow us to render data to the DOM declaratively and let the framework decide how to display the the data correctly to the user. The "Mustache" syntax ```{{variable}}``` acts as a placeholder for the data to be rendered as shown in the code snipped below:
```javaScript
<p class="card-text">Keywords: {{item.keywords}}</p>
<p class="card-text">Latitude: {{item.lat}}</p>
<p class="card-text">Longitude: {{item.lon}}</p>
```
Inside Vue app a data property is a property holder that holds data properties. Then, by using multiple template syntax, these data properties are rendered to the DOM.

```javaScript
 createApp({
      data() {
        return {
          item: {
            id:'',
            user_id:'',
            keywords:'',
            lat:'',
            lon:'',
            image:'',
            date_from:'',
            description:'',
          },
```
This is particularly useful as it provides variable synchronization without the need for additional functions to re-render variables with its corresponding value to the DOM.

### References:
- https://medium.com/@onyenekwelizabeth/declarative-rendering-in-vue-8754640c42ac#:~:text=DECLARATIVE%20RENDERING%20IN%20VUE%20Vue%20js%20uses%20a,instead%20of%20actually%20using%20the%20native%20DOM%20object.
- https://www.geeksforgeeks.org/vue-js-declarative-rendering/
- https://www.kylontyner.com/what-is-declarative-rendering-in-vue/

Client Language Features
------------------------

### 1- Spread Operator
It is a feature that enable us to access content of an iterable data structure such array or dictionary without having to use `for` or `foreach()` to loop through it's content
```javascript
     clear_item(){
        this.item= { ...this.item, ...{
            user_id:'',
            keywords:'',
            lat:'',
            lon:'',
            image:'',
            description:'',
        }}
     }
```
```javascript
const arrayMerged = [...arrayOne, ...arrayTwo]
```
spread operator allow us to do deep copy, combine two iterable objects, Inserting data without any complex process.
### References:
- https://blog.alexdevero.com/javascript-spread-operator/
- https://www.geeksforgeeks.org/javascript-spread-operator/

### 2- Async Processing
JavaScript is a single-threaded language so using async processing give the ability to calls the next function to be executed without waiting for the current or previous one to finish. ```then()``` function in JavaScript used to handle asynchronous tasks such as API call. It is defined in the Promise API.
```javaScript
create_item() {
  fetch(`${urlAPI}/item`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(this.item),
    })
    .then(response => response.json())
    .then(this.clear_item)
    .then(this.get_items)
    .catch(err => console.error(err));
    }
```
This is particularly useful technique as it enables the program to start long-running task and still be responsive to other events.

### References:
- https://javascript.plainenglish.io/asynchronous-javascript-introducing-async-and-await-5b15e971b43a#:~:text=Asynchronous%20processing%20is%20one%20of%20the%20most%20important,from%20the%20disk%2C%20or%20interacting%20with%20user%20input
- https://www.geeksforgeeks.org/understanding-the-async-in-javascript/
- https://www.geeksforgeeks.org/why-we-use-then-method-in-javascript/


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

### 1- Serverless (AWS) 
It is where a cloud service provider handle the management of the server infrastructure allowing developers to focus on developing their program that run and deployed on the cloud wherever/whenever they are needed. It also can scale up/down to match the demand for the application on the basis of pay per execution making it cost effective.
The drawback with this tech is when you write an AWS lambda and your business grow the cost will increase and you cannot switch your business to another technology in the future.

### References 
- https://www.redhat.com/en/topics/cloud-native-apps/what-is-serverless
- https://azure.microsoft.com/en-gb/resources/cloud-computing-dictionary/what-is-serverless-computing/
- https://www.cloudflare.com/en-gb/learning/serverless/what-is-serverless/

### MongoDB
Using MongoDB (NoSQL Document-oriented database) allow you to manage big collection of unstructured data providing scalability, flexibility unlike SQL database, where it has fixed tables and schema format making handling updates a complex process. In addition, MongoDB accomplish the concept of sharding by dividing data among several MongoDB instances, making it possible to scale horizontally. In case of hardware failure, MongoDB operate across multiple servers, balancing the load and providing redundancy to the data to keep the system operational.

### References 
- https://www.guru99.com/what-is-mongodb.html#:~:text=MongoDB%20is%20a%20document-oriented%20NoSQL%20database%20used%20for,are%20the%20basic%20unit%20of%20data%20in%20MongoDB.
- https://www.guru99.com/nosql-tutorial.html
- https://www.oracle.com/database/nosql/what-is-nosql/

### GraphQL

GraphQL solve the problem of over fetching which saves bandwidth and reducing payload by reducing Waterfall network requests on nested data. In addition, client can specify the shape of each request's response. Furthermore, it just exposes a single HTTP Endpoint ```(/graphql)``` to obtain the necessary data reducing the complexity of managing API Endpoints.
The downside in GraphQL, it is difficult to construct a simplified cache than it is to implement it using REST.

### References 
- https://medium.com/open-graphql/graphql-1-140fab436942
- https://www.robinwieruch.de/why-graphql-advantages-disadvantages-alternatives/#graphql-disadvantages
- https://www.howtographql.com/basics/1-graphql-is-the-better-rest/

