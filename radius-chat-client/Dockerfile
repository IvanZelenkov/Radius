# ==== CONFIGURE =====
# Use a Node 19--alpine3.16 image
FROM node:19-alpine3.16
# Set the working directory to /app inside the container
WORKDIR /app
# Copy all the files from [host machine] to the [container]
# (first path is relative to the Dockerfile, second is relative to the root on the container)
COPY . .

# ==== BUILD =====
# Install dependencies (npm ci makes sure the exact versions in the lockfile gets installed)
RUN npm ci
# Build the app
RUN npm run build

# ==== RUN =======
# Set the env to "production"
ENV NODE_ENV production
# Expose the port on which the app will be running (3000 is the default that `serve` uses)
EXPOSE 3000
# Start the app
CMD [ "npx", "serve", "build" ]