<a name="readme-top"></a>


<!-- PROJECT LOGO -->
<br />
<div align="center">
    <img src="https://cdn-ukwest.onetrust.com/logos/482e1d62-3155-421c-b076-164accc90adf/3a979462-e491-4893-8016-3151c3826269/30d03a3c-557b-4988-b21a-d4e1c313a3ce/Task_Logo_colour.jpg" alt="Logo" width="80" height="80">

  <p align="center">
	A service for managing tasks
    <br />
    <br />
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
        <li><a href="#acceptance-criteria">Acceptance Criteria</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#architecture-and-technical-considerations">Architecture and Technical Considerations</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



## About The Project
<a name="about-the-project"></a>

This is a Ruby on Rails API that can be used create Users, Products, and Orders.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Acceptance Criteria
<a name="acceptance-criteria"></a>


#### Back-End

✅ Develop a Rails API to handle CRUD operations for tasks

✅ Implement GraphQL queries and mutations for interacting with task data

✅ Ensure the application is connected to a PostgresQL database

✅ Implement necessary resolvers for task management


#### Front-End

✅ Build a user interface using React and TypeScript that interacts with the back-end via GraphQL

✅ The UI allows users to create, read, update, and delete tasks

✅ Implement state management effectively, considering the application's scalability

✅ Set up Apollo Client to communicate with the GraphQL back-end

✅ Develop components for task display, task entry, and task updates

✅ Implement routing and navigation

#### Non-Functional

##### Code Quality
✅ Clean, modular, and reusable code

✅ Code is well-documented and easy to understand

##### Design
✅ Follow basic principles of user interface design and user experience

##### Security
✅ Implement basic security practices to protect data integrity and prevent common vulnerabilities


<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With
<a name="built-with"></a>


![Ruby](https://img.shields.io/badge/ruby-%23CC342D.svg?style=for-the-badge&logo=ruby&logoColor=white)
![Ruby on Rails](https://img.shields.io/badge/Ruby_on_Rails-CC0000?style=for-the-badge&logo=ruby-on-rails&logoColor=white)
![PostgresQL](https://img.shields.io/badge/postgresql-4169e1?style=for-the-badge&logo=postgresql&logoColor=white)
![GraphQL](https://img.shields.io/badge/GraphQL-E434AA?style=for-the-badge&logo=graphql&logoColor=white)
![TypeScript](https://shields.io/badge/TypeScript-3178C6?logo=TypeScript&logoColor=FFF&style=for-the-badge)
![Tailwind](https://img.shields.io/badge/tailwindcss-0F172A?&logo=tailwindcss)




<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started
<a name="getting-started"></a>

### Prerequisites
<a name="prerequisites"></a>

- Ruby 3.2.3
- NPM

### Installation and First Steps
<a name="installation"></a>

1. Clone this repository.
2. `cd` into it and install the backend's dependencies with `bundle install`.
3. Initialize the databases with `rake db:create` and migrate them with `rake db:migrate`
4. Start the backend server with `rails server`
5. In another terminal window, populate the database with seeds with `rake db:seed`
6. In another terminal window, `cd` to `frontend/` and install its dependencies with `npm install`
7. Start the frontend server with `npm start`. Since the backend is already running, it will ask you to start on a different port. Reply "yes" to this.

The frontend and backend are now both running and you are ready to click around and use the application at `localhost:3001`


<!-- USAGE EXAMPLES -->
## Usage
<a name="usage"></a>

<div>
    <a href="https://www.loom.com/share/84fdc373a2564189baa173a5a446ab8e">
      <p>Task Management App Walkthrough - Watch Video</p>
    </a>
    <a href="https://www.loom.com/share/84fdc373a2564189baa173a5a446ab8e">
      <img style="max-width:300px;" src="https://cdn.loom.com/sessions/thumbnails/84fdc373a2564189baa173a5a446ab8e-with-play.gif">
    </a>
  </div>


## Architecture and Technical Considerations
<a name="architecture-and-technical-considerations"></a>

### The Front-End

The front-end of this application is built with ReactJS, TypeScript, GraphQL, Apollo, and Tailwind and lives in the `frontend/` directory.

#### Components
The front-end consists of a number of components (found in `src/components/`):

<ul>
  <li><strong>Task</strong>: A Card-like component used to display the details of a created Task.</li>
  <li><strong>TaskPage</strong>: Used to display a list of Tasks</li>
  <li><strong>NewTaskPage</strong>: A form component used to create new Tasks</li>
  <li><strong>EditTaskPage</strong>: A form component used to edit Tasks</li>

  <li><strong>Datepicker</strong>: A Datepicker component used by the NewTaskPage and EditTaskPage components for due date selection and display</li>
  <li><strong>Task</strong>: A Card-like component used to display the details of a created Task</li>
  <li><strong>Navbar</strong>: A component used to display navigation at the top of the application's web pages
</ul>

#### Queries and Mutations
GraphQL queries and mutations are how our front-end application retrieves and updates data from our server. This application integrates GraphQL with Apollo for a more declarative querying experience, and sets the stage for exciting ways to scale in the future.

<ul>
  <li><strong>query GetTasks</strong>: Retrieves all the Tasks</li>
  <li><strong>query FindTaskById</strong>: Finds a Task by its ID</li>
  <li><strong>mutation CreateTask</strong>: Creates a new TAsk</li>
  <li><strong>mutation UpdateTask</strong>: Updates a Task</li>
  <li><strong>mutation DeleteTask</strong>: Deletes a Task</li>
</ul>

### The Back-End
The back-end of this application is built with Ruby on Rails, GraphQL, and Postgres.

It consists of a `Task` model and hosts a number of GraphQL queries and mutations (found in `app/graphpql/mutations/`) that allow the front-end to create, read, update, and delete tasks.


### Future enhancements

<ul>
  <li>
    <strong>Implement container and presentation components</strong>: It's generally a good practice to separate data fetching concerns from presentation concerns in scalable front-end applications. Doing so encourages separation of concerns, enhances reusability, and improves testability.
  </li>

  <li>
    <strong>Notifications</strong>: Given more time, I would implement a notification system in the application. This would give the user more feedback and confidence that the application is behaving as it should.
  </li>

  <li>
    <strong>Universal State Management</strong>: Centralized state management makes the application's state easier to manage, debug, and maintain, especially as the application scales. 
  </li>

  <li>
    <strong>Model and Form Validation</strong>: Validations enhance data integrity and user experience. It prevents errors and malicious data entry, leading to more reliable and secure application behavior.
  </li>

  <li>
    <strong>Unit Tests</strong>: Tests improve code quality by helping to minimize bugs, facilitate refactoring, and allows developers to make changes to code confidently. With more time, I would write tests for all of the models, queries, and mutations in the application.
  </li>
</ul>


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->
## Contact
<a name="contact"></a>


Dylan Richards - hello@dylanerichards.com

[![LinkedIn][linkedin-shield]][linkedin-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/dylanerichards