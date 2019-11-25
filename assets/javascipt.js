let i = 0

let time = 60

let timer = document.getElementById("time")
window.onload = function() {
    
    let main = this.document.getElementById("main");
    this.document.getElementById("start").addEventListener("click", function (event) {
        event.preventDefault();
        main.innerHTML ="";

        arkanstone();
        let int = setInterval(timeNow, 1000)
        event.stopPropagation();
        main.addEventListener("click", function (event) {
            event.preventDefault();
            nextQuest();
    
        })
    })
}

function timeNow() {
    let timer = document.getElementById("time")
    if (time > 0) {
        timer.textContent = time
        time-- 
    } else {
        clearInterval();
    }
}

function arkanstone() {
    let question = document.createElement("p");
    question.textContent = questions[i].title;
    main.append(question);
    for (let g = 0; g < questions[i].choices.length; g++) {
        let choices = document.getElementById("button");
        choices.setAttribute("class", "btn");
        choices.textContent = questions[i].choices[g];
        main.append(choices);

    }

}

function nextQuest() {
    if (event.target.matches("button")) {
        let choices = event.target
        if (i <questions.length - i) {
        
            if (choices.textContent == questions[i].answer) {
                console.log("correct");

            } else {
                console.log('incorrect');
                console.error.log(choices.textContent)
                time -= 15
            }
        }
        console.log(i)
        i++;

        main.innerHTML ="";
        arkanstone();

    }  else {
        if (choices.textContent == questions[i].answer) {
            console.log("correct");
        
        } else {
            console.log("incoorect");
            console.log(choises.textContent)

            time -= 15

        }
    }

    let score = time
        time = 0
        console.log(score)
        console.log[i]
        main.innerHTML = "";
        let scoreDisplay = document.createElement("h1");
        scoreDisplay.textContent = "Score: " + score;
        main.append(scoreDisplay);
    }



