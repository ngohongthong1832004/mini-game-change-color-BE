FROM node:12

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .
FROM mysql:latest

# Copy your SQL script to the container
COPY script.sql /docker-entrypoint-initdb.d/

# Provide environment variables for MySQL configuration
ENV MYSQL_ROOT_PASSWORD=root
ENV MYSQL_DATABASE=mysql

# Expose the MySQL port
EXPOSE 3306

EXPOSE 3000

CMD [ "npm", "start" ]




