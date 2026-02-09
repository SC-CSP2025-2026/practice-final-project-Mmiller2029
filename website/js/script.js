const EasyButton = document.querySelector("#Easy-btn");
// const MediumButton = document.querySelector("#Med-btn");
// const HardButton = document.querySelector("#Hard-btn");
// const GeographyButton = document.querySelector("#Geography-btn");
// const LiteratureButton = document.querySelector("#Literature-btn");
// const ScienceButton = document.querySelector("#Science-btn");
// const HistoryButton = document.querySelector("#History-btn");
// const ArtButton = document.querySelector("#Art-btn");
// const MusicButton = document.querySelector("#Music-btn");
// const TechnologyButton = document.querySelector("#Technology-btn");
// const SportsButton = document.querySelector("#Sports-btn");
// const EntertainmentButton = document.querySelector("#Entertainment-btn");
// const BiologyButton = document.querySelector("#Biology-btn");
// const MathematicsButton = document.querySelector("#Mathematics-btn");
// const FoodButton = document.querySelector("#Food-btn");
// const MythologyButton = document.querySelector("#Mythology-btn");
// const AstronomyButton = document.querySelector("#Astronomy-btn");
// const YouTubersStreamersButton = document.querySelector(
//   "#YouTubersStreamers-btn",
// );
// const LanguageButton = document.querySelector("#Language-btn");
// const AnimalsButton = document.querySelector("#Animals-btn");
// const CultureButton = document.querySelector("#Culture-btn");
// const LandmarksButton = document.querySelector("#Landmarks-btn");

const listGroup = document.querySelector(".list-group");

const url =
  "https://student-api-proxy.onrender.com/api/quizmania-api.p.rapidapi.com/trivia-filtered?category=geography&difficulty=easy";
const options = {
  method: "GET",
  headers: {
    "X-API-Key":
      "49883ea83383263e8a9bc6b50a2462ac390bb6ec41323ca88efd4399ea19a5e4",
  },
};
// Geography Literature Science History Art Music Technology Sports Entertainment Biology Mathematics Food Mythology Astronomy YouTubers/Streamers Language Animals Culture Landmarks

const Sortbydiffcateg = async (event) => {
  event.preventDefault();
  const difficulty = event.currentTarget.tags;
  if (!difficulty) {
    alert("difficulty not set properly");
    return;
  }
  const category = event.currentTarget.tags2;
  if (!category) {
    alert("category not set properly");
    return;
  }

  const url = `https://student-api-proxy.onrender.com/api/quizmania-api.p.rapidapi.com/trivia-filtered?category=${Easy}&difficulty=${Geography}`;

  const options = {
    method: "GET",
  };

  const response = await fetch(url, options);
  const quotes = await response.json();
  listGroup.innerHTML = quotes;
  // quotes.forEach((quote) => {
  //   const listItem = `<li class="list-group-item">${quote.content} - ${quote.author}</li>`;
  //   listGroup.insertAdjacentHTML("beforeend", listItem);
  // });
};
// fetch(url, options)
//   .then((response) =>
//     response.json().then((result) => {
//       console.log(result.data); // Your API data
//       console.log(`Cost: $${result.meta.cost}`);
//       console.log(`Remaining: $${result.meta.remaining_budget}`);
//     }),
//   )
//   .catch((error) => {
//     console.log(error);
//   });

EasyButton.addEventListener("click", Sortbydiffcateg);
EasyButton.tags = "Easy";
// MediumButton.addEventListener("click", Sortbydiffcateg);
// MediumButton.tags = "Medium";
// HardButton.addEventListener("click", Sortbydiffcateg);
// HardButton.tags = "Hard";
// GeographyButton.addEventListener("click", Sortbydiffcateg);
// GeographyButton.tags2 = "Geography";
// LiteratureButton.addEventListener("click", Sortbydiffcateg);
// LiteratureButton.tags2 = "Literature";
// ScienceButton.addEventListener("click", Sortbydiffcateg);
// ScienceButton.tags2 = "Science";
// HistoryButton.addEventListener("click", Sortbydiffcateg);
// HistoryButton.tags2 = "History";
// ArtButton.addEventListener("click", Sortbydiffcateg);
// ArtButton.tags2 = "Art";
// MusicButton.addEventListener("click", Sortbydiffcateg);
// MusicButton.tags2 = "Music";
// TechnologyButtonButton.addEventListener("click", Sortbydiffcateg);
// TechnologyButtonButton.tags2 = "Technology";
// SportsButton.addEventListener("click", Sortbydiffcateg);
// SportsButton.tags2 = "Sports";
// EntertainmentButtonButton.addEventListener("click", Sortbydiffcateg);
// EntertainmentButtonButton.tags2 = "Entertainment";
// BiologyButtonButton.addEventListener("click", Sortbydiffcateg);
// BiologyButtonButton.tags2 = "Biology";
// MathematicsButtonButton.addEventListener("click", Sortbydiffcateg);
// MathematicsButton.tags2 = "Mathematics";
// FoodButton.addEventListener("click", Sortbydiffcateg);
// FoodButton.tags2 = "Food";
// MythologyButtonButton.addEventListener("click", Sortbydiffcateg);
// MythologyButtonButton.tags2 = "Mythology";
// AstronomyButtonButton.addEventListener("click", Sortbydiffcateg);
// AstronomyButtonButton.tags2 = "Astronomy";
// YouTubersStreamersButton.addEventListener("click", Sortbydiffcateg);
// YouTubersStreamersButtonButton.tags2 = "Youtubers/Streamers";
// LanguageButtonButton.addEventListener("click", Sortbydiffcateg);
// LanguageButtonButton.tags2 = "Language";
// AnimalsButtonButton.addEventListener("click", Sortbydiffcateg);
// AnimalsButtonButton.tags2 = "Animals";
// CultureButtonButton.addEventListener("click", Sortbydiffcateg);
// CultureButtonButton.tags2 = "Culture";
// LandmarksButtonButton.addEventListener("click", Sortbydiffcateg);
// LandmarksButtonButton.tags2 = "Landmarks";
