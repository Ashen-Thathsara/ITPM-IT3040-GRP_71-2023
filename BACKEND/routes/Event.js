const router = require("express").Router();
let event = require("../models/EventModel");
const PDFDocument = require("pdfkit-table");

//create
router.route("/add").post((req, res) => {
  const eventID = req.body.eventID;
  const eventName = req.body.eventName;
  const location = req.body.location;
  const startingTime = req.body.startingTime;
  const date = req.body.date;
  const timeDuration = Number(req.body.timeDuration);

  const newEvent = new event({
    eventID,
    eventName,
    location,
    startingTime,
    date,
    timeDuration,

  })

  newEvent.save().then(() => {
    res.json("event Added")
  }).catch((err) => {
    console.log(err);
  })
})

//get details about all
router.route("/").get((req, res) => {
  event.find().then((event) => {
    res.json(event)
  }).catch((err) => {
    console.log(err)
  })
})

//get details about one
router.get("/:id", async (req, res) => {
  try {
    let userId = req.params.id;
    let e = await event.findById(userId);
    if (!e) {
      const error = new Error("event not found");
      error.status = 404;
      throw error;
    }
    res.json(e);
  } catch (err) {
    console.log(err.message);
   return res.status(500).send({ status: "Error in fetching user", error: err.message });
  }
});




//search function
router.route("/search/:id").get(async (req, res) => {
  const query = req.params.q;
  event.findOne({ eventID: { eventId: query } }, (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).send('Error searching for result');
    } else {
      res.json(results);
    }
  });
});


//update
router.route("/update/:id").put(async (req, res) => {
  let eID = req.params.eventID
  const { eventID, eventName, location, startingTime, date, timeDuration } = req.body

  const updateEvent = {
    eventID,
    eventName,
    location,
    startingTime,
    date,
    timeDuration,

  }

  const update = await event.findOneAndUpdate(eID, updateEvent).then(() => {
    res.status(200).send({ status: " Details updated" })
  }).catch((err) => {
    console.log(err);
    res.status(500).send({ status: "Error with updating details" });
  })
})

//delete
router.route("/delete/:id").delete(async (req, res) => {
  let eventID = req.params.eventID;

  await event.findOneAndDelete(eventID).then(() => {
    res.status(200).send({ status: "event deleted" });
  }).catch((err) => {
    console.log(err.message);
    res.status(500).send({ status: "Error with delete event details", error: err.message });
  })
})

router.get("/reporting", async(_req, res, next) => {
  try{
    const events = await event.find({}).sort({CreatedAt: -1});
    // start pdf document
    let doc = new PDFDocument({margim: 30,size: "A4"});
    // Simple Table with Array
    if(!events.length){
      const error = new Error("No Payment!!");
      error.status = 404;
      throw error;
    }
    const headers = [
      "Event Name",
      "Date",
      "Event Location",
      "Event Starting Time",
      "Time Duration",
    
    ];
    const rows = [];
    events.map((i) => {
      rows.push([
        i.eventName,
        i.date,
        i.location,
        i.startingTime,
        i.timeDuration,
       
      ]);
    });
    const tableArray = {
      headers: headers,
      rows: rows,
    };
    doc.table(tableArray, {
      prepareHeader: () => doc.font("Helvetica-Bold").fontSize(8),
      prepareRow: (_row, indexColumn, indexRow, rectRow) => {
        doc.font("Helvetica").fontSize(8);
        indexColumn === 0 &&
          doc.addBackground(rectRow, indexRow % 2 ? "blue" : "green", 0.15);
      },
    });
    // create a buffer from the PDF document
    let chunks = [];
    doc.on('data', (chunk) => {
      chunks.push(chunk);
    });
    doc.on('end', () => {
      const pdfBlob = Buffer.concat(chunks);
      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', 'attachment; filename="myfile.pdf"');
      res.send(pdfBlob);
    });
    //done
    doc.end();
  }catch (err) {
    console.error(err.message);
    next(err);
  }
});


module.exports = router;