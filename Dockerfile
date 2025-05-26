# Step 1 Build
FROM node:22.1.0-slim AS build

WORKDIR /app

COPY . .

RUN npm install && npm run build

## ------- ##
## Step 2 Running
FROM node:22.1.0-slim

WORKDIR /app

COPY --from=build /app/.output .output
COPY --from=build /app/package.json .

# Set port and command
ENV NITRO_PORT=6000
EXPOSE 6000
CMD ["node", ".output/server/index.mjs"]