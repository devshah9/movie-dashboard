# Use the official Node.js image from the Docker Hub
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json into the container
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code into the container
COPY . .

# Build the React app for production
RUN npm run build

# Install serve to serve the build folder
RUN npm install -g serve

# Expose the port the app runs on
EXPOSE 5000

# Serve the React app
CMD ["serve", "-s", "build"]
