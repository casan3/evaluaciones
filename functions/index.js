const functions = require("firebase-functions");
const admin = require("firebase-admin");
const express = require("express");
const app = express();
const cors = require("cors");

admin.initializeApp(functions.config().firebase);
const db = admin.firestore();

app.use(express.json());
app.use(cors());

app.get("/tests", (req, res) => {
  const testsRef = db.collection("tests");
  testsRef.get()
      .then((snapshot) => {
        const tests = [];
        snapshot.forEach((doc) => {
          tests.push(doc.data());
        });
        res.status(200).send(tests);
      }).catch((error) => res.status(500).send(error));
});

app.get("/questions/:id", (req, res) => {
  const {id} = req.params;
  const questionsRef = db.collection(`tests/${id}/questions`);
  questionsRef.get()
      .then((snapshot) => {
        const questions = [];
        snapshot.forEach((doc) => {
          questions.push(doc.data());
        });
        res.status(200).send(questions);
      }).catch((error) => res.status(500).send(error));
});

app.post("/saveTest", (req, res) => {
  const {idUser, test} = req.body;
  db.collection(`users/${idUser}/tests/`)
      .doc(test.id)
      .set(test)
      .then((resp) => res.status(200).send({msg: "test added"}))
      .catch((error) => res.status(500).send({msg: "error adding test"}));
});

exports.api = functions.https.onRequest(app);
