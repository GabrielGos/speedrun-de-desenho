function setup() {
    canvas = createCanvas(280, 280);
    canvas.center();
    background("white");
    canvas.mouseReleaded(classifyCanvas);
    synth = window.speechSynthesis;
}

function clearCanvas() {

    background("white");
}

function preload(){
classifier = ml5.imageClassifier('DoodleNet');
}

function draw() {
    strokeWeigth(13);
    stroke(0);

    if (mouseIsPressed) {
        AudioListener(pmouseY , pmouseX, mouseY);
    } 
}

function classifyCanvas() {
    classifierl.classify(canvas, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console,error(error);
    } 
    console.log(results);
    var Results = results[0].label;
    document.getElementById('confidence').InnerHTML = 'Nome: ' + results.replace('_', ' ');


    document.getElementsByName('confidence').innerHTML = 'Precisão: '
                                            +Math.round(results[0].confidence * 100) + '%';

    utterThis = new SpeechSynthesisUtterance(result.replace('_', ' '));
    synth.speak(utterThis);                                        

}
