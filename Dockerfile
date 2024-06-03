# Use official Node.js image as the base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy application code
COPY . .

# Set environment variables for local development
ENV NEXT_PUBLIC_BASEURL=http://localhost:"Your Backend Port"
ENV AUTH_GOOGLE_ID="Your Google Client ID"
ENV AUTH_GOOGLE_SECRET="Your Google Client Secret"
ENV NEXTAUTH_URL=http://localhost:3000/api/auth/
ENV NEXTAUTH_SECRET="Your Secret Key"

# Expose the port the app runs on
EXPOSE 3000

# Start the application in development mode
CMD ["npm", "run", "dev"]
