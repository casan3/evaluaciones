const functions = require("firebase-functions");
const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

app.get("/tests", (req, res) => {
  const testsRef = db.collection('tests');
  return testsRef.get()
  .then(snapshot => {
    const tests = snapshot.map((doc) => {
      return {id: doc.id, ...doc.data()};
    });
    res.status(200).send(tests);
  })
  .catch(error => res.status(500).send(error));

});

/* app.get("/questions", async (req, res) => {
  const { idTest } = req.body;
  const questionsRef = db.collection(`evaluaciones/${idTest}/questions`);
  const snapshot = await questionsRef.get();
  const questions = snapshot.map((doc) => {
    return {id: doc.id, ...doc.data()};
  });
  res.status(200).send(questions);
}); */

exports.app = functions.https.onRequest(app);
