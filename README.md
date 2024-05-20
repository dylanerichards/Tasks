<a name="readme-top"></a>


<!-- PROJECT LOGO -->
<br />
<div align="center">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLbtxtl6LKy5wHzwE48zGK8-guKLn3zvSnjmCOh19KBA&s" alt="Logo" width="80" height="80">

  <h3 align="center">HelloFresh OrderService</h3>

  <p align="center">
	A microservice for placing orders
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
    <li><a href="#testing">Testing</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



## About The Project
<a name="about-the-project"></a>

This is a Ruby on Rails API that can be used create Users, Products, and Orders.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Acceptance Criteria

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

Coming soon...

### Installation and First Steps
<a name="installation"></a>

1. Clone this repository.
2. `cd` into it and install the project's dependencies with `docker-compose build`.
3. Once the dependencies are installed, you can start up the application and background workers with `docker-compose up`. The app will run on port 3000.
4. To seed the database, stop the application and run `docker-compose run --service-ports web bash` to enter the container. From here, run `rake db:seed` to populate the database with users and products.



<!-- USAGE EXAMPLES -->
## Usage
<a name="usage"></a>

### Coming soon...


## Architecture and Technical Considerations
<a name="architecture-and-technical-considerations"></a>

Coming soon...

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact
<a name="contact"></a>


Dylan Richards - hello@dylanerichards.com

[![LinkedIn][linkedin-shield]][linkedin-url]



<p align="right">(<a href="#readme-top">back to top</a>)</p>


[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/dylanerichards