const express = require("express")
const router = express.Router()

// Gets the current applicant user logged in
router.get("/applicant/user", (req, res) => {
  // hardcoded for now
  const user = {
    "id": "1",
    "createdAt": "2021-03-17T16:19:51.802Z",
    "email": "test@test.com",
    "details": {
      "name": {
        "firstName": "Matthew",
        "lastName": "Fan"
      },
      "address": {
        "address": "123 Testing St",
        "city": "New York",
        "state": "NY",
        "country": "US",
        "postalCode": "10000"
      },
      "workExperience": [
        {
          "title": "Software Engineer",
          "employer": "Copply",
          "startDate": "Mar 2021",
          "currentJob": true,
          "description": "i love this job"
        }
      ],
      "education": [
        {
          "school": "New York University",
          "level": "Bachelors",
          "startDate": "Aug 2018",
          "endDate": "May 2021",
          "major": "Computer Science"
        }
      ]
    }
  }

  res.json(user)
})

module.exports = router