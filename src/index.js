const express = require("express")
const path = require("path")
const app = express()
 const hbs = require("hbs")
 const collection = require("./mongodb")
//  const donation = require("./mongodb")
// const LogInCollection = require("./mongo")
// const port = process.env.PORT || 3000
app.use(express.json())

 app.use(express.urlencoded({ extended: false }))

const staticpath = path.join(__dirname , '../public')

// / console.log(path.join(__dirname, '../public'))
const tempelatePath = path.join(__dirname, '../tempelates')
 const publicPath = path.join(__dirname, '../public')
 const imgsPath = path.join(__dirname, '../imgs')
//  console.log(publicPath);

app.set('view engine', 'hbs')
app.set('views', tempelatePath)
 app.use(express.static(publicPath))
 app.use(express.static(imgsPath))
  app.use(express.static(staticpath))



//  hbs.registerPartials(partialPath)
app.get('/donate', (req, res) => {
    res.render('donate')
})

 app.get('/signup', (req, res) => {
     res.render('signup')
 })
app.get('/login', (req, res) => {
    res.render('login')
})

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/about', (req, res) => {
    res.render('about')
})
app.get('/preserve', (req, res) => {
    res.render('preserve')
})

app.get('/restore', (req, res) => {
    res.render('restore')
})

app.get('/protect', (req, res) => {
    res.render('protect')
})

app.get('/thrive', (req, res) => {
    res.render('thrive')
})







// app.get('/home', (req, res) => {
//     res.render('home')
// })

app.post('/signup', async (req, res) => {
    
    // const data = new LogInCollection({
    //     name: req.body.name,
    //     password: req.body.password
    // })
    // await data.save()

     const data = {
        name: req.body.name,
                password: req.body.password
     }

     await collection.insertMany([data])
     res.render("home")

    })

//     const checking = await LogInCollection.findOne({ name: req.body.name })

//    try{
//     if (checking.name === req.body.name && checking.password===req.body.password) {
//         res.send("user details already exists")
//     }
//     else{
//         await LogInCollection.insertMany([data])
//     }
//    }
//    catch{
//     res.send("wrong inputs")
//    }

//     res.status(201).render("home", {
//         naming: req.body.name
//     })
// })


 app.post('/login', async (req, res) => {

    try {
      const check = await collection.findOne({ name: req.body.name })

       if (check.password === req.body.password) {
           res.status(201).render("home")
        }

         else {
             res.send("incorrect password")
         }


     } 
    
    catch (e) {
        res.send("wrong details")
        

     }


 })



 app.listen(3000, () => {
     console.log('port connected');
 })