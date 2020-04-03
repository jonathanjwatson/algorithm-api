// 4. Build basic express server.
//     a. Require the express package.
const express = require("express");
//     b. Create an instance of express (probably app)
const app = express();
//     c. Define a PORT
const PORT = process.env.PORT || 8080;
//     d. Listen on the PORT

// e. Add Middleware for JSON POST body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/api/filter", (req, res) => {
  console.log(req.body);
  const stringToEvaluate = req.body.stringToEvaluate;
  const arrayOfWords = stringToEvaluate.split(" ");

  const badWordsArray = ["banana", "apple", "orange"];
  const newArray = [];
  for (let i = 0; i < arrayOfWords.length; i++) {
    if (badWordsArray.includes(arrayOfWords[i].toLowerCase())) {
      newArray.push(" ");
    } else {
      newArray.push(arrayOfWords[i]);
    }
  }
  console.log(newArray);
  const stringToReturn = newArray.join("");
  console.log(stringToReturn);

  res.json({
    error: false,
    message: stringToReturn
  });
});

app.listen(PORT, () => {
  console.log(`Application running on http://localhost:${PORT}`);
});
