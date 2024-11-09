# 1. Use an official Node.js runtime as a parent image
FROM node:18-alpine

# 2. Set the working directory in the container
WORKDIR /app

# 3. Copy package.json and package-lock.json
COPY package*.json ./

# 4. Install dependencies
RUN npm install

# 5. Copy the rest of the application files to the container
COPY . .

# 6. Build the project for production
RUN npm run build

# 7. Expose the port the app runs on
EXPOSE 3000

# 8. Define the command to run the app
CMD ["npm", "run", "preview"]
