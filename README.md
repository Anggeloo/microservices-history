# Microservices History

This repository contains the `microservices-history` microservice, developed in **Node.js** and using **PostgreSQL** as its database.

## Prerequisites

Before cloning and running this project, make sure you have the following installed:

- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)
- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/) (optional if running with Docker)

## Clone the Repository

```sh
git clone https://github.com/Anggeloo/microservices-history.git
cd microservices-history
```

## Environment Configuration

The `.env` file is already set up with the necessary credentials for the PostgreSQL database hosted on AWS. If you need to modify these values, edit the `.env` file in the project root.

## Running the Microservice

### Option 1: Using Docker

If you want to run the service in a Docker container, use the following commands:

```sh
docker build -t microservices-history .
docker run -p 3010:3010 --env-file .env microservices-history
```

### Option 2: Running Locally with Node.js

If you prefer to run the service without Docker, follow these steps:

```sh
npm install
npm start
```

The service will run on `http://localhost:3010`.

## Available Endpoints

Currently, this microservice does not have Swagger configured. To test the endpoints, you can use **Postman** or **cURL**.

## Additional Notes

- The microservice uses PostgreSQL as its database, so ensure that the connection to the AWS database is available.

## Authors
Cadena Anggelo and Caiza Katherine
