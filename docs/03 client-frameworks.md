Client Frameworks
=================

Objectives
----------
1. Understand the requirements for the client component of the assessment
2. Understand how we can manipulate dynamic webpages with the javascript DOM
3. Understand how we can perform HTTP requests in javascript
4. Understand the basic features of client side frameworks
    * vue.js
    * hyperapp
    * react

Other
-----

* GitHub - fetch upstream


Demo Client Example (15min)
-------------------

* cypress tests
    * `make run_example_server_client`
    * `make test_example_client`
    * `make test_client`
    * Safety net (example_server)
        * You don't have to complete a working server before starting the client
        * `run_your_client_with_example_server`
        * `test_your_client_with_example_server`
    * Running on GitHub Actions



Types of Web Applications (15min)
-------------------------

(A simplified and not entirely accurate overview)

* Server Rendered 
    * (majority of dynamic websites before 2014)
    * Invented when browsers were less capable and had less features
    * Loads/Requests entire new page every link/click/action
    * Server template rendering
    * Example
        * [Django](https://www.djangoproject.com/) python
        * [Rails](https://rubyonrails.org/) ruby
* Single Page Webapp 
    * (majority of webapps after 2014)
    * Client Application supported with Server API
    * Loads js app once on first visit - uses server api on some click/action
    * Client/Browser template rendering (shadow-dom)
    * Can support realtime bi-direction communication with web-sockets
    * Example
        * [React] javascript
        * [angular] javascript
        * [vue] javascript
* Static Site Generation
    * (grew significantly in popularity form 2014)
    * Generate entire (static) site (efficiently) on data change
    * Example
        * [jekyll](https://jekyllrb.com/) ruby
        * [hyde](https://hyde.github.io/) python
        * [hugo](https://gohugo.io/) golang


Browser: Document Object Model (DOM) (30min)
--------------------------------------------

* visit the url `about:blank`, press `F12` for developer tools, view `console`

```javascript
// Open a blank browser tab and bring up devtools (F12)
// Type the following a line at a time

text = document.createElement("p")
text.textContent = "Hello World"
document.body.appendChild(text)
text.textContent = "Hello World 2"
text.style = "color: red;"
// Notice how updating the `text` object updates the page

// Inspect the DOM in devtools
document.body.children
document.body.children[0]

// Set data attributes and query them
text.dataset['test'] = 3
text2 = document.querySelector(`[data-test='3']`)
text2.remove()
document.body.appendChild(text)  // you still have a variable `text` and can re-add it

// TASK:
// 1.) using the techniques above create the following html structure with javascript code
//   hints - you need to create a `ul` -> add it to the dom -> create `li` add it as a child to `ul`
/*
<ul>
    <li data-id="a">Bread</li>
    <li data-id="b">Milk</li>
    <li data-id="c">Eggs</li>
</ul>
*/
// 2.) use querySelector to find id="b" and remove it
```
Further Reading
* MDN [Document.querySelector()](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)

Questions
* How many lines of code do you need to add each `li`. 
    * Do you think this could be reduced?
    * Hint: client frameworks will have a way of reducing this
* Understand
    * DOM functions `createElement`, `appendChild`, `textContent`, `dataset['xx']`->`data-xx`, `querySelector`
    * Creating DOM elements in plain javascript is cumbersome and hard to follow
    * `data` attributes and how they can be selected/found with query (IMPORTANT CONCEPT)


<details>

```javascript
const $ul = document.createElement("ul")
document.body.appendChild($ul)

let $li = undefined

$li = document.createElement("li")
$ul.appendChild($li)
$li.textContent = "Bread"
$li.dataset.id = "a"

$li = document.createElement("li")
$ul.appendChild($li)
$li.textContent = "Milk"
$li.dataset.id = "b"

$li = document.createElement("li")
$ul.appendChild($li)
$li.textContent = "Eggs"
$li.dataset.id = "c"

document.querySelector(`[data-id='b']`).remove()
```
</details>


Client Frameworks (10min)
-----------------

* Question:
    * Given working with the DOM is long winded and a pain in the ass ... 
    * Why do we have client frameworks?

* Separate out:
    * State
        * (You have all of your variables/state in one object - not loose variables in js code)
    * Logic/Actions
        * (You do not change the state - the framework calls your functions to manipulate the state when needed)
    * Template/Visuals/Look
        * (You do not manipulate/manage the DOM, the framework does)
* Every time we change our application’s _state_, with our _actions_ (functions), the framework efficiently re-renders the _template_ (UI/DOM) to match.
* Considering
    * Async/multithreading (things happen at different times and take indeterminate time)




HTML Boilerplate (10min)
----------------

Anatomy of basic html page (for upcoming tutorials)


`index.html`
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <link id="favicon" rel="shortcut icon" type="image/png" href="data:image/png;base64,....==" />
    <title>Boilerplate</title>
    <style>

    /* styles here */

    </style>
    <script src=""></script>
</head>
<body>
    <h1>HTML Boilerplate</h1>

    <!-- html here -->

<script type="module">

    // javascript here

</script>
</body>
</html>
```

* `mkdir my_cool_html_folder`
    * create `index.html` with boilerplate above
* To serve local folder via http
    * `python -m http.server 8001`
* (extra) to server static files from container
    * suggest [nginx](https://www.nginx.com/)
    * see `Dockerfile` in `examples/client/vue_test` or `examples/client/hyperapp`
* Note about `index.html`
    * Any file called this will load by default at the root path `/`



Vue.js (1 hour)
------

* [vuejs.org](https://vuejs.org/)
    * See _Why Vue.JS_ video (3min)
        * Lots of techno babel - important concept "progressive framework"
    * [vuejs.org/guide/quick-start.html#enabling-import-maps](https://vuejs.org/guide/quick-start.html#enabling-import-maps)
    * [vuejs.org/examples](https://vuejs.org/examples/)
        * `Options` API (rather than `Composition`) and `HTML` (rather than `SFC`(SingleFileComponent))
        * Go thought all the `Basic` items
            * especially https://vuejs.org/examples/#handling-input
* Example
    * [frameworks_and_languages_module/examples/client/vue_test](https://github.com/calaldees/frameworks_and_languages_module/tree/main/examples/client/vue_test)
        * Using `nginx` server
    * You could choose to use the `npm init vue` method. See react example for tips on containerising - but this creates loads of file and needs the vue server to build and serve the code'

### Concepts

* Progressive (you don't need EVERYTHING to start with, you can use/add more of the framework incrementally as you need it)
* State, View and Actions are separate
* Template/View (can be) made in html and mounted/attached to code (`v-if`, `v-for`)
* Vue components (advanced concept) can be separate/modular

### Further Reading
* [VueMastery - Intro to Vue 3](https://www.vuemastery.com/courses/intro-to-vue-3/intro-to-vue3/)
    * 20min video (1 hour to do?) video course for complete shopping basket with repo example

### Hint for assignment
```html
<!-- https://vuejs.org/guide/essentials/event-handling.html#event-modifiers -->
<!-- the submit event will no longer reload the page -->
<form @submit.prevent="onSubmit"></form>
```


HyperApp Tutorial (45min)
-----------------

* [Hyperapp](https://github.com/jorgebucaran/hyperapp)
    * Tiny 1k framework
* Try _Todo example_ in CodePen
* serve the todo file yourself
    * `Makefile` + `Dockerfile` on port 8001
* [package: hyperapp/html](https://github.com/jorgebucaran/hyperapp/tree/main/packages/html)
* [Tutorial](https://github.com/jorgebucaran/hyperapp/blob/main/docs/tutorial.md)
    * is a bit heavy going
* Example
    * [frameworks_and_languages_module/examples/client/hyperapp](https://github.com/calaldees/frameworks_and_languages_module/tree/main/examples/client/hyperapp)

### Concepts
* html elements are generated with the `h()` function
    * Templates/view built with functions
* State, View and Actions are separate
* Altering the state requires an Action function



React (1hour)
-----

Facebook
200kb

* [react.dev/learn](https://react.dev/learn)
    * is incomplete - they push you to extended frameworks - so I have some more bits below
* Setup
    * `npx create-react-app my-app` && `cd my-app` && `npm start`
        * > added 1458 packages in 2m
        * `du -shc node_modules/` .. yes .. you read xxxMB correctly! .. react is one fat chunky monkey
    * `rm src/*` remove the spiny example crud
    * `src/index.js`
        * ```javascript 
            import React from 'react';
            import ReactDOM from 'react-dom/client';

            import RootComponent from './App';

            const root = ReactDOM.createRoot(document.getElementById("root"));
            root.render(<RootComponent />);
            ```
    * `src/App.js` -> copy from https://react.dev/learn `MyButton` `MyApp`
    * Profile Example
        * create `profile.css` and `profile.js`. 
        * add `import './profile.css';` to profile.js. 
        * Update `import RootComponent from './profile';`
    * Products Example
        * create `products.js`
    * Actions/Buttons Example
        * create `action_example_1.js`
        * create `action_example_2.js`
* TicTacToe
    * create `tictactoe.js` (copy from full `App.js` example - click 'fork' to get codesandbox.io)
        * add `import './tictactoe.css';`
    * create `tictactoe.css` (copy from full example)
    * Update `index.js` with `import RootComponent from './tictactoe';`
    * Follow tutorial and stop at _Adding Time Travel_ (The history is very cool though)


### Concepts
* Compiler transforms _inline html_ into javascript code to dynamically create elements
    * `jsx` files
    * Q: What problem is `jsx` trying to solve
* State separate from components
* Lifting state up
    * Components do not communicate with each other (except though shared functions/actions)
* Immutability
* Function components (shorthand)

### Further Reading
* [5 Steps to THINK in React](https://www.codestackr.com/blog/5-steps-to-think-in-react/)
* [react.dev](https://react.dev/)
    * recommends [Next.js](https://nextjs.org/) for server side integration and [Remix](https://remix.run/) for state in parallel


Client Further Reading
----------------------

* [Introduction to client-side frameworks](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Introduction)
* [Sizes of JS frameworks, just minified + minified and gzipped, (React, Angular 2, Vue, Ember)](https://gist.github.com/Restuta/cda69e50a853aa64912d) 2019
    * (cool mini project would be download these from a cdn and list them `ls -lhS`)
* [JavaScript Bloat in 2024](https://tonsky.me/blog/js-bloat/)
    * Valid criticism about most webpages taking 5mb+ of javascript.
    * Size of large popular webapps/pages in kb.
* MonoCubed [List of 10 Best Front end Frameworks](https://www.monocubed.com/best-front-end-frameworks/)
    * [Ember.js](https://emberjs.com/)
        * build, testing, data layer - the whole set!
    * [Angular.io](https://angular.io/) Google
    * [ractive.js](https://www.ractivejs.org)
    * [knockoutjs](https://knockoutjs.com/) - data binding framework, for any framework (how?)
    * [MeteorJS](https://www.meteor.com/) - a full stack server/client wrapper for frameworks to deploy to any device? a framework frameworks?
* Other Frameworks in other langauges
    * [fritz2](https://www.fritz2.dev/) Kotlin
    * [WebApps with PureScript & RactiveJS](https://blog.brakmic.com/webapps-with-purescript-and-ractivejs/)
* Frontend Frameworks
    * [The Market for Lemons](https://infrequently.org/2023/02/the-market-for-lemons/)
        * js does not perform well on low end android phones - frameworks are too big and developers are stupid for using them
    * [The case for frameworks](https://seldo.com/posts/the_case_for_frameworks)
        * SPA are good for: long running sessions with login-gate
        * > money doesn't care how the developer experiences anything, money cares how fast they work. Any framework obviously takes more time to get started than a simple static site, but I think it's uncontroversial to claim that over time, a framework like React is going to save your developers time: that's what frameworks are invented to do. Let's be clear why that is, though: 
        * > React has already been used to solve your problem: the React ecosystem will get you 80% of the way there with pre-built solutions and well-documented boilerplate.
* [Simple, Modern JavaScript](https://vue-mjs.web-templates.io/blog/javascript) 2023
    * Doing most things with vue3 and tailwind


Other Client frameworks
-----------------------

These looks cool. I've not investigated them.

* [Nue.js](https://nuejs.org/)
    * Absolutely tiny
    * Super hot reload
* [solid.js](https://www.solidjs.com/)
    * > Solid follows the same philosophy as React with unidirectional data flow, read/write segregation, and immutable interfaces. It however has a completely different implementation that forgoes using a Virtual DOM.
    * Fragments, Portals, Context, Suspense, Error Boundaries, Lazy Components, Async & Concurrent Rendering, Implicit Delegation, SSR & Hydration, Directives
    * See "Intro to Solid is 100 Seconds" video on main page
* [Elm](https://elm-lang.org/)
    * Elm is a functional language that compiles to JavaScript. It helps you make websites and web apps. It has a strong emphasis on simplicity and quality tooling.
* [Fresh](https://fresh.deno.dev/)


Unsorted
========
Linked in [other-frameworks.md](09 other-frameworks.md)
* [How to OVER Engineer a Website // What is a Tech Stack?](https://www.youtube.com/watch?v=Sxxw3qtb3_g) YouTube 11min FireShip
    * Talks though all the tech for client, server, ci, containers and then suggests a cutdown concept
    * [stackshare.io/stacks](https://stackshare.io/stacks) - Popular Tech Stacks: The open source tools and SaaS behind popular tech companies


No Framework
------------

Modern browsers are exceptionally capable and standardized. There is no need for heavy modern build chains and transpilation. With a few patterns you can build UI's with no dependencies.

* [Building a Frontend Framework; Reactivity and Composability With Zero Dependencies](https://18alan.space/posts/how-hard-is-it-to-build-a-frontend-framework.html)
    * No dependencies.
    * No build-step before it can be used.
* Without a framework (sometimes called 'vanilla javascript') - patters
    * [Plain Vanilla](https://plainvanillaweb.com/)
        * An explainer for doing web development using only vanilla techniques. No tools, no frameworks — just HTML, CSS, and JavaScript.
    * [vanilla-fp](https://github.com/abuseofnotation/vanilla-fp)
        * The no-framework framework for building component-based purely-functional UIs.
    * [VanJS](https://github.com/vanjs-org/van)
        * 🍦VanJS (Vanilla JavaScript): World's smallest reactive UI framework
* https://htmx.org/
    * > htmx gives you access to AJAX, CSS Transitions, WebSockets and Server Sent Events directly in HTML, using attributes, so you can build modern user interfaces with the simplicity and power of hypertext
    * > htmx finished 2nd in the 2023 JavaScript Rising Stars "Front-end Frameworks" category, just behind React (htmx is a library, btw) and #10 overall! Thank you to everyone who starred us!


Thoughts from a lead engineer
-----------------------------

> My point is that requiring any JavaScript at all for 99% of web apps is a symptom of missing html features.
>
> HTTP has a rich verb syntax, but the supposed "Hyper-text Mark-up Language" only natively supports 2.
> (GET and POST via <a> click and <form> submit)
>
> Why can't I natively allow buttons to fire HTTP DELETE requests?
> HTTP also supports a native events source in the form of SSE, why is this not able to trigger state changes natively
>
> Adoption of new declarative syntax at the HTML level would vastly reduce boiler-plate and bloat, due to the fact that implementation
> would be pushed into the browser
>
> Moreover, I think that the whole idea of the best way to provide UIs to the user is to download a bunch of code and execute it,
> in order to build a local state which can then be rendered is the wrong abstraction.
>
> I think REST/HATEOAS scales way further than we like to admit, and the server is likely the right place to decide how the DOM changes.
>
> The server saying "When you press this button, come and ask me how the state should be" is much easier to reason about than the client saying
> "when I make these actions on the UI, update my state like so and then we can periodically (or on another action) try to reconcile this with the server".
> Offline collaboration apps are the 1% exception to this
> And even those apps, 99% of their features need not work offline
>
> The fact that we are tempted to build offline collaboration apps in the browser at all is probably a symptom of a larger problem.
> The web space has had a disproportionate amount of time and resource poured into it's innovation.
>
> As a consequence, the UI tooling is far upstream of what is possible in native environments.
> This is why we are tempted to build everything as a website, even if from first principles this doesn't make much sense.
>
> The web these days is basically the worlds largest and most unstructured package manager 🤣
>
> I think HTMX (and it predecessor intercooler) is the best attempt at this I've seen.
> However, it goes a bit too far.
>
> I think it's really important to focus on the core idea and try to get it adopted into the HTML standard rather than implement lots of cool extra features
> It is the best attempt I've seen though, so credit where credit is due
> The core though of extending HTML to be able to declaratively define how to apply it's next state is precisely correct
> Basically, you no longer have to replicate a whole state-machine server to client, just the current node and it's edges.
> If the UI is then triggered to progress along that edge, the next node is fetched from the server using the edge as it's reference
