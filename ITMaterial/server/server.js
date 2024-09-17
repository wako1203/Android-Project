import config from './../config/config'
import app from './express'
import mongoose from 'mongoose'

// Connection URL

try {
  mongoose.connect(
      'mongodb://localhost:27017/doancoso1',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
      }
    )
    .then(() => console.log("Connected to MongoDB"))
} catch (error) {
    console.log("Failed to connect to MongoDB")
}


app.listen(config.port, (err) => {
  if (err) {
    console.log(err)
  }
  console.info('Server started on port %s.', config.port)
})
