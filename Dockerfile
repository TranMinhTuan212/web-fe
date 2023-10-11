# Multistage Build: Build stage
FROM node:16-alpine as builder

WORKDIR /frontend

COPY package.json .

# Install npm dependencies
RUN npm install

COPY . .

# Build the app
RUN npm run build

# New stage: Nginx stage
FROM nginx

# Copy built artifacts from the builder stage to Nginx's default public directory
COPY --from=builder /frontend/build /usr/share/nginx/html

# Copy Nginx configuration file (adjust the path accordingly)
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80 (default for HTTP)
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]


