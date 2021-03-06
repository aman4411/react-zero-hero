# App Screenshot
![Employee Portal](https://github.com/aman4411/react-zero-hero/blob/master/screenshot.png)

### What is React.JS ?
--------------------
Open source Javascript library for busilding user interfaces

### Why to learn React ?
-------------------
Creates and maintained by Facebook
Huge Community 

### Component Based Development
------------------------------
Compoenent based development means designing our software applications by 
building loosely-coupled independent components

### What is Compoenent ?
---------------
A component is a well-defined and independent piece of our app's user interface

A Compoenent could include, but not limited to

* Button
* Header 
* Footer
* Navigation
* Table
* Pagination

### Why Do we need Compoenents ?
---------------------------
Compoenents build off of the concept of Aax Requests, 
in which calls to the server made directly from client-side,
allowing for the DOM to be dynamically updated without the 
need of `page refresh`

Because compoenets are independent, one component can refresh without
affecting other compoenents or th UI as a whole

### Types components
-------------------
1. Function Components
2. Class Components


### React JS Basics
----------------
props - Shortcut for properties 

props - We can use props to allow compoenenst to talk to each other

* Get passed co component function parameters
* props are immutable
* props - function component
* this.props - class component

state - React updates UI based on the application state. 
      - This is actuallys stored as a property of react Class Compoement

-> State is managed with in the component
-> state can be changed
-> useSate() - Function Component
-> this.state - Class Component


### JSX - Javscript XML 
-------------------
Extension for javascript Language Syntax

XML-Like code for elements and components

JSX is not manadtory to write react compoenents

JSX makes our code simplified and elegant

JSX ultimately transpiles to pur javascript which is understood by the browsers

### Conditional Rendering
----------------------
1. if/else 
2. Element variables 
3. Ternary Operator 
4. Short Circuit Operator

### Basics of Styling in React Components
---------------------------------------
1. CSS StyleSheet
2. Inline Styling
3. CSS Modules
4. CSS in JSLibraries ( Using Boorstrap Already)

### Life Cycle Methods
---------------------------------------
When we create a React Component, it goes through several stages
in its lifecycle.

Note - Lifecycle methods doesn't exists in functional components.
       It's only present in class components.

### 4 Phases of lifecycle Methods
-------------------------------
#### Mounting
----------
When an instance of a component is being created & inserted
into the dome.

-> constructor()
-> static getDerivedStateFromProps()
-> rendered()
-> componentDidMount()

a. `constructor` - A special function that will get called whenever
             a new component is created.

            when to use ?
            -------------
            1. Initialize the state.
            2. Binding the event handler

            when not to use ?
            ------------------
            1. when making http Requests

            Two Important Things
            ---------------------
            1. We have to call special function 'super()', this will 
               call the base class constructor.
               In our component we have access to this.props only after
               we initially called super passing the props.
            2. This is the only place where we change or set the state directly 
               overwriting this.state fields.

b. `static getDerivedStateFromProps` - Method is called everytime a component is re-rendered.
                                     - We can set the state as well.
           
           when not to use ?
           ------------------
           never use this method to make http calls.

c. `render` -> Only required method in our component (class).
            ->we simply read props, state and return JSX.
            -> Do not make HTTP calls.
            -> child component lifecycle methods only gets executed after the parent render method.

d. `componentDidMount` -> Invoked immediately after a component & all it's child components
                          have been rendered into the DOM
                       -> This is the place to make Ajax calls & load the data.


#### Updating
-----------
When a component is being re-rendered as a result of changes 
either its props or states.

-> static getDerivedStateFromProps()
-> shouldComponentUpdate()
-> render()
-> getSnapshotBeforeUpdate()
-> componentDidUpdate()

#### Unmounting
------------
When a component is being removed from the dome.

-> componentWillUnmount()

#### Error Handling 
----------------
When there is an error during the rendering lifecycle method 
or in the constructor of any child component.

-> static getDerivedFromError()
-> componentDidCatch()


### React Routing
--------------------------------
navigating to other components or pages.

we use react-router-dom package.

BrowserRouter - used for doing client-side routing with url segments.

Switch - Returns only the first matching route rather than all matching routes.

Route - conditionally shown component  based on matching path.

Link - replacement for anchor tags


### React Hooks
--------------------------
Hooks are new feature added in react version 16.8 which allows us to use react features 
without having to write a class.

e.g state of component