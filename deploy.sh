#!/bin/bash

# Name of the Docker image
IMAGE_NAME="nuxt3-app"

# Port for the container
PORT=3000

# Step 1: Build the Docker image
echo "Building Docker image..."
docker build -t $IMAGE_NAME .

# Step 2: Stop any existing container with the same name
echo "Stopping and removing any existing container..."
docker stop $IMAGE_NAME 2>/dev/null && docker rm $IMAGE_NAME 2>/dev/null

# Step 3: Run the container with the specified port
echo "Running the container..."
docker run -d --name $IMAGE_NAME -p $PORT:3000 $IMAGE_NAME

echo "Deployment complete! The application is running at http://localhost:$PORT"
