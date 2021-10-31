const express = require('express')
const cors = require('cors')
const multer = require('multer')
const {storage} = require('./config/cloudinaryConfig')
const upload = multer({storage})

const app = express();
app.use(cors())

const PORT = process.env.PORT || 5500;


app.post('/upload',upload.single('image'), (req,res) => {
    res.json(req.file)
})

app.listen(PORT, () => console.log('Server listening on port ' + PORT))