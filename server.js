const express = require('express')
const app = express()
const PORT = 8000


const rappers = {
    '21 savage':{
        'age': 29,
        'birthName': 'Shéyaa Bin Abraham-Joseph',
        'birthLocation': 'London, England'
},
'chance the rapper':{
    'age': 29,
    'birthName': 'Chancelor Johnathan Bennett',
    'birthLocation': 'Chicago, Illinois'
},
'dylan':{
    'age': 29,
    'birthName': 'Dylan',
    'birthLocation': 'Dylan' 
},
}


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:rapperName', (req, res) => {
    const rappersName = req.params.rapperName.toLowerCase()
    if (rappers[rappersName]){
        res.json(rappers[rappersName])
    }else{
        res.json(rappers['dylan'])
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is running on port ${PORT}! you better go catch it!`)
})
