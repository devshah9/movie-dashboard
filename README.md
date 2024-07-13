# Movie Dashboard

This project is a Movie Dashboard application that allows users to view top-grossing movies, top-voted movies, and top-rated movies. The application is built with a Django backend and a React frontend, and it uses a MySQL database. The entire stack is containerized using Docker.

## Features

- View top-grossing movies for a selected year
- View top-voted movies of all time
- View top-rated movies for a selected year

## Requirements

- Docker
- Docker Compose

## Setup and Run the Application

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/movie-dashboard.git
cd movie-dashboard
2. Environment Configuration
Create two environment variable files, .env.backend and .env.db, in the root of your project.
```
```.env.backend
DATABASE_NAME=your_db_name
DATABASE_USER=your_db_user
DATABASE_PASSWORD=your_db_password
DATABASE_HOST=db
DATABASE_PORT=3306
```

```.env.db
MYSQL_DATABASE=your_db_name
MYSQL_USER=your_db_user
MYSQL_PASSWORD=your_db_password
MYSQL_ROOT_PASSWORD=your_root_password
```
3. Build and Start the Containers
From the root directory of your project, run:

```bash
docker-compose up --build
```
4. Run Database Migrations and Load Initial Data
Open another terminal and run:

```bash

docker-compose exec backend python manage.py migrate
docker-compose exec backend python manage.py load_movies
```
5. Access the Application
The React frontend will be available at http://localhost:3000.
The Django backend API will be available at http://localhost:8000.
Project Structure
backend: Contains the Django backend application
frontend/movie-dashboard-frontend: Contains the React frontend application