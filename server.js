const express = require('express')
const path = require('path')

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const reservations = [];
const waitList = [];

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
})

app.get('/make', (req, res) => {
    res.sendFile(path.join(__dirname, 'make.html'))
})

app.get('/view', (req, res) => {
    res.sendFile(path.join(__dirname, 'view.html'))
})

app.get('/api/reservations', (req, res) => {
//   const chosen = req.params.character
//   const found = characters.find(char => char.routeName === chosen)
//   if (found) {
//     return res.json(found)
//   }
  return res.json(reservations)
})

app.get('/api/waitlist', (req, res) => {
//   const newCharacterData = req.body

//   newCharacterData.routeName = newCharacterData.name.replace(/\s+/g, '').toLowerCase()

//   characters.push(newCharacterData)
    return res.json(waitList)
})

app.post('/make', (req, res) => {
    const newReservation = req.body
  
    //newReservation.routeName = newReservation.name.replace(/\s+/g, '').toLowerCase()
  
    if (reservations.length < 5) {
        reservations.push(newReservation);
        //alert("Reservation is on the books!!!");
    } else {
        waitList.push(newReservation);
        //alert("You are on the wait list.");
    }
    console.log("Reservations:");
    console.log(reservations);
    console.log("Wait List:");
    console.log(waitList);

    //res.json(newReservation)
  })

app.listen(PORT, () => {
  console.log(`Server listening at Port: ${PORT}`)
})