# Step 1: Use Node.js as the base image
FROM node:16-alpine

# Step 2: Set the working directory
WORKDIR /app

# Step 3: Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of the files to the working directory
COPY . .

# Step 6: Build the Angular app
RUN npm run build -- --output-path=./dist/dashboard-financiero --configuration production --base-href=/dashboard-financiero-development-deployment/

# Step 7: Expose port 80
EXPOSE 8080

# Step 8: Install and configure Nginx
RUN apk update && apk add nginx
COPY nginx.conf /etc/nginx/nginx.conf

# Step 9: Start Nginx
CMD ["nginx", "-g", "daemon off;"]
