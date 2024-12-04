## Node JS Assignment 

## Task
Develop Node.js APIs for School Management

## Objective
 Implement a set of APIs using Node.js, Express.js framework, and MySQL to manage school data. The system should allow users to add new schools and retrieve a list of schools sorted by proximity to a user-specified location.

## Requirements
Create a schools table in MySQL with the following fields:

```
id (Primary Key)
name (VARCHAR)
address (VARCHAR)
latitude (FLOAT)
longitude (FLOAT)
```

## Features

**Add School API**: 
* Payload: Includes name, address, latitude, and longitude. 
* Functionality: Validates the input data and adds a new school to the schools table. 
* Validation: Ensure all fields are properly validated before insertion (e.g., non-empty, correct data types).

**List Schools API**:
* Parameters: User's latitude and longitude.
* Functionality: Fetches all schools from the database, sorts them based on proximity to the user's location, and returns the sorted list.
* Sorting Mechanism: Calculate and sort by the geographical distance between the user's coordinates and each school's coordinates.

## Endpoint

### addSchool

* `POST /api/v1/addSchool`: Create a new school.

### addSchool

* `GET /api/v1/listSchools`: Get all schools.

## Getting Started

To get a local copy up and running, follow these steps:

### Prerequisites

* Node.js installed on your local environment.
* MySQL database setup.

### Installation

* Clone the repository: `https://github.com/abhishekahirwar/school-management-assignment`
* Install dependencies: `npm install`
* Set up environment variables (see `.env.sample` for reference).
* Start the server: `npm run start`

## Contact

* [GitHub](https://github.com/abhishekahirwar) **Abhishek Ahirwar**
* [LinkedIn](https://www.linkedin.com/in/abhishek-ahirwar-85951b217/) **Abhishek Ahirwar**

## Author

**Abhishek Ahirwar**

## Additional Resources

[Live Link](https://)

[Postman API Documentation](https://)
