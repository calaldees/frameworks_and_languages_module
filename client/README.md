Client
======
This directory include an implementation for the client side service for "Freecycle-Inc". This is a front-end that communicate with the server to provide the desired services for the client. It has been implemented using Vue JavaScript framework

#### Usage
To run the client you would need the following commands

First make sure you are in the right directory
``` powershell
cd client
```
Hence we are using container we build and run the server as follow:
``` powershell
make build
```
``` powershell
make run
```
Having the client running on it's own wouldn't be useful as we need communicate with a server, to do that open new terminal and run the server. once you have the client open in a browser, point it to the server by placing the url for the server after the client one as follow:

``` powershell
clientUrl?api=serverUrl
```

``` powershell
https://8001-reem313-frameworksandla-lt146dhjlm1.ws-eu77.gitpod.io/?api=https://8000-reem313-frameworksandla-lt146dhjlm1.ws-eu77.gitpod.io
```
Now the app is ready to view and use.

#### Testing
For testing the client use the following command in the main directory

``` powershell
make test_client
```
it will use cypress test which produce a video for the test.

#### Refernces
* https://www.tutorialspoint.com/vuejs/vuejs_overview.htm
* https://stackoverflow.com/questions/50587662/display-image-from-a-given-url
* https://www.w3schools.com/bootstrap4/bootstrap_navbar.asp
* https://getbootstrap.com/docs/4.0/components/card/
* https://getbootstrap.com/docs/4.0/components/buttons/
* https://getbootstrap.com/docs/4.0/components/input-group/
* https://getbootstrap.com/docs/4.0/layout/grid/#grid-options
* https://github.com/calaldees
* https://github.com/KieranBest
* https://github.com/Joshua-Yuill
* Throughout the implementation of this assignment we (Kieran, Joshua, Allan) had discussions about different topics such as linking the server side with the client, delete item, how to make the app responsive etc

