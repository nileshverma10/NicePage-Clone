const express = require("express");
const multer = require("multer");
const app = express();
const dataCollection = require("./schema");
const port = 5000


app.use(express.static("uploads"))



const mongoose = require("mongoose");
mongoose
  .connect("mongodb://0.0.0.0:27017/multer", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("db Connected");
  })
  .catch((error) => {
   console.log(error);
  });


const dataUpload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./uploads");
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + file.originalname);
    },
    fileFilter: function (req, file, cb) {
      if (file.mimetype == "application/pdf" || ".jpg" || ".png") {
        cb(null, true);
      } else {
        cb(null, false);
      }
    },
  }),
});



app.post("/data", dataUpload.array('file',10), async(req, res) => {
        const file = req.files

        for(const x of file){
            const createFile = new dataCollection({
                file:x.filename
            })
            await createFile.save()
        }
        res.send("data upload")
});


app.listen(port ,() =>{
    console.log(`your app is running on ${port}`)
})