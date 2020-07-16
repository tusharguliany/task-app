const app = require('./app')
const port = process.env.PORT

/* 
    Steps to get this Project Working :
    1) Set Up Environment Variables Directory. i.e. "config" in the root directory
    2) Create Two Files in it with file names -> "dev.env" -- is for Dev Environment i.e. npm run dev
                                                 "test.env" -- is for Test Enviroment i.e. npm test
    3) The File needs to have the following variables
        PORT=<< your port number like 3000 >>
        SENDGRID_API_KEY=<< your SENDGRID Api Key >>
        JWT_SECRET=<< your secret key for json web token, it can be anything like 'hey i am doing it' >>
        MONGO_DB_URL=<< your connection string to mongodb server and database name e.g. mongodb://127.0.0.1:27017/<yourDBName> >>
    4) Set the Environment Variables in your hosting, I use heroku and the way to set is :
        heroku config:set key=value
        -- You can check if it worked or not by 'heroku config'
    5) npm run dev
*/

app.get('/', async (req, res) => {
    res.send({
        message: 'Welcome to Task App, to use it, visit the github link for instructions',
        github: 'https://github.com/tusharguliany/task-app'
    })
})

app.listen(port, () => {
    console.log(`Server is up on Port ${port}`)
})

