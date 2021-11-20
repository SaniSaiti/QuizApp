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

function render() {
    document.getElementById('allQuestion').innerHTML = questions.length;
    showQuestion();
}


function showQuestion() {

    document.getElementById("disableddiv").innerHTML = "";
    let question = questions[currentQuenstion];
    document.getElementById('questionText').innerHTML = question['question'];

    let flat_array = Object.entries(question).flat();
    let ans_flat_array = flat_array.filter(element => element.toString().startsWith('answer'))

    for (let i = 0; i < ans_flat_array.length; i++) {
        document.getElementById("disableddiv").innerHTML += `
        <div class="card quiz-answer mb-2" onclick="answer(${i})">
            <div class="card-body" id="answer_${i}">
                ${question[ans_flat_array[i]]}
            </div>
        </div>`
            //document.getElementById('answer_' + i).innerHTML = "";
            //document.getElementById('answer_' + i).innerHTML += ` ${question['answer_' + i]} `;
    }
    document.getElementById('disableddiv').classList.remove('disableddiv');
}



function answer(selection) {

    let question = questions[currentQuenstion];

    let idOfRightAnswer = `answer_${ question['rightanswer']}`

    if (selection == question['rightanswer']) {
        document.getElementById('answer_' + selection).classList.add('btn-success')

    } else {
        document.getElementById('answer_' + selection).classList.add('btn-danger')
        document.getElementById(idOfRightAnswer).classList.add('btn-success')

    }
    document.getElementById('next-button').disabled = false;
    document.getElementById('disableddiv').classList.add('disableddiv');


}


function nextQuestion() {

    //resetAnswerButton();
    currentQuenstion++
    document.getElementById('next-button').disabled = true;
    showQuestion();

}



/* function resetAnswerButton() {
    let question = questions[currentQuenstion];
    let idOfRightAnswer = `answer_${ question['rightanswer']}`

    //document.getElementById(idOfRightAnswer).classList.remove('btn-success')
} */