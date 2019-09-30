# Blog

Getting Started
---------------

Here is the summary of what was used in the project.

# Node.js (https://nodejs.org/en/docs/)

* Node.js is designed to build scalable network applications.

# MySQL2

* MySQL client for Node.js with focus on performance. Supports prepared statements, non-utf8 encodings, binary log protocol, compression, ssl and more.

* Install:
* 1- In the terminal be located in the project directory.
* 2- Execute the command: "npm install mysql2 --save"

* Create the "blog_db" database:
* a- In the terminal enter the command: "mysql -u <YourUserName> -p".
* b- Enter your password.
* c- Verify that the "blog_db" database is not created using the command: "show databases;".
* d- If the "blog_db" database is not created, create it using the command: "create database blog_db;".
* e- You can verify that the database was created correctly using the command in part "c".

# Express (https://expressjs.com/en/guide/routing)

* Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

* Install:
* 1- In the terminal be located in the project directory.
* 2- Execute the command: "npm install express --save"

# Sequelize (https://sequelize.org/)

* Sequelize is a promise-based Node.js ORM for Postgres, MySQL, MariaDB, SQLite and Microsoft SQL Server. It features solid transaction support, relations, eager and lazy loading, read replication and more.

* Install:
* 1- In the terminal be located in the project directory.
* 2- Execute the command: "npm install sequelize --save"

# Body-parser

* Node.js body parsing middleware.

* Parse incoming request bodies in a middleware before your handlers, available under the req.body property.

* Install:
* 1- In the terminal be located in the project directory.
* 2- Execute the command: "npm install body-parser --save"

Running the System
------------------

* 1- In the terminal be located in the project directory.

* 2- Start the server by executing the command: "npm run start"

* 3- In the browser go to: "http://localhost:3000/"
