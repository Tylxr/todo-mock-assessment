FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# Step 6: Install tsx globally (for running TypeScript directly with tsx)
# RUN npm install -g tsx

# Step 7: Expose the port the app will run on
EXPOSE 3000

# Step 8: Define the entry point using tsx for your TypeScript file
# CMD ["tsx", "server.ts"]
CMD ["npm", "run", "dev"]
