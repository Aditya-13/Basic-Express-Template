const express = require('express')
const food = require('./routes/food.router')
const products = require('./routes/products.router')
const path = require('node:path')

const app = express()

app.use((req, res, next) => {
    const start = Date.now()
    next()

    const end = Date.now()
    console.log(`the request took ${end - start}ms to complete`)
    // res.send('HEY THIS IS COMING FROM MIDDLEWARE')
})

app.use('/site', express.static(path.join(__dirname , "public")))
app.use(express.json())

app.use('/products' , products)

app.use('/food' , food)

app.listen(8080 , () => {
    console.log('app started on port 8080')
})













// const friends = [
//     {
//         id : 0,
//         name : 'Nikola Tesla'
//     }, 
//     {
//         id : 1,
//         name : 'Elon Musk'
//     },
//     {
//         id : 2,
//         name : 'Henry Fluid'
//     }
// ]

// app.use((req , res , next) => {
//     console.log(req.method , req.url)

//     next()
// })

// app.get('/' , (req, res) => {
//     res.send('HELLLOOOOO!!!')
// })

// app.get('/friends' , (req, res) => {
//     res.status(200).json(friends)
// })
