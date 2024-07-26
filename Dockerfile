# Stage 1: Builder
FROM node:16 AS builder

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application (for example, if using a build step)
RUN npm run build

# Stage 2: Production
FROM node:16-alpine

# Set the working directory
WORKDIR /app

# Copy the built application from the builder stage
COPY --from=builder /app .

# Install only production dependencies
RUN npm install --only=production

# Expose the application port (if applicable)
EXPOSE 3000

# Define the command to run the application
CMD ["node", "dist/app.js"]
