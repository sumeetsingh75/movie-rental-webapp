# Movie-Rental-Webapp

## Introduction
Movie Rental webapp is a web application that allows users to register/login into the application and view the availabe movies and their details.

## Technologies
- Front End (Client) : React (17.0.1)
- Backend Services (Server) : Node (12.13.0) + Express Framework (4.17.1)
- Database : MongoDB

## Functionality
- Authentication method for users and admin including proper authorization using JSON Web Tokens (JWT).
- New user Registration

#### Unauthenticated Flow
- Display movies using pagination.
- Sort the movies on different criteria.
- Filter movies according to genres.
- Search for the movies.

#### Authenticated Flow
- All functionality of unauthenticated flow.
- Ability to modify information of movie.

#### Site Manager
- All functionality of unauthenticated and authenticated flow.
- Ability to add new movie.
- Ability to delete existing movie.
