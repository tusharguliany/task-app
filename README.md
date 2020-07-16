# task-app
task app created in udemy nodejs course
> Running on [Heroku](https://guliany-task-manager.herokuapp.com/)
---
## steps to get this working
1. Set Up Environment Variables **Directory**. i.e. "**config**" in the root directory
2. Create Two Files in it with file names ->
    a. "**dev.env**" -- is for Dev Environment i.e. npm run dev
    b. "**test.env**" -- is for Test Enviroment i.e. npm test
3. The Project needs to have the following environment variables
    a. **PORT**=<< your port number like 3000 >>
    b. **SENDGRID_API_KEY**=<< your SENDGRID Api Key >>
    c. **JWT_SECRET**=<< your secret key for json web token, it can be anything like 'hey i am doing it' >>
    d. **MONGO_DB_URL**=<< your connection string to mongodb server and database name e.g. mongodb://127.0.0.1:27017/<yourDBName> >>
4. Set the Environment Variables in your **hosting**, I use **heroku** and the way to set is :
    `heroku config:set key=value`
    > You can check if it worked or not by :
    `heroku config`
5. Run the following command in the **root** of your directory: 
    `npm run dev`
---
## npm modules used are listed in package.json but for more insight, I am listing out the use case of each module for this project
* Production Dependencies:
    1. @sendgrid/mail -- *sends emails when user signs up or deletes an account*
    2. bcrypt -- *used to convert plain text password to hashed password*
    3. cors -- *not used in the udemy project but used to allow cross origin resource sharing requests*
    4. express -- *runs the server and helps set up api endpoints*
    5. jsonwebtoken -- *helps to verify user by providing jwt for authentication*
    6. mongodb -- *nosql database used in the project*
    7. mongoose -- *orm tool for mongodb*
    8. multer -- *middleware for handling multipart files, in this project, used to upload avatar images for users*
    9. sharp -- *used to manipulate avatar images like resizing, cropping, etc.*
    10. validator -- *used to validate the data coming in requests, like if email is actually a valid email*
* Dev Dependencies:
    1. env-cmd -- *used to set up environment variables before the application is run, check **package.json** scripts for more info*
    2. jest -- *testing framework for nodejs*
    3. nodemon -- *server that automatically restarts after a change is made to any file in project*
    4. supertest -- *allows to test api endpoints and asyncronous code*
---
## References for this Project
[Udemy Course](https://www.udemy.com/course/the-complete-nodejs-developer-course-2/)
[NodeJs](https://nodejs.org/en/)
[npm libraries](https://www.npmjs.com/)
[Express](https://expressjs.com/)