FROM node:20-alpine

# Set working directory
WORKDIR /app

# Install dependencies (only package files first for caching)
COPY package*.json ./
RUN npm install

# Copy the rest of the app
COPY . .

# Expose the Vite dev server port (default is 5173)
EXPOSE 3000

# Start Vite in dev mode
CMD ["npm", "run", "dev", "--", "--host"]
