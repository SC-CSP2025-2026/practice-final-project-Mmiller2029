const url =
  "https://student-api-proxy.onrender.com/api/quizmania-api.p.rapidapi.com/trivia-filtered?category=geography&difficulty=easy";
const options = {
  method: "GET",
  headers: {
    "X-API-Key":
      "49883ea83383263e8a9bc6b50a2462ac390bb6ec41323ca88efd4399ea19a5e4",
  },
};

fetch(url, options)
  .then((response) =>
    response.json().then((result) => {
      console.log(result.data); // Your API data
      console.log(`Cost: $${result.meta.cost}`);
      console.log(`Remaining: $${result.meta.remaining_budget}`);
    }),
  )
  .catch((error) => {
    console.log(error);
  });
