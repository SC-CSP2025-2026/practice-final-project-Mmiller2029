const url =
  "https://student-api-proxy.onrender.com/api/quizmania-api.p.rapidapi.com/trivia-filtered?category=geography&difficulty=easy";
const options = {
  method: "GET",
  headers: {
    "X-API-Key":
      "49883ea83383263e8a9bc6b50a2462ac390bb6ec41323ca88efd4399ea19a5e4",
  },
};

var d = document.getElementById("single-select");
var value = d.options[d.selectedIndex].value;
console.log(value);

var e = document.getElementById("single-select2");
var value2 = e.options[e.selectedIndex].value;
console.log(value2);

const loadQuotesByTags = async (value, value2) => {
  value.preventDefault();
  const difficulty = value.currentTarget.tags;
  if (!difficulty) {
    alert("difficulty not set properly");
    return;
  }

  value2.preventDefault();
  const category = value2.currentTarget.tags;
  if (!category) {
    alert("difficulty not set properly");
    return;
  }

  const url = `https://student-api-proxy.onrender.com/api/quizmania-api.p.rapidapi.com/trivia-filtered?category=${category}&difficulty=${difficulty}`;

  const options = {
    method: "GET",
  };

  const response = await fetch(url, options);
  const quotes = await response.json();
  listGroup.innerHTML = "";
  quotes.forEach((quote) => {
    const listItem = `<li class="list-group-item">${quote.content} - ${quote.author}</li>`;
    listGroup.insertAdjacentHTML("beforeend", listItem);
  });
};

fadsadsadsetch(url, options)
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
