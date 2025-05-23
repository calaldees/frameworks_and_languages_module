* [Tech Dive - APIs](https://blog.quastor.org/p/tech-dive-apis) REST Vs GraphQL
* [Using HTTP Methods for RESTful Services](https://www.restapitutorial.com/lessons/httpmethods.html)
* [WebHooks.fyi - What are webhooks?](https://webhooks.fyi/docs/webhook-primer)
    * Webhooks are how one system notifies another system of a state change.
    * > In practical terms, a webhook is simply an HTTP request - usually a POST or GET - with a JSON payload or parameters broadcast from the central system. Much of the modern web is built on this distributed communication pattern.

* YouTube [The problem with frameworks - Uncle Bob](https://www.youtube.com/watch?v=evmZTh7l6UE) 2min30seconds
  * You are coupled to their way of working


Frameworks and Languages
========================

* [My experience getting a tech job with no degree or relevant work experience ](https://lowlyswe.substack.com/p/my-experience-getting-a-tech-job)
  * > If you’re doing this alone you basically need to be able to build a RESTful CRUD app (look it up) using some language’s framework. Spring for Java, Django or Flask for Python, Node + React for Javascript are examples of these frameworks. Just pick one and get good at it, depth over breadth. If you’re not sure then google what languages large employers in your area are using. You’ll also need to learn Git and put your projects on Github ( or even better host a website) to have something to show future employers.


MCOMD3PFL Programming Frameworks and Languages

50 hours instruction
150 hours independent

* [GitHub List - Project Based Learning](https://github.com/practical-tutorials/project-based-learning)
* [mapOfComputing](https://github.com/ComputingTeachers/mapOfComputing/)
* [computingteachers.uk/langauge_reference](https://computingteachers.uk/static/langauge_reference.html)

* [Plasmic](https://www.plasmic.app/) - The visual builder for your tech stack.
  * No code - no need to developers


* [twitter - professional developers conversation](https://twitter.com/b0rk/status/1436703520560910337)
    * > when you learn an abstraction first (like Rails), it can be hard to go learn about what's underneath (like TCP) and understand how it relates to the abstraction
      * @b0rk
    * > I really like that you jumped from Rails all the way to TCP in this tweet. People sometimes only think about a single layer of abstraction when the whole technology stack is important 
      * @garethadams

* [View Components, Storybook and Tailwind: The Holy Trinity? Learn how to setup View Components and Storybook for Ruby on Rails.](https://finnian.io/blog/view-components-storybook-tailwind-the-holy-trinity/)
* [Pagnination in openapi](https://github.com/OAI/OpenAPI-Specification/issues/1835)
* [replace-jquery](https://github.com/sachinchoolur/replace-jquery)
  * Automatically finds jQuery methods from existing projects and generates vanilla js alternatives. 
* [High-Performance-Organizations-Reading-List](https://github.com/pdfernhout/High-Performance-Organizations-Reading-List#decreasing-cognitive-load)
  * Paragraph summarising the books/articles - AMAZING!
  * Programmers hit walls of complexity 3,000 30,000 and 300,000
* [FORTRAN.io](https://fortran.io/) - finally, a Fortran Web Framework
* [TI4 Map Generator](https://github.com/DerekPPeterson/ti4-map-generator) - Generate balanced ti4 maps
  * cgi-bin python wrapper to c++ commandline
* [Structural pattern matching in Python 3.10](https://benhoyt.com/writings/python-pattern-matching/)
* [Improve Your Life with Long Error Messages](https://blog.appsignal.com/2021/09/22/improve-your-life-with-long-error-messages.html)
  * Plugin for Ruby to collect error report data from users

one reason I love debugging is that bugs often break through abstraction layers! they help you learn what's underneath

    Generic functionality
    Built-in solutions to a number of common programming problems
    Structure for organizing code
    A development philosophy or an architectural paradigm

    URL routing
    Templating / views
    Database interaction
    Form controls
    DOM manipulation
    Asynchronous requests
    Input validation
    User management
    Session management

Organisation
  MVC
  Model–View–ViewModel 
        Prism
    MCCM Light
    Caliburn Micro

  Model-View-Presenter
        Atom
    Ionic
    React-Native

plugins




Frameworks for what?

AWS Lambda?
    SMTP in lambda
Crypto processing

* [Building apps in minutes, not months](https://alexanderobenauer.com/labnotes/001/) - Conductor Framework Demo
* Django 4 [Fixed #33012 -- Added Redis cache backend. #14437](https://github.com/django/django/pull/14437)

Define vocab + terms - draw the scope

Software framework as a theory
Framework or ecosystem?
AWS is not a framework - serverless? blurly? An operating system is not a framework


Static, dynamic, typed, compiled
Vocab
Strength and weaknesss of langauges

Types of framework
Laguage libs
SDK - libs - compose (pyramid)
Framework Plugins - extendability


Research other courses



Containers for trialling technologies
Kubenettes?

Docker would be difficult to run at a user level on campus

Ian's link
https://docs.microsoft.com/en-us/aspnet/core/tutorials/first-web-api?view=aspnetcore-5.0&tabs=visual-studio-code



Languages
---------

* Assembler
  * Not a language, it is the machine
* BASIC
  * goto
* Fortran
* C
* C++
* Perl
  * Write only language
* PHP
* Python
  * async
* Javascript
  * ES2018
  * async
  * event driven callback chaos
  * Tangentially: web assembly?
* Golang
  * Very clean base library
  * _is in array_ complaint. It's a systems level language.
* Ocaml
* Prolog
* Erlang
  * Live updates
  * [Why Erlang?](https://www.fredrikholmqvist.com/posts/why-erlang/)
* Elixir
* Haskell
* PureScript
* Elm
* Typescript
* Java
  * JVM
* Ruby
* C#
  * .NET Core - bindings
* Visual Basic
* Scala
  * JVM
  * Kitchen sink
* ReasonML
* Kotlin

Event loop
Immutability
Dynamic data structures
Channels
Static/Compiled


You can use all these tools poorly or well.
When you do something for the second time (in another language), it's not the language that is batter, it is your understanding of the problem that is better.

Java programers are typically weaker programmers - because that is what they have been taught. The _good_ programmers have self learnt a language. That's why esoteric languages attract better programmers.

Mainstream languages (support existing business tools)
Find programmers that have the esoteric skill (less of them)
Companies training their emploees from scratch.
Nortel Networks had their own language/tools for telephone switches.

Fads

CoPilot - scandle of open source

Andorid App lifecycle

Operator overloading
side-effects



Server Side
-----------

### DIY HTTP Server

Java + Python

### DIY Message Board

Python + PHP

### Dynamic Server Frameworks

Static site generation

DB, Templates, Routing

CGI-BIN - write a script in any labnagueg as long as it printed html response
PHP lowered barrier to entry to server - get people started

Wordpress - Framework? Lots of plugs
No other frameworks at the time

CodIgnitor PHP - Laravell (new) PHP
Node.js
Rails (Ruby)
Falcon

Shimmi - own framework - 
v1 hardcoded for one use - image board - could not do anything else with it
v2 others interested but wanted differnt features - started plugings - made a minimum engine. Everything was a plugin that spoke to each other. Event system page event kicks it off - login plugin 

#### Django

#### Pyramid

### Static site generation

https://wiki.python.org/moin/StaticSiteGenerator

#### Jekyll 

#### Nikola

#### Static SQLLite

https://phiresky.netlify.app/blog/2021/hosting-sqlite-databases-on-github-pages/
http://static.wiki/
https://github.com/segfall/static-wiki


Client Side
-----------

### DIY JS/HTML5/CSS

### Frontend UI Frameworks

Historical JQuery

#### React

Reuseable components 
  calendar (like any other html tag)

#### Angular

Elm
Vue.js
   wikipedia redo frontend with vue

HyperApp



### Style

#### Bootstrap

#### Tailwind


Testing
-------

### DIY Testing

### Selenium

### Cypress


Mobile
------

Native Android

HTML5 iOS and Andorid generators


Assessment
----------

Create a prototype of one of the following web services
buggy and held together with sticky-tape
Do not need to implement any user security

I strongly advise you to use different frameworks, languages and projects.

* SocialMedia (Twitter/Facebook)
* eCommerce (Amazon) - list products, add to basket
* Video Streaming (Netflix, iPlayer, Youtube) - browse thumbnails/search, player video
* Blog with multiple authors (Medium) - list articles, rss, images in content
* Chat/Messenger (WhatsApp) - multiple users
* Mail?
* Messageboard?
* Collection tracker - valuation
* Other - welcome to discuss

Justify your choice of frameworks - server client
github project
Runnable in containers - kubenetees?
Must have automated tests to prove it's functionality - see test results/progress - instuctions for viewing tests
pofetionaly deplyable - externally hosted
useable on both desktop and mobile device

30% fragments
40% something works
50% frameworks used
60% tests range of framework features used
70% deployable substantial framework features used
80% works on range of devices
90% can function with 50+ users, externally visible
Lambda


https://expressjs.com/

Python
* [Sanic Framework](https://sanic.readthedocs.io/en/stable/)
    * https://github.com/MagicStack/uvloop

 uptime sclaine request 
 session - user state

 Graph QL
 https://graphql.org/

 Separation of concerns

 React "context" replacement for redux
 https://reactjs.org/docs/context.html

 Preact vs react
 https://preactjs.com/guide/v8/differences-to-react/
 Some limiatations


 https://mithril.js.org/
 Small - drop in
 Not intended to be enterprise
Principles of react

vue.js
https://vuejs.org/
More compatable with html js mindset - old people - 

ANgular
https://angularjs.org/



RX java?

Mobile?

Ionic?
React native


Hyperapp - Shish - <1k js


https://www.gitpod.io/
https://codetasty.com/

https://codesandbox.io/

https://betterprogramming.pub/my-favorite-cloud-ides-e6afaa94d96b

https://www.codeply.com/
All the frameworks!! live in browser 

https://glitch.com/
Node, React, Eleventy (static)


https://runkit.com/home
instant api - workbook


Some aforementioned links:

Client side:
https://preactjs.com/
https://mithril.js.org/  <- pretty fringe
https://vuejs.org/        <- pretty popular

Server side:
https://sanicframework.org/en/
https://fastapi.tiangolo.com/

I haven't used Fast API in production, but it looks well thought out and brings together some previously disparate tooling.
Sanic is essentially like Flask in that it's up to you to decide a lot of things.

Rollback in fighting games:
https://arstechnica.com/gaming/2019/10/explaining-how-fighting-games-use-delay-based-and-rollback-netcode/


gitpod docker support
https://github.com/gitpod-io/gitpod/issues/52#issuecomment-738629624
https://community.gitpod.io/t/running-docker-within-gitpod/538/8
https://github.com/shaal/ddev-gitpod






---

https://github.com/rcbxd
 Anthony Skorupskyy rcbxd
Node microservices developer, Vue/Angular hater, and Docker lover.


---



Other courses
=============

https://www.kent.ac.uk/courses/modules/module/CO894
https://digital.com/web-hosting/languages-and-frameworks/
https://developer.mozilla.org/en-US/docs/Learn/Server-side/First_steps/Web_frameworks
https://www.thoughtworks.com/radar/languages-and-frameworks
https://www.softermii.com/blog/top-programming-languages-and-frameworks-for-software-development-for-2020
https://medium.com/swlh/the-7-programming-languages-frameworks-to-learn-in-2020-6f9ac923ec5d

https://en.wikipedia.org/wiki/Software_framework

https://stackoverflow.com/questions/4099975/difference-between-a-module-library-and-a-framework
framework is inversion of control


Structure
=========

## Intended Learning Outcomes 
By the end of the module students should be able to:
1. Demonstrate an understanding of the concept of a Framework in general, a Framework used for Programming, and a Framework used for software 
Testing.
2. Critically evaluate the effectiveness of a particular framework for an application and platform.
3. Synthesise a small digital artefact using a well-formed programming framework.


* Week 1 (Online) 27/09/2021: Introduction
  1. Module overview
    1. Assignments
      1. Writeup justification
      2. OpenAPI + Tests + Containers
    2. What level 6 means
    3. How do you analyse a framework (explicit)
    4. Languages
    5. Frameworks
    6. Tests
  2. Practical
    7. Clone and commit
    8. gitpod
    9. Containers
      1. build/run
      2. compose
    10. Make HTTP Server
      3. python/java
  3. Homework: 
* Week 2 (Online) 2	04/10/2021: Languages
  1. Historical
  2. Static/Dynamic/Functional / Visual
    1. meta (can write/alter itself), garbage collection, interpreted, embeddable, hybryd (partially compiled), concurrentcy, macro (text subsitution), multiparadime, reflection, repl, c-bindings, large number abstraction, Error handling
    2. https://en.wikipedia.org/wiki/List_of_programming_languages_by_type
    3. see mapOfComputing for evluation critera link
  3. Event loop, deployment, channels/concurrency
  4. Decorators, pattern matching
  5. Employment, fads
  6. Use containers to run language code
  7. Homework: Investigate a language to present next time
* Week 3 (Campus) 11/10/2021: Server Frameworks
  7.  History
    1. cgi-bin
    2. templates server side
    3. request/response (no realtime)
  8.  Modern
    4. scale, realtime
  9.  Django/Pyramid/Sanic
  10. Node.js
  11. Homework: Investigate a server framework to present next time
* Week 4 (Campus) 18/10/2021: Client Frameworks
  * note: CORS headers
  12. web
    1.  Structure
    2.  Layout
  13. History
    3. jQuery
  14. HyperApp
  15. React
    4.  Context (live reload with state)
  16. Homework: Investigate a client framework to present next time
* Week 5 ACW
  * !!!
* Week 6 (Online) 01/11/2021: Web Layout
  * Assignment 1 due
  1.  Bootstrap
  2.  Tailwind
  3.  Homework: Assignment justify the frameworks you will use
* Week 7 (Online) 08/11/2021: Testing
  * Tests in CI
    * Github actions
    * Pre commit hooks?
  20. Unit
    1. xunit reports
  21. Server
    2. pytest
      1. Fixtures
      2. Plugins
    3. Karma/Jasmine
  22. Client/Browser (End-to-End)
    4.  selenium
    5.  cypress
  * Homework: Investigate a client framework to present next time
* Week 8 (Campus) 15/11/2021: Frameworks in other domains
  1.  serverless
  2.  GraphQL
  3.  Crypto frameworks
  4.  mobile
    1. Android app lifecycle
  5.  game
* Week 9 (Campus) 22/11/2021
  * Assignment workshop
* Week 10 (Online) 29/11/2021
  * Engineering war stories
* Week 11 (Online) 06/12/2021
* Week 12 (Campus) 13/12/2021
  * Module review




---

### Banned Words/Phrases
* Easy to use
* User Friendly



Unsorted
========

* [Fostering information problem solving skills through online task-centred instruction in higher education](https://www.sciencedirect.com/science/article/pii/S0360131522000045?dgcid=rss_sd_all)
  * TODO: cites literiture review as a weakness of students
* [Don't make me think, or why I switched to Rails from JavaScript SPAs](https://reviewbunny.app/blog/dont-make-me-think-or-why-i-switched-to-rails-from-javascript-spas) 2022
* [SPA Fatigue - Second-guessing the modern web](https://macwright.com/2020/05/10/spa-fatigue.html)
    * Discussion of modern web tools not being a single bullet.
        * REST, GraphQL and Server Side rendering have their issues

Discussion
----------


* [Django, HTMX and Alpine.js: Modern websites, JavaScript optional](https://www.saaspegasus.com/guides/modern-javascript-for-django-developers/htmx-alpine/)
    * [alpine.js](https://alpinejs.dev/)


Frameworks
----------



* [Analysis on Web Frameworks](https://iopscience.iop.org/article/10.1088/1742-6596/1362/1/012114/pdf)
    * basic


* Secure
    * Cross-site scripting
* Correct
    * Impossible to make a mistake
    * Client state (browser differences)
    * Browser extensions

Server side html generation

Single page + api


* [Analyzing best practices on Web development frameworks: The lift approach](https://www.sciencedirect.com/science/article/pii/S0167642314005735) 2014
    * Scala + Lift as web concepts
* [Design and Analysis of Web Application Frameworks](https://pure.au.dk/portal/files/54599671/PH.D_dissertation_Mathias_Schwarz.pdf) Anders Møller 2013
    * Typically focusing on server side rendering



REST APIs
--------

https://reqbin.com/
https://reqbin.com/curl
[Public REST APIs](https://documenter.getpostman.com/view/8854915/Szf7znEe)


---


* https://oai.github.io/Documentation/start-here.html
* https://openapi.tools/
* https://swagger.io/specification/
* https://redocly.github.io/redoc/


Consider OpenAPI testing with
https://schemathesis.readthedocs.io/en/stable/python.html


Setup
-----

* Browser
	* Allow popups for `https://gitpod.io`





---


Assignment 1 - Assistance
-------------------------

### Critique of prototype
* Excellent analysis and critique that identifies topics such as: 
    * technology limitations,
    * anti-patterns,
    * readability,
    * modality,
    * maintainability,
    * scale-ability,
    * limitations of unit testing,
    * adherence to standards,
    * security,
    * and wider business issues

* Use the inverse of all the 'good things' that the other frameworks provide
    * no support for standards
    * incomplete implementation
    * performance
    * stability
    * community
    * security
    * expandability

### Server framework justification
* Mark scheme
    * Justified  the  features  of  a  framework  in  comparison  to  other  frameworks  to provide a balanced and well researched justification.  
    * Factors such as:
        * spin-uptime,
        * developer familiarity,
        * compatibility,
        * complexity of design patterns,
        * learn-ing curve, 
        * theoretical throughput,
        * deploy-ability,
        * hire-ability,
        * cost, 
        * developer experience,
        * developer tools,
        * security,
        * developer community,
        * documentation 
        * and other business factors are discussed.
    * Examples of existing use-cases are used to strengthen the argument.
    * Benefits and drawbacks are explored, drawbacks are clearly compared against business impact/risk
* Golden rule for technical reports
    * Describe the technical issue/statement
    * Then describe what that means for your organisation



* What requirements might you have in the future?
    * Hiring developers
    * Admin staff to manage items? (non developers?)
    * Speed/scale
    * Beyond one server? (one database - loads of app servers - load balanced)
    * Data persistence
    * Websockets (live updates/chat?)
    * Static storage (images/uploads)
    * [JSON Web Token (JWT)](https://en.wikipedia.org/wiki/JSON_Web_Token) - multiple servers
