function init() {
    loadJSON(function (response) {
        var questions = JSON.parse(response);
        var quizForm = document.getElementById("quiz");
        var questionIndex = 0;
        questions.forEach(question => {
            var newQuestion = document.createElement('div');
            newQuestion.id = "question" + questionIndex;
            newQuestion.innerText = question.Question;
            quizForm.appendChild(newQuestion);
            
            var optionIndex = 0;
            question.Options.forEach(option => {
                var label = document.createElement("label");
                var radio = document.createElement("input");
                radio.type = "radio";
                radio.name = "opt" + questionIndex;
                radio.value = option.Value;
            
                label.appendChild(radio);
            
                label.appendChild(document.createTextNode(option.Option));

                quizForm.appendChild(label);
            });

            questionIndex++;
        });
        
    })
}

function loadJSON(callback) {
    var xhr = new XMLHttpRequest();
    xhr.overrideMimeType("application/json");
    xhr.open('GET', 'data/questions.json', true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == "200") {
            callback(xhr.responseText);
        }
    };

    xhr.send(null);
}