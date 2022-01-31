//import play-button-text with variable name play
let startButton = document.getElementById("play-button-text");
//grab select element with id theme-menu
let themeMenu = document.getElementById("theme-menu");

//import copyright-text with variable name copyright
let footer = document.getElementById("footer");

let answer = document.getElementById("answer")
let answerMenu = document.getElementById("answer-menu")

//import all div with his id
let themeDiv = document.getElementById("theme");
let difficultyDiv = document.getElementById("difficult");
let quizDiv = document.getElementById("questions");

let quizContent = document.getElementById("quizContainer");

let title = document.getElementById("title");

// grab the question
let question = document.getElementById("question");

//grab select element with id difficult-menu
let difficultMenu = document.getElementById("difficult-menu");

let questionIndex = 0;

let canAlert = false;

let startAnimation = true;

//make the script quiz
function quizScript() {
  //create a questions but no images
  let quiz = [
    {
      easy: {
        animals: [
          {
            questions:
              "what is the name of the animal from the tom and jerry cartoon? (Hint: it is a cat)",
            choiceA: "Tom",
            choiceB: "Jerry",
            choiceC: "Bugs",
            choiceD: "Daffy",
            correct: "A",
          },
          {
            questions: "what is tom enemy (Hint: it is a mouse)",
            choiceA: "Jerry",
            choiceB: "Tom",
            choiceD: "Daffy",
            choiceC: "Bugs",
            correct: "A",
          },
          {
            questions: "what is a cat's favorite food?",
            choiceA: "fish",
            choiceB: "milk",
            choiceC: "chicken",
            choiceD: "pizza",
            correct: "A",
          },
          {
            questions: "what is name of the dog from tom and jerry cartoon?",
            choiceA: "spike",
            choiceB: "Bugs",
            choiceC: "Jerry",
            choiceD: "Tom",
            correct: "A",
          },
        ],

        sports: [
          {
            questions:
              "if you win a game of basketball, how many points do you get?",
            choiceA: "5",
            choiceB: "10",
            choiceC: "15",
            choiceD: "20",
            correct: "A",
          },
          {
            questions:
              "what is the name of the team that won the first ever NBA championship?",
            choiceA: "Los Angeles Lakers",
            choiceB: "Chicago Bulls",
            choiceC: "Golden State Warriors",
            choiceD: "New York Knicks",
            correct: "A",
          },
          {
            questions: "What is the name of the football team from Indonesia?",
            choiceA: "PSM, bali united, and PSIS",
            choiceB: "Real Madrid",
            choiceC: "barcelona",
            choiceD: "Manchester United",
            correct: "A",
          },
          {
            questions:
              "what is the name of the team that won the first ever soccer championship?",
            choiceA: "Brazil",
            choiceB: "Argentina",
            choiceC: "uruguay",
            choiceD: "Germany",
            correct: "C",
          },
        ],

        geography: [
          {
            questions: "what is the capital of the USA?",
            choiceA: "Washington",
            choiceB: "New York",
            choiceC: "Los Angeles",
            choiceD: "Chicago",
            correct: "A",
          },
          {
            questions: "what is the capital of the UK?",
            choiceA: "jakarta",
            choiceB: "London",
            choiceC: "Liverpool",
            choiceD: "Birmingham",
            correct: "A",
          },
          {
            questions: "what is the capital of the USA?",
            choiceA: "Washington",
            choiceB: "New York",
            choiceC: "Los Angeles",
            choiceD: "Chicago",
            correct: "A",
          },
          {
            questions: "what is the capital of the USA?",
            choiceA: "Washington",
            choiceB: "New York",
            choiceC: "Los Angeles",
            choiceD: "Chicago",
            correct: "A",
          },
        ],

        gabutz: [
          {
            questions: "what is the name of the owner server?",
            choiceA: "brando",
            choiceB: "hiyo",
            choiceC: "axell",
            choiceD: "ica",
            correct: "B",
          },
          {
            questions: "what is language the server use?",
            choiceA: "indonesia",
            choiceB: "english",
            choiceC: "germany",
            choiceD: "greek",
            correct: "A",
          },
          {
            questions: "what is the name of the server? (Hint: also z)",
            choiceA: "gabutz",
            choiceB: "gabutD",
            choiceC: "gabutXXX",
            choiceD: "gabutx",
            correct: "A",
          },
          {
            questions: "what is the name of security roles in gabutz",
            choiceA: "admin",
            choiceB: "moderator",
            choiceC: "member",
            choiceD: "satpam",
            correct: "D",
          },
        ],
        hiyo: [
          {
            questions: "siapakah nama asli dari hiyo?",
            choiceA: "hayo",
            choiceB: "daffa",
            choiceC: "danis",
            choiceD: "DADAH GUYS! (BYE!!!!)",
            correct: "B",
          },
          {
            questions: "apakah hiyo ganteng",
            choiceA: "ya",
            choiceB: "tidak",
            choiceC: "kalau ganteng maka ganteng",
            choiceD: "kalau ganteng yaudah",
            correct: "A",
          },
          {
            questions: "apakah bumi itu bulat?",
            choiceA: "ya",
            choiceB: "tidak",
            choiceC: "kalau bulat maka bulat",
            choiceD: "kalau bulat yaudah",
            correct: "A",
          },
          {
            // make a jokes question but in indonesian languages
            questions: "gw gak tau mau isi apaan lagi yodah gw tanya umur aja, jadi umurnya sekarang berapa?",
            choiceA: "16 tahun",
            choiceB: "21 tahun",
            choiceC: "UDAH TUA BANGET",
            choiceD: "UDAH KERJA",
            correct: "A",
          },
          {
            questions: "apayah?, gw tanya apa?, yah gw gabut, yaudah hiyo itu pemilik server dari?",
            choiceA: "gabutz",
            choiceB: "nekopoi",
            choiceC: "kesesatan rohani",
            choiceD: "gw gak tau soalnya gw bingung",
            correct: "A",
          },
          {
            questions: "WOY UDAH WOY CAPEK GW BIKIN GINIAN, kaki hiyo ada berapa",
            choiceA: "--> 2 <-- UDAH JELAS INI ANJENG!",
            choiceB: "3",
            choiceC: "4",
            choiceD: "5",
            correct: "A",
          }
       ] 
      },
      medium: {},
      hard: {},
    },
  ];

  //make a script for the theme menu
  themeMenu.addEventListener("change", function () {
    let theme = this.value;
    console.log(theme);
    if (theme === "animals") {
      difficultMenu.innerHTML = `
            <option value="easy">easy</option>
            <option value="medium">medium</option>
            <option value="hard">hard</option>
            `;
    } else if (theme === "sports") {
      difficultMenu.innerHTML = `
            <option value="easy">easy</option>
            <option value="medium">medium</option>
            <option value="hard">hard</option>
            `;
    } else if (theme === "geography") {
      difficultMenu.innerHTML = `
            <option value="easy">easy</option>
            <option value="medium">medium</option>
            <option value="hard">hard</option>
            `;
    } else if (theme === "gabutz") {
      difficultMenu.innerHTML = `
            <option value="easy">easy</option>
            <option value="medium">medium</option>
            <option value="hard">hard</option>
            `;
    }
  });

  //make a script for the difficult menu
  difficultMenu.addEventListener("change", function () {
    let difficult = this.value;
    console.log(difficult);
    if (difficult === "easy") {
      quiz = quiz[0].easy;
      console.log(quiz);
    } else if (difficult === "medium") {
      quiz = quiz[0].medium;
      console.log(quiz);
    } else if (difficult === "hard") {
      quiz = quiz[0].hard;
      console.log(quiz);
    }
  });

  // make the script for the quiz with specific theme and submit button
  let theme = themeMenu.value;
  let difficult = difficultMenu.value;
  let quiziz = quiz[0][difficult][theme];
  console.log(quiziz);
  let quizLength = quiziz.length;
  let index = 0;
  let time = quizLength * 15;
  let timerId = null;
  let score = 0;
  let questionContainer = document.getElementById("quizContainer");
  let questionElement = document.getElementById("question");
  let choiceA = document.getElementById("A");
  let choiceB = document.getElementById("B");
  let choiceC = document.getElementById("C");
  let choiceD = document.getElementById("D");
  let timerElement = document.getElementById("time");
  let scorePages = document.getElementById("score");

  //make the script for the timer
  function timer() {
    time--;
    timerElement.innerHTML = time;
    if (time === 0) {
      clearInterval(timerId);
      title.innerText = "TIME IS UP!";
      setTimeout(() => {
        location.reload();
      }, 2000);
      // alert("Time is up!");
    } else if (index === quizLength) {
      clearInterval(timerId);
             setTimeout(() => {
               location.reload();
             }, 10000);
    } else {
      timerId = setTimeout(timer, 1000);
    }
  }

  //make the script for the quiz
  function load() {
    let q = quiziz[index];
    questionElement.innerHTML = q.questions;
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;

    questionContainer.style.display = "contents";
    scorePages.innerText = score;
  }

  //make the script for the quiz with specific theme
  startButton.addEventListener("click", function () {
    //check answer with button
    function check(answer) {
      if (answer === quiziz[index].correct) {
        score++;
        title.innerText = "Correct!";
        title.style.backgroundColor = "GREEN";
        startAnimation = false;
        setTimeout(() => {
          title.style.backgroundColor = "white";
          title.innerText = "gabutz QUIZ"
        }, 1000);

        // alert("Correct!");
        timerId = time;
      } else {
        time -= 15;
        title.innerText = "Wrong!";
        title.style.backgroundColor = "RED";
        setTimeout(() => {
          title.style.backgroundColor = "white";
          title.innerText = "gabutz QUIZ"
        }, 1000);
        // alert("Wrong!");
        startAnimation = false;
        timerId = time;
      }
      index++;
      if (index === quizLength) {
        clearInterval(timerId);
        title.innerText = "You got " + score + " out of " + quizLength;
        setTimeout(() => {
          title.innerText = "wait until we restart it"
          setTimeout(() => {
            title.innerText = "You got " + score + " out of " + quizLength;
          }, 1000)
        }, 5000);
        setTimeout(() => {
          location.reload();
        }, 10000);
        // alert("You got " + score + " out of " + quizLength);
      } else {
        load();
      }
    }

    choiceA.addEventListener("click", function () {
      startAnimation = false;
      check("A");
    });

    choiceB.addEventListener("click", function () {
      startAnimation = false;
      check("B");
    });

    choiceC.addEventListener("click", function () {
      startAnimation = false;
      check("C");
    });

    choiceD.addEventListener("click", function () {
      startAnimation = false;
      check("D");
    });

    //make difficultMenu themeMenu with theme div difficult div and playButton have transition slide out from the screen randomize and then fade out then disappear
    themeMenu.style.transition = "all 1s";
    themeMenu.style.opacity = "0";
    themeMenu.style.transform = "translateX(-100%)";
    difficultMenu.style.transition = "all 1s";
    difficultMenu.style.opacity = "0";
    difficultMenu.style.transform = "translateX(-100%)";
    startButton.style.transition = "all 1s";
    startButton.style.opacity = "0";
    startButton.style.transform = "translateX(-100%)";
    themeDiv.style.transition = "all 1s";
    themeDiv.style.opacity = "0";
    themeDiv.style.transform = "translateX(-100%)";
    difficultyDiv.style.transition = "all 1s";
    difficultyDiv.style.opacity = "0";
    difficultyDiv.style.transform = "translateX(-100%)";
    startButton.style.transition = "all 1s";
    startButton.style.opacity = "0";
    startButton.style.transform = "translateX(-100%)";
    title.innerText = "Quiz";
    title.style.transform = "scale(0.5)";

    setTimeout(() => {
      themeMenu.style.display = "none";
      difficultMenu.style.display = "none";
      startButton.style.display = "none";
      themeDiv.style.display = "none";
      difficultyDiv.style.display = "none";
      title.style.textAlign = "left";

        setTimeout(() => {
          title.style.textAlign = "center";
          title.style.boxShadow = "20px 10px 10px #000000";
          title.style.backgroundColor = "pink";
          title.innerText = "WELCOME TO THE GABUTZ QUIZ";

          setTimeout(() => {
            //rainbow effect for title
            title.style.backgroundColor = "red";
            title.innerText = "LOADING"
            setTimeout(() => {
              title.style.backgroundColor = "orange";
              setTimeout(() => {
                title.style.backgroundColor = "yellow";
                title.innerText = "LOADING . ."
                setTimeout(() => {
                  title.style.backgroundColor = "green";
                  setTimeout(() => {
                    title.style.backgroundColor = "blue";
                    setTimeout(() => {
                      title.style.backgroundColor = "indigo";
                      title.innerText = "LOADING . . ."
                      setTimeout(() => {
                        title.style.backgroundColor = "violet";
                        setTimeout(() => {
                          title.style.backgroundColor = "red";
                          title.innerText = "LOADING"
                          setTimeout(() => {
                            title.style.backgroundColor = "orange";
                            setTimeout(() => {
                              title.style.backgroundColor = "yellow";
                              title.innerText = "LOADING . ."
                              setTimeout(() => {
                                title.style.backgroundColor = "green";
                                title.innerText = "LOADING . . ."
                                setTimeout(() => {
                                  title.style.backgroundColor = "blue";
                                  title.innerText = "LOADING"
                                  setTimeout(() => {
                                    title.style.backgroundColor = "indigo";
                                    title.innerText = "ALMOST COMPLETE"

                                    setTimeout(() => {
                                      title.style.backgroundColor = "violet";
                                      title.innerText = "COMPLETE!"
                                      setTimeout(() => {
                                        title.innerText = "gabutz quiz"
                                              timer();
                                              load();
                                        title.style.backgroundColor = "white";
                                      }, 1000);
                                    }, 1000);
                                  }, 200);
                                }, 200);
                              }, 200);
                            }, 200);
                          }, 200);
                        }, 200);
                      }, 200);
                    }, 200);
                  }, 200);
                }, 200);
              }, 200);
            }, 200);

            title.style.left = "0px";
            title.style.transform = "scale(1)";
          }, 2002);
        }, 2000);
    }, 1000);
  });
  
  requestAnimationFrame(quizScript);
}

quizScript();
