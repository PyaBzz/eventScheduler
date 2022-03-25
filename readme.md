# Event Scheduler

This is a simple project to demonstrate how a frontend web app and a RESTful API backend communicate.  
The imaginary product is a calendar-like tool which presents a list of calendar entries spread in time from past to future.  
A minimal amount of information corresponding to each entry is shown on the list.  
Upon click of each entry, the app reveals its details in an editable form.  
There's also an Add button which presents a blank form for new entries.  

# Local Setup  
If you're on an Arch Linux machine you're in luck.
Just run setup.sh and sit back while the script installs the required packages.
Although there's room for better automation.
Otherwise take these steps.
- Install Node 16.13.2
- Install npm 8.5.4
- Install Angular CLI 13.2.6
- Run npm install in both frontend and backend directories
- In backend directory run: npm run dev-start
- In frontend directory run: ng serve --open

At this time your default browser should pop a new tab and browse the frontend app at localhost:4200.
If not, please manually browse that address.

## Frontend unit tests  
In the frontend directory run: ng test

## Backend unit tests  
In the backend directory run: npm test


# Frontend Structure

For the frontend I chose Angular because:
- The scaffolding of the project template is a significant time-saver.
- The framework is rich.
- The CLI helps easily structure code in modules, components and services with separate concerns.
- Nicely bundles behaviour, markup, styles and unit tests for each component.
- It comes with built-in means of dependency injection. 

### Layers  
The frontend app is made up of three layers:  
components --> high-level services --> low-level services  

**1- Components**  
The UI is made up of three components. Their dependencies:  
  AppComponent -> ListComponent  
  AppComponent -> FormComponent

There's no direct link between the list and the form. They only communicate with
their parent 'AppComponent' where the UI events are handled.

**2- High-Level Service**  
It is called EntryService and it's purpose is:

- It hides lower level concerns like api calls from higher layers.
- The returned results in this service are of type 'Entry' to match the purpose.
- Concerned with persistence and retrieval of calendar entries. This service is to be reused in UI components wherever operation on Entries is needed.

**3- Low-Level Service**  
It is called ApiService. It is responsilbe for:

- Things like url, port number, headers, tokens, HTTP statuses and time-outs are only concerns of this ApiService not higher layers.
- Agnostic of any business logic.
- Agnostic of any object type. Since this service should have no upwards dependency, the result of api calls returned from this service are of type 'any'.

**Why injection by tokens?**  
To achieve loose coupling of code. Injection by interface doesn't work in TypeScript because interfaces are a compile-time feature absent from the JavaScript runtime. In order to map an interface to its concrete implementation we use a token.

**Why are tokens in 'The' class?**
- Things that are globally unique deserve the 'The' prefix IMHO.
- Closer to human language, better readability
- A certain level of string safety

**Why interfaces are in concept files?**
- The 'i' prefix is a .Net convention
- The 'Interface' suffix is lengthy
- Concept conveys the purpose of interface delcaration

**Further steps**  
- Move configurations like backend URL and port number to a config file.
- More unit tests with mocked dependencies.
- A watch service to throw an error if backend becomes unavailable.
- Input validation on form fields
- Responsive UI design for hand-held devices.
- Means of authentication with backend

# Backend Structure
For the backend I chose Node + Express because:
- The project definition suggests TypeScript which implicitly narrows down to the JS ecosystem.
- Little boilerplate required to spin up a simple demo
- My prior familiarity with Mocha and Chai

**Why CORS**
To serve requests from the frontend app running in browser on localhost.

**Why dependency injection**  
Untangling of code for better testability. I added a package for it since DI is missing from Node and Express.

**Why mocked repository**  
I had to time-box the work on this project so skipped the underlying persistence layer.  
If we were to have a real persistence layer we'd have to use a library like Sinon
to mock the repository in unit tests for the EntryService.

**Further steps**
- Input validation for CRUD operation
- Input sanitisation to block injection attacks
- Linting for uniformity of code
- Configuration file for other environments
- Add controllers if more functionality needed e.g authentication
- Add middleware for authentication
- Add middleware for logging
- A proper repository with parameterised query builder to block injection attacks
- An underlying database to support the persistence layer
