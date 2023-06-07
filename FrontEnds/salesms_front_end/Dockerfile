# Base image
FROM node:16 as build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy app files
COPY . .

# Build production version
RUN npm run build

# Stage 2 - the production environment
FROM nginx:1.19.0-alpine

COPY --from=build /app/build /usr/share/nginx/html

# Remove default Nginx configuration
RUN rm /etc/nginx/conf.d/default.conf

# Copy custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/

# Expose port 3000
EXPOSE 3000

CMD ["nginx", "-g", "daemon off;"]
