let questions = [

    {
        "question": "Wer hat Html erfunden?",
        "answer_0": "Bruce Lee",
        "answer_1": "Sani",
        "answer_2": "Tim Berners-Lee",
        "answer_3": "Rihana",
        "answer_4": "Testen",
        "rightanswer": 1

    },

    {
        "question": "Wer hat Htm erfunden?",
        "answer_0": "Bruce Lee",
        "answer_1": "Sani",
        "answer_2": "Tim Berners-Lee",
        "answer_3": "Rihana",
        "rightanswer": 2

    },

    {
        "question": "Wer hat Ht erfunden?",
        "answer_0": "Bruce Lee",
        "answer_1": "Sani",
        "answer_2": "Tim Berners-Lee",
        "answer_3": "Rihana",
        "rightanswer": 2

    },

    {
        "question": "Wer hat H erfunden?",
        "answer_0": "Bruce Lee",
        "answer_1": "Sani",
        "answer_2": "Tim Berners-Lee",
        "answer_3": "Rihana",
        "rightanswer": 3

    },

    {
        "question": "Wer hat halo erfunden?",
        "answer_0": "Bruce Lee",
        "answer_1": "Sani",
        "answer_2": "Tim Berners-Lee",
        "answer_3": "Rihana",
        "rightanswer": 3

    },
];

let currentQuenstion = 0;
let questionNumber = 0;
let rihgt = new Audio('sound/fail.mp3');
let fail = new Audio('sound/richtig.mp3');

function render() {
    document.getElementById('allQuestion').innerHTML = questions.length;
    showQuestion();
}


function showQuestion() {
    if (currentQuenstion >= questions.length) {
        document.getElementById('questionBody').style.display = "none";
        document.getElementById('endQuestion').style.display = "unset";
    } else {
        calculat();
        document.getElementById("disableddiv").innerHTML = "";
        let question = questions[currentQuenstion];
        document.getElementById('questionText').innerHTML = question['question'];

        let flat_array = Object.entries(question).flat();
        let ans_flat_array = flat_array.filter(element => element.toString().startsWith('answer'))

        ans_flat_array.forEach((e, i) => {
            return document.getElementById("disableddiv").innerHTML += `
        <div class="card quiz-answer mb-2" onclick="answer(${i})">
           <div class="card-body" id="answer_${i}">
            ${question[e]}
           </div>
        </div>`
        })

        document.getElementById('disableddiv').classList.remove('disableddiv');
    }

}

function answer(selection) {

    let question = questions[currentQuenstion];
    let idOfRightAnswer = `answer_${ question['rightanswer']}`

    if (selection == question['rightanswer']) {
        document.getElementById('answer_' + selection).classList.add('btn-success')
        document.getElementById('right-Answer').innerHTML = questions.length;
        document.getElementById('right-Answer').innerHTML = questionNumber++ + 1;
        fail.play();
    } else {
        document.getElementById('answer_' + selection).classList.add('btn-danger')
        document.getElementById(idOfRightAnswer).classList.add('btn-success')
        rihgt.play();
    }
    document.getElementById('next-button').disabled = false;
    document.getElementById('disableddiv').classList.add('disableddiv');
}


function nextQuestion() {
    nextNumber();
    currentQuenstion++
    document.getElementById('next-button').disabled = true;
    showQuestion();
}

function nextNumber() {
    document.getElementById('number').innerHTML = currentQuenstion + 1;
    console.log(number)
}


function back() {
    currentQuenstion = 0;
    questionNumber = 0;
    document.getElementById('endQuestion').style.display = "none";
    document.getElementById('questionBody').style.display = "unset";
    render()
}

function calculat() {
    let percent = (currentQuenstion + 1) / questions.length;
    percent = percent * 100;
    document.getElementById('percent').innerHTML = ` ${percent}% `;
    document.getElementById('percent').style.width = `  ${percent}% `;
}




















/* for (let i = 0; i < ans_flat_array.length; i++) {
              document.getElementById("disableddiv").innerHTML += `
              <div class="card quiz-answer mb-2" onclick="answer(${i})">
                  <div class="card-body" id="answer_${i}">
                      ${question[ans_flat_array[i]]}
                  </div>
              </div>` */
//document.getElementById('answer_' + i).innerHTML = "";
//document.getElementById('answer_' + i).innerHTML += ` ${question['answer_' + i]} `;
//}

/* function resetAnswerButton() {
    let question = questions[currentQuenstion];
    let idOfRightAnswer = `answer_${ question['rightanswer']}`

    //document.getElementById(idOfRightAnswer).classList.remove('btn-success')
} */