require('dotenv').config()
const mongoose = require('mongoose')

// if (process.argv.length < 3) {
//   console.log('give password as argument')
//   process.exit(1)
// }

// const password = process.argv[2]

// const url = `mongodb+srv://fullstackopen:${password}@cluster0.0thr0gz.mongodb.net/noteApp?retryWrites=true&w=majority`

mongoose.set('strictQuery', false)
mongoose.connect(process.env.MONGODB_URI)

const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean
})

const Note = mongoose.model('Note', noteSchema)

const note = new Note({
  content: 'Browser can execute only JavaScript',
  important: false
})

note.save().then(result => {
  console.log('note saved!')
  mongoose.connection.close()
})

// Note.find({}).then(result => {
//   result.forEach(note => console.log(note))
//   mongoose.connection.close()
// })