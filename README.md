# Contacts App

This is a demo app to play around with the idea of a three-tiered application architecture.

## Project Structure

- `frontend/`: a React app that fetches data from the backend
- `backend/`: a Hono server (Hono is a Node.js library for writing HTTP servers) that interacts with a SQLite database

## Get Started

Running this project requires Docker to be installed. The easiest way to install Docker is through [Docker Desktop](https://docs.docker.com/desktop/).

```sh
docker compose up
```

If you make changes to a source file and they're not being applied automatically, try running:

```sh
docker compose up --build
```

## Your Tasks

- Add an API endpoint to create a new contact
  - Add the endpoint in `backend/src/index.ts`
  - It should call the `create` function in `backend/src/db.ts`
  - Remember what the HTTP request method, structured data format, and response status codes should be!
- Make the UI look nice
