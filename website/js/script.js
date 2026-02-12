const EasyButton = document.querySelector("#Easy-btn");
const MediumButton = document.querySelector("#Med-btn");
const HardButton = document.querySelector("#Hard-btn");
const GeographyButton = document.querySelector("#Geography-btn");
const LiteratureButton = document.querySelector("#Literature-btn");
const ScienceButton = document.querySelector("#Science-btn");
const HistoryButton = document.querySelector("#History-btn");
const ArtButton = document.querySelector("#Art-btn");
const MusicButton = document.querySelector("#Music-btn");
const TechnologyButton = document.querySelector("#Technology-btn");
const SportsButton = document.querySelector("#Sports-btn");
const EntertainmentButton = document.querySelector("#Entertainment-btn");
const BiologyButton = document.querySelector("#Biology-btn");
const MathematicsButton = document.querySelector("#Mathematics-btn");
const FoodButton = document.querySelector("#Food-btn");
const MythologyButton = document.querySelector("#Mythology-btn");
const AstronomyButton = document.querySelector("#Astronomy-btn");
const YouTubersStreamersButton = document.querySelector(
  "#YouTubersStreamers-btn",
);
const LanguageButton = document.querySelector("#Language-btn");
const AnimalsButton = document.querySelector("#Animals-btn");
const CultureButton = document.querySelector("#Culture-btn");
const LandmarksButton = document.querySelector("#Landmarks-btn");

const listGroup = document.querySelector(".list-group");
let difficultyLevelChosen = false;
let categoryChosen = false;

// Geography Literature Science History Art Music Technology Sports Entertainment Biology Mathematics Food Mythology Astronomy YouTubers/Streamers Language Animals Culture Landmarks

const Sortbydiffcateg = async (difficulty, category) => {
  if (!difficulty) {
    alert("difficulty not set properly");
    return;
  }

  if (!category) {
    alert("category not set properly");
    return;
  }

  const url = `https://student-api-proxy.onrender.com/api/quizmania-api.p.rapidapi.com/trivia-filtered?category=${category}&difficulty=${difficulty}`;
  const options = {
    method: "GET",
    headers: {
      "X-API-Key":
        "49883ea83383263e8a9bc6b50a2462ac390bb6ec41323ca88efd4399ea19a5e4",
    },
  };

  const response = await fetch(url, options);
  const result = await response.json();
  const answers = result.data.answers;
  console.log(result);
  listGroup.innerHTML = "";
  answers.forEach((answer) => {
    const listItem = `<li class="list-group-item">${question.answers}</li>`;
    listGroup.insertAdjacentHTML(listItem);
  });
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

EasyButton.addEventListener("click", (event) => {
  event.preventDefault();
  difficultyLevelChosen = "Easy";
  if (categoryChosen) {
    Sortbydiffcateg(difficultyLevelChosen, categoryChosen);
  }
});
MediumButton.addEventListener("click", (event) => {
  event.preventDefault();
  difficultyLevelChosen = "Medium";
  if (categoryChosen) {
    Sortbydiffcateg(difficultyLevelChosen, categoryChosen);
  }
});
HardButton.addEventListener("click", (event) => {
  event.preventDefault();
  difficultyLevelChosen = "Hard";
  if (categoryChosen) {
    Sortbydiffcateg(difficultyLevelChosen, categoryChosen);
  }
});
GeographyButton.addEventListener("click", (event) => {
  event.preventDefault();
  categoryChosen = "Geography";
  if (difficultyLevelChosen) {
    Sortbydiffcateg(difficultyLevelChosen, categoryChosen);
  }
});
LiteratureButton.addEventListener("click", (event) => {
  event.preventDefault();
  categoryChosen = "Literature";
  if (difficultyLevelChosen) {
    Sortbydiffcateg(difficultyLevelChosen, categoryChosen);
  }
});
ScienceButton.addEventListener("click", (event) => {
  event.preventDefault();
  categoryChosen = "Science";
  if (difficultyLevelChosen) {
    Sortbydiffcateg(difficultyLevelChosen, categoryChosen);
  }
});
HistoryButton.addEventListener("click", (event) => {
  event.preventDefault();
  categoryChosen = "History";
  if (difficultyLevelChosen) {
    Sortbydiffcateg(difficultyLevelChosen, categoryChosen);
  }
});
ArtButton.addEventListener("click", (event) => {
  event.preventDefault();
  categoryChosen = "Art";
  if (difficultyLevelChosen) {
    Sortbydiffcateg(difficultyLevelChosen, categoryChosen);
  }
});
MusicButton.addEventListener("click", (event) => {
  event.preventDefault();
  categoryChosen = "Music";
  if (difficultyLevelChosen) {
    Sortbydiffcateg(difficultyLevelChosen, categoryChosen);
  }
});
TechnologyButton.addEventListener("click", (event) => {
  event.preventDefault();
  categoryChosen = "Technology";
  if (difficultyLevelChosen) {
    Sortbydiffcateg(difficultyLevelChosen, categoryChosen);
  }
});
SportsButton.addEventListener("click", (event) => {
  event.preventDefault();
  categoryChosen = "Sportss";
  if (difficultyLevelChosen) {
    Sortbydiffcateg(difficultyLevelChosen, categoryChosen);
  }
});
EntertainmentButton.addEventListener("click", (event) => {
  event.preventDefault();
  categoryChosen = "Entertainment";
  if (difficultyLevelChosen) {
    Sortbydiffcateg(difficultyLevelChosen, categoryChosen);
  }
});
BiologyButton.addEventListener("click", (event) => {
  event.preventDefault();
  categoryChosen = "Biology";
  if (difficultyLevelChosen) {
    Sortbydiffcateg(difficultyLevelChosen, categoryChosen);
  }
});
MathematicsButton.addEventListener("click", (event) => {
  event.preventDefault();
  categoryChosen = "Mathematics";
  if (difficultyLevelChosen) {
    Sortbydiffcateg(difficultyLevelChosen, categoryChosen);
  }
});
FoodButton.addEventListener("click", (event) => {
  event.preventDefault();
  categoryChosen = "Food";
  if (difficultyLevelChosen) {
    Sortbydiffcateg(difficultyLevelChosen, categoryChosen);
  }
});
MythologyButton.addEventListener("click", (event) => {
  event.preventDefault();
  categoryChosen = "Mythology";
  if (difficultyLevelChosen) {
    Sortbydiffcateg(difficultyLevelChosen, categoryChosen);
  }
});
AstronomyButton.addEventListener("click", (event) => {
  event.preventDefault();
  categoryChosen = "Astronomy";
  if (difficultyLevelChosen) {
    Sortbydiffcateg(difficultyLevelChosen, categoryChosen);
  }
});
YouTubersStreamersButton.addEventListener("click", (event) => {
  event.preventDefault();
  categoryChosen = "Youtubers/Streamers";
  if (difficultyLevelChosen) {
    Sortbydiffcateg(difficultyLevelChosen, categoryChosen);
  }
});
LanguageButton.addEventListener("click", (event) => {
  event.preventDefault();
  categoryChosen = "Language";
  if (difficultyLevelChosen) {
    Sortbydiffcateg(difficultyLevelChosen, categoryChosen);
  }
});
AnimalsButton.addEventListener("click", (event) => {
  event.preventDefault();
  categoryChosen = "Animals";
  if (difficultyLevelChosen) {
    Sortbydiffcateg(difficultyLevelChosen, categoryChosen);
  }
});
CultureButton.addEventListener("click", (event) => {
  event.preventDefault();
  categoryChosen = "Culture";
  if (difficultyLevelChosen) {
    Sortbydiffcateg(difficultyLevelChosen, categoryChosen);
  }
});
LandmarksButton.addEventListener("click", (event) => {
  event.preventDefault();
  categoryChosen = "Landmarks";
  if (difficultyLevelChosen) {
    Sortbydiffcateg(difficultyLevelChosen, categoryChosen);
  }
});
